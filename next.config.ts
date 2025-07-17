import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverComponentsExternalPackages: ["pdf-parse","pdf-lib","openai"],
  },
};

export default nextConfig;
