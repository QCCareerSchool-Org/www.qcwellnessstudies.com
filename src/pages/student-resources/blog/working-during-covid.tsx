import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="Learning and Working as a Sleep Consultant During COVID-19"
      description="See how you can earn your certification and run your very own sleep consulting business safely during COVID-19"
      canonical="/student-resources/blog/working-during-covid"
      image={{
        src: require('../../../images/sleep-consultant-remote-work.jpg'),
        alt: 'Sleep Consultant Remote Work',
      }}
    />

    <section id="heroSection">
      <div className="container text-light">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1 className="text-center">Learning &amp; Working as a Sleep Consultant During COVID-19</h1>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">See how you can earn your certification and run your very own sleep consulting business safely during COVID-19</p>
            <p className="lead">Learn from the safety of home with QC’s online courses.</p>  
            <p><img className="img-fluid" src={require('../../../images/sleep-consultant-home-office.jpg')} alt="Sleep Consultant Home Office" /></p>        
            <h4>How QC Sets You Up to Succeed</h4>      
            <ul>
              <li>Study from the comfort of home with a fully online course</li>
              <li>Receive virtual one-on-one support from your tutor</li>
              <li>Reach out to the Student Support Team 7 days a week for assistance</li>
              <li>Access your course materials any time in the online student center</li>
              <li>Choose from flexible, affordable tuition payment options</li>
              <li>Get up to 2 full years to complete your course</li>
              <li>Become a certified Infant Sleep Consulting Professional (ISCP™) upon successful completion of the course</li>
            </ul>
            <p><Link href="/courses-and-tuition/sleep-consultant"><a rel="noopener noreferrer" target="_blank">Learn more about QC Wellness Studies' Sleep Consultant Course!</a></Link></p>
            <p><img className="img-fluid" src={require('../../../images/sleep-consultant-remote-work.jpg')} alt="Sleep Consultant Remote Work" /></p>
            <h4>Continue to book clients and make a profit by adding any of the following services to your business:</h4>       
            <ul>
              <li>Introduce virtual services to your business, such as virtual sleep consultations</li>
              <li>When it’s safe to meet with clients in-person, insist that everyone wear a mask</li>
              <li>Start your own sleep consulting blog or write as a subject-matter expert for other blogs/publications</li>
              <li>Become an authority on infant sleep consulting on social media</li>
              <li>Teach clients about sleep training through virtual classes (i.e. one-on-one, group classes, etc.)</li>       
            </ul>
            <p><img className="img-fluid" src={require('../../../images/baby-girl-sleeping.jpg')} alt="Baby Girl Sleeping" /></p>
            <h4>Tips for Keeping Yourself and Clients Safe</h4>
            <p>When working with clients and their infants in person, you should follow strict practices to keep everyone safe.</p>
            <p>COVID-19 Safety Protocols for Sleep Consultants:</p>
            <ul>
              <li>Reschedule or cancel appointments if you, your client, or anyone in their household is feeling ill or has been exposed to someone who has tested positive for COVID-19</li>
              <li>Insist that clients (and if applicable, their children) wear masks during all in-person appointments</li>
              <li>Maintain a distance of at least 6 feet during appointments</li>
              <li>Socially distance when not working and enforce a maximum occupancy limit</li>
              <li>Offer your services online whenever possible</li>
              <li>Wash your hands before and after working with a client or touching communal surfaces</li>
              <li>Work in a clean, sanitized space</li>
              <li>Encourage the client to prepare a sanitized space for the meeting to take place in, if meeting within their own home</li>
              <li>Receive the proper COVID-19 vaccine(s), once publicly available</li>
            </ul>
            <p><img className="img-fluid" src={require('../../../images/little-boy-medical-mask.jpg')} alt="Little Boy Wearing Medical Mask" /></p>
          </div>
        </div>
      </div>
    </section>

    <section id="enrollToday" className="text-light">
      <div className="container text-center">
        <h2>Get Started Today!</h2>
        <p className="lead">Why wait? Start your professional training program today and get on the path toward a new and exciting career</p>
        <p><a className="btn btn-secondary btn-lg text-uppercase" href="https://enroll.qcwellnessstudies.com/">Enroll Online</a></p>
      </div>
    </section>

    <section className="bg-light text-dark">
      <div className="container text-center">
        <Link href="/student-resources"><a className="btn btn-primary btn-lg text-uppercase">Back to Student Resources</a></Link>
      </div>
    </section>

    <style jsx>{`
      #enrollToday{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}     
      #heroSection{background-image:url(${require('../../../images/sr-hero-image-working-with-covid.jpg')});background-size:cover;background-position:center}
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
