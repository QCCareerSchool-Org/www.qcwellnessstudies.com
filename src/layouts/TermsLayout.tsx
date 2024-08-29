import type { FC, PropsWithChildren } from 'react';

export const TermsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main role="main" className="flex-shrink-0 terms">
      <div className="container my-5">
        {children}
      </div>
    </main>
  );
};
