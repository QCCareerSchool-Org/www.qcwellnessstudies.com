import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Back } from '../../Back';
import HappyBusinessWomanImage from './happy-business-woman.jpg';
import HeroBackgroundImage from './hero-bg.jpg';
import MotherBabyLapImage from './mother-sitting-baby-on-laps.jpg';
import MultitaskingBusinessmanImage from './multitasking-businessman-working-office.jpg';
import MultitaksingBusinessWomanImage from './multitasking-businesswoman-working-office.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { SEO } from '@/components/SEO';

const Page: NextPage = () => (
  <>
    <SEO
      title="7 Tips for Virtual Sleep Consulting"
      description="Parents with young children don't have a lot of spare time, especially if those children are struggling to sleep through the night. Virtual consultations with a trained sleep professional offer the perfect solution to help busy parents get the help they need."
      canonical="/student-resources/tipsheets/7-tips-for-virtual-sleep-consulting"
      image={{
        src: HeroBackgroundImage.src,
        alt: 'mother sitting baby on lap',
      }}
    />

    <section id="heroSection">
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container text-light text-center">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1>7 Tips for Virtual Sleep Consulting</h1>
            <p><a href="/tip-sheets/7-virtual-sleep-consulting.pdf" className="btn btn-primary" rel="noopener noreferrer" target="_blank"><strong>Download PDF</strong></a></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">Parents with young children don&apos;t have a lot of spare time, especially if those children are struggling to sleep through the night. Virtual consultations with a <Link href="/courses-and-tuition/sleep-consultant">trained sleep professional</Link> offer the perfect solution to help busy parents get the help they need.</p>
            <h4>1. Test your technology.</h4>
            <p>You&apos;ll need a few pieces of technology to participate in a virtual consultation, these could include:</p>
            <ul>
              <li>A device such as a laptop, tablet or smartphone</li>
              <li>A functioning camera and microphone</li>
              <li>A strong internet connection</li>
              <li>A video call platform, such as Zoom, Google Meet or a similar software</li>
            </ul>
            <p><Image className="img-fluid" src={HappyBusinessWomanImage} alt="happy business woman" /></p>

            <h4>2. Take the onboarding questionnaire seriously.</h4>
            <p>An onboarding questionnaire is a great way to communicate important background information regarding the sleep situation and problem areas before the consultation begins. The consultant can then tailor the appointment to meet the clients&apos; specific needs. The onboarding questionnaire might cover details including the age of the infant, number of naps currently taken, bedtime routine, etc.</p>

            <h4>3. Preparation is key.</h4>
            <p>Make the most of the virtual consultation by preparing in advance. Think about any questions you want to ask during the consultation. Focus on areas that might require detailed information such as the sleep training method, bedtime routine and nap schedules. Make notes to ensure you don&apos;t forget anything during the consultation.</p>
            <p><Image className="img-fluid" src={MultitaskingBusinessmanImage} alt="multitasking businessman working in his office" /></p>

            <h4>4. Be honest.</h4>
            <p>Don&apos;t be afraid to honestly and thoroughly discuss sleep challenges. Parents are sometimes sensitive about seeking help to manage their child&apos;s sleep habits. Open and honest communication is an essential part of a successful consultation.</p>

            <h4>5. Communicate important information in writing.</h4>
            <p>The virtual consultation can be overwhelming. You&apos;ll likely discuss a range of topics and exchange a lot of information. Summarize important details in an email after the consultation to make sure no details are lost or forgotten. A follow-up email is also a chance to inquire about scheduling a second consultation.</p>
            <p><Image className="img-fluid" src={MultitaksingBusinessWomanImage} alt="multitasking businesswoman working in her office" /></p>

            <h4>6. Take advantage of extra resources.</h4>
            <p>Sleep consultants might go above and beyond to create or recommend additional resources to help families navigate sleep training at home. Sleep training can be challenging and overwhelming for parents. These resources will provide guidance and support for families outside of the consultation itself.</p>

            <h4>7. Follow-up after the consultation.</h4>
            <p>Follow-up consultations are a great way to discuss the progress of an infant&apos;s sleep plan. Discuss any challenges with the sleep plan and update plan accordingly. You might also benefit from follow-up consultations down the road as the baby grows and the sleep plan needs to be adjusted to suit different age groups.</p>
            <p><Image className="img-fluid" src={MotherBabyLapImage} alt="mother sitting baby on lap" /></p>
          </div>
        </div>
      </div>
    </section>

    <EnrollmentSection heading="Get Started Today!">
      Why wait? Start your professional training program today and get on the path toward a new and exciting career
    </EnrollmentSection>

    <Back />
  </>
);

export default Page;
