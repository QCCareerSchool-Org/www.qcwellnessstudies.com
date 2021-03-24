import { useState } from 'react';

export const useToggle = (initial = false): readonly [ boolean, () => void ] => {
  const [ state, dispatch ] = useState(initial);
  const toggle = (): void => {
    dispatch(state => !state);
  };
  return [ state, toggle ] as const;
};
