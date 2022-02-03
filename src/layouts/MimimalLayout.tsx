import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type Props = {
  children: ReactNode;
  secondaryNav?: ReactNode;
};

export const MinimalLayout = ({ children, secondaryNav }: Props): ReactElement => (
  <>
    <Header nav={false} />
    {secondaryNav}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <Footer />
  </>
);

MinimalLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
  secondaryNav: PropTypes.node,
};
