import type { ReactNode } from 'react';

import { DeadlineFunnelScript } from '../../../components/DeadlineFunnelScript';
import { LandingPageLayout } from '../../../layouts/LandingPageLayout';
import type { NextPageWithLayout } from '../../_app.page';
import OriginalPage from './index.page';

const Page: NextPageWithLayout = () => (
  <>
    <DeadlineFunnelScript />
    <OriginalPage enrollPath="https://enroll.qcwellnessstudies.com/300-off" />
  </>
);

Page.getLayout = function Layout(page): ReactNode {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Page;
