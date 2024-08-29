import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoMdDownload, IoMdFiling } from 'react-icons/io';

import OutlineAImage from './outline-a.jpg';
import OutlineBImage from './outline-b.jpg';
import OutlineCImage from './outline-c.jpg';
import OutlineDImage from './outline-d.jpg';
import HeroBackgroundImage from './preview-hero-bg.jpg';
import { About } from '@/components/About';
import { BackgroundImage } from '@/components/BackgroundImage';
import { Contact } from '@/components/Contact';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { Guarantee } from '@/components/Guarantee';
import { HowItWorks } from '@/components/HowItWorks';
import { PriceCard } from '@/components/PriceCard';
import { SEO } from '@/components/SEO';
import { Subnav } from '@/components/Subnav';
import { useLocation } from '@/hooks/useLocation';
import { usePrice } from '@/hooks/usePrice';
import { useToggle } from '@/hooks/useToggle';
import A4Image from '@/images/A4.jpg';
import B3Image from '@/images/B3.jpg';
import AboutBackgroundImage from '@/images/bg-about-qc.jpg';
import OnlineBackgroundImage from '@/images/bg-fully-online.jpg';
import GreenWhiteBackgroundImage from '@/images/bg-white-green-light.jpg';
import ISCPImage from '@/images/certification-iscp.png';
import ChatIcon from '@/images/icon-live-chat.svg';
import AdvisorImage from '@/images/student-advisor.jpg';
import TutorImage from '@/images/tutor.jpg';
import { MinimalLayout } from '@/layouts/MimimalLayout';
import { formatPrice } from '@/lib/functions';
import type { NextPageWithLayout } from '@/pages/_app.page';

const courses = [ 'sl' ];

const Page: NextPageWithLayout = () => {
  const [ popup1, toggle1 ] = useToggle();
  const [ popup2, toggle2 ] = useToggle();
  const location = useLocation();
  const price = usePrice(courses, location?.countryCode, location?.provinceCode);

  return <>
    <SEO
      title="Pediatric Sleep Consultant Course Preview"
      description="Preview the online Pediatric Sleep Consultant course offered by QC. Read a detailed course overview, sample some assignments, meet your tutors, and more!"
      canonical="/courses-and-tuition/sleep-consultant/preview"
      noIndex={true}
    />

    <section className="text-white">
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container text-center">
        <div className="row mt-5">
          <div className="col-12 col-md-10 offset-md-1">
            <p><Image width="129" height="132" src={ISCPImage} alt="Infant Sleep Consulting Professional Certification" /></p>
            <h1 className="text-uppercase">Pediatric Sleep Consultant Course</h1>
            <h2 className="h3">Course Preview</h2>
          </div>
        </div>
      </div>
    </section>

    <section id="introSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-3">
            <h2 className="text-dark">Pediatric Sleep Consultant Certification Course</h2>
            <h3 className="h4">Unlock a Rewarding Career in a Thriving Industry</h3>
            <p>Sleep consulting is a booming industry in today&apos;s society. New parents are increasingly aware of the crucial role healthy sleep habits play in the health and well-being of their infants and toddlers. When a child doesn&apos;t sleep, neither do the parents! This often leads to parents seeking expert solutions for their children&apos;s sleep challenges. As a certified sleep consultant, you&apos;ll be equipped to provide these much-needed solutions.</p>
            <p>QC&apos;s comprehensive online course offers everything you need to launch a successful career as a sleep consultant. You&apos;ll learn the best practices and techniques essential for effective sleep consulting, along with crucial skills in client communication and business management to ensure your venture is profitable and impactful.</p>
            <p>This course is ideal for individuals passionate about working with children and interested in the childcare industry, whether part-time or full-time, including:</p>
            <ul>
              <li>Parents of young children</li>
              <li>Work-at-home parents</li>
              <li>Professionals in the childcare industry</li>
              <li>Professionals in the healthcare and wellness industries</li>
            </ul>
            <p>Curious about the course from a graduate&apos;s perspective? <Link href="/student-resources/blog/student-features/sarah-pashniak">Meet Sarah Pashniak, a QC graduate who now runs a flourishing sleep consulting business</Link>. Discover her inspiring journey and see how the course can transform your career.</p>
          </div>
        </div>
      </div>
    </section>

    <a className="anchor" id="online"></a>
    <section id="onlineSection">
      <BackgroundImage src={OnlineBackgroundImage} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="text-light">Get Certified Faster with Our Fully Online Sleep Consultant Course!</h2>
            <h3 className="text-light h4">Why Choose QC&apos;s Online Course</h3>
            <ul className="text-light">
              <li><p>Flexible Scheduling: No rigid enrollment or certification deadlines to worry about.</p></li>
              <li><p>No Hidden Fees: Keep your certification current without ongoing fees, and enjoy lifetime access to your course materials and templates after graduation.</p></li>
              <li><p>Comprehensive Training: Our course covers all methods of sleep consulting, not just one proprietary technique. This extensive training ensures you become a true industry expert, capable of serving your clients with the best possible solutions.</p></li>
              <li><p>True Online Learning Experience: QC offers a flexible and interactive online learning experience. Our course is designed to provide you with ample feedback and hands-on training, making your learning process both convenient and effective.</p></li>
            </ul>
            <p className="text-light">Welcome to QC&mdash;where your journey to becoming a certified sleep consultant begins!</p>
          </div>
        </div>
      </div>
    </section>

    <a className="anchor" id="howItWorks"></a>
    <section>
      <BackgroundImage src={GreenWhiteBackgroundImage} />
      <HowItWorks
        courseName="Sleep Consultant Course"
        tutorOccupation="professional sleep consultant"
        certification="Infant Sleep Consultant Professional (ISCP™)"
      />
    </section>

    <a className="anchor" id="curriculum"></a>
    <section id="curriculumSection">
      <div className="container">
        <div className="row">
          <div className="text-center col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-5">
            <h2 className="text-dark mb-4 text-center">Course Curriculum</h2>
            <p>The sleep consultant course is divided into six units. You&apos;ll start by learning the basics of sleep consulting, and then build on that knowledge as you work your way through the course. Once you&apos;ve completed the course, you&apos;ll be fully qualified to work as a professional sleep consultant!</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-5">
            <p><Image className="img-fluid" width="445" height="225" src={OutlineAImage} alt="Sleep Consultant Course Unit A" /></p>
            <h3 className="text-dark">Unit A: Sleep Consulting Practices</h3>
            <p>In this first unit, you&apos;ll explore the basics of sleep consulting. You&apos;ll learn the science of sleep, how children sleep, and how you can help caregivers promote healthy sleep habits.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5 mb-5">
            <p><Image className="img-fluid" width="445" height="225" src={OutlineBImage} alt="Sleep Consultant Course Unit B" /></p>
            <h3 className="text-dark">Unit B: Sleep Training Methods &amp; Philosophies</h3>
            <p>Next, you&apos;ll learn every method of sleep consulting, including the advantages and disadvantages of each. You&apos;ll learn how to use various tools of the trade to help create an optimal sleep space and promote healthy sleep for infants in every age group.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-5">
            <p><Image className="img-fluid" width="445" height="225" src={OutlineCImage} alt="Sleep Consultant Course Unit C" /></p>
            <h3 className="text-dark">Unit C: Sleep Consulting Application</h3>
            <p>Now that you have a good foundation of knowledge as a sleep consultant, you&apos;ll start learning how to apply those practices to provide the best service possible to clients. You&apos;ll learn how to create, implement and adapt individualized sleep plans unique to each client.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5 mb-5">
            <p><Image className="img-fluid" width="445" height="225" src={OutlineDImage} alt="Sleep Consultant Course Unit D" /></p>
            <h3 className="text-dark">Unit D: Professional Sleep Consulting &amp; Coaching</h3>
            <p>In this unit, you&apos;ll start putting into practice the knowledge you&apos;ve acquired over the past two units. You&apos;ll go over a number of case studies of unique situations you&apos;re likely to encounter as a sleep consultant. You&apos;ll start learning how to best work with different clients, and how to turn your new skills and knowledge into a rewarding career.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-5">
            {/* <p><Image className="img-fluid" width="445" height="225" src={require('@/images/sl-outline-e.jpg')} alt="Sleep Consultant Course Unit E" /></p> */}
            <h3 className="text-dark">Unit E: Business Training</h3>
            <p>You&apos;ll learn essential skills to help you launch a successful sleep consulting business. You&apos;ll work on starting your business and marketing your services, and gain invaluable feedback from your tutor in the process!</p>
          </div>
          <div className="col-12 col-md-6 col-lg-5 mb-5">
            {/* <p><Image className="img-fluid" width="445" height="225" src={require('@/images/sl-outline-e.jpg')} alt="Sleep Consultant Course Unit F" /></p> */}
            <h3 className="text-dark">Unit F: Final Project</h3>
            <p>This unit is composed of a final project where you will create a full sleep plan for a real client. You&apos;ll practice interacting with new clients, filling out an intake questionnaire, and developing a full sleep plan with feedback from your tutor.</p>
          </div>
          <div className="text-center col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
            <p className="lead"><strong>Note:</strong> Above is an overview of the sleep consulting course curriculum. For a full and detailed course outline, click below.</p>
            <Link href="/courses-and-tuition/sleep-consultant#outline" className="btn btn-outline-secondary text-uppercase">Full Course Outline</Link>
          </div>
        </div>
      </div>
    </section>

    <Modal show={popup1} onHide={toggle1} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Assignment A4</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Image className="img-fluid d-block" src={A4Image} alt="Sample Assignment A4" />
      </Modal.Body>
      <Modal.Footer className="bg-dark text-white justify-content-between border-0">
        <a href="/sample-assignments/A4.pdf" className="ml-1"><IoMdDownload className="mr-1" />Download A4.pdf</a>
        <button type="button" className="btn btn-secondary" onClick={toggle1}>Close</button>
      </Modal.Footer>
    </Modal>

    <Modal show={popup2} onHide={toggle2} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Assignment B3</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Image className="img-fluid d-block" src={B3Image} alt="Sample Assignment B3" />
      </Modal.Body>
      <Modal.Footer className="bg-dark text-white justify-content-between border-0">
        <a href="/sample-assignments/B3.pdf" className="ml-1"><IoMdDownload className="mr-1" />Download B3.pdf</a>
        <button type="button" className="btn btn-secondary" onClick={toggle2}>Close</button>
      </Modal.Footer>
    </Modal>

    <a className="anchor" id="sampleAssignment"></a>
    <section id="sampleAssignmentSection">
      <BackgroundImage src={GreenWhiteBackgroundImage} />
      <div className="container text-center">
        <h2 className="text-center text-dark">Sample Assignments</h2>
        <p className="mb-5">Your course assignments are designed to test your ability to apply foundational sleep consulting concepts and practices. You&apos;ll be tested on everything from your knowledge of sleep training methodologies to your ability to make personalized recommendations for client scenarios. You&apos;ll also have the opportunity to complete your first practical sleep consulting session.<strong> Click below to preview or download two assignments that are a part of the course.</strong></p>
        <div className="row text-center">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-4 d-flex">
            <div className="card">
              <div className="h3 text-light card-header bg-dark">Assignment A4</div>
              <div className="card-body d-flex">
                <div className="d-flex flex-column justify-content-between">
                  <p>In addition to providing guidance on sleep training, sleep consultants offer advice onother crucial factors that tie into good sleep, including the sleep environment. In this practical assignment, you&apos;ll photograph and evaluate the sleep space of a friend or relative&apos;s infant.</p>
                  <button type="button" className="btn btn-primary" onClick={toggle1}>Assignment A4</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-4 order-md-2 d-flex">
            <div className="card">
              <div className="h3 text-light card-header bg-dark">Assignment B3</div>
              <div className="card-body d-flex">
                <div className="d-flex flex-column justify-content-between">
                  <p>Every client&apos;s situation will be a little different. In this assignment, you&apos;ll read a client scenario and begin developing a customized sleep plan to address the client&apos;s needs. This is the kind of work you&apos;ll do every day when you start taking on your own clients.</p>
                  <button type="button" className="btn btn-primary" onClick={toggle2}>Assignment B3</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <a className="anchor" id="tuition"></a>
    <section id="tuitionSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-lg-5 offset-lg-0 col-xl-4">
            <PriceCard courses={[ 'sl' ]} />
          </div>
          <div className="col-12 mb-5 col-md-12 col-lg-7 mb-lg-0 col-xl-8 text-center text-lg-left order-first order-lg-last">
            <h2 className="text-dark">Tuition &amp; Payment Plans</h2>
            <p>The sleep consultant course has a tuition of {price?.currency.symbol}{formatPrice(price?.discountedCost)}, or <mark>{price?.currency.symbol}{formatPrice(price?.plans.full.total)} with the pay-in-full discount</mark>. This cost includes everything that has to do with your training, tutorial, and certification!</p>
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
      <BackgroundImage src={GreenWhiteBackgroundImage} />
      <div className="container">
        <div className="row">
          <div className="text-center col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-4">
            <p><Image src={ChatIcon as StaticImageData} width="119" height="120" alt="live chat icon" /></p>
            <h2 className="text-dark">Your Support System</h2>
            <p>Just because you&apos;re learning online doesn&apos;t mean you&apos;ll be learning alone. As part of the QC community, you&apos;ll have access to a network that will support and encourage you through your entire journey.</p>
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <p><Image className="img-fluid" src={TutorImage} width="445" height="225" alt="tutor" /></p>
            <h3 className="text-dark">Your Tutor</h3>
            <p>Your personal tutor will be responsible for grading your work and providing detailed audio feedback on all your assignments. Use this feedback to gain encouragement and inspiration in the areas where you excel, and also to help improve skills you haven&apos;t quite mastered yet.</p>
            <p>All of QC&apos;s personal care aide tutors are experienced caregiving professionals with decades of experience. They&apos;re uniquely equipped to challenge you in your studies and are invested in your professional success!</p>
          </div>
          <div className="mt-4 mt-lg-0 col-12 col-lg-5">
            <p><Image className="img-fluid" src={AdvisorImage} width="445" height="225" alt="student advisor" /></p>
            <h3 className="text-dark">Your Student Advisor</h3>
            <p>QC&apos;s Student Support team is available 7 days a week to assist you with your studies in any way they can! Your student advisor will be your first point of contact with the school, and will be able to assist you with just about anything with regards to your online training. Contact your student advisor at any time for help with</p>
            <ul>
              <li>Questions about your online course</li>
              <li>Questions about your assignments</li>
              <li>Questions about launching your personal care aide business</li>
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
        courseName="Sleep Consultant"
        doubleGuarantee={true}
        twentyOneDays={(
          <>
            <p>Once your enrollment has been processed and you gain access to the online student center, you have 21 days to review the course materials and decide whether you want to take the course.</p>
            <p>This is your chance to inspect the entire course, risk-free! If you decide this course isn&apos;t the right fit for you, simply contact your student advisor to withdraw from the course. As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>
          </>
        )}
        oneYear={(
          <>
            <p>You&apos;ll succeed in your new career, and that&apos;s a promise! If you don&apos;t earn the equivalent of your tuition within one year after graduating from the sleep consultant course, you&apos;ll be eligible for a full refund of your tuition. Simply contact the school, and provide proof that you&apos;ve made a reasonable effort to gain clients.</p>
            <p><strong>Note:</strong> the 1-year guarantee is only available to graduates who completed all four units of the course, including the optional business unit.</p>
          </>
        )}
      />
    </section>

    <a className="anchor" id="about"></a>
    <section id="aboutSection">
      <BackgroundImage src={AboutBackgroundImage} />
      <About profession="professional sleep consultant" />
    </section>

    <section id="contactSection">
      <Contact />
    </section>

    <EnrollmentSection courseCodes={[ 'sl' ]}>
      Start your online sleep consultant training today<br />and launch an exciting, rewarding career!
    </EnrollmentSection>
  </>;
};

Page.getLayout = function Layout(page): ReactNode {
  return (
    <MinimalLayout
      secondaryNav={(
        <Subnav
          heading="Sleep Consultant Course Preview"
          items={[
            { name: 'Curriculum', url: '#curriculum' },
            { name: 'Tuition', url: '#tuition' },
            { name: 'Support', url: '#support' },
            { name: 'Guarantee', url: '#guarantee' },
          ]}
        />
      )}
    >{page}</MinimalLayout>
  );
};

export default Page;
