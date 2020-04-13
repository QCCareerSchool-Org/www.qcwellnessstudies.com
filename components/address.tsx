import React from 'react';

import { useLocation } from '../providers/location';

export const Address: React.FC = () => {
  const location = useLocation();
  if (location === null) {
    return null;
  }
  switch (location.countryCode) {
    case 'CA':
      return <>38 McArthur Ave, Ottawa ON &nbsp;K1L 6R2</>;
    case 'US':
      return <>38 McArthur Ave, Ottawa ON &nbsp;K1L 6R2</>;
    case 'AU':
      return <>38 McArthur Ave, Ottawa ON &nbsp;K1L 6R2</>;
    case 'GB':
      return <>38 McArthur Ave, Ottawa ON &nbsp;K1L 6R2</>;
    case 'NZ':
      return <>38 McArthur Ave, Ottawa ON &nbsp;K1L 6R2</>;
    default:
      return <>38 McArthur Ave, Ottawa ON &nbsp;K1L 6R2, Canada</>;
  }
}
