import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/longclaws",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
