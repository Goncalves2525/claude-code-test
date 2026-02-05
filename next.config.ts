import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/claude-code-test",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
