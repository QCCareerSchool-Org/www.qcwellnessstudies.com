import React, { type ReactNode } from 'react';

import OriginalPage from './index.page';
import { DeadlineFunnelScript } from '../../../components/DeadlineFunnelScript';
import { LandingPageLayout } from '../../../layouts/LandingPageLayout';
import type { NextPageWithLayout } from '../../_app.page';
import { CurrentPromotion } from '@/components/CurrentPromotion';
import { useLocation } from '@/hooks/useLocation';

const Page: NextPageWithLayout = () => {
  const location = useLocation();
  const countryCode = location?.countryCode ?? 'US';
  const [ date ] = React.useState(() => Date.now());

  return (
    <>
      <DeadlineFunnelScript />
      <OriginalPage
        enrollPath="https://enroll.qcwellnessstudies.com/400-off"
        heroPromotion={(
          <CurrentPromotion
            date={date}
            countryCode={countryCode}
            newYearsDiscountAmount={400}
            newYearsEnrollHref="https://enroll.qcwellnessstudies.com/400-off?c=sl"
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
