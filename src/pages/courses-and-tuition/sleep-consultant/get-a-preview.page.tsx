import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { BrochureForm, HiddenField } from '../../../components/BrochureForm';
import { SEO } from '../../../components/SEO';
import { WhyChoose } from '../../../components/WhyChose';
import { LandingPageLayout } from '../../../layouts/LandingPageLayout';
import { getRandomIntInclusive } from '../../../lib/randomInt';
import { NextPageWithLayout } from '../../_app.page';

type Props = {
  firstName: string | null;
  lastName: string | null;
  emailAddress: string | null;
  emailOptIn: boolean | null;
  telephoneNumber: string | null;
  smsOptIn: boolean | null;
  errors: boolean;
  testGroup: number;
  gclid: string | null;
  msclkid: string | null;
  marketing: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
    term: string | null;
  };
};

const formAction = 'https://go.qcwellnessstudies.com/l/947642/2021-12-05/6h9rz';

const courses = [ 'sl' ];

const Page: NextPageWithLayout<Props> = ({ firstName, lastName, emailAddress, emailOptIn, telephoneNumber, smsOptIn, errors, testGroup, gclid, msclkid, marketing }) => {
  const hiddenFields = useMemo(() => {
    const h: HiddenField[] = [ { key: 'testGroup', value: testGroup } ];
    if (gclid) {
      h.push({ key: 'gclid', value: gclid });
    }
    if (msclkid) {
      h.push({ key: 'msclkid', value: msclkid });
    }
    return h;
  }, [ testGroup, gclid, msclkid ]);

  return (
    <>
      <SEO
        title="Pediatric Sleep Consultant Course Preview"
        description="If you're interested in becoming a professional sleep consultant, get a preview of QC's sleep consultant certification course here!"
        canonical="/courses-and-tuition/sleep-consultant/get-a-preview"
      />

      <section id="formSection">
        <div className="container text-light">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 text-center">
              <img src={require('../../../images/certification-iscp.png')} className="d-none d-sm-inline mb-3 mb-md-4" alt="ISCP logo" />
              <h1 className="text-light mb-5">Become a Professional<br />Infant Sleep Consultant<span className="d-none d-md-inline"> Online</span></h1>
            </div>
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0">
              <a className="anchor" id="form"></a>
              <div className="card text-dark mb-3 p-sm-3">
                <div className="card-body">
                  <h2 className="h5 sans-serif">Get a <strong className="text-dark">free course preview</strong> and find out how you can get certified!</h2>
                  <hr className="border-secondary" />
                  <BrochureForm
                    action={formAction}
                    buttonText="GET THE COURSE PREVIEW"
                    hiddenFields={hiddenFields}
                    marketing={marketing}
                    courses={courses}
                    initialValues={{ firstName, lastName, emailAddress, emailOptIn, telephoneNumber, smsOptIn }}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="requireSection" className="bg-lightk">
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

      <section id="enrollSection" className="text-center text-light">
        <div className="container">
          <h2>Get Started Today!</h2>
          <p className="text-center text-uppercase"><Link href="#form"><a className="btn btn-secondary btn-lg mb-4">Request a Course Preview</a></Link></p>
        </div>
      </section>

      <style jsx>{`
        #formSection{background-image:url(${require('../../../images/sl-get-a-preview-hero.jpg')});background-size:cover;background-position:center}
        #requireSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
        #enrollSection{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}
      `}</style>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const firstName = typeof context.query.firstName === 'string' ? context.query.firstName : null;
  const lastName = typeof context.query.lastName === 'string' ? context.query.lastName : null;
  const emailAddress = typeof context.query.emailAddress === 'string' ? context.query.emailAddress : null;
  const emailOptIn = typeof context.query.emailOptIn === 'string' ? context.query.emailOptIn === 'yes' : null;
  const telephoneNumber = typeof context.query.telephoneNumber === 'string' ? context.query.telephoneNumber : null;
  const smsOptIn = typeof context.query.smsOptIn === 'string' ? context.query.smsOptIn === 'yes' : null;

  const errors = typeof context.query.errors === 'string' && context.query.errors === 'true';

  let testGroup: number | undefined;
  const storedTestGroup = context.req.cookies.testGroup;
  if (typeof storedTestGroup !== 'undefined') {
    const parsed = parseInt(storedTestGroup, 10);
    if (!isNaN(parsed)) {
      testGroup = parsed;
    }
  }
  if (typeof testGroup === 'undefined') {
    testGroup = getRandomIntInclusive(1, 12);
    const maxAge = 60 * 60 * 24 * 365;
    context.res.setHeader('Set-Cookie', `testGroup=${testGroup}; Max-Age=${maxAge}; Path=/; Secure; SameSite=Strict`);
  }

  const gclid = typeof context.query.gclid === 'string' ? context.query.gclid : null;
  const msclkid = typeof context.query.msclkid === 'string' ? context.query.msclkid : null;

  const marketing = {
    source: typeof context.query.utm_source === 'string' ? context.query.utm_source : null,
    medium: typeof context.query.utm_medium === 'string' ? context.query.utm_medium : null,
    campaign: typeof context.query.utm_campaign === 'string' ? context.query.utm_campaign : null,
    content: typeof context.query.utm_content === 'string' ? context.query.utm_content : null,
    term: typeof context.query.utm_term === 'string' ? context.query.utm_term : null,
  };

  return { props: { firstName, lastName, emailAddress, emailOptIn, telephoneNumber, smsOptIn, errors, testGroup, gclid, msclkid, marketing } };
};

Page.getLayout = function Layout(page) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Page;
