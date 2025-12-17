import type { MouseEventHandler } from 'react';

declare global {
  interface Window {

    LC_API?: {

      open_chat_window?: () => void;
    };
  }
}

export const openLiveChat: MouseEventHandler<HTMLElement> = e => {
  e.preventDefault();
  window.LC_API?.open_chat_window?.();
};
