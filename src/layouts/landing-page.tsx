import PropTypes from 'prop-types';
import React from 'react';

import { ConsentBanner } from '../components/consent-banner';
import { Header } from '../components/header';
import { LandingPageFooter } from '../components/landing-page-footer';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  SecondaryNav?: React.FC;
}

export const LandingPageLayout: React.FC<Props> = ({ children, SecondaryNav }) => {
  return (
    <>
      <Header nav={false} />
      {SecondaryNav && <SecondaryNav />}
      <main role="main" className="flex-shrink-0">
        {children}
      </main>
      <LandingPageFooter />
      <ConsentBanner />
    </>
  );
};

LandingPageLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
  SecondaryNav: PropTypes.func,
};

