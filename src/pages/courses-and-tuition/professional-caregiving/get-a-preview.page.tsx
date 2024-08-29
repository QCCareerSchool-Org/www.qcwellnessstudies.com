import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import HeroBackgroundImage from './preview-hero-bg.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { BrevoForm } from '@/components/BrevoForm';
import { SEO } from '@/components/SEO';
import { WhyChoose } from '@/components/WhyChose';
import WhiteGreenBackgroundImage from '@/images/bg-white-green-light.jpg';
import FCGPCertificationImage from '@/images/icon-fcgp.png';
import { LandingPageLayout } from '@/layouts/LandingPageLayout';
import type { NextPageWithLayout } from '@/pages/_app.page';

interface Props {
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

const brevoListId = 24;
const brevoEmailTemplateId = 59;
const courses = [ 'fc' ];

const Page: NextPageWithLayout<Props> = props => {
  return <>
    <SEO
      title="Get a Caregiver Course Preview"
      description="If you're interested in becoming a caregiver, get a preview of QC's Caregiver certifiation course here!"
      canonical="/courses-and-tuition/personal-care-aide/get-a-preview"
    />

    <section id="formSection">
      <BackgroundImage src={HeroBackgroundImage} objectPosition="20% 0%" priority />
      <div className="container text-light">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 text-center">
            <Image src={FCGPCertificationImage} className="d-none d-sm-inline mb-3 mb-md-4" alt="FCGP logo" />
            <h1 className="text-light mb-5">Online Caregiver Course</h1>
            <h2>Get Certified From Home</h2>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0">
            <a className="anchor" id="form"></a>
            <div className="card text-dark mb-3 p-sm-3">
              <div className="card-body">
                <h2 className="h5 sans-serif">Get a <strong className="text-dark">free course preview</strong> and find out how you can start your career!</h2>
                <hr className="border-secondary" />
                <BrevoForm
                  successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qcwellnessstudies.com'}/courses-and-tuition/professional-caregiving/thank-you`}
                  listId={brevoListId}
                  emailTemplateId={brevoEmailTemplateId}
                  gclid={props.gclid}
                  msclkid={props.msclkid}
                  utmSource={props.utmSource}
                  utmMedium={props.utmMedium}
                  utmCampaign={props.utmCampaign}
                  utmContent={props.utmContent}
                  utmTerm={props.utmTerm}
                  placeholders
                  courseCodes={courses}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="requireSection" className="bg-light">
      <BackgroundImage src={WhiteGreenBackgroundImage} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <p className="h3 text-dark">Join one of the fastest-growing industries in North America!</p>
            <ul>
              <li>Caregivers are in high demand. Caregiving jobs are everywhere!</li>
              <li>An Independent caregiver can earn a very good salary by direct billing clients.</li>
              <li>Most certified caregivers are eligible for billing certain Medicaid programs.</li>
              <li>Work in a field where you get to help people every single day.</li>
              <li>Get certified online without having to leave your home!</li>
            </ul>
            <p className="h3 text-dark">Get a free course preview to learn more!</p>
          </div>
        </div>
      </div>
    </section>

    <section id="whySection">
      <WhyChoose
        subheader="Get certified faster with a fully online caregiving course!"
        affordable="Since QC's course is fully online, you don't have to pay surcharges for attending lectures or webinars. You complete the full course from home."
        flexible="No start dates, no deadlines, no mandatory webinars! This course is completely self-directed and self-paced. Get certified quickly or take your time."
        comprehensive="The course prepares you to work in different environments with all types of people. Experience the full range of caregiving services to be better prepared for starting your career!"
        courses={[ 'fc' ]}
        hideButton={true}
      />
    </section>

    <section className="bg-light text-center">
      <div className="container">
        <h2>Get Started Today!</h2>
        <p className="text-center text-uppercase"><Link href="#form" className="btn btn-secondary btn-lg mb-4">Request a Course Preview</Link></p>
      </div>
    </section>
  </>;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const getParam = (paramName: string): string | undefined => {
    if (Array.isArray(context.query[paramName])) {
      return context.query[paramName][0];
    }
    return context.query[paramName];
  };

  const gclid = getParam('gclid');
  const msclkid = getParam('msclkid');
  const utmSource = getParam('utm_source');
  const utmMedium = getParam('utm_medium');
  const utmCampaign = getParam('utm_campaign');
  const utmContent = getParam('utm_content');
  const utmTerm = getParam('utm_term');

  const props: Props = {};
  if (gclid) {
    props.gclid = gclid;
  }
  if (msclkid) {
    props.msclkid = msclkid;
  }
  if (utmSource) {
    props.utmSource = utmSource;
  }
  if (utmMedium) {
    props.utmMedium = utmMedium;
  }
  if (utmCampaign) {
    props.utmCampaign = utmCampaign;
  }
  if (utmContent) {
    props.utmContent = utmContent;
  }
  if (utmTerm) {
    props.utmTerm = utmTerm;
  }

  return { props };
};

Page.getLayout = function Layout(page): ReactNode {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Page;
