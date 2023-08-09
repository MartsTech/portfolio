/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  headers: async () => {
    return [
      {
        source: "/gtm.html",
        headers: [
          {
            key: "content-type",
            value: "text/html",
          },
        ],
      },
    ];
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA(nextConfig);
