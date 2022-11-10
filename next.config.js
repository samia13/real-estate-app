/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lid.zoocdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
