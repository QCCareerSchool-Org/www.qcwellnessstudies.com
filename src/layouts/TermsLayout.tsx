import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const TermsLayout = ({ children }: Props): ReactElement => {
  return (
    <main role="main" className="flex-shrink-0 terms">
      <div className="container my-5">
        {children}
      </div>
    </main>
  );
};

TermsLayout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired) ]).isRequired,
};
