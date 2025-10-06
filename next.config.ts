import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 This is the key line for static export
  images: {
    unoptimized: true, // 👈 Important for static export
  },
  trailingSlash: true, // 👈 Helps with static hosting
  distDir: 'out', // 👈 Output directory for static files
};

export default nextConfig;
