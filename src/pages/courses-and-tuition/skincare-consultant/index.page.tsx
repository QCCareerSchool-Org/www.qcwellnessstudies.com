import Image from 'next/image';

import type { ReactNode } from 'react';
import HeroBackgroundImage from './hero-bg.jpg';
import OutlineAImage from './outline-a.jpg';
import OutlineBImage from './outline-b.jpg';
import OutlineCImage from './outline-c.jpg';
import OutlineDImage from './outline-d.jpg';
import OutlineEImage from './outline-e.jpg';
import RequirementsBackgroundImage from './requirements-bg.jpg';
import { units } from './units';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { Certification } from '@/components/Certification';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { Guarantee } from '@/components/Guarantee';
import { Included } from '@/components/Included';
import { PaymentPlans } from '@/components/PaymentPlans';
import { SEO } from '@/components/SEO';
import { Subnav } from '@/components/Subnav';
import { UnitOutline } from '@/components/UnitOutline';
import { WhyChoose } from '@/components/WhyChose';
import DarkGreenNavyBackgroundImage from '@/images/bg-dark-green-navy.jpg';
import WhiteGreenBackgroundImage from '@/images/bg-white-green-light.jpg';
import TutorNathanImage from '@/images/tutor-nathan.jpg';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import type { NextPageWithLayout } from '@/pages/_app.page';

const doubleGuarantee = false;

const Page: NextPageWithLayout = () => (
  <>
    <SEO
      title="Skincare Consultant Course"
      description="Become a professional skincare consultant with QC's interactive online course. Study at your own pace and learn to launch your own skincare business!"
      canonical="/courses-and-tuition/skincare-consultant"
    />

    <section className="text-white">
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <h1>Become a Certified Skincare Consultant</h1>
            <h2 className="h4">Get certified quickly with online training!</h2>
            <ul>
              <li>No previous skincare experience required.</li>
              <li>No set deadlines, mandatory webinars, or classrooms to attend.</li>
              <li>Get plenty of hands-on training through practical assignments</li>
              <li>Become certified to work with a diverse clientele in a variety of industries!</li>
            </ul>
            <p className="lead">This course is provided in partnership with QC Makeup Academy.</p>
          </div>
        </div>
      </div>
    </section>

    <a className="anchor" id="paymentPlans"></a>
    <section id="paymentPlansSection" className="bg-light">
      <BackgroundImage src={WhiteGreenBackgroundImage} />
      <PaymentPlans courses={[ 'sk' ]} doubleGuarantee={doubleGuarantee} />
    </section>

    <section id="whatSection">
      <div className="container">
        <h2 className="text-dark text-center">What Is a Skincare Consultant?</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
            <p>A skincare consultant is a professional in the makeup artistry/cosmetology industry who specializes in helping clients achieve healthy and glowing skin. As a professional skincare consultant, you&apos;ll meet with clients to identify their particular skincare needs, and create a skincare routine specifically designed for their unique skin type.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <p>You&apos;ll become an expert in skincare products and know what ingredients certain clients should avoid. By helping clients achieve healthier skin, you&apos;ll be contributing to their physical and emotional wellness!</p>
          </div>
        </div>
      </div>
    </section>

    <section id="requirementsSection" className="bg-dark text-light">
      <BackgroundImage src={RequirementsBackgroundImage} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2>Basic Requirements for Becoming a Skincare Consultant</h2>
            <ul className="mb-4">
              <li><p><strong>Attention to Detail </strong> &mdash; You&apos;ll need to become familiar with a multitude of skin types and conditions, and be able to identify them based on a single consultation with your client. This will require precision and care!</p></li>
              <li><p><strong>Flexibility</strong> &mdash; Most skincare consultants work on appointments, and most clients will expect you to be available outside of regular business hours. Skincare professionals who have availability on some evenings and weekends have a much greater chance of success.</p></li>
              <li><p><strong>Reliability</strong> &mdash; As a professional, you&apos;ll be expected to adhere to a set schedule. Time management skills are essential to succeed in this career.</p></li>
              <li><p><strong>Empathy</strong> &mdash; Some of your clients will come to you in a desperate state, having tried everything they can think of to get a specific skin condition under control. Some clients might get frustrated if the results you offer aren&apos;t transformative enough. You&apos;ll need the ability to deal with these clients compassionately and professionally, always!</p></li>
            </ul>
            <p className="text-center"><a href="https://enroll.qcwellnessstudies.com/?c=sk" className="btn btn-secondary">ENROLL NOW</a></p>
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
              <li>How the skincare consultant industry works</li>
              <li>Skincare basics, skin anatomy and skin types</li>
              <li>Skincare products, tools, and treatments</li>
              <li>How to recommend cleansers, moisturizers, tools, and makeup</li>
              <li>Creating skincare routines</li>
              <li>Assessing skin types and skin conditions</li>
              <li>Dealing with acne-prone skin</li>
              <li>Anti-aging skincare</li>
              <li>Natural skincare</li>
            </ul>
            <a className="btn btn-dark" href="#outline" role="button">Read the Full Course Outline</a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <p className="d-none d-lg-block"><Image src={WhatYoullLearnImage} className="text-center img-fluid" alt="What You&apos;ll Learn in the Skincare Consultant Course" /></p>
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
              <li>Complete a variety of assignments including knowledge quizzes, open-ended discussions, and comprehensive real-world case studies where you experience what it&apos;s like to be a professional skincare consultant.</li>
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
        affordable="Since QC's course is fully online, you don't have to pay surcharges for attending lectures or webinars. You complete the full course from home."
        flexible="No start dates, no deadlines, no mandatory webinars! This course is completely self-directed and self-paced. Get certified quickly, or take your time."
        comprehensive="You&apos;ll learn many different facets of skincare to ensure you&apos;ll be prepared to work with any client that walks through your doors!"
        courses={[ 'sk' ]}
      />
    </section>

    <section id="includedSection" className="bg-light text-dark">
      <BackgroundImage src={WhiteGreenBackgroundImage} />
      <Included certification="International Skincare Consultant Professional (ISCP™)" />
    </section>

    <a className="anchor" id="outline"></a>
    <section id="outlineSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <h2 className="text-dark text-center">Full Course Outline</h2>
            <p className="lead text-center">Here&apos;s a detailed outline of all the topics you&apos;ll study in the skincare consultant certification course.</p>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitA">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <Image src={OutlineAImage} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit A" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit A: Introduction to Skincare</h3>
              <p className="mb-0">In this first unit, you&apos;ll explore the basics of skincare consulting. You&apos;ll get a thorough understanding of why skincare is so important, and why makeup artists in particular should all be trained in skincare as well. You&apos;ll then dive into what you need to succeed as a skincare consultant, and get a deep dive into skin anatomy, and how to identify the five major skin types. </p>
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
              <h3 className="text-dark">Unit B: Skincare Products, Tools &amp; Treatments</h3>
              <p className="mb-0">Now that you have a good basic understanding of skin, and of your specific role as a skincare consultant, you&apos;ll start learning about the products, tools, and treatments you can recommend to your clients based on their needs. You&apos;ll learn to read labels and identify key ingredients, and build a personalized skincare routine tailor-made to your client.</p>
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
              <h3 className="text-dark">Unit C: Working with Skin Conditions</h3>
              <p className="mb-0">In this unit you&apos;ll learn about specific skin conditions and skin concerns that you&apos;ll encounter as a skincare professional. You&apos;ll learn how to assess these conditions, and what products/tools to specifically recommend or stay away from based on the client&apos;s unique needs. You&apos;ll also learn what serious but rare conditions to look out for, and when you should refer a client to a dermatologist or other healthcare professional.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.c} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitD">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <Image src={OutlineDImage} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit D" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit D: Anti-Aging Skincare</h3>
              <p className="mb-0">As a skincare consultant, you&apos;ll probably see your fair share of clients who are looking for aging cures. This is a high demand industry so you&apos;ll be expected to be well versed in anti-aging treatments, tools and products. Be sure to also keep up with the latest trends and gimmicks so that you can advise your clients!</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.d} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5" id="unitE">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <Image src={OutlineEImage} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit E" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit E: Natural Skincare &amp; The Skincare Consultation Process</h3>
              <p className="mb-0">Some clients will insist on going &ldquo;all natural&rdquo; and you&apos;ll quickly learn that this term can mean different things to different people. In the first part of this final unit, you&apos;ll learn how to make your own skincare products safely and naturally. In your final section of the unit, you&apos;ll put together everything you&apos;ve learned so far and apply it to the skincare consultation process.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.e} />
            </div>
          </div>
        </div>
        <p className="text-center"><a href="https://enroll.qcwellnessstudies.com/?c=sk" className="btn btn-secondary">ENROLL ONLINE</a></p>
      </div>
    </section>

    <a className="anchor" id="tutors"></a>
    <section id="tutorsSection" className="bg-light">
      <div className="container text-center">
        <div className="row text-center">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="text-dark text-center">Your Skincare Consultant Tutor</h2>
            <p><Image src={TutorNathanImage} className="img-fluid" alt="Nathan Johnson" /></p>
            <h3 className="text-dark">Nathan Johnson</h3>
            <p>With over 18 years of experience as an executive makeup artist and skincare consultant, Nathan is excited to share that knowledge with you and help you advance your skillset. Nathan is featured in QC Makeup Academy&apos;s instructional videos, and will be the expert to mentor you through your learning journey!</p>
          </div>
        </div>
      </div>
    </section>

    <section id="certificationSection" className="bg-dark text-light">
      <BackgroundImage src={DarkGreenNavyBackgroundImage} />
      <Certification
        shortName="Skincare Consulting"
        fullName="International Skincare Consulting Professional"
        abbr="ISCP"
        registered={false}
      />
    </section>

    <section id="guaranteeSection">
      <Guarantee courseName="Skincare Consultant" doubleGuarantee={doubleGuarantee} />
    </section>

    <EnrollmentSection courseCodes={[ 'sk' ]}>
      Start your online skincare consultant training today<br />and launch an exciting, rewarding career!
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
          heading="Skincare Consultant Course"
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
