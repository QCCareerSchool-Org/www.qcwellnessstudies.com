import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: NextPage = () => (

  <DefaultLayout>

    <SEO
      title="7 Tips for Virtual Sleep Consulting"
      description="Parents with young children don't have a lot of spare time, especially if those children are struggling to sleep through the night. Virtual consultations with a trained sleep professional offer the perfect solution to help busy parents get the help they need."
      canonical="/student-resources/tipsheets/7-tips-for-virtual-sleep-consulting"
      image={{
        src: require('../../../images/sr-mother-sitting-baby-on-laps.jpg'),
        alt: 'mother sitting baby on lap',
      }}
    />

    <section id="heroSection">
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
            <p className="lead">Parents with young children don&apos;t have a lot of spare time, especially if those children are struggling to sleep through the night. Virtual consultations with a <Link href="/courses-and-tuition/sleep-consultant"><a>trained sleep professional</a></Link> offer the perfect solution to help busy parents get the help they need.</p>

            <h4>1. Test your technology.</h4>
            <p>You&apos;ll need a few pieces of technology to participate in a virtual consultation, these could include:</p>
            <ul>
              <li>A device such as a laptop, tablet or smartphone</li>
              <li>A functioning camera and microphone</li>
              <li>A strong internet connection</li>
              <li>A video call platform, such as Zoom, Google Meet or a similar software</li>
            </ul>
            <p><img className="img-fluid" src={require('../../../images/sr-happy-business-woman.jpg')} alt="happy business woman" /></p>

            <h4>2. Take the onboarding questionnaire seriously.</h4>
            <p>An onboarding questionnaire is a great way to communicate important background information regarding the sleep situation and problem areas before the consultation begins. The consultant can then tailor the appointment to meet the clients&apos; specific needs. The onboarding questionnaire might cover details including the age of the infant, number of naps currently taken, bedtime routine, etc.</p>

            <h4>3. Preparation is key.</h4>
            <p>Make the most of the virtual consultation by preparing in advance. Think about any questions you want to ask during the consultation. Focus on areas that might require detailed information such as the sleep training method, bedtime routine and nap schedules. Make notes to ensure you don&apos;t forget anything during the consultation.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-multitasking-businessman-working-office.jpg')} alt="multitasking businessman working in his office" /></p>

            <h4>4. Be honest.</h4>
            <p>Don&apos;t be afraid to honestly and thoroughly discuss sleep challenges. Parents are sometimes sensitive about seeking help to manage their child&apos;s sleep habits. Open and honest communication is an essential part of a successful consultation.</p>

            <h4>5. Communicate important information in writing.</h4>
            <p>The virtual consultation can be overwhelming. You&apos;ll likely discuss a range of topics and exchange a lot of information. Summarize important details in an email after the consultation to make sure no details are lost or forgotten. A follow-up email is also a chance to inquire about scheduling a second consultation.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-multitasking-businesswoman-working-office.jpg')} alt="multitasking businesswoman working in her office" /></p>

            <h4>6. Take advantage of extra resources.</h4>
            <p>Sleep consultants might go above and beyond to create or recommend additional resources to help families navigate sleep training at home. Sleep training can be challenging and overwhelming for parents. These resources will provide guidance and support for families outside of the consultation itself.</p>

            <h4>7. Follow-up after the consultation.</h4>
            <p>Follow-up consultations are a great way to discuss the progress of an infant&apos;s sleep plan. Discuss any challenges with the sleep plan and update plan accordingly. You might also benefit from follow-up consultations down the road as the baby grows and the sleep plan needs to be adjusted to suit different age groups.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-mother-sitting-baby-on-laps.jpg')} alt="mother sitting baby on lap" /></p>
          </div>
        </div>
      </div>
    </section>

    <section id="enrollToday" className="text-light">
      <div className="container text-center">
        <h2>Get Started Today!</h2>
        <p className="lead">Why wait? Start your professional training program today and get on the path toward a new and exciting career</p>
        <p><a className="btn btn-secondary btn-lg text-uppercase" href="https://enroll.qcwellnessstudies.com/">Enroll Online</a></p>
      </div>
    </section>

    <section className="bg-light text-dark">
      <div className="container text-center">
        <Link href="/student-resources"><a className="btn btn-primary btn-lg text-uppercase">Back to Student Resources</a></Link>
      </div>
    </section>

    <style jsx>{`
      #enrollToday{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}     
      #heroSection{background-image:url(${require('../../../images/sr-hero-7-tips-for-virtual-sleep-consulting.jpg')});background-size:cover;background-position:center}
      .course-icon{width:80px}

      /* sm */
      @media (min-width: 576px) {
        .course-icon {
          width: 85px;
        }
      }

      /* md */
      @media (min-width: 768px) {
      }

      /* lg */
      @media (min-width: 992px) {
        .course-icon {
          width: 90px;
        }
      }

      /* xl */
      @media (min-width: 1200px) {
      }
    `}</style>

  </DefaultLayout>
);

export default Page;
