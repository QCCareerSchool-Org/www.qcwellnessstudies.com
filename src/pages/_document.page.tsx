import type { NextComponentType } from 'next';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { getUserValues } from './getUserValues';
import type { UserValues } from '@/domain/userValues';
import { Bing } from '@/scripts/bing';
import { Brevo } from '@/scripts/brevo';
import { BrevoConversations } from '@/scripts/brevoCoversations';
import { Facebook } from '@/scripts/facebook';
import { GoogleAnalytics } from '@/scripts/googleAnalytics';
import { Tiktok } from '@/scripts/tiktok';

interface Props {
  userValues?: UserValues;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type DocumentComponent<P = {}> = NextComponentType<DocumentContext, DocumentInitialProps, P>;

const MyDocument: DocumentComponent<Props> = ({ userValues }) => (
  <Html lang="en" className="h-100" prefix="og: http://ogp.me/ns#">
    <Head>
      {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} userValues={userValues} />}
      {process.env.BREVO_CLIENT_KEY && <Brevo clientKey={process.env.BREVO_CLIENT_KEY} userValues={userValues} />}
      {process.env.NEXT_PUBLIC_FACEBOOK_ID && <Facebook id={process.env.NEXT_PUBLIC_FACEBOOK_ID} userValues={userValues} />}
      {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
      {process.env.BING_ID && <Bing id={process.env.BING_ID} userValues={userValues} />}
      {/* eslint-disable-next-line @next/next/google-font-display */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Playfair+Display:400,700,900" />
    </Head>
    <body className="d-flex flex-column h-100">

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1725004270923176&ev=PageView&noscript=1" alt="" /></noscript>
      <Main />
      {process.env.BREVO_CONVERSATIONS_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} />}
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps & Props> => {
  const initialProps = await Document.getInitialProps(ctx);

  const userValues = await getUserValues(ctx);

  return { ...initialProps, userValues };
};

export default MyDocument;
