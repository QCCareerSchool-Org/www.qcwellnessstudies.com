import { NextPage } from 'next';
import React from 'react';

import { SEO } from '../../../../components/SEO';
import { DefaultLayout } from '../../../../layouts/DefaultLayout';

const Page: NextPage = () => (
  <DefaultLayout>
    <SEO
      title="Professional Caregiver Regulations - By State - Texas"
      description="Different states have different regulations for professional caregivers. Before you begin your training, make sure you understand the regulations in Texas!"
      canonical="/courses-and-tuition/professional-caregiver/regulations/texas"
    />

    <section id="heroSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-7">
            <h1>Texas</h1>
            <h2 className="h5">In Texas, Personal Caregivers are called &ldquo;Personal Care Aides,&rdquo; or PCAs.</h2>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
            <p className="text-center"><img src={require('../../../../images/fc-regulations-icon-state-regulations.svg')} alt="State Icon" width="60" height="60" /></p>
            <h2 className="h5 text-center">State Requirements</h2>
            <p>Caregivers are not regulated by the state of Texas.</p>
            <ul>
              <li>Personal Care Aides need no official licensing to practice in Texas.</li>
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
          <p>If your client is eligible to receive Medicaid benefits, they may be able to receive reimbursement for your services through several programs.</p>
          <ul>
            <li>The <span className="font-weight-bold">STAR+PLUS Medicaid Waiver </span>is for individuals unable to manage their activities of daily living without support.</li>
            <li>The <span className="font-weight-bold">Community First Choice (CFC) Program </span>is for individuals of any age who need help with daily tasks or activities of daily living. Your client will be re-assessed annually to determine whether they still qualify for the CFC Program.</li>
            <li>The <span className="font-weight-bold">Primary Home Care (PHC) Program </span>is for disabled individuals over the age of 21 who require assistance to perform at least one activity of daily living. Their disability must be due to a medical condition, and must be documented by a medical professional.</li>
          </ul>
          <p>If your client has served in the US Military and sustained a serious injury in the line of duty on or after September 11th, 2001, a Caregiver may be partially or fully reimbursed by <a className="text-info" href="https://www.benefits.gov/benefit/5918">Veterans Affairs.</a> Serious injuries include traumatic brain injury, psychological trauma, and other mental disorders.</p>
          <p className="font-italic">Please note that while these regulations are accurate at time of publication, laws can change quickly. It&apos;s always a good idea to check on government websites or contact public health representatives to get the most up-to-date information.</p>
          <p>Sources:</p>
          <p><a className="text-info" href="https://hhs.texas.gov/services/aging/long-term-care/aging-disability-resource-center/are-you-a-family-caregiver">https://hhs.texas.gov/services/aging/long-term-care/aging-disability-resource-center/are-you-a-family-caregiver</a></p>
          <p><a className="text-info" href="https://www.payingforseniorcare.com/texas/medicaid-waivers/star-plus">https://www.payingforseniorcare.com/texas/medicaid-waivers/star-plus</a></p>
          <p><a className="text-info" href="https://www.payingforseniorcare.com/texas/medicaid-waivers/community-first-choice">https://www.payingforseniorcare.com/texas/medicaid-waivers/community-first-choice</a></p>
          <p><a className="text-info" href="https://www.payingforseniorcare.com/consumer-direction/tx-primary-home-care">https://www.payingforseniorcare.com/consumer-direction/tx-primary-home-care</a></p>
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

export default Page;
