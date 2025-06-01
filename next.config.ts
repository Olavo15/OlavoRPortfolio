import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'media.licdn.com',
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com',
      'static-00.iconduck.com',
      'cdn-icons-png.flaticon.com',
      'www.svgrepo.com',
    ],
  },
};

export default nextConfig;
