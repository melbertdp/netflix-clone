/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.cdnlogo.com', 'rb.gy','themoviedb.org','image.tmdb.org'],
  },
}

module.exports = nextConfig
