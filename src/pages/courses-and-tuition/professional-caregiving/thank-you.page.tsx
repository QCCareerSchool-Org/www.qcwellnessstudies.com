import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { IoMdBook, IoMdEye, IoMdLaptop, IoMdSchool } from 'react-icons/io';

import ThankYouImage from './thank-you.jpg';
import { SEO } from '@/components/SEO';
import { useOnce } from '@/hooks/useOnce';
import BGEnrollmentImage from '@/images/bg-enrollment.jpg';
import BGWhiteGreenLightImage from '@/images/bg-white-green-light.jpg';
import { brevoIdentifyLead } from '@/lib/brevo';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { fbqLead } from '@/lib/fbq';
import { gaEvent } from '@/lib/ga';

interface Props {
  leadId?: string;
  emailAddress?: string;
  countryCode?: string;
  provinceCode?: string;
  firstName?: string;
  lastName?: string;
}

const Page: NextPage<Props> = ({ leadId, emailAddress, countryCode, provinceCode, firstName, lastName }) => {
  useEffect(() => {
    if (emailAddress) {
      window.gtag('set', 'user-data', { email: emailAddress });
    }
  }, [ emailAddress ]);

  useOnce(() => {
    fbqLead(leadId);
    gaEvent('conversion', { send_to: 'AW-1071836607/Srl-CMns3JgBEL_bi_8D' }); // eslint-disable-line camelcase
  });

  useEffect(() => {
    if (emailAddress) {
      brevoIdentifyLead(emailAddress, countryCode, provinceCode, firstName ?? undefined, lastName ?? undefined);
    }
  }, [ emailAddress, countryCode, provinceCode, firstName, lastName ]);

  return <>
    <SEO
      title="Thank You For Your Interest"
      description="More information about the Caregiver course"
      canonical="/courses-and-tuition/professional-caregiving/thank-you"
      noIndex={true}
    />

    <section id="heroSection">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-7 offset-lg-0">
            <h1 className="text-dark">Your Course Preview</h1>
            {emailAddress && <p className="lead text-secondary">Your email was sent to <strong>{emailAddress}</strong>. If you don't see it in your inbox in a few minutes, please check your spam or junk mail folder.</p>}
            <p><strong>Thank you for your interest in QC Wellness School&apos;s Caregiver Course!</strong> The course preview should help answer most questions you have about becoming a professional caregiver from the comfort of home including</p>
            <ul>
              <li>What am I going to learn in this course?</li>
              <li>What is the tuition for the course and what do those fees cover?</li>
              <li>How am I going to get hands-on training if I&apos;m doing an online course?</li>
              <li>Can online learning really prepare me for real-world scenarios?</li>
            </ul>
            <Link href="preview" className="btn btn-secondary btn-lg text-uppercase my-3"><div className="d-flex align-items-center"><IoMdEye className="mr-2" /> View the Course Preview</div></Link>
          </div>
          <div className="d-none d-lg-block col-12 col-lg-5 text-center">
            <p><Image src={ThankYouImage} className="img-fluid" alt="course preview" /></p>
          </div>
        </div>
      </div>
    </section>

    <section id="linksQCSection">
      <div className="container text-center">
        <div className="row mb-5">
          <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5 mb-lg-0">
            <IoMdBook size={30} />
            <h3 className="text-dark text-center">Course Overview</h3>
            <p className="text-dark text-center">Learn more about the caregiver course. View tuition options, and read a detailed course outline.</p>
            <p><Link href="/courses-and-tuition/professional-caregiving" className="btn btn-dark btn-md text-uppercase mt-auto">Learn More</Link></p>
          </div>
          <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5 mb-lg-0">
            <IoMdSchool size={30} />
            <h3 className="text-dark text-center">Courses &amp; Tuition</h3>
            <p className="text-dark text-center">Browse through ALL of QC&apos;s online courses, tuition and payment plans to choose the one that&apos;s right for you.</p>
            <p><Link href="/courses-and-tuition" className="btn btn-dark btn-md text-uppercase mt-auto">Learn More</Link></p>
          </div>
          <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0">
            <IoMdLaptop size={30} />
            <h3 className="text-dark text-center">How You&apos;ll Learn</h3>
            <p className="text-dark text-center">Find out how QC&apos;s online training will help you succeed.</p>
            <p><Link href="/how-it-works" className="btn btn-dark btn-md text-uppercase mt-auto">Learn More</Link></p>
          </div>
        </div>
      </div>
    </section>

    <section id="enrollSection" className="text-light text-center">
      <div className="container">
        <h2>Enroll today</h2>
        <p className="lead mb-5">Start your online caregiver training today<br />and launch an exciting, rewarding career!</p>
        <p><a href="https://enroll.qcwellnessstudies.com" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
      </div>
    </section>

    <style jsx>{`
      #heroSection{background-image:url(${BGWhiteGreenLightImage.src});background-size:cover}
      #enrollSection{background-image:url(${BGEnrollmentImage.src});background-size:cover}
    `}</style>
  </>;
};

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const getParam = (paramName: string): string | undefined => {
    if (Array.isArray(context.query[paramName])) {
      return context.query[paramName][0];
    }
    return context.query[paramName];
  };

  const leadId = getParam('leadId');
  const emailAddress = getParam('emailAddress');
  const countryCode = getParam('countryCode');
  const provinceCode = getParam('provinceCode');
  const firstName = getParam('firstName');
  const lastName = getParam('lastName');

  const getHeader = (headerName: string): string | null => {
    const rawHeader = context.req.headers[headerName];
    if (Array.isArray(rawHeader)) {
      return rawHeader[0] ?? null;
    }
    return rawHeader ?? null;
  };

  const ipAddress = getHeader('x-real-ip') ?? undefined;
  const userAgent = getHeader('user-agent') ?? undefined;

  const fbc = context.req.cookies._fbc;
  const fbp = context.req.cookies._fbp;

  if (leadId && emailAddress) {
    const eventSource = 'https://www.qcwellnessstudies.com/professional-caregiving/get-a-preview';
    await fbPostLead(leadId, new Date(), emailAddress, firstName, lastName, countryCode, eventSource, ipAddress, userAgent, fbc, fbp);
  }

  const props: Props = {};
  if (leadId) {
    props.leadId = leadId;
  }
  if (emailAddress) {
    props.emailAddress = emailAddress;
  }
  if (countryCode) {
    props.countryCode = countryCode;
  }
  if (provinceCode) {
    props.provinceCode = provinceCode;
  }
  if (firstName) {
    props.firstName = firstName;
  }
  if (lastName) {
    props.lastName = lastName;
  }

  return { props };
};

export default Page;
