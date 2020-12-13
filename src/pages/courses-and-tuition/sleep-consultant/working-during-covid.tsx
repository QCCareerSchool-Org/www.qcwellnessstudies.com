import Link from 'next/link';
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
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12 mb-lg-0">
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
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12 mb-lg-0">
                        <p><img className="img-fluid" src={require('../../../images/sleep-consultant-home-office.jpg')} alt="Sleep Consultant Home Office" /></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12 mb-lg-0 text-center">
                        <h2 className="h3">*****</h2>
                        <p>“The Sleep Consultant Course divides the learning into easy-to-digest portions. The assignments effectively reflect the information taught in each section, and there’s a variety of different types of assignments to test and apply your knowledge. I had a wonderful experience as a student at QC Wellness School! My favorite thing about my program was the quick feedback from my instructor. I enjoyed that it was always provided to me in a detailed audio message. It felt so personal!”</p>
                        <p>-Sarah Pashniak, ISCP™</p>
                        <p>QC Graduate</p>
                        <p>Learn more about Sarah’s experience with QC’s Sleep Consultant Course <a href="/student-features">here</a></p>
                    </div>
                </div>










                <div>
                    <div>
                        <Link href="/courses-and-tuition/sleep-consultant"><a className="btn btn-secondary mt-3 mb-3">Course Overview</a></Link>
                    </div>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 order-lg-1">
                        <p><img className="img-fluid" src={require('../../../images/student-feature/sarah-pashniak-family-lake.jpg')} alt="Sarah Pashniak Family in the Lake" /></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6 mb-lg-0">
                        <h2 className="h3">Life as a QC Student</h2>
                        <p>I had a wonderful experience as a student at QC Wellness School! My favorite thing about my program was the quick feedback from my instructor. I enjoyed that it was always provided to me in a detailed audio message. It felt so personal!</p>
                        <p>I also found the turnaround rate (from when I’d submit my unit to when I’d receive my tutor’s feedback) to be exceptionally fast. If I needed any support or had questions about my assignment, I could ask my tutor. They were always there to help!</p>
                        <p>Not to mention, there was also the Student Support Team. I was always able to reach out to them by phone, email, or live chat. The entire QC staff supports you, helps you with assignments, and answers any questions you may have!</p>
                        <Link href="/courses-and-tuition/sleep-consultant#tutors"><a className="btn btn-secondary mt-3 mb-3">Meet Your Tutor</a></Link>
                        <h2 className="h3">Business Training</h2>
                        <p>I would definitely recommend that you take the additional business training, especially if you have any goals of starting your own business. After all, how you market your business is key to your success! If you have no business training, how can you ever hope to run one?</p>
                    </div>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <p><img className="img-fluid" src={require('../../../images/student-feature/sarah-pashniak-office.jpg')} alt="Sarah Pashniak Office" /></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12 mb-lg-0">
                        <h2 className="h3">The Challenges of a Sleep Consultant</h2>
                        <p>Letting the client know that it’s okay to ask for help is a big challenge. A lot of the time, parents think that they’re doing something wrong if their baby doesn’t sleep well. They feel that they should be able to figure it out all by themselves, and that if they can’t, they’re somehow falling short as a parent. But this is not true at all!</p>
                        <p>Also, I often hear mothers say that they were always under the impression that constantly being tired was “just a part” of motherhood. This is also false!</p>
                        <p>As a professional sleep consultant, it’s important to remind parents that they’re doing a fabulous job, and that it’s not only okay, but healthy to ask for support if they need it.</p>
                        <h2 className="h3">Building the Brand</h2>
                        <p>To be honest, social media is a mystery to me! I’m slowly learning more about it, though. I was never overly into sites like Facebook or Instagram before. But in today’s market, these types of online forums are essential for a successful business!</p>
                        <p>Your website and social media pages reflect your business. You need to find a balance of demonstrating knowledge and promoting yourself and your brand. Your first impression on both potential clients and followers is made by the overall look of your page.</p>
                        <p>As a general tip, when you begin building your business on these platforms, consider the colors and content you want to be associated with your business. This will help build your brand and make you recognizable to your audience!</p>
                    </div>
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12 mb-lg-0">
                        <h2 className="h3">Why Choose QC?</h2>
                        <p>I chose an online school because I have three children at home and I needed flexibility. I liked that I was able to dedicate chunks of time whenever I had a spare hour or two. I chose QC Wellness Studies to complete my certification because it offered a number of different perks that worked for my budget and busy lifestyle. In particular</p>
                        <ol>
                            <li>I found the course to be very affordable.</li>
                            <li>I liked how my questions were responded to quickly by the staff, and always in a friendly manner.</li>
                            <li>I was able to complete the course at my own pace. This is a great option if you have children, another job, etc.</li>
                            <li>I was able to complete the entire course online.</li>
                        </ol>
                        <Link href="/how-it-works"><a className="btn btn-secondary mt-3 mb-3">How Online Learning Works</a></Link>
                        <h2 className="h3">Your Proudest Moment</h2>
                        <p>It’s difficult to name just one proud moment, because my sleep coaching journey has been so rewarding. It’d constantly filled with small celebrations!</p>
                        <p>However, I’d have to say that one I am very proud of is how many families I’ve been able to work with in the last eight months. In that time, I’ve helped over 50 infants and their families! I’ve also developed friendships, and connected with several women who follow me on social media.</p>
                        <p>I am going to continue to work hard and grow my business! I’ll see where my hard work and dedication takes me. If this past year has taught me anything, it’s that there are a lot of surprises in store. Social media allows for people to connect in such unique ways, so hopefully more opportunities come my way!</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="enrollSection" className="text-light text-center">
            <div className="container">
                <h2>Enroll Online Today!</h2>
                <p className="h5 sans-serif">Become a certified sleep consultant with QC and start a successful business like Sarah did!</p>
                <a href="https://enroll.qcwellnessstudies.com/" className="btn btn-secondary btn-lg mt-4">ENROLL ONLINE</a>
            </div>
        </section>

        <style jsx>{`
      #enrollSection{background-image: url(${require('../../../images/bg-enrollment.jpg')});background-size: cover;}
      #guaranteeSection{background-image: url(${require('../../../images/bg-white-green-light.jpg')});background-size: cover;}
      #partnerSection{background-image: url(${require('../../../images/bg-dark-green-navy.jpg')});background-size: cover;}
      #heroSection{background-image:url(${require('../../../images/sleep-consultant-remote-work.jpg')});background-size:cover;background-position:center}
      .course-icon{width:80px}
    `}</style>

    </DefaultLayout>
);

export default Page;
