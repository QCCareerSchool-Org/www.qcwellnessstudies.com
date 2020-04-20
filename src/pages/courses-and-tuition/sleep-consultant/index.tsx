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
  const doubleGuarantee = true;
  const units: { [key: string]: OutlineData[] } = {
    a: [
      {
        title: 'Introduction to sleep consulting',
        topics: [
          'Industry history',
          'Roles and responsibilities',
          'Required skills',
          'Communication skills',
          'Planning & organizing',
          'Common misconceptions about sleep consulting',
          {
            title: 'Becoming a sleep consultant:',
            topics: [
              'Licensing requirements',
              'Business needs',
              'Expansion opportunities',
              'Additional certifications to consider'
            ]
          },
          'Sleep consulting services',
          'Associations & organizations'
        ]
      },
      {
        title: 'Infant & toddler sleep habits & behaviors',
        topics: [
          'Human brain development',
          'Habit and behavior formulation',
          'Changing behavior through habits',
          'Common myths about behaviors and habits',
          'Fostering healthy habits',
          'Understanding age groups',
          'Development of the child in each age group',
          'Types of sleep',
          'Ideal sleep schedules for infants',
          'Understanding the effects of sleep',
          'A holistic vision of sleep habits and behaviors'
        ]
      },
      {
        title: 'Sleep training methods & philosophies',
        topics: [
          'How sleep training works',
          'Key methods and their development',
          'Statistics on different method types',
          'The "cry it out" / "Extinction" method',
          'The "Check and Console" / "Ferber" method',
          'The "Chair" method',
          'The "Fading" method',
          'The "Pick Up Put Down" method',
          'The "No cry" method(s)'
        ]
      },
      {
        title: 'Sleep spaces',
        topics: [
          'Co-sleeping: from healthy co-sleeping for newborns to sleep training after co-sleeping',
          'Creating a quiet and peaceful environment for sleep',
          'White noise generators',
          'Using other ambient noises',
          'Sleep training alarm clocks',
          'Night light pros and cons',
          'Daylight simulation',
          'Essential oils and diffusers for infants: calming scents, oils to avoid, and safety tips',
          'Creating the perfect room for sleep: From nursery décor to choosing the right crib/bed',
          'The home environment: beyond the nursery',
          'Starting & following a sleep routine',
          'Changing & modifying a routine'
        ]
      }
    ],
    b: [
      {
        title: 'Individualized sleep plans',
        topics: [
          'Using your intake survey to build a sleep plan',
          'Key questions to ask during an interview',
          'Identifying client needs',
          'Creating a sleep plan',
          'Fostering healthy habits',
          'Key components of every sleep plan',
          'Development of the child in each age group',
          'Tracking a sleep plan',
          'Components of an effective sleep log',
          'Evaluating a sleep plan based on feedback from the caregiver',
          'Revising a sleep plan once it\'s been implemented'
        ]
      },
      {
        title: 'Implementation of sleep training',
        topics: [
          'Program considerations for each age group (from newborns to toddlers)',
          'Types of client plans, from "skeleton plans" to "premium plans", upgrades, follow-ups, and how to offer discounts',
          'Creating templates for different sleep consulting methods',
          'Creating templates to match common parental needs',
          'Using accessible terminology to communicate your sleep plan',
          'Identifying appropriate methods in every situation',
          'Using questionnaires and surveys to determine client needs',
          'Identifying client concerns during intake',
          'Materials to provide clients at the start of a sleep plan',
          'Providing feedback during the first days of the plan',
          'Creating and reviewing sleep logs',
          'Conducting a follow-up to sleep training'
        ]
      },
      {
        title: 'Special situations',
        topics: [
          'How to prepare for different families',
          'Sleep training multiple infants of the same age ',
          'Training one infant that is a twin or triplet',
          'Sleep training multiple infants of different ages',
          'Training one infant that has a sibling in the house',
          'How physical disabilities can affect sleep ',
          'Working with parents and medical professionals ',
          'Understanding limitations for infants with disabilities',
          'How different mental conditions affect sleep ',
          'Sleep training methods for infants with special needs',
          'Understanding limitations for infants with special needs',
          'Understanding different medical issues and how it might affect sleep',
          'Working with infants who have diagnosed medical issues',
          'Creating effective solutions for a single caregiver using a dual parent model',
          'Adapting sleep training plans for one caregiver',
          'Adapting sleep training plans for single parent households with multiple children',
          'Working with multiple non-parent caregivers'
        ]
      }
    ],
    c: [
      {
        title: 'Troubleshooting',
        topics: [
          'Case Study: Parental conflict',
          'Case Study: Baby isn\'t responding ',
          'Case Study: Rejection of methods by parents',
          'Case Study: Lifestyle changes',
          'Cast Study: Other medical issues',
          'Case Study: Competition '
        ]
      },
      {
        title: 'Getting to know your clients',
        topics: [
          'Initial outreach: When you contact a client and when a client contacts you',
          'Onboarding clients',
          'Conducting client consultations',
          'Client intake',
          'Fostering healthy habits',
          'Client follow-up',
          'Development of the child in each age group',
          'Tracking and analysis: tools, templates, and how to use client data',
          'Ideal sleep schedules for infants',
          'Client feedback: Getting and using honest feedback from clients'
        ]
      },
      {
        title: 'Effective consulting',
        topics: [
          'How to coach effectively',
          'Working with caregivers: Giving caregivers the tools to help their own children',
          'Communication skills: Listening',
          'Communication skills: Delivering your message',
          'Patience and support: Positive feedback, reinforcement, and understanding',
          'Understanding age groups',
          'Development of the child in each age group',
          'Planning, setting goals, and creating strategies',
          'Implementing feedback to encourage growth & change behavior',
          'Working with limitations (your own and your clients\')'
        ]
      }
    ],
    d: [
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
            ]
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
              'Creating materials'
            ]
          },
          'Setting limits: Minimum/maximum number of clients, outlining your budget and expected income',
          'Creating realistic business goals',

        ]
      },
      {
        title: 'Licensing, restrictions & legal aspects',
        topics: [
          'Ethical considerations & legal obligations of reporting suspected abuse',
          'Certification requirements & service restrictions',
          'Professional associations & organizations',
          'Client contracts & other legal documents',
          'Insurance considerations',
          'Health care training: CPR, first aid, and other certifications to consider'
        ]

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
            ]
          },
          {
            title: 'Tips for advertising',
            topics: [
              'Learning your clientele',
              'Where to advertise',
              'Effective advertising for small businesses',
              'Advertising budgets',
            ]
          },
          {
            title: 'Your website and social media presence',
            topics: [
              'How to build an effective website',
              'How to start a business using social media',
              'Keys to an effective online presence',
            ]
          },
          'Community outreach: Community events, groups, and online groups and events',
          'Partnering: Identifying key partners, developing relationships with local businesses, and creating joint advertising with other small businesses'
        ]
      }
    ],
  };

  return (
    <DefaultLayout SecondaryNav={(): React.ReactElement => (
      <Subnav
        heading="Infant Sleep Consultant Course"
        items={[
          { name: 'Tuition', url: '#paymentPlans' },
          { name: 'Course Outline', url: '#outline' },
          { name: 'Tutors', url: '#tutors' },
        ]}
      />
    )}>

      <SEO
        title="Sleep Consultant Course"
        description="Become a certified professional sleep consultant with QC's online training. QC offers a fully-online sleep consultant course. Get certified faster and launch your own sleep consulting business!"
        canonical="/courses-and-tuition/sleep-consultant"
      />

      <section id="heroSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7">
              <h1>Become a Certified Infant Sleep Consultant</h1>
              <h2 className="h5">Get certified with a fully-online infant sleep consulting course</h2>
              <ul>
                <li>Study from home on your own schedule!</li>
                <li>No set deadlines, mandatory webinars, or classrooms to attend.</li>
                <li>Learn ALL methods of sleep coaching, including their benefits &amp; limitations.</li>
                <li>Get a complete education and become certified in as little as three months!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="paymentPlans"></a>
      <section id="paymentPlansSection" className="bg-light">
        <PaymentPlans courses={[ 'sl' ]} doubleGuarantee={doubleGuarantee} />
      </section>

      <section id="whatSection">
        <div className="container">
          <h2 className="text-dark text-center">What Is an Infant Sleep Consultant?</h2>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
              <p>A sleep consultant or "sleep coach" is a professional expertly trained to help parents and caregivers create a safe and healthy sleep habit for their infants and toddlers. You'll consult with parents and caregivers on their child's needs and the methods they're comfortable with, and then work with them to establish a bedtime routine that will work for their child. You'll consult on common bedtime/night time problems to help the child sleep comfortably through the night, so that the parents can get adequate rest, too!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p>Some sleep consultants specialize in one-time consultations or coaching sessions. Others offer full-service consulting, where they will visit their client's home for several days or weeks in order to solve the child's sleep problems. And of course, you can offer a range of services to suit any client that comes your way! This highly specialized practice is perfectly suited to anyone who already works in the child care or healthcare industries, or anyone who has a knack for working with children.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="requirementsSection" className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-7 offset-lg-0">
              <h2>Basic Requirements for Becoming a Sleep Consultant</h2>
              <ul className="mb-4">
                <li><p><strong>Patience</strong> &mdash; Babies are babies. They won't always cooperate, and that's why you're there. You need to be able to keep your cool under stressful conditions.</p></li>
                <li><p><strong>Flexibility</strong> &mdash; Similarly, you need to be able to adapt your approach to the child's needs and to the caregiver's preferences. Sometimes that means putting your own preferences aside!</p></li>
                <li><p><strong>Reliability</strong> &mdash; As a professional, you'll be expected to adhere to a set schedule. Time management skills are essential to succeed in this career.</p></li>
                <li><p><strong>Care &amp; Compassion</strong> &mdash; You're going to be working with babies, infants and toddlers every day. You'll need to be empathetic as they adjust to their new routines.</p></li>
              </ul>
              <p className="text-center"><a className="btn btn-secondary" href="https://enroll.qcwellnessstudies.com/?c[]=sl">ENROLL NOW</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="whatYoullLearnSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-5">
              <h2 className="text-dark">What You'll Learn</h2>
              <p className="lead">In this highly interactive self-paced training course, you'll learn:</p>
              <ul className="mb-4">
                <li>Licensing, restrictions and legal aspects of becoming a sleep consultant</li>
                <li>Infant and toddler sleep habits and behaviors</li>
                <li>Sleep training methods and philosophies</li>
                <li>Sleep aids and alternatives</li>
                <li>How to be an effective sleep coach</li>
                <li>Evaluating &amp; creating individualized sleep plans</li>
                <li>Implementation of sleep training</li>
                <li>Special situations to consider</li>
                <li>Troubleshooting problems</li>
                <li>How to start your sleep consulting business</li>
              </ul>
              <a className="btn btn-dark" href="#outline" role="button">Read the Full Course Outline</a>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <p className="d-none d-lg-block"><img src={require('../../../images/sl-what-youll-learn.jpg')} className="text-center" alt="What you'll learn in the sleep consultant course" /></p>
            </div>
          </div>
        </div>
      </section>

      <section id="howYoullLearnSection" className="bg-light text-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2>How You'll Learn</h2>
              <p>QC's signature online learning experience is made for highly motivated and ambitious individuals! You'll learn at your own pace, with the help of your student advisor and expert tutor who will be with you every step of the way!</p>
              <ul>
                <li>Follow the course guide that will tell you when you need to read a course book, watch a video, or complete an assignment.</li>
                <li>Complete a variety of assignments including knowledge quizzes, open-ended discussions, and comprehensive real-world case studies where you experience what it's like to be a professional sleep consultant.</li>
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
          subheader="Get certified faster with a FULLY ONLINE sleep consultant course!"
          affordable="Since QC's course is fully online, you don't have to pay surcharges for attending lectures or webinars. You complete the full course from home."
          flexible="No start dates, no deadlines, no mandatory webinars! This course is completely self-directed and self-paced. Get certified quickly, or take your time."
          comprehensive="You won't just learn one proprietary method of sleep coaching. You'll learn every method of sleep consulting, so that you can offer the best service!"
          courses={[ 'sl' ]}
        />
      </section>

      <section id="includedSection" className="bg-light text-dark">
        <Included certification="Infant Sleep Consulting Professional (ISCP™)" />
      </section>

      <a className="anchor" id="outline"></a>
      <section id="outlineSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <h2 className="text-dark text-center">Full Course Outline</h2>
              <p className="lead text-center">Here's a detailed outline of all topics you'll learn in the sleep consultant certification course.</p>
            </div>
          </div>
          <div className="row my-5" id="unitA">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/sl-outline-a.jpg')} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit A" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit A: Sleep Consulting Practices</h3>
              <p className="mb-0">In this first unit, you'll explore the basics of sleep consulting. You'll learn the science of sleep, how children sleep, and how you can help caregivers promote healthy sleep habits. You'll learn every method of sleep consulting, including the advantages and disadvantages of each. You'll learn to use various tools of the trade to help create an optimal sleep space and promote healthy sleep.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.a} />
            </div>
          </div>
          <div className="row my-5" id="unitB">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/sl-outline-b.jpg')} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit B" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit B: Sleep Consulting Application</h3>
              <p className="mb-0">Now that you have a good foundation of knowledge as a sleep consultant, you'll start learning how to apply those practices to provide the best service possible to clients. You'll learn how to create, implement and adapt individualized sleep plans unique to each client.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.b} />
            </div>
          </div>
          <div className="row my-5" id="unitC">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/sl-outline-c.jpg')} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit C" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit C: Professional Sleep Consulting &amp; Coaching</h3>
              <p className="mb-0">In this unit, you'll start putting into practice the knowledge you've acquired over the past two units. You'll go over a number of case studies of unique situations you're likely to encounter as a sleep consultant. You'll start learning how to best work with different clients, and how to turn your new skills and knowledge into a rewarding career.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.c} />
            </div>
          </div>
          <div className="row my-5" id="unitD">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/sl-outline-d.jpg')} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit D" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit D: Business Training</h3>
              <p className="mb-0">If you plan on launching your own sleep consulting business, don't skip this essential final unit! You'll work on getting your business on its feet, and gain invaluable feedback from your tutor in the process!</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.d} />
            </div>
          </div>
          <div className="row my-5" id="unitE">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/sl-outline-e.jpg')} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit E" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit E: Final Project</h3>
              <p className="mb-0">This unit is composed of a final project where you will create a full sleep plan for a real client. You'll practice interacting with new clients, filling out an intake questionnaire, and developing a full sleep plan with feedback from your tutor.</p>
            </div>
          </div>
          <p className="text-center"><a href="https://enroll.qcwellnessstudies.com/" className="btn btn-secondary">ENROLL ONLINE</a></p>
        </div>
      </section>

      <a className="anchor" id="tutors"></a>
      <section id="tutorsSection" className="bg-light">
        <div className="container text-center">
          <h2 className="text-dark text-center">Your Sleep Consulting Tutor</h2>
          <p className="lead mb-5 mx-lg-5">When you enroll, you'll be paired up with one of QC's expert sleep consulting tutors. Your tutor will be responsible for grading your work and providing feedback on your assignments.</p>
          <div className="row text-center">
            <div className="col-12 mb-5 col-md-6 mb-md-0 col-lg-5 offset-lg-1">
              <p><img className="img-fluid" src={require('../../../images/tutor-rosalee.jpg')} alt="Rosalee Lahaie Hera" /></p>
              <h3 className="text-dark">Rosalee Lahaie Hera</h3>
              <p>Rosalee is a mother of two, a certified sleep consultant and owner of Baby Sleep Love. With a background in health services, Rosalee turned to sleep consulting after having to hire a sleep consultant for her own daughter. Since then, she’s worked with hundreds of families to provide completely customized sleep plans for their children. Rosalee specializes in tailoring her services for each family, and will be an invaluable resource to you when starting your sleep consulting business!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p><img className="img-fluid" src={require('../../../images/tutor-elisa.jpg')} alt="Eliza Constanza" /></p>
              <h3 className="text-dark">Elisa Constanza</h3>
              <p>Elisa has over 15 years of experience working with children and their parents. As an early childhood educator and child sleep consultant, she understands how healthy sleep is paramount to healthy development of the child. As a sleep consultant, she offers both in-person consultations as well as virtual consultations over the phone or Skype. Use her mentorship to help build your ideal sleep consulting business!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="certificationSection" className="bg-dark text-light">
        <Certification
          shortName="Sleep Consulting"
          fullName="Infant Sleep Consulting Professional"
          abbr="ISCP"
          registered={false}
        />
      </section>

      <section id="guaranteeSection">
        <Guarantee
          courseName="Sleep Consultant"
          doubleGuarantee={doubleGuarantee}
          twentyOneDays={(
            <>
              <p>Once your enrollment has been processed and you gain access to the online student center, you have 21 days to review the course materials and decide whether you want to take the course.</p>
              <p>This is your chance to inspect the entire course, risk-free! If you decide this course isn't the right fit for you, simply contact your student advisor to withdraw from the course. As long as you haven't submitted any work to your tutor yet, your tuition will be refunded in full!</p>
            </>
          )}
          oneYear={(
            <>
              <p>You'll succeed in your new career, and that's a promise! If you don't earn the equivalent of your tuition within one year after graduating from the sleep consultant course, you'll be eligible for a full refund of your tuition. Simply contact the school, and provide proof that you've made a reasonable effort to gain clients.</p>
              <p><strong>Note:</strong> the 1-year guarantee is only available to graduates of the course. This means you must have successfully completed each unit and have paid your tuition in full.</p>
            </>
          )}
        />
      </section>

      <section id="enrollSection" className="text-light text-center">
        <div className="container">
          <h2>Enroll Today</h2>
          <p className="lead mb-5">Start your online sleep consultant training today<br />and launch an exciting, rewarding career!</p>
          <p><a href="https://enroll.qcwellnessstudies.com/" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
        </div>
      </section>

      <style jsx>{`
        #heroSection{color:white;background-color:#449;background-image:url(${require('../../../images/sl-hero.jpg')});background-size:cover;background-position:center;}
        #certificationSection{background-image:url(${require('../../../images/bg-dark-green-navy.jpg')});background-size:cover}
        #requirementsSection{background-image:url(${require('../../../images/sl-requirements.jpg')});background-size:cover}
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
