import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default';

const Page: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="QC Wellness Studies"
      description="QC Wellness Studies is the only fully online school for professional wellness training. Whether you want to be a sleep consultant, a professional skincare consultant or an aging in place designer, QC has an online course for your future career!"
      canonical="/"
    />

    <section id="heroSection">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <h1 className="text-light">Start an Exciting Career in the Wellness Industry</h1>
            <p className="text-light">Training for a new career isn't always easy, but when you enroll with QC you'll gain the knowledge, support, and flexibility you need to succeed in your studies!</p>
          </div>
        </div>
      </div>
    </section>

    <section id="certifications" className="text-center">
      <div className="container">
        <p><img className="img-fluid" width="90" height="90" src={require('../images/certification-seal.png')} alt="certification seal" /></p>
        <h2 className="text-dark mb-5">Certifications</h2>
        <div className="row">
          <div className="col-12 mb-5 col-md-6 mb-md-0 col-lg-5 offset-lg-1 mb-5">
            <h3 className="h4 text-dark">Personal Care Aide <span className="badge badge-secondary text sans-serif">NEW</span></h3>
            <p>A personal care aide is a caregiving professional who helps clients keep their independence by helping them with daily activities and tasks they have difficulties completing on their own. This is a thriving industry!</p>
            <p className="text-uppercase"><Link href="/courses-and-tuition/personal-care-aide"><a className="text-info"><strong>view course</strong></a></Link></p>
          </div>
          <div className="col-12 col-md-6 col-lg-5 mb-5">
            <h3 className="h4 text-dark">Sleep Consultant </h3>
            <p>A professional sleep consultant helps parents and caregivers set healthy and save sleep habits for their infants and toddlers, contributing to every family member's physical, mental and emotional wellness!</p>
            <p className="text-uppercase"><Link href="/courses-and-tuition/sleep-consultant"><a className="text-info"><strong>view course</strong></a></Link></p>
          </div>
          <div className="col-12 mb-5 col-md-6 mb-md-0 col-lg-5 offset-lg-1">
            <h3 className="h4 text-dark">Skincare Consultant</h3>
            <p>Skincare consultants help improve clients' emotional and physical wellness by working with them to gain healthy, glowing skin with the help of a personalized skincare plan designed for the client's unique needs.</p>
            <p className="text-uppercase"><Link href="/courses-and-tuition/skincare-consultant"><a className="text-info"><strong>view course</strong></a></Link></p>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <h3 className="h4 text-dark">Aging in Place Designer</h3>
            <p>An aging in place designer specializes in helping clients with aging concerns maintain their independence as long as possible, which is beneficial to clients' physical, emotional and environmental wellness.</p>
            <p className="text-uppercase"><Link href="/courses-and-tuition/aging-in-place"><a className="text-info"><strong>view course</strong></a></Link></p>
          </div>
        </div>
      </div>
    </section>

    <section id="howOnlineWorks">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-7 offset-lg-0">
            <h2 className="text-dark">How Online Learning Works</h2>
            <p className="mb-2"><strong>Enroll Online &amp; Access Your Course Materials</strong></p>
            <ul>
              <li>Enroll online at any time</li>
              <li>Receive your student center login</li>
              <li>Get started with your course</li>
            </ul>
            <p className="mb-2"><strong>Study &amp; Complete Assignments</strong></p>
            <ul>
              <li>Read course texts and watch instructional videos</li>
              <li>Complete theoretical and practical assignments</li>
              <li>Get personalized feedback from your tutor</li>
            </ul>
            <p className="mb-2"><strong>Graduate &amp; Receive your Certification!</strong></p>
            <ul>
              <li>Receive your Certificate of Completion in the mail</li>
              <li>Get lifetime access to course materials and updated content</li>
              <li>Enjoy a 50% discount on all additional courses you take with QC!</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-5 offset-lg-0 text-center flex-column">
            <img className="img-fluid" src={require('../images/how-it-works.svg')} alt="how it works" />
          </div>
        </div>
      </div>
    </section>

    <section id="whyChooseQC">
      <div className="container">
        <h2 className="text-center text-dark mb-3">Why Choose QC</h2>
        <p className="lead text-center col-12 col-lg-10 offset-lg-1 mb-4">When choosing to attend an online school, it can be difficult to separate the legitimate educational institutions from less-than-reputable companies who are looking to make a quick buck. You want to choose a school you'll be proud to attend. One that will help you meet your career goals. Welcome to QC!</p>
        <div className="row d-flex align-items-center mb-5 mb-md-4">
          <div className="col-4 offset-4 col-md-2 offset-md-0 offset-lg-1 offset-xl-2 text-center mb-2 mb-md-0">
            <img className="img-fluid" width="60" height="60" src={require('../images/icon-why-choose-qc-proven.svg')} alt="icon proven" />
          </div>
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center text-md-left">
            <h3>Proven Track Record</h3>
            <p>Enroll in a school with a 35-year track record of quality distance education, an A+ rating from the Better Business Bureau, and thousands of graduates working careers they love!</p>
          </div>
        </div>
        <div className="row d-flex align-items-center mb-5 mb-md-4">
          <div className="col-4 offset-4 col-md-2 offset-md-0 offset-lg-1 offset-xl-2 text-center mb-2 mb-md-0">
            <p><img className="img-fluid" width="60" height="60" src={require('../images/icon-why-choose-qc-online.svg')} alt="icon online" /></p>
          </div>
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center text-md-left">
            <h3>A Fully Online Learning Experience</h3>
            <p>QC offers 100% online learning on all courses! There are no mandatory scheduled webinars to attend and no inconvenient classroom sessions. You work at your own pace and on your own time, with 1-on-1 guidance and support from your personal tutor and your student support advisor.</p>
          </div>
        </div>
        <div className="row d-flex align-items-center mb-5 mb-md-4">
          <div className="col-4 offset-4 col-md-2 offset-md-0 offset-lg-1 offset-xl-2 text-center mb-2 mb-md-0">
            <p><img className="img-fluid" width="60" height="60" src={require('../images/icon-why-choose-qc-tutor-guide.svg')} alt="tutor" /></p>
          </div>
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center text-md-left">
            <h3>Expert Tutors to Guide You</h3>
            <p>Your personal tutor will follow your progress through your online course, will personally grade your assignments, and provide you with individualized feedback after you've completed each unit. These aren't paid employees of the school grading from a template; they're career professionals working in your industry, and they're focused on your success!</p>
          </div>
        </div>
        <div className="row d-flex align-items-center mb-5 mb-md-4">
          <div className="col-4 offset-4 col-md-2 offset-md-0 offset-lg-1 offset-xl-2 text-center mb-2 mb-md-0">
            <p><img className="img-fluid" width="60" height="60" src={require('../images/icon-why-choose-qc-training.svg')} alt="training" /></p>
          </div>
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center text-md-left">
            <h3>Business Training You can Use</h3>
            <p>Each course comes complete with optional business training where you'll work with your tutor to come up with a business name, create a marketing strategy, start building your website, and get access to templates that will help get your career off the ground from day one!</p>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-4 offset-4 col-md-2 offset-md-0 offset-lg-1 offset-xl-2 text-center mb-2 mb-md-0">
            <p><img className="img-fluid" width="60" height="60" src={require('../images/icon-why-choose-qc-no-hidden-fees.svg')} alt="no hidden fees" /></p>
          </div>
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center text-md-left">
            <h3>No Additional or Hidden Fees</h3>
            <p>Your course tuition is the only fee you'll pay for your course or certification. Unlike other schools, when you graduate from QC your certificate is yours forever, and you'll have continued access to your student center at no additional cost. You'll never be asked to pay subscription fees, membership fees, or any other fees to keep your certification current or use your business materials.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="enrollToday" className="text-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2>Enroll Today</h2>
            <p className="lead"><strong>Ready to start your new career?</strong><br />Enroll today and launch your training!</p>
            <p><a className="btn btn-secondary btn-lg text-uppercase" href="https://enroll.qcwellnessstudies.com/">Enroll Online</a></p>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      #enrollToday{background-image:url(${require('../images/bg-enrollment.jpg')});background-size:cover}
      #howOnlineWorks{background-image:url(${require('../images/bg-white-green-light.jpg')});background-size:cover}
      #heroSection{background-image:url(${require('../images/bg-home-top.jpg')});background-size:cover;background-position:center}
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
