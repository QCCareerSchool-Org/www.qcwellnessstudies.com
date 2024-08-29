import type { NextPage } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import Table from 'react-bootstrap/Table';

import HeroBackgroundImage from './hero-bg.jpg';
import DifferenceIcon from './icon-difference.svg';
import MedicaidIcon from './icon-medicaid.svg';
import StateRegulationsIcon from './icon-state-regulations.svg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { SEO } from '@/components/SEO';
const Page: NextPage = () => (
  <>
    <SEO
      title="Professional Caregiver Regulations"
      description="Different states have different regulations for professional caregivers. Before you begin your training, make sure you understand these regulations!"
      canonical="/courses-and-tuition/professional-caregiver/regulations"
    />

    <section className="text-white">
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-7">
            <h1>Professional Caregiver Courses</h1>
            <h2 className="h5">Do you need a degree to be a professional caregiver?</h2>
            <p>Considering a fulfilling new career as a professional caregiver? If caring for others and assisting with daily tasks sounds like a career you&apos;d enjoy, there are plenty of opportunities! </p>
            <p>Caregiving is one of the fastest growing careers in North America. However, different states have different regulations to protect the safety of you and your clients. Before you begin training for your new career, make sure you understand these regulations!</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4 col-sm-6 col-md-4 mb-md-0">
              <p><Image src={DifferenceIcon as StaticImageData} alt="Difference Icon" width="60" height="60" /></p>
              <h3 className="h5">What&apos;s the Difference?</h3>
              <p>Learn the difference between a caregiver, home health aide, and certified nursing assistant.</p>
            </div>
            <div className="col-12 mb-4 col-sm-6 col-md-4 mb-md-0">
              <p><Image src={StateRegulationsIcon as StaticImageData} alt="State Icon" width="60" height="60" /></p>
              <h3 className="h5">Regulations by State</h3>
              <p>Learn the regulations for professional caregivers in your specific state.</p>
            </div>
            <div className="col-12 mb-4 col-sm-6 col-md-4 mb-md-0">
              <p><Image src={MedicaidIcon as StaticImageData} alt="Medicaid Icon" width="60" height="60" /></p>
              <h3 className="h5">Medicaid Reimbursement</h3>
              <p>Find out whether your clients can be reimbursed by Medicaid to pay for your services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container text-center">
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>Caregiver*</th>
              <th>Home Health Aide</th>
              <th>Certified Nursing Assistant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JOB DESCRIPTION</td>
              <td>Caring for elderly or disabled people through housework, errands, and other day-to-day tasks</td>
              <td>Caring for clients at home through day-to-day tasks and some medical monitoring/care</td>
              <td>Caring for clients through medical care and daily tasks such as bathing, dressing, etc.</td>
            </tr>
            <tr>
              <td>REQUIRED EDUCATION</td>
              <td>Depends on your state. Some caregivers require basic training, while others must be officially licenced.</td>
              <td>No specific degree is required, but Home Health Aides must be professionally certified by state-accredited facilities.</td>
              <td>Nursing Assistant Training through an approved college or medical institution.</td>
            </tr>
          </tbody>
        </Table>
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <p><em>* There are many terms that refer to caregivers. These include, but are not limited to: attendant care worker, direct care worker, direct service worker, home attendant, home care aide, home services worker, in-home aide, personal care services worker, personal services attendant, personal support specialist, and supportive home assistant.</em></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h2 className="text-dark">Find Your State Regulations</h2>
            <p>Please note that while these regulations are accurate at time of publication, laws can change quickly. It&apos;s always a good idea to check on government websites or contact public health representatives to get the most up-to-date information.</p>
            <p className="text-dark">FIND YOUR STATE</p>
            <p><Link href="/courses-and-tuition/professional-caregiving/regulations/california" className="text-info">California</Link></p>
            <p><Link href="/courses-and-tuition/professional-caregiving/regulations/florida" className="text-info">Florida</Link></p>
            <p><Link href="/courses-and-tuition/professional-caregiving/regulations/illinois" className="text-info">Illinois</Link></p>
            <p><Link href="/courses-and-tuition/professional-caregiving/regulations/new-york" className="text-info">New York</Link></p>
            <p><Link href="/courses-and-tuition/professional-caregiving/regulations/pennsylvania" className="text-info">Pennsylvania</Link></p>
            <p><Link href="/courses-and-tuition/professional-caregiving/regulations/texas" className="text-info">Texas</Link></p>
          </div>
        </div>
      </div>
    </section>

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
