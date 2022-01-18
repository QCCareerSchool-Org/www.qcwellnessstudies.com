import React, { ReactElement } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type Props = {
  enrollPath?: string;
  SecondaryNav?: React.FC;
  children?: React.ReactNode;
};

export const DefaultLayout = ({ children, SecondaryNav, enrollPath = 'https://enroll.qcwellnessstudies.com' }: Props): ReactElement => (
  <>
    <Header nav={true} enrollPath={enrollPath} />
    {SecondaryNav && <SecondaryNav />}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <Footer />
  </>
);
