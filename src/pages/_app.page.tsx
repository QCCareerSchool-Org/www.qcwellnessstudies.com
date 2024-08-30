import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import type { JSX, ReactElement, ReactNode } from 'react';
import { useEffect } from 'react';

import '../styles/app.scss';
// import GoogleTagManager from '../components/google-tag-manager';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { fbqPageview } from '../lib/fbq';
import { gaPageview } from '../lib/ga';
import { pardotPageview } from '../lib/pardot';
import { TrackJS } from '../lib/trackjs-isomorphic';
import { uetPageview } from '../lib/uet';
import { Provider } from '../providers';
import { brevoPageview } from '@/lib/brevo';

if (!TrackJS.isInstalled()) {
  TrackJS.install({
    token: '0377457a8a0c41c2a11da5e34f786bba',
    application: 'qc-wellness-studies',
  });
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
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
      try {
        const parsed = new URL(window.document.title);
        brevoPageview(window.document.title, url, parsed.pathname);
      } catch (err) {
        console.error(err);
      }
    };

    // When the component is mounted, subscribe to router changes and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return (): void => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ router.events ]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page): ReactNode => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <ErrorBoundary fallback={<></>}>
      <Provider>
        {/* <GoogleTagManager gtmId="GTM-P9J948Z" /> */}
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </ErrorBoundary>
  );
};

export default MyApp;
