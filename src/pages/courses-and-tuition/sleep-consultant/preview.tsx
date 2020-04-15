import { NextPage } from 'next';
import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="Sleep Consultant Course Preview"
      description="Preview the online sleep consultant course offered by QC. Read a detailed course overview, sample some assignments, meet your tutors, and more!"
      canonical="/courses-and-tuition/personal-care-aide/preview"
      noIndex={true}
    />

  </DefaultLayout>
);

export default Page;
