import PropTypes from 'prop-types';
import React, { useState } from 'react';

const BannerContext = React.createContext<[boolean, (open: boolean) => void] | undefined>(undefined);

export const BannerProvider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useState<boolean>(false);
  return (
    <BannerContext.Provider value={[ state, dispatch ]}>
      {children}
    </BannerContext.Provider>
  );
};

BannerProvider.propTypes = {
  children: PropTypes.node,
};

export const useBanner = (): [ boolean, (open: boolean) => void ] => {
  const context = React.useContext(BannerContext);
  if (context === undefined) {
    throw new Error('useBanner must be used within a BannerProvider');
  }
  return context;
};
