/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Optional: Disable image optimization if deploying to Vercel
  },
};

export default nextConfig;
