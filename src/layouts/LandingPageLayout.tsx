import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Header } from '../components/Header';
import { LandingPageFooter } from '../components/LandingPageFooter';

interface Props {
  secondaryNav?: ReactNode;
  logoLink?: boolean;
}

export const LandingPageLayout: FC<PropsWithChildren<Props>> = ({ children, secondaryNav, logoLink }) => (
  <>
    <Header nav={false} logoLink={logoLink} />
    {secondaryNav}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <LandingPageFooter />
  </>
);
