import Link from 'next/link';
import React from 'react';

import { Certification } from '../../../components/Certification';
import { Guarantee } from '../../../components/Guarantee';
import { Included } from '../../../components/Included';
import { PaymentPlans } from '../../../components/PaymentPlans';
import { SEO } from '../../../components/SEO';
import { Subnav } from '../../../components/Subnav';
import { UnitOutline } from '../../../components/UnitOutline';
import { WhyChoose } from '../../../components/WhyChose';
import { fcUnits } from '../../../data/units-fc';
import { DefaultLayout } from '../../../layouts/DefaultLayout';
import { NextPageWithLayout } from '../../_app.page';

const doubleGuarantee = false;

const Page: NextPageWithLayout = () => (
  <>
    <SEO
      title="Caregiver Course"
      description="Become a certified professional caregiver with QC's online training. QC offers a fully-online caregiver course. Get certified faster and launch your own business!"
      canonical="/courses-and-tuition/aging-in-place"
    />

    <section id="heroSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-7">
            <h1>Professional Caregiver Course</h1>
            <h2 className="h5">Get certified with a fully-online course</h2>
            <ul>
              <li>Study from home on your own schedule!</li>
              <li>Learn how to freelance or run your own business.</li>
              <li>Get a complete education and become certified in as little as three months!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <a className="anchor" id="promo"></a>
    <section className="text-dark text-center">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <p><img className="img-fluid" src={require('../../../images/promo-inlay-december.png')} alt="December Promo" /></p>
            <p className="lead mb-5">Save an extra $100 on your professional caregiver course tuition.<br />This discount will be automatically applied when you enroll.</p>
            <p><a className="btn btn-secondary btn-lg" href="https://enroll.qcwellnessstudies.com/?c=fc">ENROLL NOW</a></p>
          </div>
        </div>
      </div>
    </section>

    <a className="anchor" id="paymentPlans"></a>
    <section id="paymentPlansSection" className="bg-light">
      <PaymentPlans courses={[ 'fc' ]} doubleGuarantee={doubleGuarantee} />
    </section>

    <section id="whatSection">
      <div className="container">
        <h2 className="text-dark text-center">What Is a Caregiver?</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
            <p>A caregiver is a very important part of a person&apos;s homecare team. You&apos;ll be on the front lines every day to help clients maintain their independence and wellbeing. You&apos;ll help them with daily tasks they may have trouble completing on their own.</p>
            <p>As a caregiver, your duties can include any or all of the following:</p>
            <ul>
              <li>Providing companionship and helping to keep clients engaged in their communities</li>
              <li>Helping clients with daily personal care tasks including bathing and dressing</li>
              <li>Helping clients perform general housekeeping duties including cleaning, laundry, dishes, etc.</li>
              <li>Organizing and/or providing transportation to appointments, outings, etc.</li>
              <li>Grocery shopping and/or meal preparation</li>
            </ul>
            <p>Note that caregivers are not healthcare professionals and do not provide medical services.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <p>You might hear different terms used to refer to caregivers, depending on where you live. Other common job titles for &ldquo;caregiver&rdquo; include, but are not limited to:</p>
            <ul>
              <li>Attendant Care Worker</li>
              <li>Direct Care Worker</li>
              <li>Direct Service Worker</li>
              <li>Home Attendant</li>
              <li>Home Care Aide</li>
              <li>Home Services Worker</li>
              <li>In-Home Aide</li>
              <li>Personal Care Aide</li>
              <li>Personal Care Services Worker</li>
              <li>Personal Services Attendant</li>
              <li>Personal Support Specialist</li>
              <li>Supportive Home Assistant</li>
            </ul>
            <p>If you are looking to become a temporary caregiver for your loved one and not a professional caregiver, QC also offers an <Link href="/courses-and-tuition/personal-caregiving"><a className="text-info">informal caregiver course</a></Link>.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="requirementsSection" className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-7 offset-lg-0">
            <h2>Basic Requirements for Becoming a Caregiver</h2>
            <p>Caregiving is a highly rewarding career. As an integral part of your clients&apos; wellness teams, you&apos;re there every day to put smiles on their faces and to help them maintain healthy and productive lives. If you genuinely enjoy helping people and are willing to advocate for your clients at every turn, this can be the perfect career for you.</p>
            <p>It&apos;s always a good idea to check local regulations before starting a new profession. Currently, the United States has no standardized <a className="text-dark" href="https://www.bls.gov/OOH/healthcare/home-health-aides-and-personal-care-aides.htm#tab-4" target="blank">licensing requirements</a> or training regulations for caregivers who work independently. &ldquo;Independent&rdquo; means that they are employed directly by their clients and bill clients directly.</p>
            <p>Successful caregivers all exhibit similar traits. Do you have what it takes?</p>
            <ul className="mb-4">
              <li><p><strong>Empathy &amp; Compassion</strong> &mdash; You&apos;re always able to put yourself in your clients&apos; shoes to understand their situations. You genuinely care about people and want to help in any way you can.</p></li>
              <li><p><strong>Good Communication Skills</strong> &mdash; You&apos;re able to clearly and effectively communicate with clients, family members and other professionals. You advocate in your clients&apos; best interests. You&apos;re patient and careful when you choose your words.</p></li>
              <li><p><strong>Physical Stamina</strong> &mdash; You&apos;re ready to work hard and have the physical strength to help your clients with mobility issues. You know your own limitations. You are ready to turn down a client if you know you won&apos;t have the physical ability to properly care for him or her.</p></li>
              <li><p><strong>Integrity &amp; Discretion</strong> &mdash; You understand the importance of respecting your clients&apos; privacy while working in their homes and helping them with sensitive tasks. You&apos;re discreet and would never dream of betraying a client&apos;s trust!</p></li>
            </ul>
            <p className="text-center"><a className="btn btn-secondary" href="https://enroll.qcwellnessstudies.com/?c=fc">ENROLL NOW</a></p>
          </div>
        </div>
      </div>
    </section>

    <section id="whatYoullLearnSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-5">
            <h2 className="text-dark">What You&apos;ll Learn</h2>
            <p className="lead">In this highly interactive self-paced training course, you&apos;ll learn about:</p>
            <ul className="mb-4">
              <li>The roles &amp; responsibilities of a Caregiver</li>
              <li>Performing a client consultation</li>
              <li>Working with a care plan</li>
              <li>Health &amp; safety considerations</li>
              <li>Special considerations for different types of clients</li>
              <li>Using a holistic approach to improve a client&apos;s health &amp; wellness</li>
              <li>Maintaining your own physical &amp; emotional health</li>
              <li>Activities of Daily Life (ADLs) and Instrumental Activities of Daily Living (IADLs)</li>
              <li>Identifying &amp; dealing with signs of abuse</li>
              <li>Understanding the human body, disabilities, and impairments</li>
              <li>Starting your own caregiving business</li>
            </ul>
            <a className="btn btn-dark" href="#outline" role="button">Read the Full Course Outline</a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <p className="d-none d-lg-block"><img src={require('../../../images/pc-what-youll-learn.jpg')} className="text-center img-fluid" alt="What you&apos;ll learn in the caregiver course" /></p>
          </div>
        </div>
      </div>
    </section>

    <section id="howYoullLearnSection" className="bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2>How You&apos;ll Learn</h2>
            <p>QC&apos;s signature online learning experience is designed for highly motivated and ambitious individuals!</p>
            <p>You&apos;ll learn at your own pace, with the help of your student advisor and your expert tutor. They will be with you every step of the way!</p>
            <ul>
              <li>Follow the course guide, which will tell you when you need to read a course book, watch a video or complete an assignment.</li>
              <li>Complete a variety of assignments including knowledge quizzes, open-ended discussions and comprehensive real-world case studies where you experience what it&apos;s like to be a professional caregiver.</li>
              <li>Upload your completed assignments to the Online Student Center.</li>
              <li>Your tutor will grade your work and provide feedback on every assignment.</li>
              <li>Graduate once you&apos;ve completed all your course units and your tuition has been paid in full.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="whyChooseQCSection">
      <WhyChoose
        subheader="Get certified faster and start a fulfilling career!"
        affordable="QC's course is fully online. You don't have to pay surcharges for attending lectures or classroom sessions. You complete the full course from home."
        flexible="No start dates, no deadlines, no mandatory attendance! This course is completely self-directed and self-paced. Get certified quickly or take your time. The choice is yours."
        comprehensive="You&apos;re not just learning how one caregiving company wants you do things. You&apos;re getting a foundation of knowledge in caregiving that will be useful no matter where you work!"
        courses={[ 'fc' ]}
      />
    </section>

    <section id="includedSection" className="bg-light text-dark">
      <Included certification="Formal Caregiving Professional (FCGP™)" />
    </section>

    <a className="anchor" id="outline"></a>
    <section id="outlineSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <h2 className="text-dark text-center">Full Course Outline</h2>
            <p className="lead text-center">Here&apos;s a detailed outline of all topics you&apos;ll learn in your caregiver certification course.</p>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitA">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-a.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Course Unit A" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit A: Introduction to Caregiving</h3>
              <p className="mb-0">In this first unit, you&apos;ll learn what it means to be a caregiver. You&apos;ll learn the details of the job, and how you&apos;ll interact with clients. Just as importantly, you&apos;ll see the duties you WON&apos;T be expected to complete as a caregiver. You&apos;ll then learn how to perform your initial client consultation. You&apos;ll focus on the information you&apos;ll need to collect, and how to evaluate safety needs for each client. Finally, you&apos;ll learn how to establish and work with a detailed care plan for every client you take on.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={fcUnits.a} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitB">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-b.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Course Unit B" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit B: Working with Clients</h3>
              <p className="mb-0">Now that you have a good idea of your role as a caregiver, you&apos;ll start to learn how to put that knowledge to use when working with clients. You&apos;ll see how to help clients with everyday challenges. You&apos;ll learn how to establish professional boundaries with your clients while still developing meaningful relationships. These can be tricky skills to master! Later in the unit, you&apos;ll focus on understanding a client&apos;s unique needs based on his or her personal challenges.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={fcUnits.b} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitC">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-c.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Course Unit C" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit C: Working as a Caregiver</h3>
              <p className="mb-0">In Unit C, you&apos;ll dive into the services you&apos;ll offer as a caregiver and you&apos;ll start developing the skills you need. Whether you plan on providing all these services once you start your business, it&apos;s important to have the full range of skills you&apos;ll need as a successful caregiver. You&apos;ll also explore the different workplace settings available to you as a caregiver. For example, you might choose to work for a caregiving agency, a retirement home or to start your own caregiving business.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={fcUnits.c} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitD">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-d.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Course Unit D" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit D: Technical Skills</h3>
              <p className="mb-0">This highly practical unit is where you&apos;ll learn about the technical skills any caregiver needs before helping a client with personal care tasks. Caregivers are sometimes required to help with basic daily tasks such as dressing, toileting, bathing/showering or helping their client move around. You&apos;ll learn methods that will keep you safe and that ensure you preserve your client&apos;s dignity as you perform these delicate tasks.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={fcUnits.d} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitE">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-e.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Unit E" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit E: Client Scenarios</h3>
              <p className="mb-0">In Unit E, you&apos;ll learn about challenging situations and how to handle each one. You&apos;ll use the scenarios outlined in your course text as a guide to help you start thinking like a professional caregiver. Then you&apos;ll complete scenario-based assignments to practice interacting with clients in challenging situations.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={fcUnits.e} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitF">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/fcg-unit-f-course-outline.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Unit F" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit F: Business Training Unit</h3>
              <p className="mb-0">If you plan on launching your own caregiving business, don&apos;t skip this essential final unit! You&apos;ll work through the specific elements of getting your business off the ground. You&apos;ll learn how to set your prices and how to find your first clients. You&apos;ll also learn how to build your website, market your services and much more. This unit will help you launch your career in high gear!</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={fcUnits.f} />
            </div>
          </div>
        </div>
        <p className="text-center"><a href="https://enroll.qcwellnessstudies.com/?c=fc" className="btn btn-secondary">ENROLL ONLINE</a></p>
      </div>
    </section>

    <a className="anchor" id="tutors"></a>
    <section id="tutorsSection" className="bg-light">
      <div className="container text-center">
        <h2 className="text-dark text-center">Your Caregiving Tutors</h2>
        <p className="lead mb-5 mx-lg-5">When you enroll, you&apos;ll be assigned one of QC&apos;s expert tutors. Your tutor will be responsible for grading your work and providing feedback on your assignments.</p>
        <div className="row text-center">
          <div className="col-12 mb-5 col-md-6 mb-md-0 col-lg-5 offset-lg-1">
            <p><img className="img-fluid" src={require('../../../images/tutor-suzanne.jpg')} alt="Suzanne Irvine" /></p>
            <h3 className="text-dark">Suzanne Irvine</h3>
            <p>Suzanne is a retired registered nurse with over 35 years of experience in the health care sector. She has extensive experience teaching caregivers of all kinds, including nurses, personal support workers and more. During her career in the wellness industry, Suzanne also worked as a disability case manager, assisting clients to return to work when ready. She loves to help students develop successful careers!</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <p><img className="img-fluid" src={require('../../../images/tutor-aly.jpg')} alt="Aly Lalonde" /></p>
            <h3 className="text-dark">Aly Lalonde</h3>
            <p>Aly worked extensively as a personal support worker in the community as well as in a residence. She is also a registered nurse with expertise in emergency medicine, dialysis, and public health. Aly understands how caregiving and healthcare professionals work together to help their clients. She&apos;ll help you with your career as a caregiver and she&apos;ll show you how to work effectively with healthcare professionals. She has an amazing breadth of hands-on experience and is a trusted advisor to QC students.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="certificationSection" className="bg-dark text-light">
      <Certification
        shortName="Professional Caregiver"
        fullName="Formal Caregiving Professional"
        abbr="FCGP"
        registered={false}
      />
    </section>

    <section id="guaranteeSection">
      <Guarantee courseName="Professional Caregiver" doubleGuarantee={doubleGuarantee} />
    </section>

    <section id="enrollSection" className="text-light text-center">
      <div className="container">
        <h2>Enroll Today</h2>
        <p className="lead mb-5">Start your caregiving training today<br />and launch an exciting, rewarding career!</p>
        <p><a href="https://enroll.qcwellnessstudies.com/?c=fc" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
      </div>
    </section>

    <style jsx>{`
      #heroSection{color:white;background-color:#449;background-image:url(${require('../../../images/pc-hero.jpg')});background-size:cover;background-position:center;}
      #certificationSection{background-image:url(${require('../../../images/bg-dark-green-navy.jpg')});background-size:cover}
      #requirementsSection{background-image:url(${require('../../../images/pc-requirements.jpg')});background-size:cover}
      #paymentPlansSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
      #includedSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
      #enrollSection{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}
      section:first-of-type {
        padding-top: 105px;
      }
      @media (min-width: 992px)
        section:first-of-type {
          padding-top: 101px;
        }
      }
    `}</style>
  </>
);

Page.getLayout = function Layout(page) {
  return (
    <DefaultLayout
      secondaryNav={(
        <Subnav
          heading="Caregiver Course"
          items={[
            { name: 'Tuition', url: '#paymentPlans' },
            { name: 'Course Outline', url: '#outline' },
            { name: 'Tutors', url: '#tutors' },
          ]}
        />
      )}
    >{page}</DefaultLayout>
  );
};

export default Page;
