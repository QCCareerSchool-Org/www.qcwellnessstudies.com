import { AppProps } from 'next/app';
import React from 'react';

import '../styles/app.scss';
import GoogleTagManager from '../components/google-tag-manager';
import { LocationProvider } from '../providers/location';
import { ScreenWidthProvider } from '../providers/screen-width';

declare global {
  interface Window {
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

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
