import { NextRequest, NextResponse } from 'next/server';
import { verifyCookies } from './lib/cookies.lib';

const authRoutes = ['/login', '/signup'];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isCookies: boolean = await verifyCookies();
  const isAuthRoute = authRoutes.includes(pathname);

  if (!isCookies && !isAuthRoute)
    return NextResponse.redirect(new URL('/login', req.nextUrl));

  if (isCookies && isAuthRoute)
    return NextResponse.redirect(new URL('/', req.nextUrl));

  return NextResponse.next();
}

export const config = {
  matcher: ['/bookmark', '/login', '/signup'],
};
