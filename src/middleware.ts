import { NextRequest, NextResponse } from 'next/server';
import { verifyCookies } from './lib/cookies.lib';

export default async function middleware(req: NextRequest) {
  const isCookies: boolean = await verifyCookies();
  if (!isCookies) return NextResponse.redirect(new URL('/login', req.nextUrl));

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/bookmark'],
};
