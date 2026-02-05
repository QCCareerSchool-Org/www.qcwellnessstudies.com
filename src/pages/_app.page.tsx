import type { NextPage } from 'next';
import type { AppInitialProps } from 'next/app';
import App from 'next/app';
import type { AppContextType, NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import type { ComponentType, ReactElement, ReactNode } from 'react';
import { useEffect } from 'react';

import { getUserValues } from './getUserValues';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Provider } from '../providers';
import type { UserValues } from '@/domain/userValues';
import { brevoPageview } from '@/lib/brevo';

import '../styles/app.scss';

type GetLayout = (page: ReactElement) => ReactNode;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type
type AppTypeWithLayout<P = {}> = ComponentType<AppPropsTypeWithLayout<any, P>> & {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  getInitialProps?(context: AppContextType): P | Promise<P>;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type AppPropsTypeWithLayout<Router extends NextRouter = NextRouter, PageProps = {}> = AppInitialProps<PageProps> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: NextComponentType<NextPageContext, any, any> & {
    getLayout?: GetLayout;
  };
  router: Router;
  __N_SSG?: boolean;
  __N_SSP?: boolean;
};

interface Props {
  clientIp?: string;
  userValues?: UserValues;
}

const MyApp: AppTypeWithLayout<Props> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      // uetPageview(url);
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
  const getLayout = Component.getLayout ?? (page => <DefaultLayout>{page}</DefaultLayout>);

  console.log(process.env.NEXT_PUBLIC_FACEBOOK_ID);

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

MyApp.getInitialProps = async appContext => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
  const initialProps = await App.getInitialProps(appContext as any);

  const xVercelIpHeader = appContext.ctx.req?.headers['x-vercel-ip'];
  const clientIp = Array.isArray(xVercelIpHeader) ? xVercelIpHeader[0] : xVercelIpHeader;

  const userValues = await getUserValues(appContext.ctx);

  return { ...initialProps, userValues, clientIp };
};
