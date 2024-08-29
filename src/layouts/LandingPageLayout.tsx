import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Header } from '../components/Header';
import { LandingPageFooter } from '../components/LandingPageFooter';

interface Props {
  secondaryNav?: ReactNode;
}

export const LandingPageLayout: FC<PropsWithChildren<Props>> = ({ children, secondaryNav }) => (
  <>
    <Header nav={false} />
    {secondaryNav}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <LandingPageFooter />
  </>
);
