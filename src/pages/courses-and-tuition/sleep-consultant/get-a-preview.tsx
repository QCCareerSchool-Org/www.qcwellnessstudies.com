import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/seo';
import { WhyChoose } from '../../../components/why-chose';
import { LandingPageLayout } from '../../../layouts/landing-page';

const Page: NextPage = () => (
  <LandingPageLayout>

    <SEO
      title="Get a Sleep Consultant Course Preview"
      description="If you're interested in becoming a professional sleep consultant, get a preview of QC's sleep consultant certifiation course here!"
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
                <form method="POST" action="https://qccareerschool.activehosted.com/proc.php">
                  <input type="hidden" name="u" value="1" />
                  <input type="hidden" name="f" value="50" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
                  <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input className="form-control" type="text" id="first-name" name="firstname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input className="form-control" type="text" id="last-name" name="lastname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email-address">Email <span className="text-primary">*</span></label>
                    <input className="form-control" type="text" id="email-address" name="email" required />
                  </div>
                  <input type="hidden" name="field[3][]" value="~|" />
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="opt-in" name="field[3][]" value="I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!" />
                    <label className="form-check-label small" htmlFor="opt-in">I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!</label>
                  </div>
                  <button className="btn btn-primary" type="submit">GET THE COURSE PREVIEW</button>
                </form>
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
            <p className="h3 text-dark">In this course preview, you’ll learn</p>
            <ul>
              <li>Why infant sleep consulting is a rewarding and lucrative career choice</li>
              <li>How QC's online learning system works, and why it's perfect for you</li>
              <li>How you can get certified as a sleep consultant without ever leaving home</li>
              <li>Your career opportunities, including how you can launch your own sleep consulting business</li>
              <li>A full outline of the online sleep consulting course, including sample assignments</li>
              <li>A full breakdown of the course’s tuition and available payment plans</li>
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

  </LandingPageLayout>
);

export default Page;
