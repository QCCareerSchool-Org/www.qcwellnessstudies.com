import React from 'react';

export const TermsLayout: React.FC = ({ children }) => {
  return (
    <main role="main" className="flex-shrink-0">
      {children}
    </main>
  );
};
