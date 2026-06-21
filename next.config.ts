import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,

  // Pin the workspace root so Turbopack doesn't infer a parent directory from a
  // stray lockfile elsewhere on the machine.
  turbopack: {
    root: process.cwd(),
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      // Consolidate the duplicate "what is semantic SEO" pages onto the nested
      // canonical inside the semantic-SEO cluster (308 permanent).
      {
        source: "/blog/what-is-semantic-seo",
        destination: "/blog/semantic-seo/what-is-semantic-seo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
