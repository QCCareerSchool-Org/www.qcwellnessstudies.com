import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface Props {
  secondaryNav?: ReactNode;
}

export const MinimalLayout: FC<PropsWithChildren<Props>> = ({ children, secondaryNav }) => (
  <>
    <Header nav={false} />
    {secondaryNav}
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
    <Footer />
  </>
);
