import { NextPage } from 'next';
import React from 'react';

import { SEO } from '../../../components/seo';
import { Subnav } from '../../../components/subnav';
import { DefaultLayout } from '../../../layouts/default';

const Page: NextPage = () => (
  <DefaultLayout SecondaryNav={(): React.ReactElement => (
    <Subnav
      heading="Personal Care Aide Course Preview"
      items={[
        { name: 'Curriculum', url: '#curriculum' },
        { name: 'Tuition', url: '#tuition' },
        { name: 'Support', url: '#support' },
        { name: 'Guarantee', url: '#guarantee' },
      ]}
    />
  )}>

    <SEO
      title="Personal Care Aide Course Preview"
      description="Preview the online personal care aide course offered by QC. Read a detailed course overview, sample some assignments, meet your tutors, and more!"
      canonical="/courses-and-tuition/personal-care-aide/preview"
    />

  </DefaultLayout>
);

export default Page;
