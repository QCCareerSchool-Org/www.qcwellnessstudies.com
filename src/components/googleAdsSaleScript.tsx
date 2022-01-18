import Script from 'next/script';
import React, { ReactElement } from 'react';

import { Enrollment } from '../models/enrollment';

type Props = {
  enrollment: Enrollment;
};

export const GoogleAdsSaleScript = ({ enrollment }: Props): ReactElement => {
  const script = `gtag('event', 'conversion', { send_to: 'AW-1071836607/Srl-CMns3JgBEL_bi_8D', value: ${enrollment.cost}, currency: '${enrollment.currencyCode}', transaction_id: '${enrollment.id}'  });`;
  return <Script id="googleAdsLead" dangerouslySetInnerHTML={{ __html: script }} />;
};
