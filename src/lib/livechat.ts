import type { MouseEventHandler } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    LC_API?: {
      // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
      open_chat_window?: () => void;
    };
  }
}

export const openLiveChat: MouseEventHandler<HTMLAnchorElement> = e => {
  e.preventDefault();
  window.LC_API?.open_chat_window?.();
};
