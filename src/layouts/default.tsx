import React from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9J948Z" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      <Header />
      <main role="main" className="flex-shrink-0">
        {children}
      </main>
      <Footer />
    </>
  );
};
