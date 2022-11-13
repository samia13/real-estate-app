/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lid.zoocdn.com",
      },
      {
        protocol: "https",
        hostname: "st.zoocdn.com",
      },
      {
        protocol: "https",
        hostname: "lc.zoocdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
