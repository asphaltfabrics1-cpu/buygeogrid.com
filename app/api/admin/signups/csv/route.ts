import { sql } from '@vercel/postgres';

function csvEscape(v: unknown): string {
  if (v === null || v === undefined) return '';
  const s = String(v);
  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT email, name, company, interest, source, unsubscribed, created_at
      FROM email_signups
      ORDER BY created_at DESC
    `;

    const header = [
      'email',
      'name',
      'company',
      'interest',
      'source',
      'unsubscribed',
      'created_at',
    ];
    const lines = [header.join(',')];
    for (const r of rows) {
      lines.push(
        header
          .map((h) => csvEscape((r as Record<string, unknown>)[h]))
          .join(',')
      );
    }
    const body = lines.join('\n');
    const date = new Date().toISOString().slice(0, 10);

    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="email_signups_${date}.csv"`,
      },
    });
  } catch (err) {
    console.error('signups CSV error:', err);
    return new Response('Failed to export', { status: 500 });
  }
}
