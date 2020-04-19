import router from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

import * as gtag from '../lib/gtag';

router.events.on('routeChangeComplete', (url) => {
  if (window.location.hostname !== 'localhost') {
    const pageview = `${window.location.protocol}//${window.location.hostname}${url}`;
    gtag.pageview(pageview);
  }
});

export const GoogleAnalyticsWrapper: React.FC = ({ children }) => <>{children}</>;

GoogleAnalyticsWrapper.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element) ]),
};
