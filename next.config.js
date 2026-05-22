const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      {
        source: "/profile/:slug",
        destination: "/escorts/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
