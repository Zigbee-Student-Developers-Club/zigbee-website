import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    authInterrupts: true
  },
  images: {
    remotePatterns: [
      new URL('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'),
    ],
  }
};

export default nextConfig;
