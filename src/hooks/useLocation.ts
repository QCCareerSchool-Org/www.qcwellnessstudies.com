import { useContext } from 'react';

import { Location, LocationStateContext } from '../providers/LocationProvider';

export const useLocation = (): Location | null => {
  const context = useContext(LocationStateContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
