import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT id, email, name, company, interest, source, unsubscribed, created_at
      FROM email_signups
      ORDER BY created_at DESC
      LIMIT 5000
    `;
    return NextResponse.json({ rows });
  } catch (err) {
    console.error('signups GET error:', err);
    return NextResponse.json({ error: 'Failed to load signups' }, { status: 500 });
  }
}
