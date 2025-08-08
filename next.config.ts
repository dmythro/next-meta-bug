import type { NextConfig } from "next";
import { baseUrl } from "./constants"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      new URL(`${baseUrl}/**`),
    ],
    deviceSizes: [480, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128],
    formats: ['image/webp', 'image/avif'],
    // minimumCacheTTL: 86400, // 24 hours
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  output: 'standalone',
};

export default nextConfig;
