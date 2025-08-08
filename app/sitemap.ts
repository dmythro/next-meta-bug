import type { MetadataRoute } from 'next'

import { baseUrl } from '@/constants'

const defaultLang = 'uk'
const getSitemapPage = (uri = ''): MetadataRoute.Sitemap[number] => ({
  url: `${baseUrl}/${defaultLang}${uri}`,
  alternates: {
    languages: {
      uk: `${baseUrl}/${defaultLang}${uri}`,
      en: `${baseUrl}/en${uri}`,
      'x-default': `${baseUrl}/${defaultLang}${uri}`,
    },
  },
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 1,
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [getSitemapPage()]
}
