import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const FROM = 'BuyGeogrid <info@buygeogrid.com>';
// Notify both Josh AND Mike (estimator) — whoever is faster picks up the lead
const NOTIFY_TO = ['jstone@asphaltfabrics.com', 'mkirk@asphaltfabrics.com'];
const REPLY_TO = 'jstone@asphaltfabrics.com';
const AFS_PHONE = '(440) 384-1897';

interface ConcreteRepairBody {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  city?: string;
  facilityType?: string;
  damagedArea?: string;
  timeline?: string;
  contactMethod?: string;
  details?: string;
  website?: string; // honeypot
}

function escape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fieldRow(label: string, value: string | undefined | null): string {
  if (!value || !value.trim()) return '';
  return `<tr>
    <td style="padding:6px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px;vertical-align:top;width:180px">${escape(label)}</td>
    <td style="padding:6px 12px;border-bottom:1px solid #eee;color:#111;font-size:14px">${escape(value).replace(/\n/g, '<br/>')}</td>
  </tr>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ConcreteRepairBody;
    const { name, company, email, phone, city, facilityType, damagedArea, timeline, contactMethod, details, website } = body;

    // Honeypot — silent drop
    if (website && typeof website === 'string' && website.trim() !== '') {
      console.log('Concrete-repair honeypot triggered', {
        email,
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      });
      return NextResponse.json({ success: true });
    }

    // Minimum viable validation
    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    if (!phone?.trim()) {
      return NextResponse.json({ error: 'Phone is required' }, { status: 400 });
    }
    if (!city?.trim()) {
      return NextResponse.json({ error: 'Project city is required' }, { status: 400 });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanCompany = company?.trim() || null;
    const cleanPhone = phone.trim();
    const cleanCity = city.trim();
    const cleanFacility = facilityType?.trim() || null;
    const cleanArea = damagedArea?.trim() || null;
    const cleanTimeline = timeline?.trim() || null;
    const cleanContactMethod = contactMethod?.trim() || null;
    const cleanDetails = details?.trim() || null;

    // --- Send emails via Resend ---
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);

      const adminHtml = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:640px">
          <div style="padding:12px 16px;background:#1a1a1a;color:#fff;border-left:4px solid #00c97e;margin-bottom:16px">
            <div style="color:#00c97e;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600">New AFS crack-sealing lead</div>
            <div style="font-size:20px;font-weight:700;margin-top:4px">${escape(cleanName)}${cleanCompany ? ` &middot; ${escape(cleanCompany)}` : ''}</div>
          </div>
          <table style="border-collapse:collapse;width:100%;margin:0 0 16px;font-size:14px">
            ${fieldRow('Email', cleanEmail)}
            ${fieldRow('Phone', cleanPhone)}
            ${fieldRow('Project city', cleanCity)}
            ${fieldRow('Facility type', cleanFacility)}
            ${fieldRow('Damaged area', cleanArea)}
            ${fieldRow('Timeline', cleanTimeline)}
            ${fieldRow('Best way to reach', cleanContactMethod)}
            ${fieldRow('Details', cleanDetails)}
          </table>
          <p style="margin:16px 0 4px;color:#555;font-size:13px">Reply to this email to respond directly to ${escape(cleanName)}.</p>
          <p style="margin:0;color:#888;font-size:12px">Submitted via buygeogrid.com/concrete-crack-sealing — Asphalt Fabrics &amp; Specialties</p>
        </div>
      `;

      const adminText = [
        `NEW AFS CRACK-SEALING LEAD`,
        ``,
        `Name: ${cleanName}${cleanCompany ? ' / ' + cleanCompany : ''}`,
        `Email: ${cleanEmail}`,
        `Phone: ${cleanPhone}`,
        `City: ${cleanCity}`,
        cleanFacility ? `Facility: ${cleanFacility}` : null,
        cleanArea ? `Damaged area: ${cleanArea}` : null,
        cleanTimeline ? `Timeline: ${cleanTimeline}` : null,
        cleanContactMethod ? `Best way to reach: ${cleanContactMethod}` : null,
        cleanDetails ? `\nDetails:\n${cleanDetails}` : null,
        ``,
        `Reply to this email to respond directly.`,
        `Submitted via buygeogrid.com/concrete-crack-sealing`,
      ]
        .filter(Boolean)
        .join('\n');

      resend.emails
        .send({
          from: FROM,
          replyTo: cleanEmail,
          to: NOTIFY_TO,
          subject: `Concrete-repair lead — ${cleanName}${cleanCompany ? ` (${cleanCompany})` : ''} — ${cleanCity}`,
          html: adminHtml,
          text: adminText,
        })
        .catch((err) => console.error('concrete-crack-sealing admin notify failed:', err));

      // Customer autoresponder
      const customerHtml = `
        <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:640px">
          <h2 style="margin:0 0 12px">Thanks — we&apos;ve got your concrete repair request.</h2>
          <p style="line-height:1.6">Someone from Asphalt Fabrics &amp; Specialties will follow up within 24 hours to schedule a free assessment and quote your project.</p>
          <p style="line-height:1.6">In the meantime, feel free to text project photos to <strong>${AFS_PHONE}</strong> — the more we can see up front, the faster we can spec the fix.</p>
          <div style="padding:12px 16px;background:#f6f8f7;border-left:3px solid #00c97e;margin:18px 0;font-size:14px;line-height:1.6">
            <div style="color:#666;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;font-weight:600;margin-bottom:6px">What you sent us</div>
            <div><strong>Project city:</strong> ${escape(cleanCity)}</div>
            ${cleanFacility ? `<div><strong>Facility:</strong> ${escape(cleanFacility)}</div>` : ''}
            ${cleanArea ? `<div><strong>Damaged area:</strong> ${escape(cleanArea)}</div>` : ''}
            ${cleanTimeline ? `<div><strong>Timeline:</strong> ${escape(cleanTimeline)}</div>` : ''}
          </div>
          <p style="margin:18px 0 4px;color:#555">Questions? Reply to this email or call <strong>${AFS_PHONE}</strong>.</p>
          <p style="margin:0;color:#888;font-size:12px">— Asphalt Fabrics &amp; Specialties · Northeast Ohio · Since 2003</p>
        </div>
      `;

      const customerText = [
        `Thanks — we've got your concrete repair request.`,
        ``,
        `Someone from Asphalt Fabrics & Specialties will follow up within 24 hours to schedule a free assessment and quote your project.`,
        ``,
        `Text project photos to ${AFS_PHONE} for a faster preliminary read.`,
        ``,
        `What you sent us:`,
        `Project city: ${cleanCity}`,
        cleanFacility ? `Facility: ${cleanFacility}` : null,
        cleanArea ? `Damaged area: ${cleanArea}` : null,
        cleanTimeline ? `Timeline: ${cleanTimeline}` : null,
        ``,
        `Questions? Reply to this email or call ${AFS_PHONE}.`,
        ``,
        `— Asphalt Fabrics & Specialties · Northeast Ohio · Since 2003`,
      ]
        .filter(Boolean)
        .join('\n');

      resend.emails
        .send({
          from: FROM,
          replyTo: REPLY_TO,
          to: cleanEmail,
          subject: `We got your concrete repair request — AFS`,
          html: customerHtml,
          text: customerText,
        })
        .catch((err) => console.error('concrete-crack-sealing customer notify failed:', err));
    } else {
      console.error('RESEND_API_KEY not configured — concrete-crack-sealing lead not emailed');
    }

    // --- Also fire to Gideon Dashboard leads pipeline (fire and forget) ---
    try {
      const jobDetailsParts = [
        cleanFacility ? `Facility: ${cleanFacility}` : null,
        cleanArea ? `Damaged area: ${cleanArea}` : null,
        cleanTimeline ? `Timeline: ${cleanTimeline}` : null,
        cleanContactMethod ? `Best way to reach: ${cleanContactMethod}` : null,
        cleanDetails ? `\nDetails:\n${cleanDetails}` : null,
      ]
        .filter(Boolean)
        .join('\n');

      fetch('https://dashboard.gideoncode.com/api/public/buygeogrid.com/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId: `concrete-crack-sealing-${Date.now()}`,
          visitorName: cleanName,
          visitorEmail: cleanEmail,
          visitorPhone: cleanPhone,
          visitorAddress: cleanCity,
          jobType: 'Concrete Repair — AFS',
          jobDetails: jobDetailsParts,
        }),
      }).catch((err) => console.error('gideon dashboard notify failed:', err));
    } catch (gideonError) {
      console.error('Failed to send to Gideon Dashboard:', gideonError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('concrete-crack-sealing form error:', err);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
