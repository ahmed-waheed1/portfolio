import type { NextConfig } from "next";

// Empty because the site is served from the root of the custom domain
// ahmedwaheed.me. Set to "/<repo>" if it's ever served from a GitHub Pages subpath.
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
