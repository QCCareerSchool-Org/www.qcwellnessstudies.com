import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  SecondaryNav?: React.FC;
}

export const MinimalLayout = ({ children, SecondaryNav }: Props): ReactElement => (
  <>
    <Header nav={false} />
    {SecondaryNav && <SecondaryNav />}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <Footer />
  </>
);

MinimalLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
  SecondaryNav: PropTypes.func,
};
