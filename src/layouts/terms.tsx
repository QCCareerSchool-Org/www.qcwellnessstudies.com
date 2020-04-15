import PropTypes from 'prop-types';
import React from 'react';

export const TermsLayout: React.FC = ({ children }) => {
  return (
    <main role="main" className="flex-shrink-0 terms">
      <div className="container my-5">
        {children}
      </div>
    </main>
  );
};

TermsLayout.propTypes = {
  children: PropTypes.element,
};
