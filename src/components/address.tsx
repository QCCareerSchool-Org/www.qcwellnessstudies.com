import React from 'react';

import { getAddress } from '../lib/functions';
import { useLocation } from '../providers/location';

export const Address: React.FC = () => {
  const location = useLocation();
  if (location === null) {
    return null;
  }
  const address = getAddress(location.countryCode);
  return <>{address.join(', ')}</>;
};
