import type { GetServerSideProps } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import HeroBackgroundImage from './hero-bg.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { BrevoForm } from '@/components/BrevoForm';
import DownloadIcon from '@/components/download.svg';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { Header } from '@/components/Header';
import { IncludedSection } from '@/components/IncludedSection';
import { SEO } from '@/components/SEO';
import { TestimonialSection } from '@/components/Testimonial';
import { WhyChoose } from '@/components/WhyChose';
import RequireBackgroundImage from '@/images/bg-white-green-light.jpg';
import CertificationImage from '@/images/certification-pscp.png';
import IconComprehensive from '@/images/icon-comprehensive.svg';
import IconFlexible from '@/images/icon-flexible.svg';
import IconTutor from '@/images/icon-tutor.svg';
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
  const handleButtonClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <>
    <SEO
      title="Pediatric Sleep Consultant Course Preview"
      description="If you're interested in becoming a professional sleep consultant, get a preview of QC's sleep consultant certification course here!"
      canonical="/courses-and-tuition/sleep-consultant/get-a-preview"
    />

    <section id="formSection">
      <Header
        nav={false}
        buttonOnClick={handleButtonClick}
        buttonContent={<><span className="text-light" style={{ marginRight: '10px' }}><Image src={DownloadIcon as StaticImageData} alt="" /></span>Get the Course Preview</>}
      />
      <BackgroundImage src={HeroBackgroundImage} />
      <div className="container text-light">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 text-center order-lg-1">
            <Image src={CertificationImage} className="d-none d-md-inline mb-3 mb-md-4" alt="ISCP logo" />
            <h1 className="h2 text-light mb-5">Become a Certified Professional Infant Sleep Consultant Online</h1>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 order-lg-0">
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
              <li>Why <b>pediatric</b> sleep consulting is a rewarding and <b>lucrative career choice</b></li>
              <li>How QC's online learning system works, and why it's <b>perfect for you</b></li>
              <li>How you can get certified as a sleep consultant <b>without ever leaving home</b></li>
              <li>What your career opportunities are, and how you can launch your <b>own sleep consulting business</b></li>
              <li>What's included in the course, including <b>sample assignments</b></li>
              <li>A full breakdown of the course's tuition and available <b>payment plans</b></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="whySection">
      <WhyChoose
        subheader="Get certified faster with a fully online sleep consultant course!"
        sections = {[
          {
            title: 'Comprehensive',
            text: 'You won\'t learn just one proprietary method of sleep coaching. QC provides advanced training in every sleep consulting method, so you\'ll be well prepared to pick and choose the right method for your clients\' needs.',
            icon: IconComprehensive as StaticImageData,
          },
          {
            title: 'Expert Led',
            text: 'Learn from professional sleep consultants. QC\'s tutors have helped hundreds of families with their sleep needs. You\'ll benefit from your tutor\'s detailed feedback on every one of your assignments. ',
            icon: IconTutor as StaticImageData,
          },
          {
            title: 'Flexible',
            text: 'You don\'t have to worry about stressful due dates or tests. You can get started whenever you want and work through the course at a pace that works for you. Get certified quickly, or take your time.',
            icon: IconFlexible as StaticImageData,
          },
        ]}
        courses={courses}
        hideButton
      />
    </section>

    <IncludedSection certification="Professional Infant Sleep Consultant" className="bg-light" />

    <TestimonialSection id="TD_0001" />

    <GuaranteeSection />

    <section className="text-center">
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
