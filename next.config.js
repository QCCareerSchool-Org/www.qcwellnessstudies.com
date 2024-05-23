const withImages = require('next-images');
const withPurgeCss = require('next-purgecss');
module.exports = withPurgeCss(withImages({
  pageExtensions: [ 'page.tsx', 'page.ts', 'page.jsx', 'page.js' ],
  images: {
    disableStaticImages: true,
  },
  purgeCssPaths: [
    'src/**/*',
    // 'src/pages/**/*',
    // 'src/components/**/*',
    // 'src/layouts/**/*',
  ],
  purgeCss: {
    whitelistPatterns: () => [ /^nav-/u, /^navbar-/u, /^dropdown-/u, /^modal-/u ],
    whitelist: () => [
      'nav',
      'navbar',
      'dropdown',
      'tab-content',
      'tab-pane',
      'fade',
      'active',
      'collapsing',
      'collapse',
      'show',
      'fixed-top',
      'modal',
      'close',
      'sr-only',
    ],
  },
}));
