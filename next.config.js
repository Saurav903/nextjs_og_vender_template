/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{protocol:"https",hostname:"neon.ipsator.com",port:""}, {protocol:"https",hostname:"i.ibb.co",port:""}],
  },
};

module.exports = nextConfig;
