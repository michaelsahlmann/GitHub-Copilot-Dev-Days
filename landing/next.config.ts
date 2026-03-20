import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  // Allow Luma embed domain
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
}

export default nextConfig
