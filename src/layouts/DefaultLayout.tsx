import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CountDownTimer } from '@/components/CountDownTimer';
import { useLocation } from '@/hooks/useLocation';
import { isGBPCountry } from '@/lib/functions';

interface Props {
  enrollPath?: string;
  secondaryNav?: ReactNode;
}

const bannerStartDate = Date.UTC(2025, 11, 1, 5); // 2025-12-01T00:00 (05:00 UTC)
const bannerCountdownStartDate = Date.UTC(2025, 11, 5, 8); // 2025-12-05T03:00 (08:00 UTC)
const bannerEndDate = Date.UTC(2025, 11, 6, 8); // 2025-12-06T03:00 (8:00 UTC)

export const DefaultLayout: FC<PropsWithChildren<Props>> = ({ children, secondaryNav, enrollPath = 'https://enroll.qcwellnessstudies.com' }) => {
  const date = new Date().getTime();
  const location = useLocation();
  const countryCode = location ? location.countryCode : 'US';

  const discount = isGBPCountry(countryCode) ? '£400' : '$400';

  return (
    <>
      <CountDownTimer
        date={date}
        startDate={bannerStartDate}
        countdownStartDate={bannerCountdownStartDate}
        endDate={bannerEndDate}
        message={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Cyber Monday Savings Have Arrived! Get {discount} Off Any Course!<br className="d-lg-none" /><button className="btn btn-primary my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
        lastChanceMessage={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Cyber Monday Savings Have Arrived! Get {discount} Off Any Course!<br /><button className="btn btn-primary my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
      />
      <Header nav logoLink enrollPath={enrollPath} />
      {secondaryNav}
      <main role="main" className="flex-shrink-0">
        {children}
      </main>
      <Footer />
    </>
  );
};
