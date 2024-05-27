// @ts-check

module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  }
  return nextConfig
}

// next.config.js
/*
module.exports = {
  i18n: {
    locales: ["en", "he"],
    defaultLocale: "en",
  },
}
*/

// next.config.js Hebrew website
const nextConfig = {
  i18n: {
    locales: ["he"],
    defaultLocale: "he",
  },
}
module.exports = nextConfig

// next.config.js

/*
module.exports = {
  async redirects() {
    return [
      {
        source: "/time",
        //source: `/${encodeURIComponent("שלום")}`,
        destination: `/${encodeURIComponent("שלום")}`, //"/hello",
        permanent: false,
      },
      {
        source: `/${encodeURIComponent("מאיר")}`, //"/מאיר",
        //source: `/${encodeURIComponent("שלום")}`,
        destination: `/${encodeURIComponent("שלום")}`, //"/hello",
        permanent: false,
      },
      {
        source: `/${encodeURIComponent("שמעון")}`, //"/שמעון",
        //source: `/${encodeURIComponent("שלום")}`,
        destination: `/${encodeURIComponent("שלום")}`, //"/hello",
        permanent: false,
      },
    ]
  },
  // Add other configurations here
}
*/
