const { Domain } = require("domain");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ibb.co", "plus.unsplash.com"],
  },
};

module.exports = nextConfig;
