import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { Resend } from 'resend';
import crypto from 'crypto';

const FROM = 'BuyGeogrid <info@buygeogrid.com>';
const REPLY_TO = 'josh@asphaltfabrics.com';

interface BroadcastBody {
  subject?: string;
  body_html?: string;
  body_text?: string;
  source_filter?: string; // optional: only send to recipients with this source tag
  test_to?: string; // optional: if present, just send to this one address (test mode)
}

function getBaseUrl(req: NextRequest): string {
  const fromHeader = req.headers.get('x-forwarded-host') || req.headers.get('host');
  const proto = req.headers.get('x-forwarded-proto') || 'https';
  if (fromHeader) return `${proto}://${fromHeader}`;
  return 'https://www.buygeogrid.com';
}

function unsubFooter(unsubUrl: string): { html: string; text: string } {
  return {
    html: `<hr style="border:none;border-top:1px solid #ddd;margin:32px 0 16px"/>
<p style="color:#888;font-size:12px;line-height:1.5">
You're receiving this because you signed up at buygeogrid.com.
<br/><a href="${unsubUrl}" style="color:#666">Unsubscribe</a> if you no longer want these.
</p>`,
    text: `\n\n---\nYou're receiving this because you signed up at buygeogrid.com.\nUnsubscribe: ${unsubUrl}`,
  };
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'RESEND_API_KEY not set' }, { status: 500 });
  }

  let body: BroadcastBody;
  try {
    body = (await req.json()) as BroadcastBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const subject = body.subject?.trim();
  const html = body.body_html?.trim();
  const text = body.body_text?.trim() || undefined;
  if (!subject || !html) {
    return NextResponse.json(
      { error: 'subject and body_html are required' },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);
  const baseUrl = getBaseUrl(req);

  // ─── Test mode ───────────────────────────────────────────────────────────
  if (body.test_to) {
    const testTo = body.test_to.trim();
    const unsubUrl = `${baseUrl}/unsubscribe?token=PREVIEW`;
    const footer = unsubFooter(unsubUrl);
    const { error } = await resend.emails.send({
      from: FROM,
      replyTo: REPLY_TO,
      to: testTo,
      subject: `[TEST] ${subject}`,
      html: `${html}${footer.html}`,
      text: text ? `${text}${footer.text}` : undefined,
    });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, mode: 'test', sent: 1 });
  }

  // ─── Real broadcast ──────────────────────────────────────────────────────
  let recipients: { email: string; token: string }[];
  try {
    let rows;
    if (body.source_filter && body.source_filter.trim()) {
      const sf = body.source_filter.trim();
      const r = await sql`
        SELECT id, email, unsubscribe_token
        FROM email_signups
        WHERE unsubscribed = false AND source = ${sf}
      `;
      rows = r.rows;
    } else {
      const r = await sql`
        SELECT id, email, unsubscribe_token
        FROM email_signups
        WHERE unsubscribed = false
      `;
      rows = r.rows;
    }

    // Ensure every recipient has a stable unsubscribe token. Generate and
    // persist on the fly for rows that don't have one yet.
    recipients = [];
    for (const r of rows) {
      let token = r.unsubscribe_token as string | null;
      if (!token) {
        token = crypto.randomBytes(24).toString('base64url');
        await sql`
          UPDATE email_signups SET unsubscribe_token = ${token} WHERE id = ${r.id as number}
        `;
      }
      recipients.push({ email: r.email as string, token });
    }
  } catch (err) {
    console.error('broadcast recipients query failed:', err);
    return NextResponse.json({ error: 'Failed to load recipients' }, { status: 500 });
  }

  if (recipients.length === 0) {
    return NextResponse.json({ error: 'No recipients to send to' }, { status: 400 });
  }

  // Send one email per recipient with a personalized unsubscribe link.
  // Resend rate limit is ~10 req/sec on the free tier; pace via small chunks.
  let sent = 0;
  const failures: { email: string; reason: string }[] = [];
  const CHUNK = 5;
  for (let i = 0; i < recipients.length; i += CHUNK) {
    const chunk = recipients.slice(i, i + CHUNK);
    await Promise.all(
      chunk.map(async (r) => {
        const unsubUrl = `${baseUrl}/unsubscribe?token=${encodeURIComponent(r.token)}`;
        const footer = unsubFooter(unsubUrl);
        try {
          const result = await resend.emails.send({
            from: FROM,
            replyTo: REPLY_TO,
            to: r.email,
            subject,
            html: `${html}${footer.html}`,
            text: text ? `${text}${footer.text}` : undefined,
            headers: {
              'List-Unsubscribe': `<${unsubUrl}>`,
              'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
            },
          });
          if (result.error) {
            failures.push({ email: r.email, reason: result.error.message });
          } else {
            sent += 1;
          }
        } catch (e) {
          failures.push({
            email: r.email,
            reason: e instanceof Error ? e.message : 'unknown error',
          });
        }
      })
    );
    // small pause between chunks to stay polite
    if (i + CHUNK < recipients.length) {
      await new Promise((res) => setTimeout(res, 250));
    }
  }

  // Record the broadcast (only the successful count).
  try {
    await sql`
      INSERT INTO broadcasts (subject, body_html, body_text, sent_by, recipients)
      VALUES (${subject}, ${html}, ${text ?? null}, ${'admin'}, ${sent})
    `;
  } catch (err) {
    console.error('broadcasts insert failed (non-fatal):', err);
  }

  return NextResponse.json({
    success: true,
    mode: 'broadcast',
    sent,
    failed: failures.length,
    failures: failures.slice(0, 10), // truncate for response size
  });
}
