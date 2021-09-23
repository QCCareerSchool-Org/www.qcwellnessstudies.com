import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

interface Props {
  children?: React.ReactNode;
  SecondaryNav?: React.FC;
}

export const DefaultLayout: React.FC<Props> = ({ children, SecondaryNav }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'track' });
  }, []);

  return (
    <>
      <Header nav={true} />
      {SecondaryNav && <SecondaryNav />}
      <main role="main" className="flex-shrink-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
  SecondaryNav: PropTypes.func,
};
