import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/SEO';

const Page: NextPage = () => (
  <>
    <SEO
      title="Sleep Planning for School-Aged Children"
      description="Many parents find it difficult to manage sleep schedules for multiple children. However, many of the tricks that help infants get restful sleep will benefit school-aged children as well! Preschoolers aged 3 to 5 years need 10 to 13 hours of sleep, including daytime naps. Grade school children aged 6 to 12 years need 9 to 12 hours of sleep per night. Follow these tips to help all children in the house get restful sleep."
      canonical="/student-resources/tipsheets/sleep-planning-for-school-aged-children"
      image={{
        src: require('../../../images/sr-boy-lying-on-bed-low.jpg'),
        alt: 'boy lying on bed',
      }}
    />

    <section id="heroSection">
      <div className="container text-light text-center">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1>Sleep Planning for School-Aged Children</h1>
            <p><a href="/tip-sheets/sleep-planning-school-aged-children.pdf" className="btn btn-primary" rel="noopener noreferrer" target="_blank"><strong>Download PDF</strong></a></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">Many parents find it difficult to manage sleep schedules for multiple children. However, many of the tricks that help infants get restful sleep will benefit school-aged children as well! Preschoolers aged 3 to 5 years need 10 to 13 hours of sleep, including daytime naps. Grade school children aged 6 to 12 years need 9 to 12 hours of sleep per night. Follow these tips to help all children in the house get restful sleep.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-boy-lying-on-bed-low.jpg')} alt="boy lying on bed" /></p>

            <h4>Daytime Tips</h4>
            <p>You can follow a few tips throughout the day to improve a child&apos;s sleep at night. These include:</p>
            <ul>
              <li>Monitoring and reducing screen time with electronics, including TV, tablets and gaming devices</li>
              <li>Increasing activity throughout the day, such as exercising and playing games, to tire children out</li>
              <li>Keeping a tidy bedroom to remove distractions at night, such as toys and screens</li>
              <li>Keep the daytime schedule, including wakeup times and mealtimes, consistent on school days to help children feel secure and comfortable</li>
            </ul>
            <p><img className="img-fluid" src={require('../../../images/sr-girl-sleeping-bed.jpg')} alt="girl sleeping in bed" /></p>

            <h4>Bedtime Tips</h4>
            <p>Maintain a consistent bedtime to routine to help school-aged children fall asleep and ensure that they are well-rested for school in the morning. The bedtime routine might include:</p>
            <ul>
              <li>Reading time in a quiet area of the home such, as the child&apos;s bedroom</li>
              <li>Having a bath or shower before bed</li>
              <li>Having a healthy bedtime snack</li>
              <li>Brushing teeth</li>
            </ul>
            <p><img className="img-fluid" src={require('../../../images/sr-evening-family-reading-father-reads-children.jpg')} alt="evening family reading" /></p>

            <h4>Coordinating Multiple Bedtimes</h4>
            <p>For households with multiple children, you&apos;ll need to plan several bedtimes. Older children usually go to bed slightly later than infants and can sometimes keep their younger siblings awake. Keep older siblings quiet and calm while an infant is asleep by:</p>
            <ul>
              <li>Planning quiet indoor activities, such as puzzles, drawing, reading and TV time either during the baby&apos;s naptimes or bedtime</li>
              <li>Including older siblings in the infant&apos;s bedtime routine, such as group story times and pre-bedtime snacks</li>
              <li>Spend quality quiet time with each child individually to make them feel loved and secure</li>
            </ul>
            <p><img className="img-fluid" src={require('../../../images/sr-mom-her-5-years-old.jpg')} alt="Young mom with her 5 years old son and 2 month old baby" /></p>
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
      #heroSection{background-image:url(${require('../../../images/sr-hero-sleep-planning-school-aged-children.jpg')});background-size:cover;background-position:center}
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
  </>
);

export default Page;
