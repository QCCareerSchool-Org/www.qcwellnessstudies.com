import type { ReactNode } from 'react';

import OriginalPage from './index.page';
import { DeadlineFunnelScript } from '../../../components/DeadlineFunnelScript';
import { LandingPageLayout } from '../../../layouts/LandingPageLayout';
import type { NextPageWithLayout } from '../../_app.page';
import { SleepConsultantPromo } from './sleepConsultantPromoSection/SleepConsultantPromo';
import { useLocation } from '@/hooks/useLocation';

const Page: NextPageWithLayout = () => {
  const location = useLocation();
  const countryCode = location?.countryCode ?? 'US';

  return (
    <>
      <DeadlineFunnelScript />
      <OriginalPage
        enrollPath="https://enroll.qcwellnessstudies.com/400-off"
        heroPromotion={(
          <SleepConsultantPromo
            countryCode={countryCode}
            discountAmount={400}
            enrollHref="https://enroll.qcwellnessstudies.com/400-off?c=sl"
          />
        )}
      />
    </>
  );
};

Page.getLayout = function Layout(page): ReactNode {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Page;
