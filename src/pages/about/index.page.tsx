import type { NextPage } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

import LaptopLibraryImage from './laptop-library.svg';
import ThumbnailImage from './macbook-on-granite-counter.png';
import { BackgroundImage } from '@/components/BackgroundImage';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { SEO } from '@/components/SEO';
import PartnerBackgroundImage from '@/images/bg-dark-green-navy.jpg';
import DesignLogo from '@/images/logo-design.svg';
import EventLogo from '@/images/logo-event.svg';
import MakeupLogo from '@/images/logo-makeup.svg';
import PetLogo from '@/images/logo-pet.svg';

const Page: NextPage = () => (
  <>
    <SEO
      title="About QC"
      description="QC Wellness Studies is a faculty of QC Career School. With over 35 years in distance education and an A+ rating from the BBB, you're enrolling in a school you can trust!"
      canonical="/about"
      image={{
        src: ThumbnailImage.src,
        alt: 'hands resting on a laptop on a desk with a phone, coffee, and sunglasses',
      }}
      twitterCardType="summary_large_image"
      schemaType="AboutPage"
    />

    <section id="heroSection">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6 mb-lg-0">
            <h1 className="text-dark">About QC<br />Wellness Studies</h1>
            <p className="lead">Celebrating 35 Years of Professional Distance Education!</p>
            <p>QC has set the benchmark for excellence in distance education since 1984 and has many thousands of successful graduates. You could be one of them.</p>
            <p>With QC&apos;s online professional wellness classes, you&apos;ll receive quality training from industry professionals. Through tutorials, course texts and practical assignments, you&apos;ll learn everything you need to become a successful and certified wellness professional.</p>
            <p>QC provides even better training than what you&apos;d receive at a brick and mortar school. You&apos;ll benefit from regular one-on-one instruction and access to help whenever you need it. As a QC student, you&apos;ll learn to build a successful career from the ground up.</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
            <p><Image src={LaptopLibraryImage as StaticImageData} className="img-fluid" alt="About QC Wellness Studies" /></p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="lead">QC Wellness Studies&apos; premium online course content and outstanding student support system give you access to help and learning tools 24/7. Reach student support specialists by email, phone, or Live Chat. Students and graduates can contact the support team for questions or advice at any time!</p>
          <p><Link href="/courses-and-tuition" className="btn btn-outline-info">VIEW COURSES</Link></p>
        </div>
      </div>
    </section>

    <a className="anchor" id="guarantee" />

    <GuaranteeSection />

    <section id="accreditationSection">
      <div className="container text-center">
        <div className="col-12 col-lg-8 offset-lg-2 mb-6 mb-md-0">
          <h2 className="text-dark">QC Wellness Studies&apos; Accreditation</h2>
          <p>QC is an online wellness school providing training that is flexible and affordable. A subsidiary of QC Career School, the online Wellness School holds an A+ standing in its accreditation by the Better Business Bureau&mdash;this is the highest consumer satisfaction rating.</p>
          <hr />
          <p className="lead">Since 1984, QC has educated thousands of students. Graduates of QC Wellness School receive a professional certification to show that is industry recognized.</p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175" className="card-link">View QC Wellness Studies&apos; Better Business Bureau profile</a></p>
        </div>
      </div>
    </section>

    <section id="partnerSection">
      <BackgroundImage src={PartnerBackgroundImage} />
      <div className="container text-center text-light">
        <div className="col-12 col-lg-10 offset-lg-1 mb-6 mb-md-0">
          <h2 className="text-light">QC Partner Schools</h2>
          <p className="col-lg-10 offset-lg-1 ">QC Wellness Studies is a faculty of QC Career School. A leader in distance education since 1984, QC strives to provide quality career training in a variety of career fields.</p>
          <p className="lead mb-5">Other faculties of QC Career School include:</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4 col-sm-6 col-md-3 mb-md-0">
              <p><a href="https://www.qcmakeupacademy.com/" target="_blank" rel="noopener noreferrer"><Image src={MakeupLogo as StaticImageData} alt="QC Makeup Academy" /></a></p>
              <h3 className="h5">QC Makeup Academy</h3>
              <p>QC Makeup Academy is QC&apos;s fastest growing schools and provides 10 courses in basic and advanced professional makeup artistry training.</p>
            </div>
            <div className="col-12 mb-4 col-sm-6 col-md-3 mb-md-0">
              <p><a href="https://www.qceventplanning.com/" target="_blank" rel="noopener noreferrer"><Image src={EventLogo as StaticImageData} alt="QC Event School" /></a></p>
              <h3 className="h5">QC Event School</h3>
              <p>High quality training for event and wedding planning professionals, offering specialty classes for individuals and corporations alike.</p>
            </div>
            <div className="col-12 mb-4 col-sm-6 col-md-3 mb-md-0">
              <p><a href="https://www.qcdesignschool.com/" target="_blank" rel="noopener noreferrer"><Image src={DesignLogo as StaticImageData} alt="QC Design School" /></a></p>
              <h3 className="h5">QC Design School</h3>
              <p>Provides design &amp; decorating professionals with training in 6 unique fields of study, from interior decorating to Feng Shui Design.</p>
            </div>
            <div className="col-12 mb-4 col-sm-6 col-md-3 mb-md-0">
              <p><a href="https://www.doggroomingcourse.com/" target="_blank" rel="noopener noreferrer"><Image src={PetLogo as StaticImageData} alt="QC Pet Studies" /></a></p>
              <h3 className="h5">QC Pet Studies</h3>
              <p>Expert training classes in dog grooming and dog First Aid. Perfect for individuals or employees of dog grooming salons.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="text-center">
      <div className="container">
        <h2 className="text-dark">Start Your Wellness Training Today!</h2>
        <p className="lead mb-4">Ready to start a new exciting career? Enroll online today!</p>
        <p><a href="https://enroll.qcwellnessstudies.com/" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
      </div>
    </section>
  </>
);

export default Page;
