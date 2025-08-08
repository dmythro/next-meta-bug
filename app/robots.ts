import type { MetadataRoute } from 'next'

import { baseUrl, isIndexing } from '@/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: isIndexing ? '/' : undefined,
      disallow: isIndexing ? undefined : '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
