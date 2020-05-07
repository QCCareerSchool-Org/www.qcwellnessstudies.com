import Link from 'next/link';
import React from 'react';

import { Certification } from '../../../components/certification';
import { Guarantee } from '../../../components/guarantee';
import { Included } from '../../../components/included';
import { PaymentPlans } from '../../../components/payment-plans';
import { SEO } from '../../../components/seo';
import { Subnav } from '../../../components/subnav';
import { OutlineData, UnitOutline } from '../../../components/unit-outline';
import { WhyChoose } from '../../../components/why-chose';
import { DefaultLayout } from '../../../layouts/default';

const Page: React.FC = () => {
  const doubleGuarantee = false;
  const units: { [key: string]: OutlineData[] } = {
    a: [
      {
        title: 'Becoming a Caregiver',
        topics: [
          'What is a caregiver',
          'Key skills & personality traits for caregivers',
          'Workplaces you\'ll encounter',
          'Roles & responsibilities of a caregiver',
          'Types of clients',
          'Client care models',
          {
            title: 'Working as a caregiver:',
            topics: [
              'Certifications & education',
              'Career paths',
              'Expanding into healthcare',
              'Where to begin',
            ],
          },
        ],
      },
      {
        title: 'Evaluating Your Role',
        topics: [
          {
            title: 'Performing a Client Consultation:',
            topics: [
              'Information to gather',
              'Building a connection',
              'Handling personal information',
              'Evaluating safety requirements & identifying concerns',
            ],
          },
          {
            title: 'Working with a Care Plan:',
            topics: [
              'Working with an established care plan',
              'Creating a care plan with your client',
              'Working without a care plan',
            ],
          },
        ],
      },
    ],
    b: [
      {
        title: 'Interacting with Clients Professionally',
        topics: [
          'Professionalism in a personal setting',
          'Appropriate client relationships',
          'Professional boundaries',
          {
            title: 'Language considerations:',
            topics: [
              'Using inclusive language',
              'Using "people first" language',
              'Exclusionary language to avoid',
            ],
          },
          'Discrimination',
        ],
      },
      {
        title: 'Understanding your Client\'s Needs',
        topics: [
          'Working with aging clients',
          'Common caregiver tasks for aging clients',
          'Challenges of Aging',
          'Common conditions you\'ll encounter (dementia, arthritis, etc.)',
          'Working with clients with disabilities, medical conditions or impairments',
          'Working with children',
          'Working with clients recovering from injuries or surgery',
          'Working with clients with mental health issues or special needs',
          'Working with new mothers',
        ],
      },
    ],
    c: [
      {
        title: 'Working as a Caregiver',
        topics: [
          'Defining your scope of practice',
          'Medical support & dealing with medical emergencies',
          'Providing companionship',
          'Soft skills for caregivers',
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
          'End of life care',
          'Holistic health & wellness',
          'Keeping a care log',
          'Maintaining your own health & wellness',
        ],
      },
      {
        title: 'Workplace Settings',
        topics: [
          {
            title: 'Comminity-based settings',
            topics: [
              'Working in an assisted living community',
              'Types of communities',
              'Working with community-based programs',
              'Challenges and safety considerations',
              'Outings in the community',
            ],
          },
          {
            title: 'Facility-based settings',
            topics: [
              'Working in a facility-based setting',
              'Challenges and safety considerations',
              'Types of facilities',
            ],
          },
        ],
      },
    ],
    d: [
      {
        title: 'Technical Skills for Caregivers',
        topics: [
          {
            title: 'Mobility',
            topics: [
              'Using a transfer board',
              'Using a transfer belt',
              'Helping a client who uses a cane',
              'Helping a client who uses a walker',
              'Transferring a client to a wheelchair or scooter',
              'Moving your client in bed',
            ],
          },
          {
            title: 'Dressing',
            topics: [
              'Helping your client put on/take off a shirt',
              'Helping your client put on/take off socks and shoes',
              'Helping your client put on/take off pants',
              'Helping your client put on/take off underwear',
            ],
          },
          {
            title: 'Toileting',
            topics: [
              'Helping your client use a toilet',
              'Helping your client use a portable commode',
              'Helping your client use a bedpan',
              'Helping your client who wears protective underwear',
            ],
          },
          {
            title: 'Bathing and Showering',
            topics: [
              'Helping your client have a bath',
              'Helping your client have a shower',
              'Helping your client have a bed bath (sponge bath)',
              'Helping your client shampoo their hair',
            ],
          },
          {
            title: 'Bathing and Showering',
            topics: [
              'Hand washing',
              'Oral hygiene',
              'Shaving',
              'Brushing, combing, styling your client\'s hair',
              'Nail and foot care',
            ],
          },
          'Eating',
        ],
      },
    ],
    e: [
      {
        title: 'Client Scenarios',
        topics: [
          'Accompanying a client on a community outing',
          'Helping your client attend a physiotherapy session',
          'Going for a walk with your client',
          'Helping your client in a medical emergency',
          {
            title: 'Challenging situations:',
            topics: [
              'Working with multiple clients',
              'When a client doesn\'t want your help',
              'Grieving clients',
              'Difficult clients',
              'Setting professional boundaries',
            ],
          },
          'Dealing with discrimination',
          'Dealing with suspected abuse',
        ],
      },
    ],
    f: [
      {
        title: 'Launching your business',
        topics: [
          {
            title: 'Creating a business model',
            topics: [
              'Identifying the services you will provide',
              'Identifying the core values of your business',
              'Naming your business',
              'Creating a business plan',
            ],
          },
          'Assessing needs in your community: Needs, competition, and gaps in the market',
          'Defining your methods and plans',
          'Setting your prices, packages, and now to incentivize returning customers or customer referrals',
          {
            title: 'Setting up business infrastructure',
            topics: [
              'Creating your website',
              'Your social media presence',
              'Traditional print resources (books, pamphlets, etc.)',
              'Setting up your business space',
              'Creating materials',
            ],
          },
          'Setting limits: Minimum/maximum number of clients, outlining your budget and expected income',
          'Creating realistic business goals',

        ],
      },
      {
        title: 'Licensing, restrictions & legal aspects',
        topics: [
          'Ethical considerations & legal obligations of reporting suspected abuse',
          'Certification requirements & service restrictions',
          'Professional associations & organizations',
          'Client contracts & other legal documents',
          'Insurance considerations',
          'Health care training: CPR, first aid, and other certifications to consider',
        ],

      },
      {
        title: 'Marketing your business',
        topics: [
          'Branding: Creating an effective brand, personalizing your brand, and using your brand to sell your business',
          {
            title: 'Finding clients',
            topics: [
              'How clients find you (Print/Web/Social Media)',
              'How to advertise your services',
              'How to find clients (online and in person)',
            ],
          },
          {
            title: 'Tips for advertising',
            topics: [
              'Learning your clientele',
              'Where to advertise',
              'Effective advertising for small businesses',
              'Advertising budgets',
            ],
          },
          {
            title: 'Your website and social media presence',
            topics: [
              'How to build an effective website',
              'How to start a business using social media',
              'Keys to an effective online presence',
            ],
          },
          'Community outreach: Community events, groups, and online groups and events',
          'Partnering: Identifying key partners, developing relationships with local businesses, and creating joint advertising with other small businesses',
        ],
      },
    ],


  };

  return (
    <DefaultLayout SecondaryNav={(): React.ReactElement => (
      <Subnav
        heading="Caregiver Course"
        items={[
          { name: 'Tuition', url: '#paymentPlans' },
          { name: 'Course Outline', url: '#outline' },
          { name: 'Tutors', url: '#tutors' },
        ]}
      />
    )}>

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

      <a className="anchor" id="paymentPlans"></a>
      <section id="paymentPlansSection" className="bg-light">
        <PaymentPlans courses={['fc']} doubleGuarantee={doubleGuarantee} />
      </section>

      <section id="whatSection">
        <div className="container">
          <h2 className="text-dark text-center">What Is a Caregiver?</h2>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
              <p>A caregiver is a very important part of a person’s homecare team. You’ll be on the front lines every day to help clients maintain their independence and wellbeing. You’ll help them with daily tasks they may have trouble completing on their own.</p>
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
              <p>You might hear different terms used to refer to caregivers, depending on where you live. Other common job titles for “caregiver" include, but are not limited to:</p>
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
              <p>If you are looking to become a temporary caregiver for your loved one and not a professional caregiver, QC also offers an informal caregiver course. You can view the course <Link href="/courses-and-tuition/personal-caregiving"><a className="text-info">here.</a></Link></p>
            </div>
          </div>
        </div>
      </section>

      <section id="requirementsSection" className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-7 offset-lg-0">
              <h2>Basic Requirements for Becoming a Caregiver</h2>
              <p>Caregiving is a highly rewarding career. As an integral part of your clients’ wellness teams, you’re there every day to put smiles on their faces and to help them maintain healthy and productive lives. If you genuinely enjoy helping people and are willing to advocate for your clients at every turn, this can be the perfect career for you.</p>
              <p>It’s always a good idea to check local regulations before starting a new profession. Currently, the United States has <a className="text-dark" href="https://www.bls.gov/OOH/healthcare/home-health-aides-and-personal-care-aides.htm#tab-4" target="blank">no licensing requirements</a> or training regulations for caregivers who work independently. “Independent” means that they are employed directly by their clients and bill clients directly.
              </p>
              <p>Successful caregivers all exhibit similar traits. Do you have what it takes?</p>
              <ul className="mb-4">
                <li><p><strong>Empathy &amp; Compassion</strong> &mdash; You’re always able to put yourself in your clients’ shoes to understand their situations. You genuinely care about people and want to help in any way you can.</p></li>
                <li><p><strong>Good Communication Skills</strong> &mdash; You’re able to clearly and effectively communicate with clients, family members and other professionals. You advocate in your clients’ best interests. You’re patient and careful when you choose your words.</p></li>
                <li><p><strong>Physical Stamina</strong> &mdash; You’re ready to work hard and have the physical strength to help your clients with mobility issues. You know your own limitations. You are ready to turn down a client if you know you won’t have the physical ability to properly care for him or her.</p></li>
                <li><p><strong>Integrity &amp; Discretion</strong> &mdash; You understand the importance of respecting your clients’ privacy while working in their homes and helping them with sensitive tasks. You’re discreet and would never dream of betraying a client’s trust!</p></li>
              </ul>
              <p className="text-center"><a className="btn btn-secondary" href="https://enroll.qcwellnessstudies.com/?c[]=fc">ENROLL NOW</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="whatYoullLearnSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-5">
              <h2 className="text-dark">What You'll Learn</h2>
              <p className="lead">In this highly interactive self-paced training course, you'll learn about:</p>
              <ul className="mb-4">
                <li>The roles &amp; responsibilities of a Caregiver</li>
                <li>Performing a client consultation</li>
                <li>Working with a care plan</li>
                <li>Health &amp; safety considerations</li>
                <li>Special considerations for different types of clients</li>
                <li>Using a holistic approach to improve a client’s health &amp; wellness</li>
                <li>Maintaining your own physical &amp; emotional health</li>
                <li>Activities of Daily Life (ADLs) and Instrumental Activities of Daily Living (IADLs)</li>
                <li>Identifying &amp; dealing with signs of abuse</li>
                <li>Understanding the human body, disabilities, and impairments</li>
                <li>Starting your own caregiving business</li>
              </ul>
              <a className="btn btn-dark" href="#outline" role="button">Read the Full Course Outline</a>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <p className="d-none d-lg-block"><img src={require('../../../images/pc-what-youll-learn.jpg')} className="text-center" alt="What you'll learn in the caregiver course" /></p>
            </div>
          </div>
        </div>
      </section>

      <section id="howYoullLearnSection" className="bg-light text-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2>How You'll Learn</h2>
              <p>QC's signature online learning experience is designed for highly motivated and ambitious individuals!</p>
              <p>You'll learn at your own pace, with the help of your student advisor and your expert tutor. They will be with you every step of the way!</p>
              <ul>
                <li>Follow the course guide, which will tell you when you need to read a course book, watch a video or complete an assignment.</li>
                <li>Complete a variety of assignments including knowledge quizzes, open-ended discussions and comprehensive real-world case studies where you experience what it's like to be a professional caregiver.</li>
                <li>Upload your completed assignments to the Online Student Center.</li>
                <li>Your tutor will grade your work and provide feedback on every assignment.</li>
                <li>Graduate once you've completed all your course units and your tuition has been paid in full.</li>
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
          comprehensive="You're not just learning how one caregiving company wants you do things. You're getting a foundation of knowledge in caregiving that will be useful no matter where you work!"
          courses={['fc']}
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
              <p className="lead text-center">Here's a detailed outline of all topics you'll learn in your caregiver certification course.</p>
            </div>
          </div>
          <div className="row my-5" id="unitA">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-a.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Course Unit A" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit A: Introduction to Caregiving</h3>
              <p className="mb-0">In this first unit, you'll learn what it means to be a caregiver. You'll learn the details of the job, and how you'll interact with clients. Just as importantly, you’ll see the duties you WON'T be expected to complete as a caregiver. You'll then learn how to perform your initial client consultation. You’ll focus on the information you'll need to collect, and how to evaluate safety needs for each client. Finally, you'll learn how to establish and work with a detailed care plan for every client you take on.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.a} />
            </div>
          </div>
          <div className="row my-5" id="unitB">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-b.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Course Unit B" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit B: Working with Clients</h3>
              <p className="mb-0">Now that you have a good idea of your role as a caregiver, you'll start to learn how to put that knowledge to use when working with clients. You’ll see how to help clients with everyday challenges. You’ll learn how to establish professional boundaries with your clients while still developing meaningful relationships. These can be tricky skills to master! Later in the unit, you'll focus on understanding a client's unique needs based on his or her personal challenges.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.b} />
            </div>
          </div>
          <div className="row my-5" id="unitC">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-c.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Course Unit C" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit C: Working as a Caregiver</h3>
              <p className="mb-0">In Unit C, you'll dive into the services you'll offer as a caregiver and you’ll start developing the skills you need. Whether you plan on providing all these services once you start your business, it's important to have the full range of skills you’ll need as a successful caregiverYou’ll also explore the different workplace settings available to you as a caregiver. For example, you might choose to work for a caregiving agency, a retirement home or to start your own caregiving business.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.c} />
            </div>
          </div>
          <div className="row my-5" id="unitD">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-d.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Course Unit D" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit D: Technical Skills</h3>
              <p className="mb-0">This highly practical unit is where you'll learn about the technical skills any caregiver needs before helping a client with personal care tasks. Caregivers are sometimes required to help with basic daily tasks such as dressing, toileting, bathing/showering or helping their client move around. You’ll learn methods that will keep you safe and that ensure you preserve your client's dignity as you perform these delicate tasks.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.d} />
            </div>
          </div>
          <div className="row my-5" id="unitE">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/pc-outline-e.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Unit E" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit E: Client Scenarios</h3>
              <p className="mb-0">In Unit E, you’ll learn about challenging situations and how to handle each one. You'll use the scenarios outlined in your course text as a guide to help you start thinking like a professional caregiver. Then you'll complete scenario-based assignments to practice interacting with clients in challenging situations..</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.e} />
            </div>
          </div>
          <div className="row my-5" id="unitF">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/fcg-unit-f-course-outline.jpg')} className="rounded img-fluid mt-2" alt="Caregiver Unit F" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit F: Business Training Unit</h3>
              <p className="mb-0">If you plan on launching your own caregiving business, don't skip this essential final unit! You'll work through the specific elements of getting your business off the ground. You’ll learn how to set your prices and how to find your first clients. You’ll also learn how to build your website, market your services and much more. This unit will help you launch your career in high gear!</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.f} />
            </div>
          </div>
          <p className="text-center"><a href="https://enroll.qcwellnessstudies.com/?c[]=fc" className="btn btn-secondary">ENROLL ONLINE</a></p>
        </div>
      </section>

      <a className="anchor" id="tutors"></a>
      <section id="tutorsSection" className="bg-light">
        <div className="container text-center">
          <h2 className="text-dark text-center">Your Caregiving Tutors</h2>
          <p className="lead mb-5 mx-lg-5">When you enroll, you'll be assigned one of QC's expert tutors. Your tutor will be responsible for grading your work and providing feedback on your assignments</p>
          <div className="row text-center">
            <div className="col-12 mb-5 col-md-6 mb-md-0 col-lg-5 offset-lg-1">
              <p><img className="img-fluid" src={require('../../../images/tutor-suzanne.jpg')} alt="Suzanne Irvine" /></p>
              <h3 className="text-dark">Suzanne Irvine</h3>
              <p>Suzanne is a retired registered nurse with over 35 years of experience in the health care sector. She has extensive experience teaching caregivers of all kinds, including nurses, personal support workers and more. During her career in the wellness industry, Suzanne also worked as a disability case manager, assisting clients to return to work when ready. She loves to help students develop successful careers!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p><img className="img-fluid" src={require('../../../images/tutor-aly.jpg')} alt="Aly Lalonde" /></p>
              <h3 className="text-dark">Aly Lalonde</h3>
              <p>Aly worked extensively as a personal support worker in the community as well as in a residence. She is also a registered nurse with expertise in emergency medicine, dialysis, and public health. Aly understands how caregiving and healthcare professionals work together to help their clients. She’ll help you with your career as a caregiver and she’ll show you how to work effectively with healthcare professionals. She has an amazing breadth of hands-on experience and is a trusted advisor to QC students.</p>
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
          <p><a href="https://enroll.qcwellnessstudies.com/?c[]=fc" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
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

    </DefaultLayout>
  );
};

export default Page;
