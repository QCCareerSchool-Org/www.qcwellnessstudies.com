import PropTypes from 'prop-types';
import React from 'react';
import { GoogleAnalyticsWrapper } from '../components/google-analytics-wrapper';

export const TermsLayout: React.FC = ({ children }) => {
  return (
    <GoogleAnalyticsWrapper>
      <main role="main" className="flex-shrink-0 terms">
        <div className="container my-5">
          {children}
        </div>
      </main>
    </GoogleAnalyticsWrapper>
  );
};

TermsLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
};
