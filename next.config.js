/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [ 'page.tsx', 'page.ts', 'page.jsx', 'page.js' ],
  sassOptions: {
    quietDeps: true, // hide deprecation warnings from node_modules
    // If your sass-loader / Sass version supports it, you can also do:
    silenceDeprecations: [ 'import', 'global-builtin' ],
  },
};

module.exports = nextConfig;
