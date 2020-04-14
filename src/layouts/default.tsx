import React from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

interface Props {
  SecondaryNav?: React.FC;
}

export const DefaultLayout: React.FC<Props> = ({ children, SecondaryNav }) => {
  return (
    <>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9J948Z" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      <Header />
      {SecondaryNav && <SecondaryNav />}
      <main role="main" className="flex-shrink-0">
        {children}
      </main>
      <Footer />
    </>
  );
};
