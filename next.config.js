/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['t1.daumcdn.net'],
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
