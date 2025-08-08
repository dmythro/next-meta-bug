import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

type LocaleCode = 'en' | 'uk'

const getLangForUrl = (locale: LocaleCode) =>
  locale === 'uk' ? 'ua' : locale

const availableLocales = ['en', 'uk'] as const
const defaultLocale: LocaleCode = 'uk' as const

const headersLocaleKey = 'accept-language'

function getLocaleFromRequest(request: NextRequest) {
  const requestedLocales = new Negotiator({
    headers: {
      [headersLocaleKey]: request.headers.get(headersLocaleKey) || undefined,
    },
  }).languages()

  return match(requestedLocales, availableLocales, defaultLocale) as LocaleCode
}

function redirectTo(url: string, request: NextRequest) {
  return NextResponse.redirect(new URL(url, request.url))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  // Redirect /uk to /ua
  if (pathname.startsWith('/uk')) {
    return redirectTo(request.url.replace('/uk', '/ua'), request)
  }
  // Ignore all other non-root paths
  if (pathname !== '/') {
    return NextResponse.next()
  }

  return redirectTo(`/${getLangForUrl(getLocaleFromRequest(request))}`, request)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // '/((?!_next).*)',
    // Only run on root (/) URL
    '/',
    '/uk/:path*',
  ],
}
