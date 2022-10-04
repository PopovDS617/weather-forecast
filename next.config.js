/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GEO_API_KEY: process.env.GEO_API_KEY,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
};

module.exports = nextConfig;
