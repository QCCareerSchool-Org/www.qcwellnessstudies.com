import React from 'react';

import { getTelephoneNumber } from '../lib/functions';
import { useLocation } from '../providers/location';

interface Props {
  link?: boolean;
}

export const TelephoneNumber: React.FC<Props> = ({ link = true }) => {
  const location = useLocation();

  if (location === null) {
    return null;
  }

  const telephoneNumber = getTelephoneNumber(location.countryCode);
  if (link) {
    return <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a>;
  } else {
    return <>{telephoneNumber}</>;
  }
};
