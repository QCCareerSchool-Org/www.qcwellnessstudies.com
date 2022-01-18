import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import '../styles/app.scss';
// import GoogleTagManager from '../components/google-tag-manager';
import { fbqPageview } from '../lib/fbq';
import { gaPageview } from '../lib/ga';
import { pardotPageview } from '../lib/pardot';
import { uetPageview } from '../lib/uet';
import { LocationProvider } from '../providers/LocationProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gaPageview(url);
      uetPageview(url);
      fbqPageview(url);
      pardotPageview(url);
    };

    // When the component is mounted, subscribe to router changes and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ router.events ]);

  return (
    <ScreenWidthProvider>
      <LocationProvider>
        {/* <GoogleTagManager gtmId="GTM-P9J948Z" /> */}
        <Component {...pageProps} />
      </LocationProvider>
    </ScreenWidthProvider>
  );
};

export default MyApp;
