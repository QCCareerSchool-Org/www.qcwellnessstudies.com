import type { NextComponentType } from 'next';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type DocumentComponent<P = {}> = NextComponentType<DocumentContext, DocumentInitialProps, P>;

const MyDocument: DocumentComponent = () => (
  <Html lang="en" className="h-100" prefix="og: http://ogp.me/ns#">
    <Head>
      {/* eslint-disable-next-line @next/next/google-font-display */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Playfair+Display:400,700,900" />
    </Head>
    <body className="d-flex flex-column h-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1725004270923176&ev=PageView&noscript=1" alt="" /></noscript>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

export default MyDocument;
