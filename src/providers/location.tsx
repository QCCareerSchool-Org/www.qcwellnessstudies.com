import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export interface Location {
  countryCode: string;
  countryName: string;
  provinceCode: string | null;
  provinceName: string | null;
}

const LocationStateContext = React.createContext<Location | null | undefined>(undefined);
const LocationDispatchContext = React.createContext<((location: Location) => void) | undefined>(undefined);

export const LocationProvider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useState<Location | null>(null);
  useEffect(() => {
    (async (): Promise<void> => {
      const url = 'https://api.qccareerschool.com/geoLocation/ip';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error('bad response from geoLocation');
        }
        const location: Location = await response.json();
        dispatch(location);
      } catch (err) {
        dispatch({ countryCode: 'US', countryName: 'United States', provinceCode: 'MD', provinceName: 'Maryland' });
      }
    })();
  }, []);
  return (
    <LocationStateContext.Provider value={state}>
      <LocationDispatchContext.Provider value={dispatch}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationStateContext.Provider>
  );
};

LocationProvider.propTypes = {
  children: PropTypes.node,
};

export const useLocation = (): Location | null => {
  const context = React.useContext(LocationStateContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
