import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface Props {
  enrollPath?: string;
  secondaryNav?: ReactNode;
}

export const DefaultLayout: FC<PropsWithChildren<Props>> = ({ children, secondaryNav, enrollPath = 'https://enroll.qcwellnessstudies.com' }) => (
  <>
    <Header nav enrollPath={enrollPath} />
    {secondaryNav}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <Footer />
  </>
);
