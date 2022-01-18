import { useContext } from 'react';

import { ScreenWidthStateContext } from '../providers/ScreenWidthProvider';

export const useScreenWidth = (): number => {
  const context = useContext(ScreenWidthStateContext);
  if (context === undefined) {
    throw new Error('useScreenWidth must be used within a ScreenWidthProvider');
  }
  return context;
};
