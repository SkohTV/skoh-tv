import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  output: 'standalone',
  devIndicators: false,
}

export default nextConfig;
