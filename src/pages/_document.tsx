import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { GA_TRACKING_ID } from '../lib/gtag';

declare global {
  interface Window { LC_API: { open_chat_window: () => void } }
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en" className="h-100" prefix="og: http://ogp.me/ns#">
        <Head>
          <script src="/scripts.js" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Playfair+Display:400,700,900"></link>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_TRACKING_ID}', {'send_page_view': window.location.hostname !== 'localhost'}); gtag('config', 'AW-1071836607');` }} />
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
