import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

interface SignupBody {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  source?: string; // e.g. "trade-show-2026-06-17"
  website?: string; // honeypot
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SignupBody;
    const { name, email, company, interest, source, website } = body;

    // Honeypot — bots fill this hidden field. Pretend success, silently drop.
    if (website && typeof website === 'string' && website.trim() !== '') {
      console.log('Email signup honeypot triggered', {
        email,
        ip:
          request.headers.get('x-forwarded-for') ||
          request.headers.get('x-real-ip'),
      });
      return NextResponse.json({ success: true });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const tag = source || 'unknown';
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name?.trim() || null;
    const cleanCompany = company?.trim() || null;
    const cleanInterest = interest?.trim() || null;
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      null;
    const userAgent = request.headers.get('user-agent') || null;

    // Primary: write to Postgres. ON CONFLICT updates the existing row
    // with any newly provided fields, so re-signups don't error out.
    try {
      await sql`
        INSERT INTO email_signups (email, name, company, interest, source, ip, user_agent)
        VALUES (${cleanEmail}, ${cleanName}, ${cleanCompany}, ${cleanInterest}, ${tag}, ${ip}, ${userAgent})
        ON CONFLICT (email) DO UPDATE SET
          name     = COALESCE(EXCLUDED.name,     email_signups.name),
          company  = COALESCE(EXCLUDED.company,  email_signups.company),
          interest = COALESCE(EXCLUDED.interest, email_signups.interest),
          source   = EXCLUDED.source,
          unsubscribed = false
      `;
    } catch (dbErr) {
      console.error('email_signups insert failed:', dbErr);
      return NextResponse.json(
        { error: 'Failed to save signup' },
        { status: 500 }
      );
    }

    // Belt-and-suspenders: also fire off to the Gideon Dashboard so the
    // signup is visible in the existing lead inbox until the new /admin
    // is fully trusted. Fire-and-forget; doesn't block the user response.
    try {
      const jobDetails = [
        cleanCompany ? `Company: ${cleanCompany}` : null,
        cleanInterest ? `Interested in: ${cleanInterest}` : null,
        `Source: ${tag}`,
      ]
        .filter(Boolean)
        .join('\n');
      fetch('https://dashboard.gideoncode.com/api/public/buygeogrid.com/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId: `email-signup-${Date.now()}`,
          visitorName: cleanName || cleanEmail,
          visitorEmail: cleanEmail,
          visitorAddress: cleanCompany || undefined,
          jobType: `Mailing List (${tag})`,
          jobDetails,
        }),
      }).catch(() => {
        /* ignore — primary write already succeeded */
      });
    } catch {
      /* swallow — fallback only */
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('email-signup error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
