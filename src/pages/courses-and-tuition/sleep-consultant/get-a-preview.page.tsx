import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import type { ReactNode } from 'react';
import HeroBackgroundImage from './preview-hero-bg.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { BrevoForm } from '@/components/BrevoForm';
import { SEO } from '@/components/SEO';
import { WhyChoose } from '@/components/WhyChose';
import RequireBackgroundImage from '@/images/bg-white-green-light.jpg';
import ISCPCertificationImage from '@/images/certification-iscp.png';
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
  referrer: string | null;
}

const brevoListId = 24;
const brevoEmailTemplateId = 59;
const courses = [ 'sl' ];

const Page: NextPageWithLayout<Props> = props => {
  return <>
    <SEO
      title="Pediatric Sleep Consultant Course Preview"
      description="If you're interested in becoming a professional sleep consultant, get a preview of QC's sleep consultant certification course here!"
      canonical="/courses-and-tuition/sleep-consultant/get-a-preview"
    />

    <section id="formSection">
      <BackgroundImage src={HeroBackgroundImage} />
      <div className="container text-light">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 text-center">
            <Image src={ISCPCertificationImage} className="d-none d-sm-inline mb-3 mb-md-4" alt="ISCP logo" />
            <h1 className="text-light mb-5">Become a Professional<br />Infant Sleep Consultant<span className="d-none d-md-inline"> Online</span></h1>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0">
            <a className="anchor" id="form"></a>
            <div className="card text-dark mb-3 p-sm-3">
              <div className="card-body">
                <h2 className="h5 sans-serif">Get a <strong className="text-dark">free course preview</strong> and find out how you can get certified!</h2>
                <hr className="border-secondary" />
                <BrevoForm
                  successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qcwellnessstudies.com'}/courses-and-tuition/sleep-consultant/thank-you`}
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
                  referrer={props.referrer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="requireSection" className="bg-light">
      <BackgroundImage src={RequireBackgroundImage} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <p className="h3 text-dark">In this course preview, you&apos;ll learn</p>
            <ul>
              <li>Why infant sleep consulting is a rewarding and lucrative career choice</li>
              <li>How QC&apos;s online learning system works, and why it&apos;s perfect for you</li>
              <li>How you can get certified as a sleep consultant without ever leaving home</li>
              <li>Your career opportunities, including how you can launch your own sleep consulting business</li>
              <li>A full outline of the online sleep consulting course, including sample assignments</li>
              <li>A full breakdown of the course&apos;s tuition and available payment plans</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="whySection">
      <WhyChoose
        subheader="Get certified faster with a fully online sleep consultant course!"
        affordable="Since QC's course is fully online, you don't have to pay surcharges for attending lectures or webinars. You complete the full course from home."
        flexible="No start dates, no deadlines, no mandatory webinars! This course is completely self-directed and self-paced. Get certified quickly, or take your time."
        comprehensive="You won't just learn one proprietary method of sleep coaching. You'll learn every method of sleep consulting, so that you can offer the best service!"
        courses={[ 'sl' ]}
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

  const props: Props = { referrer: context.req.headers.referer ?? null };
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
