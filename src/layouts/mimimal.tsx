import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  SecondaryNav?: React.FC;
}

export const MinimalLayout: React.FC<Props> = ({ children, SecondaryNav }) => {
  useEffect(() => {
    window.dataLayer.push({ event: 'track' });
  }, []);

  return (
    <>
      <Header nav={false} />
      {SecondaryNav && <SecondaryNav />}
      <main role="main" className="flex-shrink-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

MinimalLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
  SecondaryNav: PropTypes.func,
};
