import { useContext } from 'react';

import { ScrollPositionContext } from '../providers/ScrollPositionProvider';

export const useScrollPosition = (): number => {
  const context = useContext(ScrollPositionContext);
  if (context === undefined) {
    throw Error('useScrollPosition must be used within a ScrollPositionProvider');
  }
  return context;
};
