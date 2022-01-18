import Script from 'next/script';
import React, { ReactElement } from 'react';

const script = `gtag('event', 'conversion', { send_to: 'AW-1071836607/Srl-CMns3JgBEL_bi_8D' });`;

export const GoogleAdsLeadScript = (): ReactElement => (
  <Script id="googleAdsLead" dangerouslySetInnerHTML={{ __html: script }} />
);
