import type { FC } from 'react';

export const Spinner: FC = () => (
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);
