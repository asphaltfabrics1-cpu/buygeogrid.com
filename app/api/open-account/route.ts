import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// New-customer account form submissions. Mirrors the AFS QuickBooks-order
// email body: AP receives a plain-text summary ordered the way the QBO
// "New customer" screen expects fields, so the row can be set up fast.
const FROM = 'AFS Customer Form <info@buygeogrid.com>';
const NOTIFY_TO = [
  'reneex@asphaltfabrics.com',
  'kellie@asphaltfabrics.com',
  'jstone@asphaltfabrics.com',
];

const NET30 = 'Net 30 terms (credit account)';

interface IntakeBody {
  company?: string;
  dba?: string;
  entityType?: string;
  ein?: string;
  yearsInBusiness?: string;
  custType?: string;
  website?: string;
  companyPhone?: string;
  contactFirst?: string;
  contactLast?: string;
  contactTitle?: string;
  contactEmail?: string;
  contactPhone?: string;
  apName?: string;
  apEmail?: string;
  apPhone?: string;
  statementMethod?: string;
  buyers?: string;
  billStreet?: string;
  billCity?: string;
  billState?: string;
  billZip?: string;
  taxExempt?: string;
  taxReason?: string;
  taxCert?: string;
  poRequired?: string;
  paymentPref?: string;
  bankName?: string;
  bankContact?: string;
  bankPhone?: string;
  ref1Company?: string; ref1Contact?: string; ref1Phone?: string;
  ref2Company?: string; ref2Contact?: string; ref2Phone?: string;
  ref3Company?: string; ref3Contact?: string; ref3Phone?: string;
  notes?: string;
  sigName?: string;
  sigTitle?: string;
  agree?: string;
  fax?: string; // honeypot
}

const REQUIRED: (keyof IntakeBody)[] = [
  'company', 'entityType', 'contactFirst', 'contactLast', 'contactEmail', 'contactPhone',
  'billStreet', 'billCity', 'billState', 'billZip', 'paymentPref', 'sigName', 'agree',
];
const CREDIT_REQUIRED: (keyof IntakeBody)[] = [
  'ein', 'bankName', 'ref1Company', 'ref1Phone', 'ref2Company', 'ref2Phone',
];

function plain(v: unknown): string {
  return String(v == null ? '' : v).trim().slice(0, 2000);
}

function line(label: string, val: string): string {
  return val ? `${label}: ${val}` : '';
}

function section(title: string, lines: string[]): string {
  const body = lines.filter(Boolean).join('\n');
  return body ? `== ${title} ==\n${body}` : '';
}

function buildAddress(d: IntakeBody): string {
  const street = plain(d.billStreet);
  const cityStateZip = [plain(d.billCity), plain(d.billState)].filter(Boolean).join(', ');
  const line2 = `${cityStateZip} ${plain(d.billZip)}`.trim();
  return [street, line2].filter(Boolean).join('\n');
}

function emailBody(d: IntakeBody, credit: boolean, now: Date): string {
  const v = (k: keyof IntakeBody) => plain(d[k]);
  const sections: string[] = [];

  if (credit) sections.push('*** NET 30 REQUESTED: check references before setting terms ***');

  sections.push(
    section('NAME & CONTACT', [
      line('Company name', v('company')),
      line('Customer display name', v('dba') || v('company')),
      line('Title', v('contactTitle')),
      line('First name', v('contactFirst')),
      line('Last name', v('contactLast')),
      line('Email', v('contactEmail')),
      line('Phone', v('contactPhone')),
      line('Company phone', v('companyPhone')),
      line('Website', v('website')),
    ]),
    section('BILLING ADDRESS', [buildAddress(d)]),
    section('PAYMENTS', [
      line('Primary payment method', credit ? '' : v('paymentPref')),
      line('Terms', credit ? 'Net 30 requested' : 'Not requested'),
      line('Sales form delivery', v('statementMethod')),
    ]),
    section('TAX INFO', [
      line('Tax exempt', v('taxExempt') || 'No'),
      line('Exemption reason', v('taxReason')),
      line('Exemption certificate #', v('taxCert')),
      d.taxExempt === 'Yes' ? 'Reminder: get the signed certificate on file before removing tax.' : '',
    ]),
    section('ADDITIONAL INFO', [line('Customer type', v('custType'))]),
    section('NOTES (paste into QuickBooks Notes)', [
      line('AP contact', [v('apName'), v('apEmail'), v('apPhone')].filter(Boolean).join(' | ')),
      line('Authorized buyers', v('buyers')),
      line('PO required', v('poRequired')),
      line('Entity type', v('entityType')),
      line('EIN', v('ein')),
      line('Years in business', v('yearsInBusiness')),
      line('Customer notes', v('notes')),
    ]),
  );

  if (credit) {
    sections.push(section('CREDIT REFERENCES', [
      line('Bank', [v('bankName'), v('bankContact'), v('bankPhone')].filter(Boolean).join(' | ')),
      line('Trade ref 1', [v('ref1Company'), v('ref1Contact'), v('ref1Phone')].filter(Boolean).join(' | ')),
      line('Trade ref 2', [v('ref2Company'), v('ref2Contact'), v('ref2Phone')].filter(Boolean).join(' | ')),
      line('Trade ref 3', [v('ref3Company'), v('ref3Contact'), v('ref3Phone')].filter(Boolean).join(' | ')),
    ]));
  }

  const signerLine = `${v('sigName')}${v('sigTitle') ? ', ' + v('sigTitle') : ''}, certified accurate` +
    (credit ? ' and authorized reference checks' : '');
  const stamp = now.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
  sections.push(section('SIGNED', [signerLine, `Submitted: ${stamp}`]));

  return sections.filter(Boolean).join('\n\n');
}

export async function POST(request: NextRequest) {
  try {
    const d = (await request.json()) as IntakeBody;

    // Honeypot — bots fill hidden `fax`. Return success so they can't tell.
    if (d.fax && typeof d.fax === 'string' && d.fax.trim() !== '') {
      console.log('open-account honeypot triggered', {
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      });
      return NextResponse.json({ ok: true });
    }

    const credit = d.paymentPref === NET30;
    let need: (keyof IntakeBody)[] = credit ? [...REQUIRED, ...CREDIT_REQUIRED] : [...REQUIRED];
    if (d.taxExempt === 'Yes') need = [...need, 'taxReason'];

    const missing = need.filter((k) => !plain(d[k]));
    if (missing.length) {
      return NextResponse.json(
        { error: 'Please fill in all required fields marked *.' },
        { status: 400 }
      );
    }
    if (!/^\S+@\S+\.\S+$/.test(plain(d.contactEmail))) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const now = new Date();
    const body = emailBody(d, credit, now);
    const tag = credit ? ' [Net 30 requested]' : '';
    const subject = `New customer: ${plain(d.company)} (${plain(d.contactFirst)} ${plain(d.contactLast)})${tag}`;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured — open-account submission not emailed');
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable. Please try again shortly.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: FROM,
      replyTo: plain(d.contactEmail),
      to: NOTIFY_TO,
      subject,
      text: body,
    });

    if (result.error) {
      console.error('open-account resend error:', result.error);
      return NextResponse.json(
        { error: 'Could not send the application. Please try again or email reneex@asphaltfabrics.com directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, credit });
  } catch (err) {
    console.error('open-account route error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
