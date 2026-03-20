import type { FC, ReactNode } from 'react';
import { createContext } from 'react';
import { useWindowListener } from 'use-window-listener';

export const ScreenWidthContext = createContext<number | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const ScreenWidthProvider: FC<Props> = ({ children }) => {
  const state = useWindowListener('resize', w => w.innerWidth);

  return (
    <ScreenWidthContext.Provider value={state}>
      {children}
    </ScreenWidthContext.Provider>
  );
};
