import type { FC, ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

export interface Location {
  countryCode: string;
  countryName: string;
  provinceCode: string | null;
  provinceName: string | null;
}

export const LocationStateContext = createContext<Location | null | undefined>(undefined);
export const LocationDispatchContext = createContext<((location: Location) => void) | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const LocationProvider: FC<Props> = ({ children }) => {
  const [ state, dispatch ] = useState<Location | null>(null);
  useEffect(() => {
    const getData = async (): Promise<void> => {
      const url = 'https://api.qccareerschool.com/geoLocation/ip';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error('bad response from geoLocation');
        }
        const location = await response.json() as unknown as Location;
        dispatch(location);
      } catch {
        dispatch({ countryCode: 'US', countryName: 'United States', provinceCode: 'MD', provinceName: 'Maryland' });
      }
    };
    getData().catch((err: unknown) => {
      console.error(err);
    });
  }, []);
  return (
    <LocationStateContext.Provider value={state}>
      <LocationDispatchContext.Provider value={dispatch}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationStateContext.Provider>
  );
};
