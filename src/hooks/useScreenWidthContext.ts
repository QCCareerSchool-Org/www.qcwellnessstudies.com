import { useContext } from 'react';

import { ScreenWidthContext } from '@/providers/ScreenWidthProvider';

export const useScreenWidthContext = (): number | null => {
  const context = useContext(ScreenWidthContext);
  if (context === undefined) {
    throw new Error('useScreenWidthContext must be used within a ScreenWidthProvider');
  }
  return context;
};
