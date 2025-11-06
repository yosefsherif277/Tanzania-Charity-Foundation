import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // تجاهل الملفات العامة
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next()
  }

  // التحقق إذا كانت الصفحة تحتوي على لغة
  if (pathname.startsWith('/ar') || pathname.startsWith('/en')) {
    return NextResponse.next()
  }

  // التوجيه إلى اللغة العربية افتراضيًا
  request.nextUrl.pathname = `/ar${pathname}`
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