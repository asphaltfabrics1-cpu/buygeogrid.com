import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Basic-auth gate for the /admin section. Edge-safe (no Node crypto).
// Set ADMIN_PASSWORD as an env var in Vercel.
export function middleware(req: NextRequest) {
  const adminPw = process.env.ADMIN_PASSWORD;
  if (!adminPw) {
    // Misconfigured — fail closed.
    return new NextResponse('Admin password not configured.', { status: 500 });
  }

  const authHeader = req.headers.get('authorization');
  if (authHeader?.startsWith('Basic ')) {
    const decoded = atob(authHeader.slice(6));
    const idx = decoded.indexOf(':');
    if (idx > -1) {
      const pass = decoded.slice(idx + 1);
      if (pass === adminPw) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="BuyGeogrid Admin"',
    },
  });
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/api/admin', '/api/admin/:path*'],
};
