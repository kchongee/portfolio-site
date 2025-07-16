import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    // Disable type checking during build for faster builds
    ignoreBuildErrors: false,
  },
  eslint: {
    // Disable ESLint during build for faster builds
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig