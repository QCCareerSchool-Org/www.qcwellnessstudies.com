import Head from 'next/head';
import type { FC } from 'react';

type TwitterCardType = 'card' | 'summary_large_image';
type SchemaType = 'WebPage' | 'AboutPage' | 'CheckoutPage' | 'CollectionPage' | 'ContactPage' | 'FAQPage' | 'ItemPage' | 'MedicalWebPage' | 'ProfilePage' | 'QAPage' | 'RealEstateListing' | 'SearchResultsPage';

interface Props {
  title: string;
  description: string;
  canonical: string;
  image?: {
    src: string;
    alt: string;
  };
  twitterCardType?: TwitterCardType;
  twitterCreator?: string;
  schemaType?: SchemaType;
  noIndex?: boolean;
}

interface Schema {
  '@content': string;
  '@type': SchemaType;
  'name': string;
  'url': string;
  'description': string;
}

export const SEO: FC<Props> = props => {
  const htmlTitle = props.title === 'QC Wellness Studies' ? props.title : `${props.title} - QC Wellness Studies`;
  const baseUrl = 'https://www.qcwellnessstudies.com';
  const schema: Schema = {
    '@content': 'http://schema.org',
    '@type': props.schemaType ?? 'WebPage',
    'name': htmlTitle,
    'url': baseUrl + props.canonical,
    'description': props.description,
  };

  return (
    <Head>
      <title>{htmlTitle}</title>
      {props.noIndex && <meta name="robots" content="noindex" />}
      <meta name="description" content={props.description} />
      <meta name="twitter:card" content={props.twitterCardType ?? 'summary'} />
      <meta name="twitter:site" content="@qccareerschool" />
      {props.twitterCreator && <meta name="twitter:creator" content={props.twitterCreator} />}
      <meta property="og:url" content={baseUrl + props.canonical} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={baseUrl + (props.image?.src ?? '/placeholder.jpg')} />
      <meta property="og:image:alt" content={props.image?.alt ?? 'the QC Wellness Studies logo'} />
      <link rel="canonical" href={baseUrl + props.canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  );
};
