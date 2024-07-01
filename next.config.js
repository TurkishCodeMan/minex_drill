
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en",
  },
}

module.exports = withNextIntl(nextConfig);
