/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  basePath: '/mole', // Match the repository path (daihill84.github.io/mole)
  assetPrefix: '/mole/', // Ensure assets load correctly
  trailingSlash: true, // Ensure URLs end with a slash
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

module.exports = nextConfig;