import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

type TwitterCardType = 'card' | 'summary_large_image';
type SchemaType = 'WebPage' | 'AboutPage' | 'CheckoutPage' | 'CollectionPage' | 'ContactPage' | 'FAQPage' | 'ItemPage' | 'MedicalWebPage' | 'ProfilePage' | 'QAPage' | 'RealEstateListing' | 'SearchResultsPage';

interface Props {
  title: string;
  description: string;
  canonical: string;
  image?: {
    src: any; // eslint-disable-line @typescript-eslint/no-explicit-any
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

export const SEO: React.FC<Props> = ({ title, description, canonical, image, twitterCardType, twitterCreator, schemaType, noIndex }) => {
  const htmlTitle = title === 'QC Wellness Studies' ? title : `${title} - QC Wellness Studies`;
  const baseUrl = 'https://www.qcwellnessstudies.com';
  const schema: Schema = {
    '@content': 'http://schema.org',
    '@type': schemaType ? schemaType : 'WebPage',
    'name': htmlTitle,
    'url': baseUrl + canonical,
    description,
  };

  return (
    <Head>
      <title>{htmlTitle}</title>
      {noIndex && <meta name="robots" content="noindex" />}
      <meta name="description" content={description} />
      <meta name="twitter:card" content={twitterCardType ?? 'summary'} />
      <meta name="twitter:site" content="@qccareerschool" />
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      <meta property="og:url" content={baseUrl + canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image?.src ? image.src : '/placeholder.jpg'} />
      <meta property="og:image:alt" content={image?.alt ? image.alt : 'the QC Wellness Studies logo'} />
      <link rel="canonical" href={baseUrl + canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  twitterCardType: PropTypes.oneOf([ 'card', 'summary_large_image' ]),
  twitterCreator: PropTypes.string,
  schemaType: PropTypes.oneOf([ 'WebPage', 'AboutPage', 'CheckoutPage', 'CollectionPage', 'ContactPage', 'FAQPage', 'ItemPage', 'MedicalWebPage', 'ProfilePage', 'QAPage', 'RealEstateListing', 'SearchResultsPage' ]),
  noIndex: PropTypes.bool,
};
