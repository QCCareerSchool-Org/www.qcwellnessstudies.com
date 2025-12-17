import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ReactNode } from 'react';

import HeroBackgroundImage from './hero-bg.jpg';
import OutlineAImage from './outline-a.jpg';
import OutlineBImage from './outline-b.jpg';
import OutlineCImage from './outline-c.jpg';
import OutlineDImage from './outline-d.jpg';
import RequirementsBackgroundImage from './requirements-bg.jpg';
import { units } from './units';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { Certification } from '@/components/Certification';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { Guarantee } from '@/components/Guarantee';
import { IncludedSection } from '@/components/IncludedSection';
import { PaymentPlans } from '@/components/PaymentPlans';
import { SEO } from '@/components/SEO';
import { Subnav } from '@/components/Subnav';
import { UnitOutline } from '@/components/UnitOutline';
import { WhyChoose } from '@/components/WhyChose';
import DarkGreenNavyBackgroundImage from '@/images/bg-dark-green-navy.jpg';
import WhiteGreenLightBackgroundImage from '@/images/bg-white-green-light.jpg';
import IconAffordable from '@/images/icon-affordable.svg';
import IconComprehensive from '@/images/icon-comprehensive.svg';
import IconFlexible from '@/images/icon-flexible.svg';
import TutorRosaleeImage from '@/images/tutor-rosalee.jpg';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import type { NextPageWithLayout } from '@/pages/_app.page';

const doubleGuarantee = false;
const courses = [ 'sl' ];

export const subNavItems = [
  { name: 'Tuition', url: '#paymentPlans' },
  { name: 'Course Outline', url: '#outline' },
  { name: 'Tutors', url: '#tutors' },
];

interface Props {
  enrollPath: string;
}

const Page: NextPageWithLayout<Props> = ({ enrollPath }) => {
  return (
    <>
      <SEO
        title="Pediatric Sleep Consultant Course"
        description="Become a certified professional sleep consultant with QC's online training. QC offers a fully-online sleep consultant course. Get certified faster and launch your own sleep consulting business!"
        canonical="/courses-and-tuition/sleep-consultant"
      />

      <section className="text-white">
        <BackgroundImage src={HeroBackgroundImage} priority />
        <div className="container">

          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7">
              <h1>Become a Certified Pediatric Sleep Consultant</h1>
              <h2 className="h5">Get certified with a fully online pediatric sleep consulting course</h2>
              <ul>
                <li>Study from home on your own schedule!</li>
                <li>Learn ALL methods of sleep coaching, including their benefits &amp; limitations.</li>
                <li>Receive personalized feedback and guidance from an expert sleep consultant.</li>
                <li>Learn how to start and run your own business as a pediatric sleep consultant!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="paymentPlans" />
      <section id="paymentPlansSection" className="bg-light">
        <BackgroundImage src={WhiteGreenLightBackgroundImage} />
        <PaymentPlans courses={courses} doubleGuarantee={doubleGuarantee} enrollPath={enrollPath} />
      </section>

      <section id="whatSection">
        <div className="container">
          <h2 className="text-dark text-center">What Is a Pediatric Sleep Consultant?</h2>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
              <p>A sleep consultant or &ldquo;sleep coach&rdquo; is a professional expertly trained to help parents and caregivers create safe and healthy sleep habits for their children. Although sleep consultants primarily focus on infant sleep issues, with QC&apos;s certification you&apos;ll be well prepared to help the whole family improve their sleep habits. You&apos;ll consult with parents and caregivers on their child&apos;s needs and the methods they&apos;re comfortable with, and then work with them to establish a bedtime routine that will work for their child. You&apos;ll consult on common bedtime/nighttime problems to help the child sleep comfortably through the night, so that the parents can get adequate rest, too!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p>Some sleep consultants specialize in one-time consultations or coaching sessions. Others offer full-service consulting, where they will visit their client&apos;s home for several days or weeks in order to solve the child&apos;s sleep problems. And of course, you can offer a range of services to suit any client that comes your way!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="requirementsSection" className="bg-dark text-light">
        <BackgroundImage src={RequirementsBackgroundImage} />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-7 offset-lg-0">
              <h2>Basic Requirements for Becoming a Sleep Consultant</h2>
              <ul className="mb-4">
                <li><p><strong>Patience</strong> &mdash; Infants and toddlers are vulnerable human beings with diverse personalities. Caregivers are often stressed, busy, and overwhelmed. This is where you come in. You need to bring calm and order to stressful conditions.</p></li>
                <li><p><strong>Flexibility</strong> &mdash; Both children and their caregivers have different needs and preferences. You need to be attentive to these differences and be able to adapt your approach depending on the child or caregiver. Sometimes that means putting your own preferences aside and striving to do what&apos;s best for your clients.</p></li>
                <li><p><strong>Reliability</strong> &mdash; As a professional, you&apos;ll be expected to adhere to a set schedule. Time management skills are essential to succeed in this career.</p></li>
                <li><p><strong>Care &amp; Compassion</strong> &mdash; You&apos;re going to be working with newborns, babies, and toddlers every day. Sometimes they&apos;ll be difficult, for a variety of different reasons. You&apos;ll need to be empathetic as they adjust to their new routines.</p></li>
              </ul>
              <p className="text-center"><a className="btn btn-secondary" href={`${enrollPath}?c=sl`}>ENROLL NOW</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="whatYoullLearnSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-5">
              <h2 className="text-dark">What You&apos;ll Learn</h2>
              <p className="lead">In this highly interactive self-paced training course, you&apos;ll learn:</p>
              <ul className="mb-4">
                <li>Licensing, restrictions and legal aspects of becoming a sleep consultant</li>
                <li>Infant and toddler sleep habits and behaviors</li>
                <li>Sleep advice for the whole family</li>
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
              <p className="d-none d-lg-block"><Image src={WhatYoullLearnImage} width={400} height={410} alt="What you&apos;ll learn in the sleep consultant course" /></p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2>How You&apos;ll Learn</h2>
              <p>QC&apos;s signature online learning experience is designed to help you succeed! QC&apos;s courses provide you with tons of hands-on experience to enrich your learning. Combine that with detailed individualized feedback from your tutor and you&apos;re guaranteed to receive a well-rounded educational experience.</p>
              <ul>
                <li>Log in to your Online Student Center to access all your course materials, including interactive lessons, instructional videos and assignments.</li>
                <li>Complete a variety of theoretical and practical assignments designed to hone your skills as a professional sleep consultant.</li>
                <li>An industry expert will grade your work and provide you with personalized feedback.</li>
                <li>Once you&apos;ve completed your course and your tuition has been paid in full, you&apos;ll be all set to graduate and receive your professional certification!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <WhyChoose
          sections={[
            {
              title: 'Affordable',
              text: 'Since QC\'s course is fully online, you\'ll have lifetime access to your student center at no additional cost. Everything you need to build a successful career is included in your course.',
              icon: IconAffordable as StaticImageData,
            },
            {
              title: 'Flexible',
              text: 'QC\'s 100% online program allows you to work at your own pace. You\'ll complete interactive lessons and watch detailed instructional videos with 1-on-1 support whenever you need it.',
              icon: IconFlexible as StaticImageData,
            },
            {
              title: 'Comprehensive',
              text: 'With QC\'s interactive online training, you\'ll learn every method of sleep consulting. You\'ll master all the skills you need to launch a profitable business in this thriving industry!',
              icon: IconComprehensive as StaticImageData,
            },
          ]}
          courses={courses}
        />
      </section>

      <IncludedSection className="bg-light text-dark" certification="Pediatric Sleep Consulting Professional (PSCP™)" />

      <a className="anchor" id="outline" />
      <section id="outlineSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <h2 className="text-dark text-center">Full Course Outline</h2>
              <p className="lead text-center">Here&apos;s a detailed outline of all the topics you&apos;ll study in the sleep consultant certification course.</p>
            </div>
          </div>
          <div className="container">
            <div className="row my-5" id="unitA">
              <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
                <Image src={OutlineAImage} width={445} height={225} className="rounded img-fluid mt-2" alt="" />
              </div>
              <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
                <h3 className="text-dark">Unit A: Sleep Consulting Practices</h3>
                <p className="mb-0">In this first unit, you&apos;ll explore the basics of sleep consulting. You&apos;ll learn the science of sleep, how children sleep, and how you can help caregivers promote healthy sleep habits.</p>
              </div>
              <div className="col-12 col-md-10 offset-md-1">
                <UnitOutline data={units.a} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row my-5" id="unitB">
              <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
                <div className="mt-2">
                  <Image src={OutlineBImage} width={445} height={225} className="rounded img-fluid" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
                <h3 className="text-dark">Unit B: Sleep Training Methods &amp; Philosophies</h3>
                <p className="mb-0">Next, you&apos;ll learn every method of sleep consulting, including the advantages and disadvantages of each. You&apos;ll learn to use various tools of the trade to help create an optimal sleep space and promote healthy sleep for infants in every age group.</p>
              </div>
              <div className="col-12 col-md-10 offset-md-1">
                <UnitOutline data={units.b} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row my-5" id="unitC">
              <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
                <div className="mt-2">
                  <Image src={OutlineCImage} width={445} height={225} className="rounded img-fluid" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
                <h3 className="text-dark">Unit C: Sleep Consulting Application</h3>
                <p className="mb-0">Now that you have a good foundation of knowledge as a sleep consultant, you&apos;ll start learning how to apply those practices to provide the best service possible to clients. You&apos;ll learn how to create, implement, and adapt individualized sleep plans unique to each client.</p>
              </div>
              <div className="col-12 col-md-10 offset-md-1">
                <UnitOutline data={units.c} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row my-5" id="unitD">
              <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
                <div className="mt-2">
                  <Image src={OutlineDImage} width={445} height={225} className="rounded img-fluid" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
                <h3 className="text-dark">Unit D: Professional Sleep Consulting &amp; Coaching</h3>
                <p className="mb-0">In this unit, you&apos;ll start putting into practice the knowledge you&apos;ve acquired over the past three units. You&apos;ll go over a number of case studies of unique situations you&apos;re likely to encounter as a sleep consultant. You&apos;ll start learning how to best work with different clients, and how to turn your new skills and knowledge into a rewarding career.</p>
              </div>
              <div className="col-12 col-md-10 offset-md-1">
                <UnitOutline data={units.d} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row my-5" id="unitE">
              {/* <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <div className="mt-2">
                <Image src={require('../../../images/sl-outline-e.jpg')} width={445} height={225} className="rounded" alt="" />
              </div>
            </div> */}
              <div className="col-12 col-md-10 offset-md-1 text-lg-left mb-4">
                <h3 className="text-dark">Unit E: Business Training</h3>
                <p className="mb-0">You&apos;ll learn essential skills to help you launch a successful sleep consulting business. You&apos;ll work on business startup and marketing your services and gain invaluable feedback from your tutor in the process!</p>
              </div>
              <div className="col-12 col-md-10 offset-md-1">
                <UnitOutline data={units.e} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row my-5" id="unitF">
              {/* <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <div className="mt-2">
                <Image src={require('../../../images/sl-outline-e.jpg')} width={445} height={225} className="rounded" alt="" />
              </div>
            </div> */}
              <div className="col-12 col-md-10 offset-md-1 text-lg-left mb-4">
                <h3 className="text-dark">Unit F: Final Project</h3>
                <p className="mb-0">This unit is composed of a final project where you will create a full sleep plan for a real client. You&apos;ll practice interacting with new clients, filling out an intake questionnaire, and developing a full sleep plan with feedback from your tutor.</p>
              </div>
            </div>
          </div>
          <p className="text-center"><a href={`${enrollPath}?c=sl`} className="btn btn-secondary">ENROLL ONLINE</a></p>
        </div>
      </section>

      <a className="anchor" id="tutors" />
      <section id="tutorsSection" className="bg-light">
        <div className="container text-center">
          <h2 className="text-dark text-center">Your Sleep Consulting Tutor</h2>
          <p className="lead mb-5 mx-lg-5">When you enroll, you&apos;ll be paired up with one of QC&apos;s expert sleep consulting tutors. Your tutor will be responsible for grading your work and providing feedback on your assignments.</p>
          <div className="row text-center">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <p><Image className="img-fluid" src={TutorRosaleeImage} width={350} height={350} alt="Rosalee Lahaie Hera" /></p>
              <h3 className="text-dark">Rosalee Lahaie Hera</h3>
              <p>Rosalee is a mother of two, a certified sleep consultant and owner of Baby Sleep Love. With a background in health services, Rosalee turned to sleep consulting after having to hire a sleep consultant for her own daughter. Since then, she&apos;s worked with hundreds of families to provide completely customized sleep plans for their children. Rosalee specializes in tailoring her services for each family, and will be an invaluable resource to you when starting your sleep consulting business!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="certificationSection" className="bg-dark text-light">
        <BackgroundImage src={DarkGreenNavyBackgroundImage} />
        <Certification
          shortName="Sleep Consulting"
          fullName="Pediatric Sleep Consulting Professional"
          abbr="PSCP"
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
              <p>This is your chance to inspect the entire course, risk-free! If you decide this course isn&apos;t the right fit for you, simply contact your student advisor to withdraw from the course. As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>
            </>
          )}

        />
      </section>

      <EnrollmentSection courseCodes={courses}>
        Start your online sleep consultant training today<br />and launch an exciting, rewarding career!
      </EnrollmentSection>

      <style jsx>{`
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
};

Page.getLayout = function Layout(page): ReactNode {
  return (
    <DefaultLayout secondaryNav={<Subnav heading="Infant Sleep Consultant Course" items={subNavItems} />}>
      {page}
    </DefaultLayout>
  );
};

export default Page;
