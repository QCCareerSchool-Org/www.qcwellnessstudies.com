import PropTypes from 'prop-types';
import React from 'react';

import { Footer } from '../components/footer';
import { GoogleAnalyticsWrapper } from '../components/google-analytics-wrapper';
import { Header } from '../components/header';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  SecondaryNav?: React.FC;
}

export const DefaultLayout: React.FC<Props> = ({ children, SecondaryNav }) => {
  return (
    <GoogleAnalyticsWrapper>
      <Header nav={true} />
      {SecondaryNav && <SecondaryNav />}
      <main role="main" className="flex-shrink-0">
        {children}
      </main>
      <Footer />
    </GoogleAnalyticsWrapper>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
  SecondaryNav: PropTypes.func,
};

