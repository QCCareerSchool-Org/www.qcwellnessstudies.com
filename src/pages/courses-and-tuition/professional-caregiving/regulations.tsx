import Link from 'next/link';
import React from 'react';
import Table from 'react-bootstrap/Table';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: React.FC = () => {

    return (
        <DefaultLayout>
            <SEO
                title="Professional Caregiver Regulations"
                description="Different states have different regulations for professional caregivers. Before you begin your training, make sure you understand these regulations!"
                canonical="/courses-and-tuition/professional-caregiver/regulations"
            />

            <section id="heroSection">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-7">
                            <h1>Professional Caregiver Courses</h1>
                            <h2 className="h5">Do you need a degree to be a professional caregiver?</h2>
                            <p>Considering a fulfilling new career as a professional caregiver? If caring for others and assisting with daily tasks sounds like a career you’d enjoy, there are plenty of opportunities! Caregiving is one of the fastest growing careers in North America. However, different states have different regulations to protect the safety of you and your clients. Before you begin training for your new career, make sure you understand these regulations!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-4 col-sm-6 col-md-4 mb-md-0">
                                <p><img src={require('../../../images/fc-regulations-icon-difference.svg')} alt="Difference Icon" width="60" height="60" /></p>
                                <h3 className="h5">What’s the Difference?</h3>
                                <p>Learn the difference between a Caregiver, Home Health Aide, and Certified Nursing Assistant.</p>
                            </div>
                            <div className="col-12 mb-4 col-sm-6 col-md-4 mb-md-0">
                                <p><img src={require('../../../images/fc-regulations-icon-state-regulations.svg')} alt="State Icon" width="60" height="60" /></p>
                                <h3 className="h5">Regulations by State</h3>
                                <p>Learn the regulations for Professional Caregivers in your specific state.</p>
                            </div>
                            <div className="col-12 mb-4 col-sm-6 col-md-4 mb-md-0">
                                <p><img src={require('../../../images/fc-regulations-icon-medicaid.svg')} alt="Medicaid Icon" width="60" height="60" /></p>
                                <h3 className="h5">Do My Services Qualify for Medicaid Reimbursement?</h3>
                                <p>Find out whether your clients can be reimbursed by Medicaid to pay for your services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container text-center text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-4 col-sm-6 col-md-12 mb-md-0">
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
                                            <td>Depends on your state. Some Caregivers require basic training, while others must be officially licenced.</td>
                                            <td>No specific degree is required, but Home Health Aides must be professionally certified by state-accredited facilities.</td>
                                            <td>Nursing Assistant Training through an approved college or medical institution.</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="col-12 col-lg-12 mb-6 mb-md-0">
                        <p>*There are many terms that refer to caregivers. These include, but are not limited to: Attendant Care Worker, Direct Care Worker, Direct Service Worker, Home Attendant, Home Care Aide, Home Services Worker, In-Home Aide, Personal Care Services Worker, Personal Services Attendant, Personal Support Specialist, and Supportive Home Assistant.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container text-center">
                    <div className="col-12 col-lg-6 offset-lg-3 mb-6 mb-md-0">
                        <h2 className="text-dark">Find Your State Regulations</h2>
                        <p>Please note that, while these regulations are accurate at time of publication, laws can change quickly. It’s always a good idea to check on government websites or contact public health representatives to get the most up-to-date information.</p>
                    </div>
                    <br /> 
                    <div className="text-dark"> FIND YOUR STATE
                    </div>
                    <br /> 
                    <div>
                    <Link href="/courses-and-tuition/professional-caregiving/regulations/california"><a className="text-info">California</a></Link>
                    </div>                   
                </div>
            </section>

            <style jsx>{`
        #heroSection{color:white;background-color:#449;background-image:url(${require('../../../images/fc-regulations-top-image-caregiver-regulations.jpg')});background-size:cover;background-position:center;}              
        section:first-of-type {
          padding-top: 105px;
        }
        @media (min-width: 992px)
          section:first-of-type {
            padding-top: 101px;
          }
        }
      `}</style>

        </DefaultLayout>
    );
};

export default Page;
