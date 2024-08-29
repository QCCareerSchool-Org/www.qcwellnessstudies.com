import type { FC, ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

export const ScreenWidthStateContext = createContext<number | undefined>(undefined);
export const ScreenWidthDispatchContext = createContext<((width: number) => void) | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const ScreenWidthProvider: FC<Props> = ({ children }) => {
  const [ state, dispatch ] = useState<number>(0);
  useEffect(() => {
    const handler = (): void => {
      dispatch(window.innerWidth);
    };
    window.addEventListener('resize', handler);
    handler();
    return (): void => {
      window.removeEventListener('resize', handler);
    };
  }, []);
  return (
    <ScreenWidthStateContext.Provider value={state}>
      <ScreenWidthDispatchContext.Provider value={dispatch}>
        {children}
      </ScreenWidthDispatchContext.Provider>
    </ScreenWidthStateContext.Provider>
  );
};
