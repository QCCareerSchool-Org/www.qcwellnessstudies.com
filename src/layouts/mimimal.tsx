import PropTypes from 'prop-types';
import React from 'react';

import { ConsentBanner } from '../components/consent-banner';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  SecondaryNav?: React.FC;
}

export const MinimalLayout: React.FC<Props> = ({ children, SecondaryNav }) => (
  <>
    <Header nav={false} />
    {SecondaryNav && <SecondaryNav />}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <Footer />
    <ConsentBanner />
  </>
);

MinimalLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
  SecondaryNav: PropTypes.func,
};

