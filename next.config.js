const withImages = require('next-images');
const withPurgeCss = require('next-purgecss');
module.exports = withPurgeCss(withImages({
  future: {
    webpack5: true,
  },
  purgeCssPaths: [
    'src/**/*',
    // 'src/pages/**/*',
    // 'src/components/**/*',
    // 'src/layouts/**/*',
  ],
  purgeCss: {
    whitelistPatterns: () => [ /^nav-/, /^navbar-/, /^dropdown-/, /^modal-/ ],
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
