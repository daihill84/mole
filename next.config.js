/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mole', // Required for GitHub Pages
  trailingSlash: true, // Optional: Ensures URLs end with a slash
  images: {
    unoptimized: true, // Disables Image Optimization for static export
  },
};

module.exports = nextConfig;