/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` emits a fully static site to `out/`, which
  // deploy.yml rsyncs to production. Required so `out/` exists at deploy time.
  output: "export",
  images: {
    // `next/image` cannot use the on-demand optimizer in a static export,
    // so images are served as-is. This keeps <Image> working without a
    // Node/edge runtime (see issue #27).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
