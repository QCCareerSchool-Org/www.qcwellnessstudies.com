import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CountDownTimer } from '@/components/CountDownTimer';
import { useLocation } from '@/hooks/useLocation';

interface Props {
  enrollPath?: string;
  secondaryNav?: ReactNode;
}

export const DefaultLayout: FC<PropsWithChildren<Props>> = ({ children, secondaryNav, enrollPath = 'https://enroll.qcwellnessstudies.com' }) => {
  const date = new Date().getTime();
  const location = useLocation();
  const countryCode = location ? location.countryCode : 'US';

  return (
    <>
      <CountDownTimer date={date} countryCode={countryCode} />
      <Header nav enrollPath={enrollPath} />
      {secondaryNav}
      <main role="main" className="flex-shrink-0">
        {children}
      </main>
      <Footer />
    </>
  );
};
