import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

export interface Location {
  countryCode: string;
  provinceCode: string | null;
}

const LocationStateContext = React.createContext<Location | null | undefined>(undefined);
const LocationDispatchContext = React.createContext<((location: Location) => void) | undefined>(undefined);

export const LocationProvider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useState<Location|null>(null);
  useEffect(() => {
    (async () => {
      const url = 'https://api.qccareerschool.com/geoLocation/ip';
      const response = await fetch(url);
      if (response.ok) {
        const location: Location = await response.json();
        dispatch(location);
      }
    })();
  }, []);
  return (
    <LocationStateContext.Provider value={state}>
      <LocationDispatchContext.Provider value={dispatch}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationStateContext.Provider>
  )
};

export function useLocation() {
  const context = React.useContext(LocationStateContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
