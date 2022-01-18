import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

export type Location = {
  countryCode: string;
  countryName: string;
  provinceCode: string | null;
  provinceName: string | null;
};

export const LocationStateContext = React.createContext<Location | null | undefined>(undefined);
export const LocationDispatchContext = React.createContext<((location: Location) => void) | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const LocationProvider = ({ children }: Props): ReactElement => {
  const [ state, dispatch ] = useState<Location | null>(null);
  useEffect(() => {
    const getData = async (): Promise<void> => {
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
    };
    getData().catch(err => { console.error(err); });
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
