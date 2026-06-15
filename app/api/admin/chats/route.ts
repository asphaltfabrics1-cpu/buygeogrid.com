import { NextRequest, NextResponse } from 'next/server';

// Proxy the Gideon Dashboard's per-domain chats endpoint so the buygeogrid
// /admin can see chatbot conversations without exposing the shared secret
// to the browser. Auth on this route is already provided by middleware
// (basic auth on /api/admin/*); we add the bearer secret to the outbound
// request server-side.
export async function GET(request: NextRequest) {
  const secret = process.env.PUBLIC_CHATS_API_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: 'PUBLIC_CHATS_API_KEY not set' },
      { status: 500 }
    );
  }

  const incoming = new URL(request.url);
  const passthrough = new URLSearchParams();
  const limit = incoming.searchParams.get('limit');
  const since = incoming.searchParams.get('since');
  if (limit) passthrough.set('limit', limit);
  if (since) passthrough.set('since', since);

  const upstream = new URL(
    'https://dashboard.gideoncode.com/api/public/buygeogrid.com/chats' +
      (passthrough.toString() ? `?${passthrough.toString()}` : '')
  );

  try {
    const res = await fetch(upstream.toString(), {
      headers: { Authorization: `Bearer ${secret}` },
      cache: 'no-store',
    });
    const text = await res.text();
    return new NextResponse(text, {
      status: res.status,
      headers: { 'Content-Type': res.headers.get('Content-Type') || 'application/json' },
    });
  } catch (err) {
    console.error('chats proxy error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch chats' },
      { status: 502 }
    );
  }
}
