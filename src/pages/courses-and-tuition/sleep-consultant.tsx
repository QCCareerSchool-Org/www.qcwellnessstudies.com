import React from 'react';
import { IoMdBook, IoMdDocument, IoMdPeople, IoMdTimer, IoMdSchool } from 'react-icons/io';

import { DefaultLayout } from '../../layouts/default';
import { usePrice } from '../../hooks/usePrice';
import { useLocation } from '../../providers/location';

const SecondaryNav: React.FC = () => (
  <nav id="pageNav" className="navbar navbar-expand-md navbar-light bg-light fixed-top shadow">
    <a className="navbar-brand" href="#">Infant Sleep Consultant Course</a>
    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#pageNavbarCollapse" aria-controls="pageNavbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="pageNavbarCollapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#paymentPlans">Tuition</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#outline">Course Outline</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#tutors">Tutors</a>
        </li>
      </ul>
    </div>
  </nav>
);

const Page: React.FC = () => {
  const location = useLocation();
  const price = usePrice(['sl'], location?.countryCode, location?.provinceCode);
  return (
    <DefaultLayout SecondaryNav={SecondaryNav}>

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

      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center text-dark" id="exampleModalCenterTitle">Double Money-Back Guarantee!</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body px-4">
              <div className="row text-center">
                <div className="col-12 col-md-6">
                  <p><img src="/images/21-day-guarentee.svg" alt="21 day guarantee" /></p>
                  <h3 className="text-dark">21-Day Guarantee</h3>
                  <p>Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to take the course. If you decide this course isn't the right course for you, simply contact the school for a refund! As long as you haven't submitted any work to your tutor yet, your tuition will be refunded in full!</p>
                </div>
                <div className="col-12 col-md-6">
                  <p><img src="/images/1-year-guarentee.svg" alt="1 year guarantee" /></p>
                  <h3 className="text-dark">1-Year Guarantee</h3>
                  <p>You'll succeed in your new career, and that's a promise! If you don't earn the equivalent of your tuition within one year after graduating from the sleep consultant course, you'll be eligible for a full refund of your tuition. Simply contact the school, and provide proof that you've made a reasonable effort to gain clients.</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <a className="anchor" id="paymentPlans"></a>
      <section id="paymentPlansSection" className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
              <h2 className="text-dark">Tuition &amp;<br />Payment Plans</h2>
              <p className="text-dark">Includes everything you need to get certified!<br />All prices are in {price?.currency.name}</p>
              <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter">Double Money-Back Guarantee!</button>
            </div>
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 mb-4 mb-lg-0">
              <div className="card shadow text-center">
                <div className="card-body">
                  <p className="card-text">PAY IN FULL</p>
                  <p className="small text-muted mb-0"><del>{price?.currency.symbol}{price?.discountedCost}</del></p>
                  <p className="card-text price text-dark"><small>{price?.currency.symbol}</small>{price?.plans.full.total}</p>
                  <p className="card-text"><a href="https://enroll.qcwellnessstudies.com/?c[]=sl" className="btn btn-secondary">ENROLL NOW</a></p>
                  <p className="card-text"><strong><mark>SAVE {price?.currency.symbol}{price?.plans.full.discount}</mark></strong><br />when you pay in full.</p>
                </div>
              </div>
            </div>
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <p className="card-text">INSTALLMENT PLAN</p>
                  <p className="small text-muted mb-0">&nbsp;</p>
                  <p className="card-text price text-dark"><small>{price?.currency.symbol}</small>{price?.plans.part.installmentSize} <small className="text-muted">/ mo</small></p>
                  <p className="card-text"><a href="https://enroll.qcwellnessstudies.com/?c[]=sl" className="btn btn-secondary">ENROLL NOW</a></p>
                  <p className="card-text"><strong>Deposit of {price?.currency.symbol}{price?.plans.part.deposit}</strong><br />then {price?.plans.part.installments} monthly payments of {price?.currency.symbol}{price?.plans.part.installmentSize}.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <li>
                  <p><strong>Patience</strong> &mdash; Babies are babies. They won't always cooperate, and that's why you're there. You need to be able to keep your cool under stressful conditions.</p>
                </li>
                <li>
                  <p><strong>Flexibility</strong> &mdash; Similarly, you need to be able to adapt your approach to the child's needs and to the caregiver's preferences. Sometimes that means putting your own preferences aside!</p>
                </li>
                <li>
                  <p><strong>Reliability</strong> &mdash; As a professional, you'll be expected to adhere to a set schedule. Time management skills are essential to succeed in this career.</p>
                </li>
                <li>
                  <p><strong>Care &amp; Compassion</strong> &mdash; You're going to be working with babies, infants and toddlers every day. You'll need to be empathetic as they adjust to their new routines.</p>
                </li>
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
              <p className="d-none d-lg-block"><img src="/images/what-youl-learn.jpg" className="text-center" alt="What you'll learn in the sleep consultant course" /></p>
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
        <div className="container text-center">
          <h2 className="text-dark">Why Choose QC?</h2>
          <p className="lead mb-5">Get certified faster with a FULLY ONLINE sleep consultant course!</p>
          <div className="row mb-5">
            <div className="col-12 col-lg-4 mb-5 mb-lg-0">
              <p><img src="/images/affordable-icon.svg" className="text-center" alt="Affordable" /></p>
              <h3 className="text-dark text-center">Affordable</h3>
              <p className="text-dark text-center">Since QC's course is fully online, you don't have to pay surcharges for attending lectures or webinars. You complete the full course from home.</p>
            </div>
            <div className="col-12 col-lg-4 mb-5 mb-lg-0">
              <p><img src="/images/flexible-icon.svg" className="img-fluid" alt="Flexible" /></p>
              <h3 className="text-dark text-center">Flexible</h3>
              <p className="text-dark text-center">No start dates, no deadlines, no mandatory webinars! This course is completely self-directed and self-paced. Get certified quickly, or take your time.</p>
            </div>
            <div className="col-12 col-lg-4">
              <p><img src="/images/comprehensive-icon.svg" className="img-fluid" alt="Comprehensive" /></p>
              <h3 className="text-dark text-center">Comprehensive</h3>
              <p className="text-dark text-center">You won't just learn one proprietary method of sleep coaching. You'll learn every method of sleep consulting, so that you can offer the best service!</p>
            </div>
          </div>
          <p><a href="https://enroll.qcwellnessstudies.com/?c[]=sl" className="btn btn-secondary">GET STARTED TODAY!</a></p>
        </div>
      </section>

      <section id="includedSection" className="bg-light text-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2>Included In Your Course</h2>
              <p><IoMdBook size={40} /></p>
              <h3>Newest Course Materials</h3>
              <p>You’ll have online access to all your course books and guides, which are constantly being updated with the newest and most up-to-date content!</p>
              <p><IoMdDocument size={40} /></p>
              <h3>Assignments &map; Templates</h3>
              <p>Download assignment templates to quickly and efficiently complete all your course work. Then, upload your work to the Online Student Center where your tutor will evaluate you and provide personalized audio feedback for each unit!</p>
              <p><IoMdPeople size={40} /></p>
              <h3>Personalized Tutor Feedback</h3>
              <p>Once you submit all your assignments for a unit, your tutor will evaluate and grade your work, and provide you with detailed audio feedback highlighting what you did well and where you need to improve. Use this feedback to enhance your skills in the next unit!</p>
              <p><IoMdTimer size={40} /></p>
              <h3>Extended-Hours Access to your Student Advisor</h3>
              <p>Any time you have a question about your course, your student account, your certification, or anything else, you can reach out to your QC Student Advisor. Advisors are available 7 days/week to help you through your course!</p>
              <p><IoMdSchool size={40} /></p>
              <h3>Certification &amp; Professional Designation</h3>
              <p>Once you graduate, you’ll be sent your certification by mail. The certification allows you to use the trademarked Infant Sleep Consulting Professional (ISCP) designation on your business cards, website, resume, and more. Get a certification that’s noticed and respected!</p>
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
              <p className="lead text-center">Here's a detailed outline of all topics you'll learn in the sleep consultant certification course.</p>
            </div>
          </div>
          <div className="row my-5" id="unitA">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src="/images/unit-a-course-outline.jpg" className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit A" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit A: Sleep Consulting Practices</h3>
              <p className="mb-0">In this first unit, you'll explore the basics of sleep consulting. You'll learn the science of sleep, how children sleep, and how you can help caregivers promote healthy sleep habits. You'll learn every method of sleep consulting, including the advantages and disadvantages of each. You'll learn to use various tools of the trade to help create an optimal sleep space and promote healthy sleep.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <div id="accordionUnitA"></div>
            </div>
          </div>
          <div className="row my-5" id="unitB">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src="/images/unit-b-course-outline.jpg" className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit B" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit B: Sleep Consulting Application</h3>
              <p className="mb-0">Now that you have a good foundation of knowledge as a sleep consultant, you'll start learning how to apply those practices to provide the best service possible to clients. You'll learn how to create, implement and adapt individualized sleep plans unique to each client.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <div id="accordionUnitB"></div>
            </div>
          </div>
          <div className="row my-5" id="unitC">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src="/images/unit-c-course-outline.jpg" className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit C" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit C: Professional Sleep Consulting &amp; Coaching</h3>
              <p className="mb-0">In this unit, you'll start putting into practice the knowledge you've acquired over the past two units. You'll go over a number of case studies of unique situations you're likely to encounter as a sleep consultant. You'll start learning how to best work with different clients, and how to turn your new skills and knowledge into a rewarding career.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <div id="accordionUnitC"></div>
            </div>
          </div>
          <div className="row my-5" id="unitD">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src="/images/unit-d-course-outline.jpg" className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit D" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit D: Business Training (optional)</h3>
              <p className="mb-0">If you plan on launching your own sleep consulting business, don't skip this essential final unit! You'll work on getting your business on its feet, and gain invaluable feedback from your tutor in the process!</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <div id="accordionUnitD"></div>
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
              <p><img className="img-fluid" src="/images/tutor-rosalee.jpg" alt="Rosalee Lahaie Hera" /></p>
              <h3 className="text-dark">Rosalee Lahaie Hera</h3>
              <p>Rosalee is a mother of two, a certified sleep consultant and owner of Baby Sleep Love. With a background in health services, Rosalee turned to sleep consulting after having to hire a sleep consultant for her own daughter. Since then, she’s worked with hundreds of families to provide completely customized sleep plans for their children. Rosalee specializes in tailoring her services for each family, and will be an invaluable resource to you when starting your sleep consulting business!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p><img className="img-fluid" src="/images/tutor-elisa.jpg" alt="Eliza Constanza" /></p>
              <h3 className="text-dark">Elisa Constanza</h3>
              <p>Elisa has over 15 years of experience working with children and their parents. As an early childhood educator and child sleep consultant, she understands how healthy sleep is paramount to healthy development of the child. As a sleep consultant, she offers both in-person consultations as well as virtual consultations over the phone or Skype. Use her mentorship to help build your ideal sleep consulting business!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="certificationSection" className="bg-dark text-light">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
              <img src="/images/certificate.png" className="img-fluid text-center" alt="Sleep Consultant Certification" />
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <h2 className="text-light">Your Sleep Consulting Certification</h2>
              <p>Upon successful completion of this course, you'll receive your <strong>Infant Sleep Consulting Professional (ISCP™)</strong> certification. This certification is yours forever and doesn't expire. Use it as proof of competency with future clients and/or employers. Your professional designation is a great way to set yourself from the competition. Display it proudly on your business cards, marketing materials, website, and anywhere else you advertise your services!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="guaranteeSection">
        <div className="container text-center">
          <h2 className="text-center text-dark">Your Guarantee</h2>
          <p className="lead mb-5">
            Starting a new career can be scary. But don't worry!
            <br />
            Once you enroll in QC's Sleep Consultant Course, you'll be protected by a
            <br />
            <strong>double money-back guarantee!</strong>
          </p>
          <div className="row text-center">
            <div className="col-12 mb-5 col-md-6 mb-md-0 col-lg-5 offset-lg-1">
              <p><img src="/images/21-day-guarentee.svg" alt="21 day guarantee" /></p>
              <h3 className="text-dark">21-Day Guarantee</h3>
              <p>Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to take the course. If you decide this course isn't the right course for you, simply contact the school for a refund! As long as you haven't submitted any work to your tutor yet, your tuition will be refunded in full!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p><img src="/images/1-year-guarentee.svg" alt="1 year guarantee" /></p>
              <h3 className="text-dark">1-Year Guarantee</h3>
              <p>You'll succeed in your new career, and that's a promise! If you don't earn the equivalent of your tuition within one year after graduating from the sleep consultant course, you'll be eligible for a full refund of your tuition. Simply contact the school and provide proof that you've made a reasonable effort to gain clients.</p>
            </div>
          </div>
          <p className="text-center mt-3">Additional information on QC's money back guarantees is available in your enrollment agreement.</p>
        </div>
      </section>

      <section id="enrollSection" className="text-light text-center">
        <div className="container">
          <h2>Enroll Today</h2>
          <p className="lead mb-5">Start your online sleep consultant training today<br />and launch an exciting, rewarding career!</p>
          <p><a href="https://enroll.qcwellnessstudies.com/" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
        </div>
      </section>

      <style jsx>{`
        #heroSection{color:white;background-color:#449;background-image:url(${require('../../images/top-image-sleep.jpg')});background-size:cover;background-position:center;}
        #certificationSection{background-image:url(${require('../../images/bg-dark-green-navy.jpg')});background-size:cover}
        #requirementsSection{background-image:url(${require('../../images/basic-requirements-bg-2.jpg')});background-size:cover}
        #paymentPlansSection{background-image:url(${require('../../images/bg-white-green-light.jpg')});background-size:cover}
        #includedSection{background-image:url(${require('../../images/bg-white-green-light.jpg')});background-size:cover}
        #enrollSection{background-image:url(${require('../../images/enrollment-bg.jpg')});background-size:cover}
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
