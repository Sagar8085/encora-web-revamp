// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "neximagencdn.encora.co",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "https://neximagencdn.encora.co/images/:path*",
      },
      {
        source: "/icons/:path*",
        destination: "https://neximagencdn.encora.co/icons/:path*",
      },
      {
        source: "/fonts/:path*",
        destination: "https://neximagencdn.encora.co/fonts/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
