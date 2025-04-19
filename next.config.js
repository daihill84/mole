/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Treat ESLint issues as warnings during build (won't fail the build)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;