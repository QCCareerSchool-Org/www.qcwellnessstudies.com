import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/seo';
import { WhyChoose } from '../../../components/why-chose';
import { LandingPageLayout } from '../../../layouts/landing-page';

const Page: NextPage = () => (
  <LandingPageLayout>

    <SEO
      title="Get a Personal Care Aide Course Preview"
      description="If you're interested in becoming a personal care aide, get a preview of QC's PCA certifiation course here!"
      canonical="/courses-and-tuition/personal-care-aide/get-a-preview"
    />

    <section id="formSection">
      <div className="container text-light">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 text-center">
            <img src={require('../../../images/icon-fcgp.png')} className="d-none d-sm-inline mb-3 mb-md-4" alt="ISCP logo" />
            <h1 className="text-light mb-5">Online Caregiver Course</h1>
            <h2>Get Certified From Home</h2>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0">
            <a className="anchor" id="form"></a>
            <div className="card text-dark mb-3 p-sm-3">
              <div className="card-body">
                <h2 className="h5 sans-serif">Get a <strong className="text-dark">free course preview</strong> and find out how you can start your career!</h2>
                <hr className="border-secondary" />
                <form method="POST" action="https://qccareerschool.activehosted.com/proc.php">
                  <input type="hidden" name="u" value="1" />
                  <input type="hidden" name="f" value="69" />
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

    <section id="requireSection" className="bg-light">
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
        flexible="No start dates, no deadlines, no mandatory webinars! This course is completely self-directed and self-paced. Get certified quickly, or take your time."
        comprehensive="This course will prepare you to work in a number of different environments and with a wide range of clients. Get a better idea of the types of PCA services you want to offer by experiencing them all during your online training!"
        courses={[ 'pc' ]}
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
      #formSection{background-image:url(${require('../../../images/pc-get-a-preview-hero.jpg')});background-size:cover;background-position:20% 0%}
      #requireSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
      #enrollSection{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}
    `}</style>

  </LandingPageLayout>
);

export default Page;
