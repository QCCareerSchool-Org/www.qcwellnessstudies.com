import React from 'react';

import { Location, useLocation } from '../providers/location';

interface Props {
  link?: boolean;
}

const getTelephoneNumber = (location: Location): string => {
  switch (location.countryCode) {
    case 'CA':
    case 'US':
      return '1-833-000-000';
    case 'AU':
      return '1-833-000-000';
    case 'GB':
      return '1-833-000-000';
    case 'NZ':
      return '1-833-000-000';
    default:
      return '+1-613-749-8248';
  }
}

export const TelephoneNumber: React.FC<Props> = ({ link = true }) => {
  const location = useLocation();

  if (location === null) {
    return null;
  }

  const telephoneNumber = getTelephoneNumber(location);
  if (link) {
    return <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a>;
  } else {
    return <>{telephoneNumber}</>;
  }
}
