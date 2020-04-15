import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { IoMdBook, IoMdEye, IoMdLaptop, IoMdSchool } from 'react-icons/io';

import { DefaultLayout } from '../../../layouts/default';

const Page: NextPage = () => (
  <DefaultLayout>

    <section id="heroSection">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-7 offset-lg-0">
            <h1 className="text-dark">Your Course Preview</h1>
            <p><strong>Thank you for your interest in QC Wellness School's Personal Care Aide Course!</strong>The course preview should help answer most questions you have about becoming a professional caregiver from the comfort of home including</p>
            <ul>
              <li>What exactly am I going to learn in this course?</li>
              <li>What is the tuition for the course and what do those fees cover?</li>
              <li>How am I going to get hands-on training if I'm doing an online course?</li>
              <li>Can online learning really prepare me for real-world scenarios?</li>
            </ul>
            <Link href="preview"><a className="btn btn-secondary btn-lg text-uppercase my-3"><div className="d-flex align-items-center"><IoMdEye className="mr-2" /> View the Course Preview</div></a></Link>
          </div>
          <div className="d-none d-lg-block col-12 col-lg-5 text-center">
            <p><img src={require('../../../images/thank-you.jpg')} className="img-fluid" alt="course preview" /></p>
          </div>
        </div>
      </div>
    </section>

    <section id="linksQCSection">
      <div className="container text-center">
        <div className="row mb-5">
          <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5 mb-lg-0">
            <IoMdBook size={30} />
            <h3 className="text-dark text-center">Course Overview</h3>
            <p className="text-dark text-center">Learn more about the personal care aide course. View tuition options, and read a detailed course outline.</p>
            <p><Link href="/courses-and-tuition/personal-care-aide"><a className="btn btn-dark btn-md text-uppercase mt-auto">Learn More</a></Link></p>
          </div>
          <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5 mb-lg-0">
            <IoMdSchool size={30} />
            <h3 className="text-dark text-center">Courses &amp; Tuition</h3>
            <p className="text-dark text-center">Browse through ALL of QC's online courses, tuition and payment plans to choose the one that's right for you.</p>
            <p><Link href="/courses-and-tuition"><a className="btn btn-dark btn-md text-uppercase mt-auto">Learn More</a></Link></p>
          </div>
          <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0">
            <IoMdLaptop size={30} />
            <h3 className="text-dark text-center">How You'll Learn</h3>
            <p className="text-dark text-center">Find out how QC's online training will help you succeed.</p>
            <p><Link href="/how-it-works"><a className="btn btn-dark btn-md text-uppercase mt-auto">Learn More</a></Link></p>
          </div>
        </div>
      </div>
    </section>

    <section id="enrollSection" className="text-light text-center">
      <div className="container">
        <h2>Enroll today</h2>
        <p className="lead mb-5">Start your online caregiver training today<br />and launch an exciting, rewarding career!</p>
        <p><a href="https://enroll.qcwellnessstudies.com" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
      </div>
    </section>

    <style jsx>{`
      #heroSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
      #enrollSection{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}
    `}</style>

  </DefaultLayout>
);

export default Page;
