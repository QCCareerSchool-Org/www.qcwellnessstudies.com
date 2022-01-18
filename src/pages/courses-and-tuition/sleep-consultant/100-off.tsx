import { NextPage } from 'next';
import React from 'react';

import { DeadlineFunnelScript } from '../../../components/DeadlineFunnelScript';
import OriginalPage from '.';

const Page: NextPage = () => (
  <>
    <DeadlineFunnelScript />
    <OriginalPage enrollPath="https://enroll.qcwellnessstudies.com/100-off" />
  </>
);

export default Page;
