import type { MetadataRoute } from 'next'

export default function manifest() {
  const manifest: MetadataRoute.Manifest = {
    name: 'Test Title',
    short_name: 'Test Title',
    description: 'Test Description',
    start_url: '/',
    display: 'standalone',
    // display_override: ['minimal-ui'],
    background_color: '#ffffff',
    theme_color: '#e40c25',
    orientation: 'portrait-primary',
    // scope: '/',
    lang: 'uk',
    dir: 'ltr',
    categories: ['test'],
    icons: [
      {
        src: '/globe.svg',
        type: 'image/svg+xml',
        sizes: 'any',
        purpose: 'any',
      },
      {
        src: '/globe.svg',
        type: 'image/svg+xml',
        sizes: 'any',
        purpose: 'maskable',
      },
      {
        src: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '16x16 32x32',
        purpose: 'any',
      },
    ],
    // screenshots: [],
    // shortcuts: [],
    // related_applications: [],
    // prefer_related_applications: false,
  }

  return manifest
}
