import React, { ReactElement } from 'react';

import { useLocation } from '../hooks/useLocation';
import { getAddress } from '../lib/functions';

export const Address = (): ReactElement | null => {
  const location = useLocation();
  if (location === null) {
    return null;
  }
  const address = getAddress(location.countryCode);
  return <>{address.join(', ')}</>;
};
