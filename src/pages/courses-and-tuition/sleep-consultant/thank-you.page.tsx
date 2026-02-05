import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdBook, IoMdEye, IoMdLaptop, IoMdSchool } from 'react-icons/io';

import ThankYouImage from './thank-you.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { LeadProcessing } from '@/components/LeadProcessing';
import { SEO } from '@/components/SEO';
import { SetCookie } from '@/components/setCookie';
import type { Lead } from '@/domain/lead';
import HeroBackgroundImage from '@/images/bg-white-green-light.jpg';
import { getLeadProps } from '@/lib/getLeadProps';

interface Props {
  emailAddress?: string;
  lead?: Lead;
  jwt: string | null;
  recent: boolean;
}

const Page: NextPage<Props> = ({ emailAddress, lead, jwt, recent }) => {
  return (
    <>
      <SEO
        title="Thank You For Your Interest"
        description="More information about the Pediatric Sleep Consultant course"
        canonical="/courses-and-tuition/sleep-consultant/thank-you"
        noIndex={true}
      />

      {jwt && <SetCookie name="user" value={jwt} domain="qcwellnessstudies.com" />}
      {lead && recent && (
        <LeadProcessing
          emailAddress={lead.emailAddress}
          telephoneNumber={lead.telephoneNumber}
          city={lead.city}
          countryCode={lead.countryCode}
          provinceCode={lead.provinceCode}
          firstName={lead.firstName}
          lastName={lead.lastName}
          leadId={lead.leadId}
          conversionId="AW-1071836607/Srl-CMns3JgBEL_bi_8D"
        />
      )}
      <section>
        <BackgroundImage src={HeroBackgroundImage} />
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-7 offset-lg-0">
              <h1 className="text-dark">Your Course Preview</h1>
              {emailAddress && <p className="lead text-secondary">Your email was sent to <strong>{emailAddress}</strong>. If you don't see it in your inbox in a few minutes, please check your spam or junk mail folder.</p>}
              <p><strong>Thank you for your interest in QC Wellness School&apos;s Pediatric Sleep Consultant Course!</strong> The course preview will help answer your questions about becoming a professional sleep consultant from the comfort of your own home, including:</p>
              <ul>
                <li>What will I learn in this course?</li>
                <li>What is the tuition for the course and what do those fees cover?</li>
                <li>How will I get hands-on training if I&apos;m doing an online course?</li>
                <li>How does this online course prepare me for a real-world career in sleep consulting?</li>
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
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5 mb-lg-0">
              <IoMdBook size={30} />
              <h3 className="text-dark text-center">Course Overview</h3>
              <p className="text-dark text-center">Learn more about the sleep consultant course. View tuition options, and read a detailed course outline.</p>
              <p><Link href="/courses-and-tuition/sleep-consultant" className="btn btn-dark btn-md text-uppercase mt-auto">Learn More</Link></p>
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

      <EnrollmentSection courseCodes={[ 'sl' ]}>
        Start your online sleep consultant training today<br />and launch an exciting, rewarding career!
      </EnrollmentSection>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const props = await getLeadProps(context);
  return { props };
};

export default Page;
