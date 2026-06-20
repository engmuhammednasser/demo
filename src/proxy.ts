import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // No redirect needed since English is at the root /
  return;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|projects|demo|logos|plugins|backend|favicon.ico|favicon.png|profile.png|icons.svg).*)',
  ],
};
