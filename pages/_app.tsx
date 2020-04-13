import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';

import '../styles/app.scss';
import { ScreenWidthProvider } from '../providers/screen-width';
import { LocationProvider } from '../providers/location';

const MyApp = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
  return (
    <ScreenWidthProvider>
      <LocationProvider>
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

export default MyApp
