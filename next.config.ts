import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    if (isProd) return [];
    return [
      {
        source: '/demo/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;
