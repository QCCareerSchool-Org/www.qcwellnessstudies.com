import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { ArticleCard } from '../../components/article-card';
import { CardColumn } from '../../components/card-column';
import { SEO } from '../../components/seo';
import { DefaultLayout } from '../../layouts/default';

const Page: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="QC Student Resources"
      description=""
      canonical="/student-resources"
    />

    <section id="heroSection">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div>
            <h1 className="text-light text-center">Student Resources</h1>
            <p className="lead text-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row mb-4">
          <CardColumn>
            <ArticleCard
              images={[
                { src: require('../../images/sleep-consultant-home-office.jpg'), type: 'image/jpg' },
                { src: require('../../images/sleep-consultant-home-office.jpg?webp'), type: 'image/webp' },
              ]}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ THE ARTICLE"
              link="https://www.google.com/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              images={[
                { src: require('../../images/sleep-consultant-home-office.jpg'), type: 'image/jpg' },
                { src: require('../../images/sleep-consultant-home-office.jpg?webp'), type: 'image/webp' },
              ]}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ THE ARTICLE"
              link="https://www.google.com/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              images={[
                { src: require('../../images/sleep-consultant-home-office.jpg'), type: 'image/jpg' },
                { src: require('../../images/sleep-consultant-home-office.jpg?webp'), type: 'image/webp' },
              ]}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ THE ARTICLE"
              link="https://www.google.com/"
              externalLink={true}
            />
          </CardColumn>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4">
          <CardColumn>
            <ArticleCard
              images={[
                { src: require('../../images/sleep-consultant-home-office.jpg'), type: 'image/jpg' },
                { src: require('../../images/sleep-consultant-home-office.jpg?webp'), type: 'image/webp' },
              ]}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ THE ARTICLE"
              link="https://www.google.com/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              images={[
                { src: require('../../images/sleep-consultant-home-office.jpg'), type: 'image/jpg' },
                { src: require('../../images/sleep-consultant-home-office.jpg?webp'), type: 'image/webp' },
              ]}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ THE ARTICLE"
              link="https://www.google.com/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              images={[
                { src: require('../../images/sleep-consultant-home-office.jpg'), type: 'image/jpg' },
                { src: require('../../images/sleep-consultant-home-office.jpg?webp'), type: 'image/webp' },
              ]}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ THE ARTICLE"
              link="https://www.google.com/"
              externalLink={true}
            />
          </CardColumn>
        </div>
        </div>
        <div className="container">
        <div className="row mb-4">
          <CardColumn>
            <ArticleCard
              images={[
                { src: require('../../images/sleep-consultant-home-office.jpg'), type: 'image/jpg' },
                { src: require('../../images/sleep-consultant-home-office.jpg?webp'), type: 'image/webp' },
              ]}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ THE ARTICLE"
              link="https://www.google.com/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              images={[
                { src: require('../../images/sleep-consultant-home-office.jpg'), type: 'image/jpg' },
                { src: require('../../images/sleep-consultant-home-office.jpg?webp'), type: 'image/webp' },
              ]}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ THE ARTICLE"
              link="https://www.google.com/"
              externalLink={true}
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              images={[
                { src: require('../../images/sleep-consultant-home-office.jpg'), type: 'image/jpg' },
                { src: require('../../images/sleep-consultant-home-office.jpg?webp'), type: 'image/webp' },
              ]}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ THE ARTICLE"
              link="https://www.google.com/"
              externalLink={true}
            />
          </CardColumn>
        </div>
        </div>      
    </section>  

    <section id="enrollToday" className="text-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-12">
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
