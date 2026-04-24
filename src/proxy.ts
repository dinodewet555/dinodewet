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
    // Run on all paths except static assets and crawl-critical files.
    // robots.txt, sitemap.xml, and google verification must be served from
    // both www and apex without redirect so crawlers can fetch them.
    '/((?!_next/static|_next/image|robots\\.txt|sitemap\\.xml|google518f28c001775372\\.html).*)',
  ],
}
