import React, { useEffect, useState } from 'react';

const ScreenWidthStateContext = React.createContext<number | undefined>(undefined);
const ScreenWidthDispatchContext = React.createContext<((width: number) => void) | undefined>(undefined);

export const ScreenWidthProvider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useState<number>(0);
  useEffect(() => {
    const handler = () => { dispatch(window.innerWidth); }
    window.addEventListener('resize', handler);
    handler();
    return () => {
      window.removeEventListener('resize', handler);
    }
  }, []);
  return (
    <ScreenWidthStateContext.Provider value={state}>
      <ScreenWidthDispatchContext.Provider value={dispatch}>
        {children}
      </ScreenWidthDispatchContext.Provider>
    </ScreenWidthStateContext.Provider>
  )
};

export function useScreenWidth() {
  const context = React.useContext(ScreenWidthStateContext);
  if (context === undefined) {
    throw new Error('useScreenWidth must be used within a ScreenWidthProvider');
  }
  return context;
}
