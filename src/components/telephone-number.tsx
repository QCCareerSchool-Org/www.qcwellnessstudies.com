import PropTypes from 'prop-types';
import React from 'react';

import { getTelephoneNumber } from '../lib/functions';
import { useLocation } from '../providers/location';

interface Props {
  link?: boolean;
}

export const TelephoneNumber: React.FC<Props> = ({ link = true }) => {
  const location = useLocation();
  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  if (link) {
    return <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a>;
  }
  return <>{telephoneNumber}</>;
};

TelephoneNumber.propTypes = {
  link: PropTypes.bool,
};
