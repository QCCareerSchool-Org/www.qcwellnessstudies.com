import { AppProps } from 'next/app';
import React from 'react';

import '../styles/app.scss';
import GoogleTagManager from '../components/google-tag-manager';
import { LocationProvider } from '../providers/location';
import { ScreenWidthProvider } from '../providers/screen-width';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ScreenWidthProvider>
      <LocationProvider>
        <GoogleTagManager gtmId="GTM-P9J948Z" />
        <Component {...pageProps} />
      </LocationProvider>
    </ScreenWidthProvider>
  );
};

export default MyApp;
