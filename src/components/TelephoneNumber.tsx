import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

import { getTelephoneNumber } from '../lib/functions';
import { useLocation } from '../providers/location';

type Props = {
  link?: boolean;
};

export const TelephoneNumber = ({ link = true }: Props): ReactElement => {
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
