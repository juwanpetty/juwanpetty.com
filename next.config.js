/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = {
  ...nextConfig,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
