import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      { source: "/index.html", destination: "/privacy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/support.html", destination: "/support", permanent: true },
      { source: "/delete-account.html", destination: "/delete-account", permanent: true },
      { source: "/child-safety-standards.html", destination: "/child-safety", permanent: true },
    ];
  },
};

export default nextConfig;
