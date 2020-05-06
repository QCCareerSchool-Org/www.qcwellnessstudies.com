import Link from 'next/link';
import React from 'react';

import { Certification } from '../../../components/certification';
import { Guarantee } from '../../../components/guarantee';
import { PaymentPlans } from '../../../components/payment-plans';
import { SEO } from '../../../components/seo';
import { Subnav } from '../../../components/subnav';
import { OutlineData, UnitOutline } from '../../../components/unit-outline';
import { DefaultLayout } from '../../../layouts/default';

const Page: React.FC = () => {
  const doubleGuarantee = false;
  const units: { [key: string]: OutlineData[] } = {
    a: [
      {
        title: 'Introduction to Informal Caregiving',
        topics: [
          'What is an Informal Caregiver?',
          'Key skills & personality traits for informal caregivers',
          'Roles & responsibilities of an informal caregiver',
          'Using care plans and care logs',
        ],
      },
      {
        title: 'Your Role as a Caregiver',
        topics: [
          'Advocating for your loved one’s health ',
          'Providing companionship & physical support',
          'Observing changes in someone’s behavior',
          'Working with a care plan',
          'Using inclusive and empowering language',
          'Protecting your loved one from abuse and neglect',
          'Caregiver burnout and self-care for caregivers',
        ],
      },
    ],
    b: [
      {
        title: 'Understanding Care Needs',
        topics: [
          'Working with an aging loved one',
          'The challenges of aging',
          'Common health conditions, such as dementia, arthritis, etc.',
          'Working with a loved one who has a disability, medical condition or impairment',
          'Working with children',
        ],
      },
      {
        title: 'Caregiving Duties',
        topics: [
          'Medical support & dealing with medical emergencies',
          'Providing companionship',
          'Soft skills for informal caregivers',
          'Safety considerations',
          {
            title: 'Activities of daily living (ADLs)',
            topics: [
              'Mobility',
              'Dressing',
              'Bathing & showering',
              'General hygiene',
              'Toileting',
              'Eating',
            ],
          },
          {
            title: 'Instrumental activities of daily living (ADLs)',
            topics: [
              'Transportation',
              'Shopping',
              'Cooking',
              'Home management & maintenance',
              'Household supply management',
              'Financial management',
              'Communication',
            ],
          },
          'Holistic health & wellness',
          'Keeping a care log',
          'How to handle abusive behavior from loved ones',
        ],
      },
    ],
    c: [
      {
        title: 'Technical Skills for Informal Caregivers',
        topics: [
          {
            title: 'Mobility',
            topics: [
              'Using a transfer board',
              'Using a transfer belt',
              'Helping a loved one who uses a cane',
              'Helping a loved one who uses a walker',
              'Transferring a loved one to a wheelchair or scooter',
              'Moving your loved one in bed',
            ],
          },
          {
            title: 'Dressing',
            topics: [
              'Helping your loved one put on/take off a shirt',
              'Helping your loved one put on/take off socks and shoes',
              'Helping your loved one put on/take off pants',
              'Helping your loved one put on/take off underwear',
            ],
          },
          {
            title: 'Toileting',
            topics: [
              'Helping your loved one use a toilet',
              'Helping your loved one use a portable commode',
              'Helping your loved one use a bedpan',
              'Helping your loved one who wears protective underwear',
            ],
          },
          {
            title: 'Bathing and Showering',
            topics: [
              'Helping your loved one have a bath',
              'Helping your loved one have a shower',
              'Helping your loved one have a bed bath (sponge bath)',
              'Helping your loved one shampoo their hair',
            ],
          },
          {
            title: 'Bathing and Showering',
            topics: [
              'Hand washing',
              'Oral hygiene',
              'Shaving',
              'Brushing, combing, styling your loved one’s hair',
              'Nail and foot care',
            ],
          },
          {
            title: 'Eating',
            topics: [
            ],
          },
        ],
      },
    ],
  };

  return (
    <DefaultLayout SecondaryNav={(): React.ReactElement => (
      <Subnav
        heading="Personal Caregiving Course"
        items={[
          { name: 'Tuition', url: '#paymentPlans' },
          { name: 'Course Outline', url: '#outline' },
        ]}
      />
    )}>

      <SEO
        title="Personal Caregiving Course"
        description="Become a certified personal caregiver with QC's online training. QC offers a fully-online personal caregiving course. Get certified faster and launch your own business!"
        canonical="/courses-and-tuition/personal-caregiving"
      />

      <section id="heroSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7">
              <h1>Personal (Informal) Caregiving Course</h1>
              <h2 className="h5">Learn how to properly support your loved one as a personal caregiver.</h2>
              <ul>
                <li>Feel confident in the care you’re providing</li>
                <li>Quickly learn the tools and techniques you need to care for your loved one safely</li>
                <li>Receive personalized advice from your tutor to address your unique situation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="paymentPlans"></a>
      <section id="paymentPlansSection" className="bg-light">
        <PaymentPlans courses={['ic']} doubleGuarantee={doubleGuarantee} />
      </section>

      <section id="whatSection" className="bg-light">
        <div className="container">
          <h2 className="text-dark text-center">What is a <strong>Personal</strong> Caregiver?</h2>
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <p>A personal (or “informal”) caregiver provides care and support to a loved one. As a personal caregiver, you’ll be an important part of your loved one’s wellness team. Your support can help a friend or family member maintain his or her independence. You’ll help your loved one perform daily living activities to promote a happy and productive life.</p>
              <p>A personal caregiver provides the same types of support as a professional caregiver. However, a personal caregiver typically only cares for a single loved one for a limited period of time. A personal caregiver likely has a separate career and usually is not paid for providing care. Some personal caregivers can bill their loved ones as “clients” and be reimbursed by their loved ones’ insurance or by certain government programs. However, this requires careful research as regulations are different in every state/province.</p>
              <p>Remember, as a caregiver you are a member of your loved one’s overall wellness team but you are not a medical professional. You should not be expected to provide medical services for your loved one.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="whatYoullLearnSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-5">
              <h2 className="text-dark">What You'll Learn</h2>
              <p>In this highly interactive, self-paced course, you'll learn how to properly care for your loved one in an informal capacity. You’ll learn about:</p>
              <ul>
                <li>The roles and responsibilities of a Caregiver</li>
                <li>Working with a care plan</li>
                <li>Health and safety considerations</li>
                <li>Caring for a loved one who has a condition or illness</li>
                <li>Technical skills to help a loved one with Activities of Daily Living (ADLs) and Instrumental Activities of Daily Living (IADLs) and more!</li>
              </ul>
              <p>This course is a condensed version of the Professional Caregiving Course offered by QC. This course does not contain information about working with clients in professional settings, starting a caregiving business, etc. If you are interested in working as a professional caregiver, visit the <Link href="/courses-and-tuition/professional-caregiving"><a className="text-info"><u></u>professional caregiver course page.</a></Link></p>
              <a className="btn btn-dark" href="#outline" role="button">Read the Full Course Outline</a>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <p className="d-none d-lg-block"><img src={require('../../../images/ic-what-youll-learn.jpg')} className="text-center" alt="What you'll learn in the personal caregiving course" /></p>
            </div>
          </div>
        </div>
      </section>

      <section id="howYoullLearnSection" className="bg-light text-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2>How You'll Learn</h2>
              <p>QC's online learning experience is designed to help you succeed. We work with students to make sure they successfully complete their courses. As far as we are concerned, failing is not an option!</p>
              <p>You'll learn at your own pace, with the help of your student advisor and your expert tutor. They will be with you every step of the way!</p>
              <ul>
                <li>Follow the course guide, which will tell you when you need to read a course book, watch a video or complete your assignment.</li>
                <li>Complete a variety of quizzes and assignments that allow you to experience what it's like to be a personal caregiver.</li>
                <li>Upload your completed assignment to the Online Student Center.</li>
                <li>Your tutor will grade your work and provide personalized feedback on your assignment.</li>
                <li>Graduate once you've completed all your course units and your tuition has been paid in full.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="outline"></a>
      <section id="outlineSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <h2 className="text-dark text-center">Full Course Outline</h2>
              <p className="lead text-center">Here's a detailed outline of the topics you'll learn in the Personal Caregiving certification course.</p>
            </div>
          </div>
          <div className="row my-5" id="unitA">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/ic-unit-a-course-outline.jpg')} className="rounded img-fluid mt-2" alt="Personal Caregiving Course Unit A" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit A: Introduction to Caregiving</h3>
              <p className="mb-0">In this first unit, you'll learn what it means to be a caregiver. We’ll discuss the details of the role and provide tips to help you maintain a positive relationship with your loved one as you help him or her through difficult times. Finally, you'll learn how to understand your loved one’s care plan and become an advocate for his or her health and wellbeing.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.a} />
            </div>
          </div>
          <div className="row my-5" id="unitB">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/ic-unit-b-course-outline.jpg')} className="rounded img-fluid mt-2" alt="Personal Caregiving Course Unit B" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit B: Care Needs</h3>
              <p className="mb-0">Now that you have a good idea of your role as a caregiver, you'll start to learn how to put that knowledge to use when caring for your loved one. Your loved one will have specific challenges he or she faces every day. In this unit, you'll focus on understanding your loved one’s unique needs and providing personalized support.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.b} />
            </div>
          </div>
          <div className="row my-5" id="unitC">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-c.jpg')} className="rounded img-fluid mt-2" alt="Personal Caregiving Course Unit C" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit C: Technical Skills</h3>
              <p className="mb-0">This highly practical unit is where you'll learn the details of the technical skills any personal caregiver needs to have. When working with individuals who have limited independence, caregivers are sometimes required to help with basic daily tasks such as dressing, toileting, bathing/showering or helping their loved ones move around. You’ll learn to follow procedures that keep you safe and that ensure you preserve your loved one’s dignity as you perform these practical tasks.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.c} />
            </div>
          </div>
          <p className="text-center"><a href="https://enroll.qcwellnessstudies.com/?c[]=ic" className="btn btn-secondary">ENROLL ONLINE</a></p>
        </div>
      </section>

      <a className="anchor" id="tutors"></a>
      <section id="tutorsSection" className="bg-light">
        <div className="container text-center">
          <h2 className="text-dark text-center">Your Caregiving Tutor</h2>
          <p className="lead mb-5 mx-lg-5">QC’s expert tutors will be an invaluable resource as you learn to be a caregiver for your loved one. After each unit, you’ll have a chance to ask them questions about your specific situation. Receive guidance on how to best care for your loved one from someone who has years of experience in caregiving!</p>
          <div className="row text-center">
            <div className="col-12 mb-5 col-md-6 mb-md-0 col-lg-5 offset-lg-1">
              <p><img className="img-fluid" src={require('../../../images/tutor-suzanne.jpg')} alt="Suzanne Irvine" /></p>
              <h3 className="text-dark">Suzanne Irvine</h3>
              <p>Suzanne is a retired registered nurse with over 35 years of experience in the health care sector. She has extensive experience teaching caregivers of all kinds including nurses, personal support workers and more. During her career in the wellness industry, Suzanne also worked as a disability case manager, assisting clients to return to work when ready. She’s happy to help you care for your loved one!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p><img className="img-fluid" src={require('../../../images/tutor-aly.jpg')} alt="Aly Lalonde" /></p>
              <h3 className="text-dark">Aly Lalonde</h3>
              <p>Aly worked extensively as a personal support worker in the community as well as in a residence. She is also a registered nurse with expertise in emergency medicine, dialysis, and public health.  Aly understands how caregiving and healthcare professionals work together to help their clients and loved ones. She has an amazing breadth of hands-on experience and is a trusted advisor to QC students.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="certificationSection" className="bg-dark text-light">
        <Certification
          shortName="Personal Caregiver"
          fullName="Personal Caregiving Professional"
          abbr="PCGP"
          registered={false}                
          logo={(
            <>
             <img src={require('../../../images/qc-wellness-logo.svg')} className="img-fluid text-center" alt="Wellnes logo" />
            </>
          )}
          graduation={(
            <>
              <h2 className="text-light">Graduating as a Personal Caregiver</h2>
            </>
          )}
          completion={(
            <>
              <p>Upon graduation, you’ll receive a certificate of completion indicating that you have successfully completed the Personal Caregiver Course. Note that this is not a professional certification.</p>
            </>
          )}
        />
      </section>

      <section id="guaranteeSection">
        <Guarantee courseName="Personal Caregiver" doubleGuarantee={doubleGuarantee} />
      </section>

      <section id="enrollSection" className="text-light text-center">
        <div className="container">
          <h2>Enroll Online Today</h2>
          <p className="lead mb-5">If you’re ready to learn important skills to be the personal caregiver your loved one deserves, enroll today!<br />Complete the course in as little as one month!</p>
          <p><a href="https://enroll.qcwellnessstudies.com/?c[]=ic" className="btn btn-secondary btn-lg">ENROLL NOW</a></p>
        </div>
      </section>

      <style jsx>{`
        #heroSection{color:white;background-color:#449;background-image:url(${require('../../../images/ic-top-image.jpg')});background-size:cover;background-position:center;}
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

    </DefaultLayout>
  );
};

export default Page;
