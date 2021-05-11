import Link from 'next/link';
import React from 'react';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default';

const Page: React.FC = () => (
  <DefaultLayout>

    <SEO
      title="Online Caregiver Courses"
      description="QC has 2 courses to meet your needs: Professional Caregiver and Personal Caregiver. Whether you want to become a professional caregiver, or a personal caregiver, you'll find your dream career with QC's training!"
      canonical="/caregiver"
    />

    <section id="heroSection">
      <div className="container">
        <h1 className="text-dark text-center">Online Caregiver Courses</h1>
        <h2 className="text-dark text-center h3 mb-5">QC has 2 courses to meet your needs</h2>
        <hr />
        <div className="row d-flex align-items-center">
          <div className="col-12 mb-4 col-sm-10 col-md-8 offset-sm-1 offset-md-2 offset-lg-0 col-lg-6 mb-lg-0 text-center">
            <p className="lead">PROFESSIONAL CAREGIVER</p>
            <p>Join one of the world&apos;s fastest growing industries! Work for established caregiving agencies or freelance as an independent caregiver.</p>
            <p>This course includes a professional certification!</p>
            <Link href="/courses-and-tuition/professional-caregiving"><a className="btn btn-secondary mb-4">LEARN MORE</a></Link>
          </div>
          <div className="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2 offset-lg-0 col-lg-6 text-center">
            <p className="lead">PERSONAL CAREGIVER</p>
            <p>Gain the skills you need to safely care for your loved ones at home.</p>
            <p>This course includes a certificate of completion but not a professional certification.</p>
            <Link href="/courses-and-tuition/personal-caregiving"><a className="btn btn-secondary mb-4">LEARN MORE</a></Link>
          </div>
        </div>
        <hr />
      </div>
    </section>

  </DefaultLayout>
);

export default Page;
