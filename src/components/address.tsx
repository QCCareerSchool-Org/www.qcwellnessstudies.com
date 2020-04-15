import React from 'react';

import { useLocation } from '../providers/location';
import { getAddress } from '../functions';

export const Address: React.FC = () => {
  const location = useLocation();
  if (location === null) {
    return null;
  }
  const address = getAddress(location.countryCode);
  return <>{address.join(', ')}</>;
};
