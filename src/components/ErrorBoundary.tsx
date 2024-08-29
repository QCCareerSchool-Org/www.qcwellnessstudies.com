import type { ReactNode } from 'react';
import { Component } from 'react';

import { TrackJS } from '../lib/trackjs-isomorphic';

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public componentDidCatch(error: any, errorInfo: any): void {
    if (typeof errorInfo === 'object' && errorInfo !== null && 'componentStack' in errorInfo) {
      // The component stack is sometimes useful in development mode
      // In production it can be somewhat obfuscated, so feel free to omit this line.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log(errorInfo.componentStack);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    TrackJS.track(error);
  }

  public render(): ReactNode {
    return this.state.hasError
      ? this.props.fallback
      : this.props.children;
  }
}
