import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: NextPage = () => (

    <DefaultLayout>

        <SEO
            title="7 Tips for Travelling with a Baby"
            description=""
            canonical="/student-resources/7-tips-for-travelling-with-a-baby"
        />

        <section id="heroSection">
            <div className="container col-12  mb-4 col-sm-10 col-md-8 col-lg-6 mb-lg-0">
                <div className="row d-flex align-items-center">
                    <div className="text-light text-center">
                        <h1>7 Tips for Travelling with a Baby</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container col-12 mb-4 col-sm-10 col-md-8 col-lg-6 mb-lg-0">
                <div className="row">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h2>Plan Accomodation in Advance.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div>
                        <p><img className="img-fluid" src={require('../../../images/sl-baby-sleeping-in-crib.jpg')} alt="Baby sleeping in a crib" /></p>
                    </div>
                    <h4>Plan Accomodation in Advance.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="lead">Download a free tip sheet on 7 Tips for Travelling with a Baby</p>
                </div>
                <div className="row">
                    <p><Link href="/tip-sheets/7-tips-travelling-baby.pdf"><a className="btn btn-primary"><strong>Download Tipsheet</strong></a></Link></p>
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
      #enrollToday{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}
      #howOnlineWorks{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
      #heroSection{background-image:url(${require('../../../images/bg-home-top.jpg')});background-size:cover;background-position:center}
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
