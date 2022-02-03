import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

import { Header } from '../components/Header';
import { LandingPageFooter } from '../components/LandingPageFooter';

type Props = {
  children: ReactNode;
  secondaryNav?: ReactNode;
};

export const LandingPageLayout = ({ children, secondaryNav }: Props): ReactElement => (
  <>
    <Header nav={false} />
    {secondaryNav}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <LandingPageFooter />
  </>
);

LandingPageLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
  secondaryNav: PropTypes.node,
};
