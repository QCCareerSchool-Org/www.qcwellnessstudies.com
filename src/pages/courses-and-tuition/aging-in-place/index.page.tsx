import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ReactNode } from 'react';

import OutlineAImage from './ap-outline-a.jpg';
import OutlineBImage from './ap-outline-b.jpg';
import OutlineCImage from './ap-outline-c.jpg';
import WhatYoullLearnImage from './ap-what-youll-learn.jpg';
import BasicRequirementsBackgroundImage from './basic-requirements-bg.jpg';
import HeroBackgroundImage from './hero-bg.jpg';
import { units } from './units';
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
import WhiteGreenBackgroundImage from '@/images/bg-white-green-light.jpg';
import IconAffordable from '@/images/icon-affordable.svg';
import IconComprehensive from '@/images/icon-comprehensive.svg';
import IconFlexible from '@/images/icon-flexible.svg';
import TutorTammyImage from '@/images/tutor-tammy.jpg';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import type { NextPageWithLayout } from '@/pages/_app.page';

const doubleGuarantee = false;
const courses = [ 'ap' ];

const Page: NextPageWithLayout = () => (
  <>
    <SEO
      title="Aging in Place Course"
      description="Become a professional Aging in Place Designer with QC's interactive online course. Study at your own pace and learn to launch your own business!"
      canonical="/courses-and-tuition/aging-in-place"
    />

    <section className="text-white">
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <h1>Become a Certified Aging in Place Consultant</h1>
            <h2 className="h4">Get certified quickly with online training!</h2>
            <ul>
              <li>Fast-paced training course for certified/experienced design professionals</li>
              <li>Get plenty of hands-on training through practical assignments</li>
              <li>Become certified and start your own aging in place business</li>
            </ul>
            <p className="lead">This course is provided in partnership with QC Design School</p>
          </div>
        </div>
      </div>
    </section>

    <a className="anchor" id="paymentPlans" />
    <section id="paymentPlansSection" className="bg-light">
      <BackgroundImage src={WhiteGreenBackgroundImage} />
      <PaymentPlans courses={courses} doubleGuarantee={doubleGuarantee} />
    </section>

    <section id="whatSection">
      <div className="container">
        <h2 className="text-dark text-center">What Is a Aging in Place Consultant?</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
            <p>An aging in place consultant is a decorating professional that specializes in working with clients who have specific concerns related to aging. These clients are either elderly people or individuals in their 40s and 50s who are planning ahead to their retirement years.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <p>The designer works with clients to plan and design a space that is safe and convenient for the client&apos;s specific situation, thus helping the client remain in their home for as long as possible, avoiding having to relocate to an assisted living facility.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-dark text-light">
      <BackgroundImage src={BasicRequirementsBackgroundImage} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2>Basic Requirements for Becoming an Aging in Place Designer</h2>
            <ul className="mb-4">
              <li><p><strong>Interior Decorating Certification/Experience</strong> &mdash; This advanced course is for previously certified decorating professionals. If you do not have previous experience in the design industry, you&apos;ll want to <a href="https://www.qcdesignschool.com/online-courses/interior-decorating/">become a certified interior decorator</a> before taking this Aging in Place course.</p></li>
              <li><p><strong>Business &amp; Marketing Expertise</strong> &mdash; Since this course is an advanced course for certified decorating professionals, the course does not contain business training. You will need to rely on your own business and marketing experience to sell your aging in place services to potential clients.</p></li>
              <li><p><strong>Reliability, Flexibility &amp; Empathy</strong> &mdash; Working with aging in place clients can require a greater degree of sensitivity than your usual design and decorating clients. Being able to connect with your aging clients on a personal level and offer them greater flexibility when scheduling consultations will be a great way to garner their trust!</p></li>
            </ul>
            <p className="text-center"><a href="https://enroll.qcwellnessstudies.com/?c=ap" className="btn btn-secondary">ENROLL NOW</a></p>
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
              <li>What Aging in Place services are and when they&apos;re required</li>
              <li>The role of a decorator/designer in offering aging in place services</li>
              <li>Common aging challenges and how to accommodate those challenges</li>
              <li>Working with clients of all ages to plan for aging</li>
              <li>Building codes and the ADA</li>
              <li>Principles of universal, visitability, and accessible design.</li>
              <li>Aging in Place design practices for each room in the home</li>
              <li>Conducting an Aging in Place needs assessment</li>
              <li>Decluttering and downsizing</li>
            </ul>
            <a className="btn btn-dark" href="#outline" role="button">Read the Full Course Outline</a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <p className="d-none d-lg-block"><Image src={WhatYoullLearnImage} className="text-center img-fluid" alt="What You'll Learn in the Skincare Consultant Course" /></p>
          </div>
        </div>
      </div>
    </section>

    <section id="howYoullLearnSection" className="bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2>How You&apos;ll Learn</h2>
            <p>QC&apos;s signature online learning experience is made for highly motivated and ambitious individuals! You&apos;ll learn at your own pace, with the help of your student advisor and expert tutor who will be with you every step of the way!</p>
            <ul>
              <li>Follow the course guide that will tell you when you need to read a course book, watch a video, or complete an assignment.</li>
              <li>Complete a variety of assignments including knowledge quizzes, open-ended discussions, and comprehensive real-world case studies where you experience what it&apos;s like to be a professional aging in place designer.</li>
              <li>Upload your completed assignments to the online student center.</li>
              <li>Submit your unit once all assignments are completed and uploaded.</li>
              <li>Your tutor will grade your work and provide feedback on every assignment.</li>
              <li>Listen to your tutor&apos;s personalized feedback, and apply their suggestions as you progress through the course.</li>
              <li>Reach out to your student advisor at any time with questions about your training, assignments, or anything else!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="whyChooseQCSection">
      <WhyChoose
        subheader="Get certified faster with a fully online skincare consultant course!"
        sections={[
          {
            title: 'Affordable',
            text: 'Since QC\'s course is fully online, you don\'t have to pay surcharges for attending lectures or webinars. You complete the full course from home.',
            icon: IconAffordable as StaticImageData,
          },
          {
            title: 'Flexible',
            text: 'No start dates, no deadlines, no mandatory webinars! This course is completely self-directed and self-paced. Get certified quickly, or take your time.',
            icon: IconFlexible as StaticImageData,
          },
          {
            title: 'Comprehensive',
            text: 'You\'ll learn many different facets of aging in place design to ensure you\'ll be prepared to work with any client that walks through your doors!',
            icon: IconComprehensive as StaticImageData,
          },
        ]}
        courses={courses}
      />
    </section>

    <IncludedSection className="bg-light text-dark" backgroundImageSrc={WhiteGreenBackgroundImage} certification="Aging in Place Design Professional (APDP™)" />

    <a className="anchor" id="outline" />
    <section id="outlineSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <h2 className="text-dark text-center">Full Course Outline</h2>
            <p className="lead text-center">Here&apos;s a detailed outline of all the topics you&apos;ll study in the aging in place certification course.</p>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitA">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <Image src={OutlineAImage} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit A" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit A: Introduction to Aging in Place</h3>
              <p className="mb-0">This unit will introduce you to the aging in place (AIP) design industry. You&apos;ll learn about the responsibilities of an AIP designer and how AIP services differ from other types of design work. You&apos;ll also learn about common physiological changes, medical conditions, and lifestyle changes people experience as they age, and about all of the different housing and support options available to people facing aging-related challenges. This unit will also teach you how act as an AIP educator and market your services effectively.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.a} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitB">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <Image src={OutlineBImage} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit B" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit B: Aging in Place Practices</h3>
              <p className="mb-0">Unit B focuses on developing the skills required to assess client needs, evaluate homes from an AIP perspective, and create AIP modification plans. You&apos;ll start by learning about the design standards AIP professionals use to guide their work, including universal design, accessible design and visitable design. You&apos;ll then learn how to apply these principles to assess clients&apos; homes and make effective design recommendations. This unit will also teach you how you can incorporate decluttering and home transition services into your AIP business.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.b} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitC">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <Image src={OutlineCImage} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit C" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit C: Final Project</h3>
              <p className="mb-0">This unit will ask you to work with the home of a friend or relative. The home&apos;s resident(s) can be any age and at any stage of life. You will simply be assessing the home as if it belonged to an AIP client. You&apos;ll start by assessing the whole home in broad terms. In later assignments, you&apos;ll focus on two specific rooms in the home. You can choose any type of room (bedroom, bathroom, kitchen, living room, entryway, etc.). However, to get the most from this project, we recommend that you pick a room in which you can make a number of suggestions for AIP improvements. A room that is already AIP-ready won&apos;t allow you to practice applying all of your new skills.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <div id="accordionUnitC" />
            </div>
          </div>
        </div>
        <p className="text-center"><a href="https://enroll.qcwellnessstudies.com/?c=ap" className="btn btn-secondary">ENROLL ONLINE</a></p>
      </div>
    </section>

    <a className="anchor" id="tutors" />
    <section id="tutorsSection" className="bg-light">
      <div className="container text-center">
        <div className="row text-center">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="text-dark text-center">Your Aging in Place Tutor</h2>
            <p><Image src={TutorTammyImage} className="img-fluid" alt="Tammy Hart" /></p>
            <h3 className="text-dark">Tammy Hart</h3>
            <p>Tammy Hart, IDDP, CAPS, is a graduate and tutor of QC Design School. She is a Certified Aging-in-Place Specialist from the National Association of Home Builders. She is the owner and award-winning designer for Designer Chick Co. and is the previous director on the National Board for DDA (formerly CDECA).</p>
            <p>She is a professional speaker, speaking at venues like IIDEXCanada and The Small Business Forum. She&apos;s been featured in East of the City Magazine, as a guest spot on the Rogers Daytime Durham talk show and has won the HOUZZ Service Award 2017. She works to empower young women to become successful future leaders and supports ocean clean-up efforts.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="certificationSection" className="bg-dark text-light">
      <BackgroundImage src={DarkGreenNavyBackgroundImage} />
      <Certification
        shortName="Aging in Place Consultant"
        fullName="Aging in Place Design Professional"
        abbr="APDP"
        registered={false}
      />
    </section>

    <section id="guaranteeSection">
      <Guarantee courseName="Aging in Place" doubleGuarantee={doubleGuarantee} />
    </section>

    <EnrollmentSection>
      Start your online aging in place training today<br />and launch an exciting, rewarding career!
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

Page.getLayout = function Layout(page): ReactNode {
  return (
    <DefaultLayout
      secondaryNav={(
        <Subnav
          heading="Aging in Place Design Course"
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
