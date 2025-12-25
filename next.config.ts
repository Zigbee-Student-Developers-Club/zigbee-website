import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    authInterrupts: true
  },
  images: {
    remotePatterns: [
      new URL('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'),
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'zigbeeoutr.in',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'zigbee-testing.netlify.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '**',
      },
    ]
  },
};

export default nextConfig;
