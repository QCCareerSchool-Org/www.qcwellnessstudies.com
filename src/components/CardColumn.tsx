import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CardColumn = ({ children }: Props): ReactElement => <div className="col-12 col-sm-6 col-lg-4 mb-g d-flex">{children}</div>;

CardColumn.propTypes = {
  children: PropTypes.node.isRequired,
};
