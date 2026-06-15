import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT id, order_number, customer_name, customer_company, customer_email,
             customer_phone, ship_to, line_items, notes, source, status, created_at
      FROM orders
      ORDER BY created_at DESC
      LIMIT 2000
    `;
    return NextResponse.json({ rows });
  } catch (err) {
    console.error('orders GET error:', err);
    return NextResponse.json({ error: 'Failed to load orders' }, { status: 500 });
  }
}

interface PatchBody {
  id?: number;
  status?: 'new' | 'confirmed' | 'fulfilled' | 'cancelled';
}

export async function PATCH(req: NextRequest) {
  try {
    const body = (await req.json()) as PatchBody;
    if (!body.id || !body.status) {
      return NextResponse.json({ error: 'id and status are required' }, { status: 400 });
    }
    if (!['new', 'confirmed', 'fulfilled', 'cancelled'].includes(body.status)) {
      return NextResponse.json({ error: 'invalid status' }, { status: 400 });
    }
    await sql`UPDATE orders SET status = ${body.status} WHERE id = ${body.id}`;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('orders PATCH error:', err);
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
  }
}
