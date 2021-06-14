import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

declare global {
  // eslint-disable-next-line camelcase
  interface Window { LC_API?: { open_chat_window: () => void } }
}

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render(): JSX.Element {
    return (
      <Html lang="en" className="h-100" prefix="og: http://ogp.me/ns#">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Playfair+Display:400,700,900"></link>
        </Head>
        <body className="d-flex flex-column h-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
