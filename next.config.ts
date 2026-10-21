import type { NextConfig } from "next";

// Empty because the site is served from the root of the custom domain
// ahmedwaheed.me. Set to "/<repo>" if it's ever served from a GitHub Pages subpath.
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  // Export each page as <route>/index.html. Next.js also writes a <route>/
  // folder of prefetch data, so a <route>.html file would sit beside a
  // folder of the same name, and GitHub Pages would serve the folder.
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
