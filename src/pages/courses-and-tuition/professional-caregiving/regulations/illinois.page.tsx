import type { NextPage } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import StateRegulationIcon from './icon-state-regulations.svg';
import TakeThisCourseIcon from './icon-take-this-course.svg';
import HeroBackgroundImage from './state-hero-bg.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { SEO } from '@/components/SEO';

const Page: NextPage = () => (
  <>
    <SEO
      title="Professional Caregiver Regulations - By State - Illinois"
      description="Different states have different regulations for professional caregivers. Before you begin your training, make sure you understand the regulations in Illinois!"
      canonical="/courses-and-tuition/professional-caregiver/regulations/illinois"
    />

    <section className="text-white">
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-7">
            <h1>Illinois</h1>
            <h2 className="h5">In Illinois, Professional Caregivers fall under the category &ldquo;Caregiver&mdash;Home Care&mdash;Home Service Worker (Non-Medical Home Care)&rdquo; but are referred to as &rdquo;home service workers.&ldquo;</h2>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
            <p className="text-center"><Image src={StateRegulationIcon as StaticImageData} alt="State Icon" width="60" height="60" /></p>
            <h2 className="h5 text-center">State Requirements</h2>
            <p>Home Service Workers employed by an agency are regulated by the state of Illinois.</p>
            <ul>
              <li>You must complete 8 hours of training to become a Home Service Worker in Illinois</li>
              <li>Home Service Workers must also complete an additional 8 hours of training per year</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <p className="text-center"><Image src={TakeThisCourseIcon as StaticImageData} alt="Take This Course Icon" width="60" height="60" /></p>
            <h2 className="h5 text-center">Take this course:</h2>
            <ul>
              <li>If you would like to begin your career as a Caregiver</li>
              <li>To receive higher pay in your current caregiving career</li>
              <li>To complete additional training</li>
            </ul>
            <p className="text-center"><a className="btn btn-secondary" href="https://enroll.qcwellnessstudies.com/?c=fc">ENROLL NOW</a></p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light text-dark">
      <div className="container">
        <div className="col-12 col-lg-10 offset-lg-1 mb-6 mb-md-0">
          <h2>Funding</h2>
          <p>The HCBS Waiver in Illinois allows eligible residents to receive care at home under strict requirements. If your client is between the ages of 60 and 64 and has a disability recognized by the Social Security Administration, the costs of caregiving may be partially or fully reimbursed by this reimbursement.</p>
          <p>If your client has served in the US Military and sustained a serious injury in the line of duty on or after September 11th, 2001, a Caregiver may be partially or fully reimbursed by <a className="text-info" href="https://www.benefits.gov/benefit/5918">Veterans Affairs.</a> Serious injuries include traumatic brain injury, psychological trauma, and other mental disorders.</p>
          <p className="font-italic">Please note that while these regulations are accurate at time of publication, laws can change quickly. It&apos;s always a good idea to check on government websites or contact public health representatives to get the most up-to-date information.</p>
          <p>Sources:</p>
          <p><a className="text-info" href="http://www.ilga.gov/commission/jcar/admincode/077/077002450B00710R.html">http://www.ilga.gov/commission/jcar/admincode/077/077002450B00710R.html</a></p>
          <p><a className="text-info" href="https://www.payingforseniorcare.com/illinois/medicaid-waivers/hcbs-waiver-for-the-elderly">https://www.payingforseniorcare.com/illinois/medicaid-waivers/hcbs-waiver-for-the-elderly</a></p>
          <p><a className="text-info" href="https://www.benefits.gov/benefit/5918">https://www.benefits.gov/benefit/5918</a></p>
        </div>
      </div>
    </section>

    <EnrollmentSection courseCodes={[ 'fc' ]}>
      Start your caregiving training today<br />and launch an exciting, rewarding career!
    </EnrollmentSection>

    <style jsx>{`
      section:first-of-type {
        padding-top: 105px;
      }
      @media (min-width: 992px)
        section:first-of-type {
          padding-top: 101px;
        }
      }
    `}</style>
  </>
);

export default Page;
