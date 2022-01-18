import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

import { Header } from '../components/Header';
import { LandingPageFooter } from '../components/LandingPageFooter';

type Props = {
  children: ReactNode;
  SecondaryNav?: React.FC;
};

export const LandingPageLayout = ({ children, SecondaryNav }: Props): ReactElement => (
  <>
    <Header nav={false} />
    {SecondaryNav && <SecondaryNav />}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <LandingPageFooter />
  </>
);

LandingPageLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
  SecondaryNav: PropTypes.func,
};
