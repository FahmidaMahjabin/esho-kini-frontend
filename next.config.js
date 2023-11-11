/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: ["placehold.it", "storyset.com"],
        port: "",
      },
    ],
  },
};
module.exports = nextConfig;
