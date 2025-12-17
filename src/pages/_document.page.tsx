import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { JSX } from 'react';

const googleAnalyticsSrc = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;

const googleAnalyticsScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', { page_path: window.location.pathname });
gtag('config', 'AW-1071836607', { allow_enhanced_conversions: true });`;

const uetScript = `
(function(w,d,t,r,u) {
  var f, n, i;
  w[u] = w[u] || [], f = function() {
    var o = { ti: "28484716" };
    o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad")
  },
  n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {
    var s = this.readyState;
    s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null)
  },
  i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i)
})(window, document, "script", "//bat.bing.com/bat.js", "uetq");`;

const facebookScript = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1725004270923176');
fbq('track', 'PageView');`;

const brevoScript = `
(function() {
    window.sib = {
        equeue: [],
        client_key: "ggq6iykwaxh2hn0q20y7fwpu"
    };
    /* OPTIONAL: email for identify request*/
    // window.sib.email_id = 'example@domain.com';
    window.sendinblue = {};
    for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {
    (function(k) {
        window.sendinblue[k] = function() {
            var arg = Array.prototype.slice.call(arguments);
            (window.sib[k] || function() {
                    var t = {};
                    t[k] = arg;
                    window.sib.equeue.push(t);
                })(arg[0], arg[1], arg[2], arg[3]);
            };
        })(j[i]);
    }
    var n = document.createElement("script"),
        i = document.getElementsByTagName("script")[0];
    n.type = "text/javascript", n.id = "sendinblue-js", n.async = !0, n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key, i.parentNode.insertBefore(n, i), window.sendinblue.page();
})();
`;

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render(): JSX.Element {
    return (
      <Html lang="en" className="h-100" prefix="og: http://ogp.me/ns#">
        <Head>
          <script async src={googleAnalyticsSrc} />
          <script dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }} />
          <script dangerouslySetInnerHTML={{ __html: uetScript }} />
          <script dangerouslySetInnerHTML={{ __html: facebookScript }} />
          <script dangerouslySetInnerHTML={{ __html: brevoScript }} />
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
  }
}

export default MyDocument;
