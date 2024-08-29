import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

import type { PriceResult } from '../models/price';

export const usePrice = (courses: string | string[], countryCode?: string, provinceCode?: string | null): PriceResult | undefined => {
  const [ price, setPrice ] = useState<PriceResult>();

  useEffect(() => {
    if (countryCode) {
      const getData = async (): Promise<void> => {
        const url = 'https://api.qccareerschool.com/prices';
        const params = new URLSearchParams();
        if (Array.isArray(courses)) {
          for (const c of courses) {
            params.append('courses[]', c);
          }
        } else {
          params.append('courses[]', courses);
        }
        params.append('countryCode', countryCode);
        if (provinceCode) {
          params.append('provinceCode', provinceCode);
        }
        try {
          const response = await fetch(`${url}?${params.toString()}`, {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            headers: { 'X-API-Version': '2' },
          });
          if (response.ok) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setPrice(await response.json());
          }
        } catch (err) {
          console.error('Unable to look up prices', err);
        }
      };
      getData().catch((err: unknown) => {
        console.error(err);
      });
    }
  }, [ courses, countryCode, provinceCode ]);

  return price;
};
