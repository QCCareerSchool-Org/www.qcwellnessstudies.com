import type { NextPage } from 'next';
import Link from 'next/link';

import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { QuestionAndAnswer } from '@/components/QuestionAndAnswer';
import { SEO } from '@/components/SEO';
import HeroBackgroundImage from '@/images/bg-white-green-light.jpg';

const Page: NextPage = () => (
  <>
    <SEO
      title="Frequently Asked Questions"
      description="Find answers to the most frequently asked questions about QC's online training, tuition, and certification courses."
      canonical="/faq"
      schemaType="FAQPage"
    />

    <section>
      <BackgroundImage src={HeroBackgroundImage} />
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6 offset-lg-1 mb-lg-0">
            <h1 className="text-dark">Frequently Asked Questions</h1>
            <p className="lead">See below for the most common questions about your online training, tuition, certification, or specific courses.</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h2 className="h4 card-title text-dark sans-serif">Have a question that isn&apos;t listed here?</h2>
                <p className="card-text">Contact QC at any time to speak to a student advisor!</p>
                <Link href="/contact" className="btn btn-primary">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="schoolSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <h2 className="text-dark">Questions About the School</h2>
            <hr />
            <QuestionAndAnswer header="Is QC Wellness Studies an accredited online school?">
              <p><i>Yes! QC is a faculty of QC Career School, which is an accredited business with the Better Business Bureau, holding an A+ satisfaction rating. <a target="_blank" rel="noopener noreferrer" href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175">View more about QC&apos;s accreditation status</a>.</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="How does the money back guarantee work?">
              <p><i>QC&apos;s 21-day guarantee is there to help you make an informed decision about your education. From the day you receive your course materials, you have a full three weeks to review the course guides, books, and assignments in order to decide whether your course is right for you. If you decide that it&apos;s not a good fit, simply contact the school to arrange a refund of your tuition. You&apos;ll be asked to return any course material you have to the school, and these must be unused.</i></p>
              <div className="alert alert-primary" role="alert">
                Note that since the 21-day guarantee is made for you to decide whether to take the course or not, a full tuition refund cannot be granted if you&apos;ve already completed and submitted course work to your tutor.
              </div>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="How do tuition payment plans work?">
              <p><i>When you enroll online, you can choose to pay your tuition in full where you&apos;ll get a discount, or you can choose to pay your full tuition in monthly installments. You&apos;ll pay an initial &ldquo;deposit&rdquo; amount when you first enroll online, and then you&apos;ll pick the day of the month for QC to charge your credit card a set &ldquo;monthly fee&rdquo;. You&apos;ll make equal monthly payments until your tuition is paid in full, usually over 12 to 16 months, depending on the course.</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="What if I miss a tuition payment?">
              <p><i>Sometimes life gets in the way, and that&apos;s okay! If you know in advance that you won&apos;t be able to make a tuition payment, simply contact your student advisor who will be happy to work with you to update your payment schedule.</i></p>
              <p><i>If you need to take a break from tuition payments for a month or two, that&apos;s perfectly fine! Again, just call your student advisor to make those arrangements ahead of time.</i></p>
              <p><i>If you forget and an attempted monthly payment doesn&apos;t go through, a student advisor will contact you to make arrangements to get you back on track.</i></p>
              <div className="alert alert-primary" role="alert">
                Note: students can only access their online student center if their account is in good standing. If payments are missed, the student center is placed &ldquo;on hold&rdquo; until payments are caught up. While you won&apos;t lose any work, you won&apos;t be able to submit assignments to your tutor during this time.
              </div>
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>

    <section id="PCASection" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <h2 className="text-dark">Questions About the Professional Caregiver Course</h2>
            <hr />
            <QuestionAndAnswer header="How long will it take me to complete the course?">
              <p><i>Courses are self-paced, so you can complete the Professional Caregiver course as quickly as you want, or take your time. The choice is yours! On average, the course takes a typical student 3 to 5 months to complete, working on their studies part-time, for a few hours each week.</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="Do I need to follow a set schedule to complete the course?">
              <p><i>Nope. That&apos;s the beauty of online learning! The course is entirely self-paced. You can enroll online whenever you&apos;re ready, and complete the course whenever you have the time. There are no deadlines to worry about!</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="Do I need some sort of license or other qualification to be a Professional Caregiver?">
              <p><i>Local regulations are always changing, so it&apos;s a good idea to check before you embark on a new business endeavor. In most places, you do not require any kind of license to be a privately employed professional caregiver, billing your clients directly. In many states, you also don&apos;t need a license if you bill through medicaid. Be sure to research your local regulations!</i></p>
              <p><i>That said, if you&apos;re planning on working as a professional caregiver through an agency, many states do have some licensing requirements. Often the requirements are more on your employer&apos;s side; having to provide you with a certain amount of additional training each year.</i></p>
              <p><i>For many private clients, a certification will prove that you have the knowledge and skills to practice caregiving effectively and professionally. Depending on your clients and the types of services you offer, you might also have to provide a criminal records check or proof of a CPR/First Aid certification.</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="Do I have to pay ongoing fees to use the school&apos;s templates or keep my certification up to date?">
              <p><i>No! Your certification is yours forever, and you have access to all course resources for life, no extra charge!</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="How much money can I make as a professional caregiver?">
              <p><i>That depends on many factors, including your area, the types of services you offer, and your level of experience. Professional caregivers that work for caregiving agencies usually make little above minimum wage. However by providing freelance services you&apos;re able to skip the agency &ldquo;middle man&rdquo; and charge your clients directly. This allows you to earn a much higher salary! Independent caregivers are often paid as much as $20 to $25/hour however some experienced caregivers earn as high as $35 to $40 per hour!</i></p>
              <Link href="/courses-and-tuition/personal-care-aide" className="btn btn-secondary mt-3 mb-3">View Course</Link>
              <div className="card">
                <div className="card-body">
                  <h2 className="h4 card-title text-dark sans-serif">Do you have questions not covered above?</h2>
                  <p className="card-text">Contact QC with any questions and concerns you might have! Your student advisor will be happy to assist you.</p>
                  <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
              </div>
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>

    <section id="sleepSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <h2 className="text-dark">Questions About the Sleep Consultant Course</h2>
            <hr />
            <QuestionAndAnswer header="How long will it take me to complete the course?">
              <p><i>Courses are self-paced, so you can complete the sleep consultant course as quickly as you want, or take your time. The choice is yours! On average, the course takes a typical student 3 to 5 months to complete, working on their studies part-time, for a few hours each week.</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="Do I need to follow a set schedule to complete the course?">
              <p><i>No. The course is entirely self-paced, so you get to choose your own schedule! You can enroll online whenever you&apos;re ready, and complete the course at your leisure. Unlike other &ldquo;online&rdquo; sleep consulting courses, this course will NOT require you to attend scheduled webinars or travel to in-person sessions.</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="Do I need some sort of license or other qualification to be a sleep consultant?">
              <p><i>Local regulations are always changing, so it&apos;s a good idea to check before you embark on a new business endeavor. In most places, you do not require any kind of license to be a child sleep consultant.</i></p>
              <p><i>For many clients and employers, a certification will prove that you have the knowledge and skills to practice sleep consulting efficiently and professionally. Depending on your clients/employers and the types of services you offer, you might also have to provide a criminal records check.</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="Do I have to pay ongoing fees to use the school&apos;s templates or keep my certification up to date?">
              <p><i>Absolutely not! There are a lot of online sleep courses out there that require you to pay annual fees to use their &ldquo;certifications&rdquo;. These are often businesses that only teach you one proprietary method of sleep consulting, and essentially turn you into a franchise that&apos;s allowed to use their name. Unlike these, QC is an actual school. Your certification is yours forever, and you have access to all course resources for life, no extra charge!</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="How much money can I make as a sleep consultant?">
              <p><i>That depends on many factors, including your area, the types of services you offer, and your level of experience. For example, a sleep consulting professional with several years of experience might earn about $500 for a remote consultation, to several thousand dollars for a premium package that includes several in-person consultations.</i></p>
              <p><i>There&apos;s no question, a qualified sleep consultant in an unsaturated market can make a very comfortable annual salary, even working part-time!</i></p>
              <Link href="/courses-and-tuition/sleep-consultant" className="btn btn-secondary mt-3 mb-3">View Course</Link>
              <div className="card">
                <div className="card-body">
                  <h2 className="h4 card-title text-dark sans-serif">Do you have questions not covered above?</h2>
                  <p className="card-text">Contact QC with any questions and concerns you might have! Your student advisor will be happy to assist you.</p>
                  <Link href="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
              </div>
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>

    <section id="agingSection" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <h2 className="text-dark">About the Aging in Place Course</h2>
            <hr />
            <QuestionAndAnswer header="Do I need any prior training to take this course?">
              <p><i>Yes. The Aging in Place course is an advanced course for certified or experienced interior decorating professionals. It is highly suggested that students of the aging in place course either hold an Interior Decorating Certification from a credible institution, or have several years of experience as a professional interior decorator before starting this course.</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="How long will it take me to complete the course?">
              <p><i>Since the Aging in Place course is an advanced training course for experienced designers, you&apos;ll be able to get through the course fairly quickly. Most students complete the course within two to three months.</i></p>
              <p className="lead text-dark">You can find more information about the online aging in place course offered through QC Design School <a href="https://www.qcdesignschool.com/online-courses/aging-in-place">here</a>.</p>
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>

    <section id="organizerSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <h2 className="text-dark">About the Professional Organizer Course</h2>
            <hr />
            <QuestionAndAnswer header="How long will it take me to complete the course?">
              <p><i>The average time completion for a typical student in the professional organizing course is three to five months. However the course is completely self paced, so a motivated student can complete the course much faster, or you can take as much time as you&apos;d like. It&apos;s up to you!</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="How much money can I make as a professional organizer?">
              <p><i>Full-time professional organizers can charge several hundred dollars per hour, depending on the services they offer. Typically an organizer will either work part time, or will offer additional services such as downsizing/transitional services, interior decorating or home staging services, etc.</i></p>
              <p className="lead text-dark">You can find more information about the online professional organizing course offered through QC Design School <a href="https://www.qcdesignschool.com/online-courses/professional-organizing">here</a>.</p>
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>

    <section id="skincareSection" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <h2 className="text-dark">About the Skincare Course</h2>
            <hr />
            <QuestionAndAnswer header="What kind of skincare services can I offer with this certification?">
              <p><i>Once you graduate, you will be certified to offer consultations on your client&apos;s skincare routines, and recommend personalized routines based on their skin types and specific dermatological conditions.</i></p>
            </QuestionAndAnswer>
            <QuestionAndAnswer header="Is the skincare certification the same as a cosmetology license?">
              <p><i>No. The skincare course offers a specialized certification in the makeup artistry field. A cosmetology license requires you to attend a full-time in-person program that teaches esthetics for skin, hair, nails, and etc.</i></p>
              <p className="lead text-dark">You can learn more about the skincare course at QC Makeup Academy <a href="https://www.qcmakeupacademy.com/online-makeup-courses/skincare-course">here</a>.</p>
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>

    <EnrollmentSection buttonText="ENROLL NOW">
      Are you ready to start your training in professional wellness?<br />Enroll online today and get started!
    </EnrollmentSection>
  </>
);

export default Page;
