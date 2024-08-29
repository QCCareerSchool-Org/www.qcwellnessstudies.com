import type { FC, PropsWithChildren } from 'react';

export const CardColumn: FC<PropsWithChildren> = ({ children }) => <div className="col-12 col-sm-6 col-lg-4 mb-g d-flex">{children}</div>;
