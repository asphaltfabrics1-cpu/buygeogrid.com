import { NextRequest, NextResponse } from 'next/server';

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

    // Forward to the Gideon Dashboard public lead endpoint, tagged as a
    // mailing-list signup so it can be filtered separately from quote leads.
    const tag = source || 'mailing-list';
    const jobDetails = [
      company ? `Company: ${company}` : null,
      interest ? `Interested in: ${interest}` : null,
      `Source: ${tag}`,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      await fetch(
        'https://dashboard.gideoncode.com/api/public/buygeogrid.com/leads',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            visitorId: `email-signup-${Date.now()}`,
            visitorName: name || email,
            visitorEmail: email,
            visitorAddress: company || undefined,
            jobType: `Mailing List (${tag})`,
            jobDetails,
          }),
        }
      );
    } catch (err) {
      console.error('Gideon Dashboard email-signup forward failed:', err);
      // Don't fail the user-facing request if downstream is down — we still
      // log to the server console so the signup isn't lost outright.
      console.log('FALLBACK email signup:', { name, email, company, interest, source: tag });
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
