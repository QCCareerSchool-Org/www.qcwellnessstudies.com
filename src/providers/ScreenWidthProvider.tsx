import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

export const ScreenWidthStateContext = React.createContext<number | undefined>(undefined);
export const ScreenWidthDispatchContext = React.createContext<((width: number) => void) | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const ScreenWidthProvider = ({ children }: Props): ReactElement => {
  const [ state, dispatch ] = useState<number>(0);
  useEffect(() => {
    const handler = (): void => { dispatch(window.innerWidth); };
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

ScreenWidthProvider.propTypes = {
  children: PropTypes.node,
};
