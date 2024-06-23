import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Eğer kök URL ise yönlendirme yap
  if (url.pathname === '/') {
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
