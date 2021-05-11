import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

import { getQueryString } from '../lib/functions';
import { PriceResult } from '../models/price';

type Request = {
  courses: string | string[];
  countryCode: string;
  provinceCode?: string;
};

export const usePrice = (courses: string | string[], countryCode?: string, provinceCode?: string | null): PriceResult | undefined => {
  const [ price, setPrice ] = useState<PriceResult>();

  useEffect(() => {
    if (countryCode) {
      (async (): Promise<void> => {
        const url = 'https://api.qccareerschool.com/prices';
        const params: Request = { courses, countryCode };
        if (provinceCode) {
          params.provinceCode = provinceCode;
        }
        const queryString = getQueryString(params);
        try {
          const response = await fetch(`${url}?${queryString}`, {
            headers: { 'X-API-Version': '2' },
          });
          if (response.ok) {
            setPrice(await response.json());
          }
        } catch (err) {
          console.error('Unable to look up prices', err);
        }
      })();
    }
  }, [ courses, countryCode, provinceCode ]);

  return price;
};
