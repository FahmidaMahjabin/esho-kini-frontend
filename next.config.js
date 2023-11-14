const { Domain } = require("domain");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ibb.co"],
  },
};

module.exports = nextConfig;
