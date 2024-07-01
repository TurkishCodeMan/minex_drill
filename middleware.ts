import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  // Eğer kök URL ise yönlendirme yap
  if (url.pathname === '/') {
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }

  const locale = request.nextUrl.searchParams.get('locale');
  if (locale) {
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', locale);
    return response;
  }

  return NextResponse.next();
}

