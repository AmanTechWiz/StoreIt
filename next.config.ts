import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
      {
        protocol: "https", // missing previously
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "200mb",
    },
  },
};

export default nextConfig;
