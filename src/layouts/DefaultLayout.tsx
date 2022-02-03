import React, { ReactElement, ReactNode } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type Props = {
  enrollPath?: string;
  secondaryNav?: ReactNode;
  children?: ReactNode;
};

export const DefaultLayout = ({ children, secondaryNav, enrollPath = 'https://enroll.qcwellnessstudies.com' }: Props): ReactElement => (
  <>
    <Header nav={true} enrollPath={enrollPath} />
    {secondaryNav}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <Footer />
  </>
);
