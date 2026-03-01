import { languages } from '@/i18n/settings'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const lngKeys = Object.keys(languages)

  // تجاهل الملفات العامة
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next()
  }

  // التحقق إذا كانت الصفحة تحتوي على لغة
  if (lngKeys.some((lngKey) => pathname.startsWith(`/${lngKey}/`))) {
    return NextResponse.next()
  }

  // التوجيه إلى اللغة الانجليزية افتراضيًا
  request.nextUrl.pathname = `/en${pathname}`
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}