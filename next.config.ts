import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to allow API routes to work
  // If you need static export, you'll need to remove or disable API routes
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
