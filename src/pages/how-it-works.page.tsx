import type { NextPage } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { SEO } from '@/components/SEO';
import WhiteGreenBackgroundImage from '@/images/bg-white-green-light.jpg';
import CertificateImage from '@/images/certificate.png';
import HowItWorksIllustrationImage from '@/images/how-it-works-illustration.svg';
import HowItWorksImage from '@/images/how-it-works.svg';

const Page: NextPage = () => (
  <>
    <SEO
      title="How Online Learning Works"
      description="Discover how QC's online learning system will help you become a fully certified wellness professional from the comfort of home!"
      canonical="/how-it-works"
    />

    <section id="heroSection">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <h1 className="text-dark">How Online Learning Works</h1>
            <p className="lead">QC&apos;s unique approach to online training will provide you with the knowledge and practical skills to succeed in your chosen industry!</p>
            <p>Online learning can be hit or miss. You have to choose a school that will do more than just give you books and make you answer multiple choice quizzes. If you want to succeed, you need a school that will push you to achieve your goals. That means practical hands-on training, even when you&apos;re studying from home. Welcome to QC!</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
            <p><Image className="img-fluid" src={HowItWorksIllustrationImage as StaticImageData} alt="How Online Learning Works" /></p>
          </div>
        </div>
      </div>
    </section>

    <section id="anytimeSection">
      <BackgroundImage src={WhiteGreenBackgroundImage} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
            <h2 className="text-dark">Enroll Online at Any Time</h2>
            <h3 className="h5">No start dates, no end dates, no deadlines. You can start your training whenever you&apos;re ready. Just head over to the online enrollment form and get started!</h3>
            <p>You&apos;ll get access to your online student center and course materials within 1 business day of enrolling online. Tour the online student center and start your studies right away! If your course comes with printed materials, you&apos;ll receive them within 10 business days.</p>
            <p><strong>Remember!</strong></p>
            <p>QC&apos;s 21-day money back guarantee gives you a full three weeks to review your course guide and materials. So take the time to review everything and decide if the course is right for you. If it&apos;s not, that&apos;s ok! One size doesn&apos;t fit all. Simply contact the school to arrange a full tuition refund.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="workthroughSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
            <h2 className="text-dark">Work Through Your Course</h2>
            <p>Follow your detailed course guide to know when to read a textbook, when to watch an instructional video, and when to complete an assignment. Work at your own pace! Most QC courses take an average of 3-6 months to complete, but there&apos;s absolutely no rush if you need to take longer!</p>
            <h3 className="text-dark">Have a question about your studies? </h3>
            <p>Reach out to your student advisor for extra help whenever you need it!</p>
          </div>
        </div>
      </div>
    </section>

    <section id="submitSection" className="bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2 col-md-6 offset-md-3 col-lg-5 offset-lg-0 mb-4 mb-lg-0 text-center">
            <Image className="img-fluid" src={HowItWorksImage as StaticImageData} alt="How online learning works" />
          </div>
          <div className="col-12 col-lg-7">
            <h2>Submit Your Assignments</h2>
            <p>Assignments come in a multitude of formats to help you get the most out of your training.</p>
            <ul>
              <li><strong>Quizzes</strong> are used to test foundational knowledge on different topics</li>
              <li><strong>Open-ended questions</strong> are used to help your tutor gain a better understanding of your overall abilities. Answer these questions in as much detail as possible (while following the guidelines, of course)!</li>
              <li><strong>Case studies</strong> and other <strong>practical assignments</strong> are made to simulate real-world scenarios in your chosen field. These assignments are vital to your professional success. Treat them as you would if it were a real situation that you&apos;re being paid to handle. Students who do well on their case studies and practical assignments are the ones who are most likely to succeed professionally!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="feedbackSection">
      <div className="container py-3">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="text-dark">Listen to Your Tutor&apos;s Feedback</h2>
            <p>What sets QC apart from other online schools is your interaction with your tutor! Each assignment you submit is reviewed by your tutor, who provides you with detailed audio feedback on your progress through the course. Your tutor reviews each open-ended question you answer and practical assignment you submit, in order to fully understand your knowledge and proficiency in a given topic.</p>
            <p>After each unit you submit, you&apos;ll receive an audio file where your tutor explains your strengths and weaknesses. Using this critical feedback as you progress through your online course will help enhance key skills, and make sure you improve in the areas that need it most.</p>
            <h4 className="sans-serif">Remember!</h4>
            <p><i>Your tutor isn&apos;t just a paid employee of the school grading you off a scoring sheet. They are a successful professional with years of experience working in your desired industry. Use their feedback to learn how you can best succeed professionally!</i></p>
          </div>
        </div>
      </div>
    </section>

    <section id="certificationSection">
      <BackgroundImage src={WhiteGreenBackgroundImage} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-0 col-lg-4 offset-lg-1 text-center">
            <Image className="img-fluid" src={CertificateImage} alt="Certification" />
          </div>
          <div className="col-12 col-md-10 offset-md-1 col-lg-6">
            <h2 className="text-dark">Graduate from Your Course</h2>
            <p>Once you have successfully completed you course and your tuition is paid in full, you&apos;ll be ready to graduate and receive your professional certification. Your certification is proof to clients and employers that you have successfully completed training in your field. Display it proudly!</p>
            <h5>Don&apos;t forget your professional designation!</h5>
            <p><i>With your certification, you also receive a professional designation that&apos;s yours to use forever. Put it on your website, business cards, email signature, and anywhere else to increase your professional prestige. It&apos;s a great way to set yourself apart from the competition!</i></p>
          </div>
        </div>
      </div>
    </section>

    <EnrollmentSection heading="Get Started Today!">
      Why wait? Start your professional training program today and get on the path toward a new and exciting career.
    </EnrollmentSection>
  </>
);

export default Page;
