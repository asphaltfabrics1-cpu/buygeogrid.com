import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { Resend } from 'resend';

interface LineItem {
  product: string;
  qty: number;
  notes?: string;
}

interface OrderBody {
  customer_name?: string;
  customer_company?: string;
  customer_email?: string;
  customer_phone?: string;
  ship_to?: string;
  line_items?: LineItem[];
  notes?: string;
  source?: string;
  website?: string; // honeypot
}

const FROM = 'BuyGeogrid <info@buygeogrid.com>';
const REPLY_TO = 'josh@asphaltfabrics.com';
const NOTIFY_TO = 'josh@asphaltfabrics.com';

async function nextOrderNumber(): Promise<string> {
  const { rows } = await sql<{ next_number: number }>`
    UPDATE order_counters SET next_number = next_number + 1
    WHERE id = 1
    RETURNING next_number - 1 AS next_number
  `;
  const n = rows[0]?.next_number ?? 1;
  const year = new Date().getFullYear();
  return `BG-${year}-${String(n).padStart(4, '0')}`;
}

function renderLineItemsHtml(items: LineItem[]): string {
  return items
    .map(
      (i) =>
        `<tr>
          <td style="padding:6px 12px;border-bottom:1px solid #eee">${escape(i.product)}</td>
          <td style="padding:6px 12px;border-bottom:1px solid #eee;text-align:right">${i.qty}</td>
          <td style="padding:6px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px">${i.notes ? escape(i.notes) : ''}</td>
        </tr>`
    )
    .join('');
}

function renderLineItemsText(items: LineItem[]): string {
  return items.map((i) => `  ${i.qty} × ${i.product}${i.notes ? ` (${i.notes})` : ''}`).join('\n');
}

function escape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as OrderBody;
    const {
      customer_name,
      customer_company,
      customer_email,
      customer_phone,
      ship_to,
      line_items,
      notes,
      source,
      website,
    } = body;

    // Honeypot
    if (website && typeof website === 'string' && website.trim() !== '') {
      console.log('Order honeypot triggered', {
        email: customer_email,
        ip:
          request.headers.get('x-forwarded-for') ||
          request.headers.get('x-real-ip'),
      });
      return NextResponse.json({ success: true });
    }

    if (!customer_name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!customer_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer_email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    if (!Array.isArray(line_items) || line_items.length === 0) {
      return NextResponse.json(
        { error: 'At least one product line item is required' },
        { status: 400 }
      );
    }
    const cleanItems: LineItem[] = line_items
      .filter((i) => i && typeof i.product === 'string' && i.product.trim() && Number(i.qty) > 0)
      .map((i) => ({
        product: i.product.trim(),
        qty: Math.round(Number(i.qty)),
        notes: i.notes?.trim() || undefined,
      }));
    if (cleanItems.length === 0) {
      return NextResponse.json(
        { error: 'Each line item needs a product and quantity' },
        { status: 400 }
      );
    }

    const tag = source?.trim() || 'unknown';
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      null;
    const ua = request.headers.get('user-agent') || null;
    const cleanEmail = customer_email.trim().toLowerCase();
    const cleanPhone = customer_phone?.trim() || null;
    const cleanCompany = customer_company?.trim() || null;
    const cleanShipTo = ship_to?.trim() || null;
    const cleanNotes = notes?.trim() || null;

    const orderNumber = await nextOrderNumber();

    await sql`
      INSERT INTO orders (
        order_number, customer_name, customer_company, customer_email,
        customer_phone, ship_to, line_items, notes, source, ip, user_agent
      ) VALUES (
        ${orderNumber}, ${customer_name.trim()}, ${cleanCompany}, ${cleanEmail},
        ${cleanPhone}, ${cleanShipTo}, ${JSON.stringify(cleanItems)},
        ${cleanNotes}, ${tag}, ${ip}, ${ua}
      )
    `;

    // Also auto-add the customer to email_signups (they expressed intent;
    // good list-building) under source = same tag, unsubscribed=false.
    try {
      await sql`
        INSERT INTO email_signups (email, name, company, source, ip, user_agent)
        VALUES (${cleanEmail}, ${customer_name.trim()}, ${cleanCompany}, ${tag}, ${ip}, ${ua})
        ON CONFLICT (email) DO UPDATE SET
          name = COALESCE(EXCLUDED.name, email_signups.name),
          company = COALESCE(EXCLUDED.company, email_signups.company),
          source = EXCLUDED.source
      `;
    } catch {
      /* non-fatal */
    }

    // Fire-and-forget notifications via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const itemsHtml = renderLineItemsHtml(cleanItems);
      const itemsText = renderLineItemsText(cleanItems);

      const adminHtml = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px">
          <h2 style="margin:0 0 12px">New order — ${orderNumber}</h2>
          <p style="margin:0 0 4px"><strong>${escape(customer_name.trim())}</strong>${cleanCompany ? ` &middot; ${escape(cleanCompany)}` : ''}</p>
          <p style="margin:0 0 4px">${escape(cleanEmail)}${cleanPhone ? ` &middot; ${escape(cleanPhone)}` : ''}</p>
          ${cleanShipTo ? `<p style="margin:0 0 4px"><strong>Ship to:</strong> ${escape(cleanShipTo)}</p>` : ''}
          <p style="margin:0 0 12px;color:#666;font-size:13px">Source: ${escape(tag)}</p>
          <table style="border-collapse:collapse;width:100%;margin:8px 0">
            <thead>
              <tr style="text-align:left;background:#f3f4f6">
                <th style="padding:6px 12px;border-bottom:1px solid #ddd">Product</th>
                <th style="padding:6px 12px;border-bottom:1px solid #ddd;text-align:right">Qty</th>
                <th style="padding:6px 12px;border-bottom:1px solid #ddd">Notes</th>
              </tr>
            </thead>
            <tbody>${itemsHtml}</tbody>
          </table>
          ${cleanNotes ? `<p style="margin:12px 0 0"><strong>Order notes:</strong><br/>${escape(cleanNotes).replace(/\n/g, '<br/>')}</p>` : ''}
        </div>
      `;
      resend.emails.send({
        from: FROM,
        replyTo: cleanEmail,
        to: NOTIFY_TO,
        subject: `New order ${orderNumber} — ${customer_name.trim()}${cleanCompany ? ` (${cleanCompany})` : ''}`,
        html: adminHtml,
        text: `New order ${orderNumber}\n${customer_name.trim()}${cleanCompany ? ' / ' + cleanCompany : ''}\n${cleanEmail}${cleanPhone ? ' / ' + cleanPhone : ''}\n${cleanShipTo ? '\nShip to: ' + cleanShipTo : ''}\n\nItems:\n${itemsText}${cleanNotes ? '\n\nNotes:\n' + cleanNotes : ''}\n\nSource: ${tag}`,
      }).catch((err) => console.error('admin notify failed:', err));

      const customerHtml = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px">
          <h2 style="margin:0 0 12px">Order received — ${orderNumber}</h2>
          <p>Thanks${escape(customer_name.trim().split(' ')[0] ? ', ' + customer_name.trim().split(' ')[0] : '')}! We&apos;ve got your request and will follow up shortly to confirm pricing, availability, and delivery.</p>
          <h3 style="margin:18px 0 6px;font-size:15px">Your order</h3>
          <table style="border-collapse:collapse;width:100%;margin:0 0 12px">
            <thead>
              <tr style="text-align:left;background:#f3f4f6">
                <th style="padding:6px 12px;border-bottom:1px solid #ddd">Product</th>
                <th style="padding:6px 12px;border-bottom:1px solid #ddd;text-align:right">Qty</th>
                <th style="padding:6px 12px;border-bottom:1px solid #ddd">Notes</th>
              </tr>
            </thead>
            <tbody>${itemsHtml}</tbody>
          </table>
          ${cleanShipTo ? `<p style="margin:0 0 6px"><strong>Ship to:</strong> ${escape(cleanShipTo)}</p>` : ''}
          ${cleanNotes ? `<p style="margin:0 0 12px"><strong>Your notes:</strong><br/>${escape(cleanNotes).replace(/\n/g, '<br/>')}</p>` : ''}
          <p style="margin:18px 0 4px;color:#555">Questions? Reply to this email and it goes straight to Josh.</p>
          <p style="margin:0;color:#888;font-size:12px">— BuyGeogrid.com / Asphalt Fabrics &amp; Supply</p>
        </div>
      `;
      resend.emails.send({
        from: FROM,
        replyTo: REPLY_TO,
        to: cleanEmail,
        subject: `Order received — ${orderNumber}`,
        html: customerHtml,
        text: `Order received — ${orderNumber}\n\nThanks! We've got your request and will follow up shortly.\n\nItems:\n${itemsText}${cleanShipTo ? '\n\nShip to: ' + cleanShipTo : ''}${cleanNotes ? '\n\nNotes:\n' + cleanNotes : ''}\n\nReply to this email if you have questions.\n\n— BuyGeogrid.com`,
      }).catch((err) => console.error('customer notify failed:', err));
    }

    return NextResponse.json({ success: true, order_number: orderNumber });
  } catch (err) {
    console.error('order error:', err);
    return NextResponse.json({ error: 'Failed to save order' }, { status: 500 });
  }
}
