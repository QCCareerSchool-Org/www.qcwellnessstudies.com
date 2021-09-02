import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { IoMdFiling } from 'react-icons/io';
import { About } from '../../../components/about';
import { Contact } from '../../../components/contact';
import { Guarantee } from '../../../components/guarantee';
import { HowItWorks } from '../../../components/how-it-works';
import { PriceCard } from '../../../components/price-card';
import { SEO } from '../../../components/seo';
import { Subnav } from '../../../components/subnav';
import { usePrice } from '../../../hooks/usePrice';
import { MinimalLayout } from '../../../layouts/mimimal';
import { formatPrice } from '../../../lib/functions';
import { useLocation } from '../../../providers/location';

const courses = [ 'fc' ];

const Page: NextPage = () => {
  const location = useLocation();
  const price = usePrice(courses, location?.countryCode, location?.provinceCode);

  return (
    <MinimalLayout
      SecondaryNav={(): React.ReactElement => (
        <Subnav
          heading="Professional Caregiver Course Preview"
          items={[
            { name: 'Curriculum', url: '#curriculum' },
            { name: 'Tuition', url: '#tuition' },
            { name: 'Support', url: '#support' },
            { name: 'Guarantee', url: '#guarantee' },
          ]}
        />
      )}
    >

      <SEO
        title="Professional Caregiver Course Preview"
        description="Preview the online professional caregiver course offered by QC. Read a detailed course overview, sample some assignments, meet your tutors, and more!"
        canonical="/courses-and-tuition/professional-caregiving/preview"
        noIndex={true}
      />

      <section id="heroSection">
        <div className="container text-center">
          <div className="row mt-5">
            <div className="col-12 col-md-10 offset-md-1">
              <p><img src={require('../../../images/icon-fcgp.png')} alt="Formal Caregiving Professional Certification" /></p>
              <h1>PROFESSIONAL CAREGIVING<br />CERTIFICATION COURSE</h1>
              <h2 className="h3">Course Preview</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="introSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-3">
              <h2 className="text-dark">Professional Caregiver Course</h2>
              <p>Sometimes people just need a little extra help in their daily lives. That&apos;s where you come in! As a professional caregiver, you&apos;ll offer your clients assistance in their daily activities, allowing them to maintain their independence and wellbeing. This is an ever in-demand industry with a growing client base for obvious reasons. Experienced caregivers are in incredibly high demand!</p>
              <p>While you can work for an agency, the reality is that you can make a lot more money as a caregiver by working independently. QC&apos;s online course equips you with everything you need to begin your career as an independent professional caregiver. To run an effective caregiving business you must learn about best practices and techniques. You must also know how to communicate with clients and develop the management expertise needed to run a profitable company.</p>
              <p>This course is perfect for anyone who loves helping people and wants to work in the caregiving industry, either part-time or full-time.<strong> This includes</strong></p>
              <ul>
                <li>Young professionals looking to enter the caregiving/medical industry</li>
                <li>Individuals with prior caregiving experience looking for steady work/income</li>
                <li>Retired individuals who are looking to provide companionship services</li>
                <li>Professionals already working in the healthcare and/or wellness industries</li>
              </ul>
              <p><em>Are you looking for training to care for your loved ones at home? QC&apos;s Personal Caregiver course could be for you! <Link href="/courses-and-tuition/personal-caregiving"><a className="text-info">Learn more about Personal Caregiving</a></Link>.</em></p>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="online"></a>
      <section id="onlineSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="text-light">Why become an Independent Professional Caregiver?</h2>
              <p className="text-light">Caregiving professionals are in high demand! Operating as an independent (or &ldquo;freelance&rdquo;) professional caregiver allows you the flexibility to make your own professional choices!</p>
              <ul className="text-light">
                <li><p><strong>Choose your own clients:</strong> Pick the types of clients you&apos;d like to work with.</p></li>
                <li><p><strong>Set your rates:</strong> You don&apos;t have to be paid minimum wage for this important work! As an independent professional caregiver, you set your salary.</p></li>
                <li><p><strong>Establish a network:</strong> By providing excellent service at competitive prices, you can quickly grow a network of clients who trust you.</p></li>
                <li><p><strong>Earn a good living:</strong> Caregivers  earn just as much as other home care professionals including Home Health Aides and Nursing Assistants, without the medical tasks.</p></li>
              </ul>
              <p className="text-light">Running your own business is a great way to turn a rewarding job into a fulfilling career!</p>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="howItWorks"></a>
      <section id="howItWorksSection">
        <HowItWorks
          courseName="Professional Caregiving Course"
          adjective="practical caregiver"
          tutorOccupation="professional caregiver"
          certification="Formal Caregiving Professional (FCGP™)"
          tutor={(
            <>
              <p>When you enroll in the caregiver course, you&apos;ve assigned a personal tutor who is responsible for evaluating/grading your work and providing detailed feedback on your assignments. After you submit a unit for grading, you&apos;ll receive detailed audio feedback from your tutor who will explain exactly where you excelled and where you need some improvement.</p>
              <p>Your tutor is your best resource throughout the course! They&apos;ve taken the journey you&apos;re taking now and have done it successfully. Take their feedback to heart. They want to see you succeed!</p>
            </>
          )}
          caseStudiesExtended="As part of this course, you&apos;ll be presented with a number of practical assignments and case studies that will put you in the shoes of a professional caregiver to test your technical skills and practical knowledge."
        />
      </section>

      <a className="anchor" id="curriculum"></a>
      <section id="curriculumSection">
        <div className="container">
          <div className="row">
            <div className="text-center col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-5">
              <h2 className="text-dark mb-4 text-center">Course Curriculum</h2>
              <p>The professional caregiver course is divided into six units. You&apos;ll start by learning the basics of caregiving, and then build on that knowledge as you work your way through the course. Once you&apos;ve completed the course, you&apos;ll be fully qualified to work as an independent professional caregiver!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-5">
              <p><img className="img-fluid" src={require('../../../images/pc-outline-a.jpg')} alt="Caregiver Course Unit A" /></p>
              <h3 className="text-dark">Unit A: Introduction to<br />Caregiving</h3>
              <p>In this first unit, you&apos;ll learn what it means to be a professional caregiver. You&apos;ll learn the details of the job, how you&apos;ll interact with clients, and (just as importantly) what types of duties you WON&apos;T be expected to complete. You&apos;ll then learn how to perform your initial client consultation, including what information you&apos;ll need to collect, and how to evaluate safety requirements for each client. Finally, you&apos;ll learn how to establish and work with a detailed care plan for every client you take on.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mb-5">
              <p><img className="img-fluid" src={require('../../../images/pc-outline-b.jpg')} alt="Caregiver Course Unit B" /></p>
              <h3 className="text-dark">Unit B: Working with<br />Clients</h3>
              <p>Now that you have a good idea of your role as a caregiver, you&apos;ll start to learn how to put that knowledge to use when working with clients. Your clients will have a number of different challenges they face every day. As a caregiver, you&apos;ll have to work hard at remaining professional and establishing healthy boundaries with your clients while still developing meaningful relationships. This can be a tricky skill to master! Later in the unit, you&apos;ll focus on understanding your client&apos;s unique needs based on their own challenges.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-5">
              <p><img className="img-fluid" src={require('../../../images/pc-outline-c.jpg')} alt="Caregiver Course Unit C" /></p>
              <h3 className="text-dark">Unit C: Working as a Caregiver</h3>
              <p>In this next unit, you&apos;ll dive into the specific services you&apos;ll offer as a caregiver, and start developing those skills. Whether you plan on providing all these services once you start your business, it&apos;s important to have the full range of skills required to be a successful caregiver. This unit will also allow you to explore the different workplace settings available to you, should you choose to work for a caregiving agency instead of starting your own business.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mb-5">
              <p><img className="img-fluid" src={require('../../../images/pc-outline-d.jpg')} alt="Caregiver Unit D" /></p>
              <h3 className="text-dark">Unit D: Technical Skills</h3>
              <p>This highly practical unit is where you&apos;ll learn the core technical skills any Caregiver needs to have. When working with individuals who have limited independence, caregivers are sometimes required to help with basic daily tasks such as dressing, toileting, bathing/showering, or helping their client move around, for example. There are very specific methods to follow that are safe and ensure you preserve your client&apos;s dignity as you perform these delicate tasks.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-5">
              <p><img className="img-fluid" src={require('../../../images/pc-outline-e.jpg')} alt="Caregiver Unit E" /></p>
              <h3 className="text-dark">Unit E: Client Scenarios</h3>
              <p>In Unit E, you&apos;ll read a variety of hypothetical challenging situations and learn how to handle each one. You&apos;ll use the scenarios outlined in your course text as a guide to help you start thinking like a Formal Caregiver. Then you&apos;ll complete scenario-based assignments to practice interacting with clients in challenging situations.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mb-5">
              <p><img className="img-fluid" src={require('../../../images/fcg-unit-f-course-outline.jpg')} alt="Caregiver Unit F" /></p>
              <h3 className="text-dark">Unit F: Business Training Unit</h3>
              <p>Wrap up your course with this interactive business training unit. You&apos;ll work through the specific elements of getting your business off the ground: from setting your prices to finding your first clients, building your website, marketing your services and much more. This unit can help your career launch in high gear!</p>
            </div>
            <div className="text-center col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <p className="lead"><strong>Note:</strong> Above is an overview of the professional caregiver course curriculum. For a full and detailed course outline, click below.</p>
              <Link href="/courses-and-tuition/professional-caregiving#outline"><a className="btn btn-outline-secondary text-uppercase">Full Course Outline</a></Link>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="tuition"></a>
      <section id="tuitionSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-lg-5 offset-lg-0 col-xl-4">
              <PriceCard courses={[ 'fc' ]} />
            </div>
            <div className="col-12 mb-5 col-md-12 col-lg-7 mb-lg-0 col-xl-8 text-center text-lg-left order-first order-lg-last">
              <h2 className="text-dark">Tuition &amp; Payment Plans</h2>
              <p>The caregiver course has a tuition of {price?.currency.symbol}{formatPrice(price?.discountedCost)}, or <mark>{price?.currency.symbol}{formatPrice(price?.plans.full.total)} with the pay-in-full discount</mark>. This cost includes everything that has to do with your training, tutorial, and certification!</p>
              <h3>Choose Your Payment Date</h3>
              <p>As an added level of convenience, if you choose to pay your tuition on an installment plan, you&apos;ll be able to select the date your payments start and on which of the month your tuition payments will be processed. If you&apos;re on a fixed budget or would like to sync your tuition payments with other monthly expenses, there&apos;s no easier way to do it!</p>
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
              <p>Just because you&apos;re learning online doesn&apos;t mean you&apos;ll be learning alone. As part of the QC community, you&apos;ll have access to a network that will support and encourage you through your entire journey.</p>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1">
              <p><img className="img-fluid" src={require('../../../images/tutor.jpg')} alt="tutor" /></p>
              <h3 className="text-dark">Your Tutor</h3>
              <p>Your personal tutor will be responsible for grading your work and providing detailed audio feedback on all your assignments. Use this feedback to gain encouragement and inspiration in the areas where you excel, and also to help improve skills you haven&apos;t quite mastered yet.</p>
              <p>All of QC&apos;s tutors are professionals with years of experience in the caregiving industry. They&apos;re uniquely qualified to help you along your journey because they&apos;ve been in your shoes and they understand the value you will have as a professional caregiver.</p>
            </div>
            <div className="mt-4 mt-lg-0 col-12 col-lg-5">
              <p><img className="img-fluid" src={require('../../../images/student-advisor.jpg')} alt="student advisor" /></p>
              <h3 className="text-dark">Your Student Advisor</h3>
              <p>QC&apos;s Student Support team is available 7 days a week to assist you with your studies in any way they can! Your student advisor will be your first point of contact with the school, and will be able to assist you with just about anything with regards to your online training. Contact your student advisor at any time for help with</p>
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
                <p>As part of the online student center, you&apos;ll have access to the exclusive QC Career School student forum. You&apos;ll be able to communicate directly with fellow students and graduates to discuss course work, assignment questions, starting your own business, and other industry-related topics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="guarantee"></a>
      <section id="guaranteeSection">
        <Guarantee
          courseName="Caregiver"
          doubleGuarantee={false}
          twentyOneDays={(
            <>
              <p>Once your enrollment has been processed and you gain access to the online student center, you have 21 days to review the course materials and decide whether you want to take the course.</p>
              <p>This is your chance to inspect the entire course, risk-free! If you decide this course isn&apos;t the right fit for you, simply contact your student advisor to withdraw from the course. As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>
            </>
          )}
        />
      </section>

      <a className="anchor" id="about"></a>
      <section id="aboutSection">
        <About profession="a caregiver" />
      </section>

      <section id="contactSection">
        <Contact />
      </section>

      <section id="enrollSection" className="text-light text-center">
        <div className="container">
          <h2>Enroll Today</h2>
          <p className="lead mb-5">Start your online caregiver training today<br />and launch an exciting, rewarding career!</p>
          <p><a href="https://enroll.qcwellnessstudies.com/?c[]=fc" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
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
