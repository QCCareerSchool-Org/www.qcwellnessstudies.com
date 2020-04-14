import { useState } from 'react';

export const useToggle = (initial: boolean = false) => {
  const [ state, dispatch ] = useState(initial);
  const toggle = () => {
    dispatch((state) => !state);
  }
  return [ state, toggle ] as const;
}
