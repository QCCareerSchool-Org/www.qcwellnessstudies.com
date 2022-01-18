import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

import { useLocation } from '../hooks/useLocation';
import { getTelephoneNumber } from '../lib/functions';

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
