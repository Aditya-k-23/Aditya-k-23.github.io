/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages. Every page is pre-rendered at build time.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
