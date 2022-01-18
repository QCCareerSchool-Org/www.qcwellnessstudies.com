import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { ArticleCard } from '../../components/ArticleCard';
import { CardColumn } from '../../components/CardColumn';
import { SEO } from '../../components/SEO';
import { DefaultLayout } from '../../layouts/DefaultLayout';

const Page: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="QC Student Resources"
      description="As a student of QC Wellness Studies, you have countless resources to help you succeed in your Sleep Consulting course. Read the featured articles and tipsheets in this page for up-to-date advice for sleep consultants."
      canonical="/student-resources"
      image={{
        src: require('../../images/sr-thumb-how-to-become-a-virtual-sleep-consultant.jpg'),
        alt: 'online family gathering',
      }}
    />

    <section id="heroSection">
      <div className="container text-center text-light">
        <h1>Sleep Resources</h1>
        <p className="lead">As a student of QC Wellness Studies, you have countless resources to help you succeed in your Sleep Consulting course. Read the featured articles and tipsheets below for up-to-date advice for sleep consultants.</p>
      </div>
    </section>

    <section>
      <div className="container">
        <h2 className="text-dark text-center">Featured Articles</h2>
        <div className="row mb-2">
          <CardColumn>
            <ArticleCard
              images={[ { src: require('../../images/sr-thumb-focused-woman-wearing-headphones.jpg'), type: 'image/jpg' } ]}
              alt="Can an Online Course Prepare You for a Sleep Consultant Career?"
              title="Can an Online Course Prepare You for a Sleep Consultant Career?"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/blog/can-an-online-course-prepare-you-for-a-sleep-consultant-career"
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              images={[ { src: require('../../images/sr-thumb-how-to-become-a-virtual-sleep-consultant.jpg'), type: 'image/jpg' } ]}
              alt="How to Become a Virtual Sleep Consultant"
              title="How to Become a Virtual Sleep Consultant"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/blog/how-to-become-a-virtual-sleep-consultant"
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              images={[ { src: require('../../images/sr-thumb-stages-of-development.jpg'), type: 'image/jpg' } ]}
              alt="Stages of Development: How Sleep Consultants Can Help"
              title="Stages of Development: How Sleep Consultants Can Help"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/blog/stages-of-development"
            />
          </CardColumn>
        </div>

        <div className="row">
          <div className="col-12 offset-md-2 offset-lg-0">
            <h2 className="text-dark">More Articles</h2>
            <p className="lead"><Link href="/student-resources/blog/working-with-helicopter-parents"><a><strong>Working with Helicopter Parents</strong></a></Link></p>
            <p className="lead"><Link href="/student-resources/blog/6-common-training-methods-of-an-infant-sleep-consultant"><a><strong>The 6 Common Training Methods of Sleep Consultants</strong></a></Link></p>
            <p className="lead"><Link href="/student-resources/blog/baby-sign-language-for-beginners"><a><strong>Baby Sign Language for Beginners</strong></a></Link></p>
            <p className="lead"><Link href="/student-resources/blog/insurance"><a><strong>Insurance Types Recommended for Sleep Consultants</strong></a></Link></p>
            <p className="lead"><Link href="/student-resources/blog/working-during-covid"><a><strong>Learning &amp; Working During COVID-19</strong></a></Link></p>
            <p className="lead"><Link href="/student-resources/blog/student-features/sarah-pashniak"><a><strong>Meet a QC Graduate: Sarah Pashniak</strong></a></Link></p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <h2 className="text-dark text-center">Tipsheets</h2>
      <div className="container">
        <div className="row">
          <CardColumn>
            <ArticleCard
              images={[ { src: require('../../images/sr-thumb-7-tips-travelling-baby.jpg'), type: 'image/jpg' } ]}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/tipsheets/7-tips-for-travelling-with-a-baby"
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              images={[ { src: require('../../images/sr-thumb-7-tips-for-virtual-sleep-consulting.jpg'), type: 'image/jpg' } ]}
              alt="7 Tips for Virtual Sleep Consulting"
              title="7 Tips for Virtual Sleep Consulting"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/tipsheets/7-tips-for-virtual-sleep-consulting"
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              images={[ { src: require('../../images/sr-thumb-8-tips-for-improving-bedtime-routine.jpg'), type: 'image/jpg' } ]}
              alt="8 Tips for Improving the Bedtime Routine"
              title="8 Tips for Improving the Bedtime Routine"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/tipsheets/8-tips-for-improving-bedtime-routine"
            />
          </CardColumn>
        </div>
        <div className="row">
          <div className="col-12 offset-md-2 offset-lg-0">
            <h2 className="text-dark">More Tipsheets</h2>
            <p className="lead"><Link href="/student-resources/tipsheets/10-tips-for-creating-the-ideal-sleep-environment"><a><strong>10 Tips for Creating the Ideal Sleep Environment</strong></a></Link></p>
            <p className="lead"><Link href="/student-resources/tipsheets/seasonally-dressing-a-baby-for-sleep-time"><a><strong>Seasonally Dressing a Baby for Sleep Time</strong></a></Link></p>
            <p className="lead"><Link href="/student-resources/tipsheets/sleep-planning-for-school-aged-children"><a><strong>Sleep Planning for School-Aged Children</strong></a></Link></p>
          </div>
        </div>
      </div>
    </section>

    <section id="enrollToday" className="text-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h2>Get Started Today!</h2>
            <p className="lead">Why wait? Start your professional training program today and get on the path toward a new and exciting career</p>
            <p><a className="btn btn-secondary btn-lg text-uppercase" href="https://enroll.qcwellnessstudies.com/">Enroll Online</a></p>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      #enrollToday{background-image:url(${require('../../images/bg-enrollment.jpg')});background-size:cover}
      #heroSection{background-image:url(${require('../../images/bg-home-top.jpg')});background-size:cover;background-position:center}
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
