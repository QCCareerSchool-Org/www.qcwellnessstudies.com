import React from 'react';

import { useLocation } from '../providers/location';
import { getTelephoneNumber } from '../functions';

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
