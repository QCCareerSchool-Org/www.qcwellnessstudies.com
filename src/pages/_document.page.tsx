import type { NextComponentType } from 'next';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import { Head, Html, Main, NextScript } from 'next/document';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type DocumentComponent<P = {}> = NextComponentType<DocumentContext, DocumentInitialProps, P>;

const MyDocument: DocumentComponent = () => (
  <Html lang="en" className="h-100" prefix="og: http://ogp.me/ns#">
    <Head>
      {/* eslint-disable-next-line @next/next/google-font-display */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Playfair+Display:400,700,900" />
    </Head>
    <body className="d-flex flex-column h-100">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
