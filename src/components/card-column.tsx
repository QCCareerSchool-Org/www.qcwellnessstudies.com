import PropTypes from 'prop-types';
import React from 'react';

export const CardColumn: React.FC = ({ children }) => <div className="col-12 col-sm-6 col-lg-4 mb-g d-flex">{children}</div>;

CardColumn.propTypes = {
  children: PropTypes.node.isRequired,
};