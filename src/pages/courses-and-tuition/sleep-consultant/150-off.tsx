import React from 'react';

import { DeadlineFunnelScript } from '../../../components/DeadlineFunnelScript';
import { LandingPageLayout } from '../../../layouts/LandingPageLayout';
import { NextPageWithLayout } from '../../_app';
import OriginalPage from '.';

const Page: NextPageWithLayout = () => (
  <>
    <DeadlineFunnelScript />
    <OriginalPage enrollPath="https://enroll.qcwellnessstudies.com/150-off" />
  </>
);

Page.getLayout = function Layout(page) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Page;
