import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

type SchemaType = 'WebPage' | 'AboutPage' | 'CheckoutPage' | 'CollectionPage' | 'ContactPage' | 'FAQPage' | 'ItemPage' | 'MedicalWebPage' | 'ProfilePage' | 'QAPage' | 'RealEstateListing' | 'SearchResultsPage';

interface Props {
  title: string;
  description: string;
  canonical: string;
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

export const SEO: React.FC<Props> = ({ title, description, canonical, schemaType, noIndex }) => {
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
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@qccareerschool" />
      <meta name="twitter:title" content={title.substr(0, 70)} />
      <meta name="twitter:description" content={description.substr(0, 200)} />
      <meta name="twitter:image" content="/twitter.png" />
      <link rel="canonical" href={baseUrl + canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string.isRequired,
  schemaType: PropTypes.oneOf([ 'WebPage', 'AboutPage', 'CheckoutPage', 'CollectionPage', 'ContactPage', 'FAQPage', 'ItemPage', 'MedicalWebPage', 'ProfilePage', 'QAPage', 'RealEstateListing', 'SearchResultsPage' ]),
  noIndex: PropTypes.bool,
};
