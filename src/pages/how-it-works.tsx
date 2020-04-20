import { NextPage } from 'next';
import React from 'react';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default';

const Page: NextPage = () => (
  <DefaultLayout>

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
            <p className="lead">QC's unique approach to online training will provide you with the knowledge and practical skills to succeed in your chosen industry!</p>
            <p>Online learning can be hit or miss. You have to choose a school that will do more than just give you books and make you answer multiple choice quizzes. If you want to succeed, you need a school that will push you to achieve your goals. That means practical hands-on training, even when you're studying from home. Welcome to QC!</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
            <p><img className="img-fluid" src={require('../images/how-it-works-illustration.svg')} alt="How Online Learning Works" /></p>
          </div>
        </div>
      </div>
    </section>

    <section id="anytimeSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
            <h2 className="text-dark">Enroll Online at Any Time</h2>
            <h3 className="h5">No start dates, no end dates, no deadlines. You can start your training whenever you're ready. Just head over to the online enrollment form and get started!</h3>
            <p>You'll get access to your online student center and course materials within 1 business day of enrolling online. Tour the online student center and start your studies right away! If your course comes with printed materials, you'll receive them within 10 business days.</p>
            <p><strong>Remember!</strong></p>
            <p>QC's 21-day money back guarantee gives you a full three weeks to review your course guide and materials. So take the time to review everything and decide if the course is right for you. If it's not, that's ok! One size doesn't fit all. Simply contact the school to arrange a full tuition refund.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="workthroughSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
            <h2 className="text-dark">Work Through Your Course</h2>
            <p>Follow your detailed course guide to know when to read a textbook, when to watch an instructional video, and when to complete an assignment. Work at your own pace! Most QC courses take an average of 3-6 months to complete, but there's absolutely no rush if you need to take longer!</p>
            <h3 className="text-dark">Have a question about your studies? </h3>
            <p>Reach out to your student advisor for extra help whenever you need it!</p>
          </div>
        </div>
      </div>
    </section>

    <section id="submitSection text-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 text-center">
            <img className="img-fluid" src={require('../images/how-it-works.svg')} alt="How online learning works" />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <h2>Submit Your Assignments</h2>
            <p>Assignments come in a multitude of formats to help you get the most out of your training.</p>
            <ul>
              <li><strong>Quizzes</strong> are used to test foundational knowledge on different topics</li>
              <li><strong>Open-ended questions</strong> are used to help your tutor gain a better understanding of your overall abilities. Answer these questions in as much detail as possible (while following the guidelines, of course)!</li>
              <li><strong>Case studies</strong> and other <strong>practical assignments</strong> are made to simulate real-world scenarios in your chosen field. These assignments are vital to your professional success. Treat them as you would if it were a real situation that you're being paid to handle. Students who do well on their case studies and practical assignments are the ones who are most likely to succeed professionally!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="feedbackSection">
      <div className="container py-3">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="text-dark">Listen to Your Tutor's Feedback</h2>
            <p>What sets QC apart from other online schools is your interaction with your tutor! Each assignment you submit is reviewed by your tutor, who provides you with detailed audio feedback on your progress through the course. Your tutor reviews each open-ended question you answer and practical assignment you submit, in order to fully understand your knowledge and proficiency in a given topic.</p>
            <p>After each unit you submit, you'll receive an audio file where your tutor explains your strengths and weaknesses. Using this critical feedback as you progress through your online course will help enhance key skills, and make sure you improve in the areas that need it most.</p>
            <h4 className="sans-serif">Remember!</h4>
            <p><i>Your tutor isn't just a paid employee of the school grading you off a scoring sheet. They are a successful professional with years of experience working in your desired industry. Use their feedback to learn how you can best succeed professionally!</i></p>
          </div>
        </div>
      </div>
    </section>

    <section id="certificationSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-0 col-lg-4 offset-lg-1 text-center">
            <img className="img-fluid" src={require('../images/certificate.png')} alt="Certification" />
          </div>
          <div className="col-12 col-md-10 offset-md-1 col-lg-6">
            <h2 className="text-dark">Graduate from Your Course</h2>
            <p>Once you have successfully completed you course and your tuition is paid in full, you'll be ready to graduate and receive your professional certification. Your certification is proof to clients and employers that you have successfully completed training in your field. Display it proudly!</p>
            <h5>Don't forget your professional designation!</h5>
            <p><i>With your certification, you also receive a professional designation that's yours to use forever. Put it on your website, business cards, email signature, and anywhere else to increase your professional prestige. It's a great way to set yourself apart from the competition!</i></p>
          </div>
        </div>
      </div>
    </section>

    <section id="enrollSection" className="text-light text-center">
      <div className="container">
        <h2>Get Started Today!</h2>
        <p className="h5 sans-serif">Why wait? Start your professional training program today and get on the path toward a new and exciting career.</p>
        <a href="#" className="btn btn-secondary btn-lg mt-4">ENROLL ONLINE</a>
      </div>
    </section>

    <style jsx>{`
      #enrollSection{background-image: url(${require('../images/bg-enrollment.jpg')});background-size: cover;}
      #anytimeSection{background-image: url(${require('../images/bg-white-green-light.jpg')});background-size: cover;}
      #certificationSection{background-image: url(${require('../images/bg-white-green-light.jpg')});background-size: cover;}
    `}</style>
  </DefaultLayout>
);

export default Page;
