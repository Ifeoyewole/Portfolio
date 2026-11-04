import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],

  // Consolidate old portfolio links onto the canonical custom domain.
  // Match ONLY the previous public hostname to avoid loops on ov-orbitnode.dev.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ifeoyewole.vercel.app" }],
        destination: "https://ov-orbitnode.dev/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
