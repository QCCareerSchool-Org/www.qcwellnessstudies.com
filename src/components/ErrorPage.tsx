import type { FC } from 'react';

export const ErrorPage: FC = () => (
  <div className="container text-center">
    <div className="row">
      <div className="col-12 col-lg-10 offset-lg-1">
        <h1>Whoops! Something Went Wrong</h1>
        <p className="lead">We encountered an unexpected error.</p>
        <p>Try our <a href="/" className="link-primary">homepage</a> instead.</p>
      </div>
    </div>
  </div>
);
