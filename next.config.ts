import type { NextConfig } from "next";

// Repo name on GitHub Pages; the site is served from this subpath.
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
