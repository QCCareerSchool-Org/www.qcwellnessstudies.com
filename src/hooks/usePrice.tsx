import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

import { getQueryString } from '../functions';
import { PriceResult } from '../models/price';

export const usePrice = (courses: string | string[], countryCode?: string, provinceCode?: string | null) => {
  const [ price, setPrice ] = useState<PriceResult>();

  useEffect(() => {
    if (countryCode) {
      fetchPrices();
    }
  }, [ countryCode, provinceCode ]);

  async function fetchPrices() {
    const url = 'https://api.qccareerschool.com/prices';
    const params = { courses, countryCode, provinceCode };
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
  }

  return price;
};
