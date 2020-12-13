import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: React.FC = () => (
    <DefaultLayout>

        <SEO
            title="Learning &amp; Working as a Sleep Consultant During COVID-19"
            description="See how you can earn your certification and run your very sleep consulting business safely during COVID-19!"
            canonical="/courses-and-tuition/sleep-consultant/working-during-covid"
        />

        <section id="heroSection">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-8 offset-4 sm-offset-0">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">Learning &amp; Working as a Sleep Consultant During COVID-19</h1>
                                <p className="lead">See how you can earn your certification and run your very sleep consulting business safely during COVID-19!</p>
                                <p className="lead">Learn from the safety of home with QC’s online courses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12">
                        <h2 className="h3">How QC Sets You Up to Succeed</h2>
                        <ul>
                            <li>Study from the comfort of home with a fully online course</li>
                            <li>Receive virtual one-on-one support from your tutor</li>
                            <li>Reach out to the Student Support Team 7 days a week for assistance</li>
                            <li>Access your course materials any time in the online student center</li>
                            <li>Choose from flexible, affordable tuition payment options</li>
                            <li>Get up to 2 full years to complete your course</li>
                            <li>Become a certified Infant Sleep Consulting Professional (ISCP™) upon successful completion of the course</li>
                        </ul>
                        <p><a href="/courses-and-tuition/sleep-consultant">Learn more about QC Wellness Studies' Sleep Consultant Course!</a></p>
                    </div>
                </div>      
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12">
                        <p><img className="img-fluid" src={require('../../../images/sleep-consultant-home-office.jpg')} alt="Sleep Consultant Home Office" /></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12">
                        <h2 className="h3">*****</h2>
                        <p>“The Sleep Consultant Course divides the learning into easy-to-digest portions. The assignments effectively reflect the information taught in each section, and there’s a variety of different types of assignments to test and apply your knowledge. I had a wonderful experience as a student at QC Wellness School! My favorite thing about my program was the quick feedback from my instructor. I enjoyed that it was always provided to me in a detailed audio message. It felt so personal!”</p>
                        <p>-Sarah Pashniak, ISCP™</p>
                        <p>QC Graduate</p>
                        <p>Learn more about Sarah’s experience with QC’s Sleep Consultant Course <a href="/student-features">here</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12">
                        <h2 className="h3">You Can Still Earn an Income for Your Sleep Consultant Business During COVID-19</h2>
                        <p className="lead">Continue to book clients and make a profit by adding any of the following services to your business:</p>
                        <ul>
                            <li>Introduce virtual services to your business, such as virtual sleep consultations</li>
                            <li>When it’s safe to meet with clients in-person, insist that everyone wear a mask</li>
                            <li>Start your own sleep consulting blog or write as a subject-matter expert for other blogs/publications</li>
                            <li>Become an authority on infant sleep consulting on social media</li>
                            <li>Teach clients about sleep training through virtual classes (i.e. one-on-one, group classes, etc.)</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12">
                        <p><img className="img-fluid" src={require('../../../images/baby-girl-sleeping.jpg')} alt="Baby Girl Sleeping" /></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12">
                        <h2 className="h3">Tips for Keeping Yourself and Clients Safe</h2>
                        <p className="lead">When working with clients and their infants in person, you should follow strict practices to keep everyone safe.</p>
                        <p className="lead">COVID-19 Safety Protocols for Sleep Consultants:</p>
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12">
                        <p><img className="img-fluid" src={require('../../../images/little-boy-medical-mask.jpg')} alt="Little boy with a mask" /></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12 mb-lg-0">
                        <h2 className="h3">Start Your Journey</h2>
                        <p className="lead">It’s never too early or too late to begin a career you’ll love.</p>
                        <p className="lead">Enroll in QC’s Sleep Consultant Course today and launch a successful career in as little as 3-6 months!</p>
                        <a href="https://enroll.qcwellnessstudies.com/" className="btn btn-secondary btn-lg mt-4">ENROLL NOW</a>
                    </div>
                </div>              
            </div>
        </section>       

        <style jsx>{`       
      #heroSection{background-image:url(${require('../../../images/sleep-consultant-remote-work.jpg')});background-size:cover;background-position:center}
      .course-icon{width:80px}
    `}</style>

    </DefaultLayout>
);

export default Page;
