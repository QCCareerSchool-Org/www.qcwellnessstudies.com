import PropTypes from 'prop-types';
import React from 'react';

import { Header } from '../components/header';
import { LandingPageFooter } from '../components/landing-page-footer';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  SecondaryNav?: React.FC;
}

export const LandingPageLayout: React.FC<Props> = ({ children, SecondaryNav }) => {
  return (
    <>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9J948Z" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      <Header nav={false} />
      {SecondaryNav && <SecondaryNav />}
      <main role="main" className="flex-shrink-0">
        {children}
      </main>
      <LandingPageFooter />
    </>
  );
};

LandingPageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  SecondaryNav: PropTypes.func,
};
