/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
};

module.exports = {
  ...nextConfig,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [""],
  },
};
