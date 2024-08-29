import type { FC } from 'react';

import { useLocation } from '../hooks/useLocation';
import { getTelephoneNumber } from '../lib/functions';

interface Props {
  link?: boolean;
}

export const TelephoneNumber: FC<Props> = ({ link = true }) => {
  const location = useLocation();
  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  if (link) {
    return <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a>;
  }
  return <>{telephoneNumber}</>;
};
