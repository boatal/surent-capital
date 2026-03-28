import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/inquiry",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
