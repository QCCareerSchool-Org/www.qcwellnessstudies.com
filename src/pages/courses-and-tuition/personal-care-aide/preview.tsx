import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

import { IoMdDownload, IoMdFiling } from 'react-icons/io';
import { About } from '../../../components/about';
import { Contact } from '../../../components/contact';
import { Guarantee } from '../../../components/guarantee';
import { HowItWorks } from '../../../components/how-it-works';
import { PriceCard } from '../../../components/price-card';
import { SEO } from '../../../components/seo';
import { Subnav } from '../../../components/subnav';
import { formatPrice } from '../../../functions';
import { usePrice } from '../../../hooks/usePrice';
import { useToggle } from '../../../hooks/useToggle';
import { MinimalLayout } from '../../../layouts/mimimal';
import { useLocation } from '../../../providers/location';

const Page: NextPage = () => {
  const [ popup1, toggle1 ] = useToggle();
  const [ popup2, toggle2 ] = useToggle();
  const location = useLocation();
  const price = usePrice([ 'pc' ], location?.countryCode, location?.provinceCode);

  return (
    <MinimalLayout SecondaryNav={(): React.ReactElement => (
      <Subnav
        heading="Sleep Consultant Course Preview"
        items={[
          { name: 'Curriculum', url: '#curriculum' },
          { name: 'Tuition', url: '#tuition' },
          { name: 'Support', url: '#support' },
          { name: 'Guarantee', url: '#guarantee' },
        ]}
      />
    )}>

      <SEO
        title="Personal Care Aide Course Preview"
        description="Preview the online personal care aide course offered by QC. Read a detailed course overview, sample some assignments, meet your tutors, and more!"
        canonical="/courses-and-tuition/personal-care-aide/preview"
      />

      <section id="heroSection">
        <div className="container text-center">
          <div className="row mt-5">
            <div className="col-12 col-md-10 offset-md-1">
              <p><img src={require('../../../images/certification-pcgp.png')} alt="Infant Sleep Consulting Professional Certification" /></p>
              <h1>PERSONAL CARE AIDE<br />CERTIFICATION COURSE</h1>
              <h2 className="h3">Course Preview</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="introSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-3">
              <h2 className="text-dark">Personal Care Aide Certification Course</h2>
              <p>Sometimes people just need a little extra help in their daily lives. That's where you come in! As a professional personal caer aide, you'll offer your clients assistance in their daily activities, allowing them to maintain their independence and wellbeing. This is an ever in-demand industry with a growing client base for obvious reasons. Experienced PCAs are in incredibly high demand!</p>
              <p>While you can work for an agency, the reality is that you can make a lot more money as a PCA by working independently. QC's online course equips you with everything you need to begin your career as an independent personal care aide. To run an effective caregiving business you must learn about best practices and techniques. You must also know how to communicate with clients and develop the management expertise needed to run a profitable company.</p>
              <p>This course is perfect for anyone who loves helping people and want to work in the caregiving industry, either part-time or full-time.<strong> This includes:</strong></p>
              <ul>
                <li>Young professionals looking to enter the caregiving/medical industry</li>
                <li>Individuals with prior caregiving experience looking for steady work/income</li>
                <li>Retired individuals who are looking to provide companionship services</li>
                <li>Professionals already working in the healthcare and/or wellness industries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="online"></a>
      <section id="onlineSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="text-light">Why become a Freelance Personal Care Aide?</h2>
              <p className="text-light">PCAs are in high demand! Freelancing as a PCA allows you the flexibility to make your own professional choices!</p>
              <ul className="text-light">
                <li><p><strong>Choose your own clients:</strong> Pick the types of clients you're willing to work with, and the ones you want to avoid.</p></li>
                <li><p><strong>Set your rates:</strong> You don't have to be paid minimum wage for this important work! As a freelance PCA, you set your salary.</p></li>
                <li><p><strong>Establish a network:</strong> By providing excellent service at competitive prices, you can quickly grow a network of clients who trust you.</p></li>
                <li><p><strong>Earn a good living:</strong> PCAs earn just as much as other caregivers including Home Health Aides and Nursing Assistants, without the medical tasks.</p></li>
              </ul>
              <p className="text-light">Running your own PCA business is a great way to turn a rewarding job into a fulfilling career!</p>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="howItWorks"></a>
      <section id="howItWorksSection">
        <HowItWorks />
      </section>

      <a className="anchor" id="curriculum"></a>
      <section id="curriculumSection">
        <div className="container">
          <div className="row">
            <div className="text-center col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-5">
              <h2 className="text-dark mb-4 text-center">Course Curriculum</h2>
              <p>The personal care aide course is divided into five units. You'll start by learning the basics of caregiving, and then build on that knowledge as you work your way through the course. Once you've completed the course, you'll be fully qualified to work as a freelance personal care aide!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-5">
              <p><img className="img-fluid" src={require('../../../images/pc-outline-a.jpg')} alt="Personal Care Aide Course Unit A" /></p>
              <h3 className="text-dark">Unit A: Introduction to<br />Caregiving</h3>
              <p>In this first unit, you'll learn what it means to be a personal care aide. You'll learn the details of the job, how you'll interact with clients, and (just as importantly) what types of duties you WON'T be expected to complete as a PCA.  You'll then learn how to perform your initial client consultation, including what information you'll need to collect, and how to evaluate safety requirements for each client. Finally, you'll learn how to establish and work with a detailed care plan for every client you take on.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mb-5">
              <p><img className="img-fluid" src={require('../../../images/pc-outline-b.jpg')} alt="Personal Care Aide Course Unit B" /></p>
              <h3 className="text-dark">Unit B: Working with<br />Clients</h3>
              <p>Now that you have a good idea of your role as a caregiver, you'll start to learn how to put that knowledge to use when working with clients. Your clients will have a number of different challenges they face every day. As a PCA, you'll have to work hard at remaining professional and establishing healthy boundaries with your clients while still developing meaningful relationships. This can be a tricky skill to master!  Later in the unit, you'll focus on understanding your client's unique needs based on their own challenges.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-5">
              <p><img className="img-fluid" src={require('../../../images/pc-outline-c.jpg')} alt="Personal Care Aide Course Unit C" /></p>
              <h3 className="text-dark">Unit C: Working as a PCA</h3>
              <p>In this next unit, you'll dive into the specific services you'll offer as a PCA, and start developing those skills. Whether you plan on providing all these services once you start your business, it's important to have the full range of skills required to be a successful PCA. This unit will also allow you to explore the different workplace settings available to you as a PCA, should you choose to work for a caregiving agency instead of starting your own PCA business.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mb-5">
              <p><img className="img-fluid" src={require('../../../images/pc-outline-d.jpg')} alt="Personal Care Aide Course Unit D" /></p>
              <h3 className="text-dark">Unit D: Technical Skills</h3>
              <p>This highly practical unit is where you'll learn the core technical skills any PCA needs to have. When working with individuals who have limited independence, caregivers are sometimes required to help with basic daily tasks such as dressing, toileting, bathing/showering, or helping their client move around, for example. There are very specific methods to follow that are safe and ensure you preserve your client's dignity as you perform these delicate tasks.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-2 mb-md-5">
              <p><img className="img-fluid" src={require('../../../images/pc-outline-e.jpg')} alt="Personal Care Aide Course Unit E" /></p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mb-5">
              <h3 className="text-dark">Unit E: (Optional) Business Training Unit</h3>
              <p>If you plan on launching your own caregiving business, don't skip this essential final unit! You'll work through the specific elements of getting your business off the ground: from setting your prices to finding your first clients, building your website, marketing your services and much more. This unit can help your career launch in high gear!</p>
            </div>
            <div className="text-center col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <p className="lead"><strong>Note:</strong> Above is an overview of the personal care aide course curriculum. For a full and detailed course outline, click below.</p>
              <Link href="/courses-and-tuition/personal-care-aide#outline"><a className="btn btn-outline-secondary text-uppercase">Full Course Outline</a></Link>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="tuition"></a>
      <section id="tuitionSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-lg-5 offset-lg-0 col-xl-4">
              <PriceCard courses={[ 'pc' ]} />
            </div>
            <div className="col-12 mb-5 col-md-12 col-lg-7 mb-lg-0 col-xl-8 text-center text-lg-left order-first order-lg-last">
              <h2 className="text-dark">Tuition &amp; Payment Plans</h2>
              <p>The personal care aide course has a tuition of {price?.currency.symbol}{formatPrice(price?.discountedCost)}, or <mark>{price?.currency.symbol}{formatPrice(price?.plans.full.total)} with the pay-in-full discount</mark>. This cost includes everything that has to do with your training, tutorial, and certification!</p>
              <h3>Choose Your Payment Date</h3>
              <p>As an added level of convenience, if you choose to pay your tuition on an installment plan, you'll be able to select the date your payments start and on which of the month your tuition payments will be processed. If you're on a fixed budget or would like to sync your tuition payments with other monthly expenses, there's no easier way to do it!</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
              <hr className="my-4" />
              <IoMdFiling size={40} />
              <h3>Your Tuition Is Tax Deductible!</h3>
              <p>Claim part or all of your tuition payments on your income taxes. If you need a receipt or help with a specific tax form, simply contact your student advisor for assistance.</p>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="support"></a>
      <section id="supportSection">
        <div className="container">
          <div className="row">
            <div className="text-center col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-4">
              <p><img src={require('../../../images/icon-live-chat.svg')} alt="live chat icon" /></p>
              <h2 className="text-dark">Your Support System</h2>
              <p>Just because you're learning online doesn't mean you'll be learning alone. As part of the QC community, you'll have access to a network that will support and encourage you through your entire journey.</p>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1">
              <p><img className="img-fluid" src={require('../../../images/tutor.jpg')} alt="tutor" /></p>
              <h3 className="text-dark">Your Tutor</h3>
              <p>Your personal tutor will be responsible for grading your work and providing detailed audio feedback on all your assignments. Use this feedback to gain encouragement and inspiration in the areas where you excel, and also to help improve skills you haven't quite mastered yet.</p>
              <p>All of QC's sleep consulting tutors are working, certified professional sleep consultants. They're uniquely equipped to challenge you in your studies and launch your own business because they've done this successfully themselves!</p>
            </div>
            <div className="mt-4 mt-lg-0 col-12 col-lg-5">
              <p><img className="img-fluid" src={require('../../../images/student-advisor.jpg')} alt="student advisor" /></p>
              <h3 className="text-dark">Your Student Advisor</h3>
              <p>QC's Student Support team is available 7 days a week to assist you with your studies in any way they can! Your student advisor will be your first point of contact with the school, and will be able to assist you with just about anything with regards to your online training. Contact your student advisor at any time for help with</p>
              <ul>
                <li>Questions about your online course</li>
                <li>Questions about your assignments</li>
                <li>Questions about launching your caregiving business</li>
                <li>Managing your tuition payments</li>
                <li>Enrolling in additional courses</li>
              </ul>
            </div>
            <div className="mt-4 col-12 col-lg-10 offset-lg-1">
              <div className="alert alert-primary" role="alert">
                <h3>Student Forum</h3>
                <p>As part of the online student center, you'll have access to the exclusive QC Career School student forum. You'll be able to communicate directly with fellow students and graduates to discuss course work, assignment questions, starting your own business, and other industry-related topics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="guarantee"></a>
      <section id="guaranteeSection">
        <Guarantee
          courseName="Sleep Consultant"
          doubleGuarantee={false}
          twentyOneDays={(
            <>
              <p>Once your enrollment has been processed and you gain access to the online student center, you have 21 days to review the course materials and decide whether you want to take the course.</p>
              <p>This is your chance to inspect the entire course, risk-free! If you decide this course isn't the right fit for you, simply contact your student advisor to withdraw from the course. As long as you haven't submitted any work to your tutor yet, your tuition will be refunded in full!</p>
            </>
          )}
        />
      </section>

      <a className="anchor" id="about"></a>
      <section id="aboutSection">
        <About />
      </section>

      <section id="contactSection">
        <Contact />
      </section>

      <section id="enrollSection" className="text-light text-center">
        <div className="container">
          <h2>Enroll Today</h2>
          <p className="lead mb-5">Start your online personal care aide training today<br />and launch an exciting, rewarding career!</p>
          <p><a href="https://enroll.qcwellnessstudies.com/" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
        </div>
      </section>

      <style jsx>{`
        #heroSection{color:white;background-color:#449;background-image:url(${require('../../../images/pc-get-a-preview-hero.jpg')});background-size:cover;background-position: center; }
        #howItWorksSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
        #supportSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
        #aboutSection{background-image:url(${require('../../../images/bg-about-qc.jpg')});background-size:cover}
        #sampleAssignmentSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
        #enrollSection{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}
        #onlineSection{background-image:url(${require('../../../images/bg-fully-online.jpg')});background-size:cover;background-position: center}
      `}</style>

    </MinimalLayout>
  );
};

export default Page;
