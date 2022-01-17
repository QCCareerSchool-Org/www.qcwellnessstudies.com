import React, { useEffect } from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';

interface Props {
  enrollPath?: string;
  SecondaryNav?: React.FC;
  children?: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ children, SecondaryNav, enrollPath = 'https://enroll.qcwellnessstudies.com' }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'track' });
  }, []);

  return (
    <>
      <Header nav={true} enrollPath={enrollPath} />
      {SecondaryNav && <SecondaryNav />}
      <main role="main" className="flex-shrink-0">
        {children}
      </main>
      <Footer />
    </>
  );
};
