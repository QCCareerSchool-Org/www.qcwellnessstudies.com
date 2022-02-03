import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode, useEffect } from 'react';

import '../styles/app.scss';
// import GoogleTagManager from '../components/google-tag-manager';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { fbqPageview } from '../lib/fbq';
import { gaPageview } from '../lib/ga';
import { pardotPageview } from '../lib/pardot';
import { uetPageview } from '../lib/uet';
import { LocationProvider } from '../providers/LocationProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
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

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <ScreenWidthProvider>
      <LocationProvider>
        {/* <GoogleTagManager gtmId="GTM-P9J948Z" /> */}
        {getLayout(<Component {...pageProps} />)}
      </LocationProvider>
    </ScreenWidthProvider>
  );
};

export default MyApp;
