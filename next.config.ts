/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.qrserver.com'],
    unoptimized: true,
  },
  // Add this to prevent hydration errors from external scripts
  reactStrictMode: true,
}

module.exports = nextConfig