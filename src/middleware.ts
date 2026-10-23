import { NextResponse, type NextRequest } from 'next/server';
import { adminConfig, SESSION_COOKIE, verifySession } from '@/lib/cms/session';

/** Pages and APIs reachable without a session. */
const PUBLIC_ADMIN_PATHS = new Set(['/admin/login', '/api/admin/login', '/api/admin/logout']);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const path = pathname.replace(/\/+$/, '') || '/';
  const isApi = path.startsWith('/api/');

  // Changes must come from the admin pages themselves (the cookie is also SameSite=Strict).
  if (isApi && request.method !== 'GET' && request.method !== 'HEAD') {
    const origin = request.headers.get('origin');
    if (origin && origin !== request.nextUrl.origin) {
      return NextResponse.json({ error: 'Cross-site request blocked.' }, { status: 403 });
    }
  }

  if (PUBLIC_ADMIN_PATHS.has(path)) return NextResponse.next();

  const email = await verifySession(request.cookies.get(SESSION_COOKIE)?.value, adminConfig());
  if (email) {
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'no-store');
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  if (isApi) return NextResponse.json({ error: 'Please sign in again.' }, { status: 401 });
  const login = new URL('/admin/login/', request.url);
  if (path !== '/admin') login.searchParams.set('next', pathname);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
