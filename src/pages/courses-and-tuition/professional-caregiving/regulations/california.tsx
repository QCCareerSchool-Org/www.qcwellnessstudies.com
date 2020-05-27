import React from 'react';

import { SEO } from '../../../../components/seo';
import { DefaultLayout } from '../../../../layouts/default';

const Page: React.FC = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Professional Caregiver Regulations - By State - California"
        description="Different states have different regulations for professional caregivers. Before you begin your training, make sure you understand the regulations in California!"
        canonical="/courses-and-tuition/professional-caregiver/regulations/california"
      />

      <section id="heroSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7">
              <h1>California</h1>
              <h2 className="h5">In California, professional caregivers are referred to as “Home Care Aides” (HCAs).</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
              <p className="text-center"><img src={require('../../../../images/fc-regulations-icon-state-regulations.svg')} alt="State Icon" width="60" height="60" /></p>
              <h2 className="h5 text-center">Regulations by State</h2>
              <p>HCAs in California are regulated by the state.</p>
              <ul>
                <li>You must have five hours of training in your field to become an HCA</li>
                <li>HCAs must be registered with the Department of Social Services Home Care Registry</li>
                <li>HCAs must also take on an additional five hours per year to maintain their registration</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p className="text-center"><img src={require('../../../../images/fc-regulations-icon-take-this-course.svg')} alt="Take This Course Icon" width="60" height="60" /></p>
              <h2 className="h5 text-center">Take this course:</h2>
              <ul>
                <li>If you would like to begin your career as a Caregiver</li>
                <li>To receive higher pay in your current caregiving career</li>
                <li>To complete additional training</li>
              </ul>
              <p className="text-center"><a className="btn btn-secondary" href="https://enroll.qcwellnessstudies.com/?c[]=fc">ENROLL NOW</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark">
        <div className="container">
          <div className="col-12 col-lg-10 offset-lg-1 mb-6 mb-md-0">
            <h2>Funding</h2>
            <p>Multiple Medicaid programs are available to residents of California. However, these programs are usually limited to those people who require a nursing-home level of care. Generally speaking, your clients will not be reimbursed by Medicaid for your services.</p>
            <p>If your client has served in the US Military and sustained a serious injury in the line of duty on or after September 11th, 2001, a Caregiver may be partially or fully reimbursed by <a className="text-info" href="https://www.benefits.gov/benefit/5918">Veteran’s’ Affairs.</a> Serious injuries include traumatic brain injury, psychological trauma, and other mental disorders.</p>
            <p className="font-italic">Please note that while these regulations are accurate at time of publication, laws can change quickly. It’s always a good idea to check on government websites or contact public health representatives to get the most up-to-date information.</p>
            <p>Sources:</p>
            <p><a className="text-info" href="https://www.ccld.dss.ca.gov/hcsregistry/About.aspx">https://www.ccld.dss.ca.gov/hcsregistry/About.aspx</a></p>
            <p><a className="text-info" href="https://www.benefits.gov/benefit/5918">https://www.benefits.gov/benefit/5918</a></p>
          </div>
        </div>
      </section>

      <section id="enrollSection" className="text-light text-center">
        <div className="container">
          <h2>Enroll Today</h2>
          <p className="lead mb-5">Start your caregiving training today<br />and launch an exciting, rewarding career!</p>
          <p><a href="https://enroll.qcwellnessstudies.com/?c[]=fc" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
        </div>
      </section>

      <style jsx>{`
        #heroSection{color:white;background-color:#449;background-image:url(${require('../../../..//images/fc-regulations-top-image-states.jpg')});background-size:cover;background-position:center;}      
        #enrollSection{background-image:url(${require('../../../../images/bg-enrollment.jpg')});background-size:cover}
        section:first-of-type {
          padding-top: 105px;
        }
        @media (min-width: 992px)
          section:first-of-type {
            padding-top: 101px;
          }
        }
      `}</style>

    </DefaultLayout>
  );
};

export default Page;
