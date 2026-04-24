import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || ''

  if (hostname.startsWith('www.')) {
    const apexHost = hostname.slice(4)
    const url = request.nextUrl.clone()
    url.host = apexHost
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next.js internals; everything else passes through the www→apex redirect check.
    '/((?!_next/static|_next/image).*)',
  ],
}
