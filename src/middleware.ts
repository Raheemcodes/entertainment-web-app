import { NextRequest, NextResponse } from 'next/server';
import { verifyCookies } from './lib/cookies.lib';

const authRoutes = ['/login', '/signup'];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isCookies: boolean = await verifyCookies();
  const isAuthRoute = authRoutes.includes(pathname);
  const isLogoutRoute = pathname === '/logout';

  if ((isCookies && isAuthRoute) || (!isCookies && isLogoutRoute))
    return NextResponse.redirect(new URL('/', req.nextUrl));

  if (!isCookies && !isAuthRoute)
    return NextResponse.redirect(new URL('/login', req.nextUrl));
}

export const config = {
  matcher: ['/bookmark', '/login', '/signup', '/logout'],
};
