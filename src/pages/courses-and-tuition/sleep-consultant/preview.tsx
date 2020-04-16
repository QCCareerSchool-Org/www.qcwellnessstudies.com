import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

import { IoMdChatboxes, IoMdCheckbox, IoMdDownload, IoMdFiling, IoMdHome, IoMdSchool, IoMdTime } from 'react-icons/io';
import { Guarantee } from '../../../components/guarantee';
import { PriceCard } from '../../../components/price-card';
import { SEO } from '../../../components/seo';
import { Subnav } from '../../../components/subnav';
import { formatPrice } from '../../../functions';
import { usePrice } from '../../../hooks/usePrice';
import { useToggle } from '../../../hooks/useToggle';
import { MinimalLayout } from '../../../layouts/mimimal';
import { useLocation } from '../../../providers/location';

const Page: NextPage = () => {
  const [ popup1, toggle1 ] = useToggle();
  const [ popup2, toggle2 ] = useToggle();
  const location = useLocation();
  const price = usePrice([ 'sl' ], location?.countryCode, location?.provinceCode);

  return (
    <MinimalLayout SecondaryNav={(): React.ReactElement => (
      <Subnav
        heading="Sleep Consultant Course Preview"
        items={[
          { name: 'Curriculum', url: '#curriculum' },
          { name: 'Tuition', url: '#tuition' },
          { name: 'Support', url: '#support' },
          { name: 'Guarantee', url: '#guarantee' },
        ]}
      />
    )}>

      <SEO
        title="Sleep Consultant Course Preview"
        description="Preview the online sleep consultant course offered by QC. Read a detailed course overview, sample some assignments, meet your tutors, and more!"
        canonical="/courses-and-tuition/personal-care-aide/preview"
        noIndex={true}
      />

      <section id="heroSection">
        <div className="container text-center">
          <div className="row mt-5">
            <div className="col-12 col-md-10 offset-md-1">
              <p><img src={require('../../../images/certification-iscp.png')} alt="Infant Sleep Consulting Professional Certification" /></p>
              <h1>INFANT SLEEP<br />CONSULTANT COURSE</h1>
              <h2 className="h3">Course Preview</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="introSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-3">
              <h2 className="text-dark">Infant Sleep Consultant Certification Course</h2>
              <p>Sleep consulting is a booming industry in modern society. New parents understand the importance of healthy sleep habits to their infants and toddlers' health and wellbeing. When a child doesn't sleep, the parents don't either! Parents can sometimes become desperate for solutions to their children's sleeping problems. As a certified sleep consultant, you'll be able to help!</p>
              <p>QC's online course equips you with everything you need to begin your career as a sleep consultant. To run an effective sleep consulting business you must learn about best practices and techniques. You must also know how to communicate with clients and develop the management expertise needed to run a profitable company.</p>
              <p>This course is perfect for anyone who loves children and want to work in the child care industry, either part-time or full-time.<strong> This includes</strong></p>
              <ul>
                <li>Parents of young children</li>
                <li>Work-at-home moms and dads</li>
                <li>Professionals already working in the child care industry</li>
                <li>Professionals already working in the healthcare and/or wellness industries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="online"></a>
      <section id="onlineSection">
        <div className="row col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 ">
          <h2 className="col-12 col-lg-7 text-light">Get certified faster with a fully-online sleep consultant course!</h2>
          <ul className="text-light">
            <li>You won't have to follow specific enrollment or certification deadlines.</li>
            <li>You won't pay hundreds (or thousands!) of dollars to attend mandatory webinars or seminars in order to get certified.</li>
            <li>There are no ongoing fees to keep your certification current or to use your course materials &amp; templates after you graduate!</li>
            <li>You'll learn every method of sleep consulting, not just one method trademarked by the school. This will help you become a true industry expert, and will allow you to better serve your clients!</li>
          </ul>
          <p className="text-light">Don't be fooled by so-called "online" sleep consultant courses that end up just being recorded seminars that you're made to attend weekly. The fact is, you <em>can</em> learn sleep consulting online in a convenient and effective manner. You just need a course that's designed to give you plenty of feedback and hands-on training. Welcome to QC!</p>
        </div>
      </section>

      <a className="anchor" id="howItWorks"></a>
      <section id="howItWorksSection">
        <div className="container text-center">
          <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-4">
            <h2 className="text-dark mb-4">How Online Training Works</h2>
            <IoMdTime size={40} />
            <h3 className="text-dark">Enroll Online at Any Time</h3>
            <p>With no enrollment or study deadlines, you can enroll in the sleep consultant course whenever you're ready, and start working on your course right away. Within a day of enrolling, you'll receive access to your online student center, course materials, and assignment templates.</p>
            <hr className="my-4" />
            <IoMdHome size={40} />
            <h3 className="text-dark">Study Your Course Materials from Home</h3>
            <p>You'll follow your detailed course guide that explains when you need to read a textbook and when to complete your assignments. Your books are all available online as PDF downloads, so you can study from home or download them to take with you anywhere!</p>
            <p><strong>Have questions while studying?</strong></p>
            <p>Just like in the classroom, sometimes you'll have a question about your course or assignment instructions. You can always reach out to your student advisor for help, either by phone, email or via Live Chat. If your advisor cannot answer your question, they will pass your request along to your tutor who will get back to you as quickly as they can!</p>
            <hr className="my-4" />
            <IoMdCheckbox size={40} />
            <h3 className="text-dark ">Complete &amp; Submit Your Assignments</h3>
            <p>Your assignments are completed at your leisure, and submitted to your tutor for grading via the online student center. As part of your practical sleep consultant training, you'll complete different types of assignments that are designed to test your knowledge and challenge your skills.</p>
            <ul className="text-left">
              <li><strong>Quizzes</strong> are used to evaluate your core knowledge on a number of topics.</li>
              <li><strong>Long-answer or “discussion” questions</strong> challenge you to think through various scenarios and provide detailed answers where you can take the time to explain your reasoning.</li>
              <li><strong>Case studies</strong> and other <strong>practical assignments</strong> allow you to experience real-world sleep consulting scenarios. As part of this course, you'll be presented with a number of case studies and will be asked to create full sleep plans to address unique circumstances.</li>
            </ul>
            <p className="text-dark"><strong>Pro tip:</strong> Students who treat their case studies and practical assignments like they're dealing with an actual paying client are those who are the most successful upon graduation. Don't skimp on your practical assignments!</p>
            <hr className="my-4" />
            <IoMdChatboxes size={40} />
            <h3 className="text-dark">Listen to Feedback from Your Tutor</h3>
            <p>When you enroll in the sleep consultant course, you're assigned a personal tutor who is responsible for evaluating/grading your work, and providing detailed feedback on your assignments. After you submit a unit for grading, you'll receive detailed audio feedback from your tutor who will explain exactly where you excelled and where you need some improvement.</p>
            <p>Your tutor is your best resource throughout the course! Each tutor is not only a successful professional sleep consultant, but also a business owner. They've taken the journey you're taking now, and have done it successfully. Take their feedback to heart. They want to see you succeed!</p>
            <hr className="my-4" />
            <IoMdSchool size={40} />
            <h3 className="text-dark">Graduate &amp; Start Working</h3>
            <p>Once you've completed all your course units and your tuition has been paid in full, you'll graduate from QC Wellness Studies and receive your Infant Sleep Consultant Professional (ISCP™) Certification. With this certification, and the business training you've received as part of your course, you'll have all the knowledge and skills you need to launch your successful sleep consultant business!</p>
            <hr className="my-4" />
            <h3 className="text-center text-dark">Want to know more about how online learning can work?</h3>
            <p className="text-center"><Link href="/how-it-works"><a className="btn btn-secondary">LEARN MORE</a></Link></p>
          </div>
        </div>
      </section>

      <a className="anchor" id="curriculum"></a>
      <section id="curriculumSection">
        <div className="container">
          <div className="row">
            <div className=" text-center col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-5">
              <h2 className="text-dark mb-4 text-center">Course Curriculum</h2>
              <p>The sleep consultant course is divided into four units. You'll start by learning the basics of sleep consulting, and then build on that knowledge as you work your way through the course. Once you've completed the course, you'll be fully qualified to work as a professional sleep consultant!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-5">
              <p><img className="img-fluid" src={require('../../../images/sl-outline-a.jpg')} alt="Sleep Consultant Course Unit A" /></p>
              <h3 className="text-dark">Unit A: Sleep Consulting<br />Practices</h3>
              <p>In this first unit, you'll explore the basics of sleep consulting. You'll learn the science of sleep, how children sleep, and how you can help caregivers promote healthy sleep habits. You'll learn every method of sleep consulting&mdash;from “cry it out” to “no cry” methods and everything in between&mdash;including the advantages and disadvantages of each. You'll learn to use various tools of the trade to help create an optimal sleep space and promote healthy sleep.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mb-5">
              <p><img className="img-fluid" src={require('../../../images/sl-outline-b.jpg')} alt="Sleep Consultant Course Unit B" /></p>
              <h3 className="text-dark">Unit B: Sleep Consulting Application</h3>
              <p>Now that you have a good foundation of knowledge as a sleep consultant, you'll start learning how to apply those practices to provide the best service possible to clients. You'll learn how to create, implement and adapt individualized sleep plans unique to each client, including how to deal with a variety of special situations that might impact your plan&mdash;from working in a home with multiple children, to working with children who have disabilities or other diagnosed medical issues.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-5">
              <p><img className="img-fluid" src={require('../../../images/sl-outline-c.jpg')} alt="Sleep Consultant Course Unit C" /></p>
              <h3 className="text-dark">Unit C: Professional Sleep Consulting &amp; Coaching</h3>
              <p>Once you understand the fundamentals of sleep consulting and how to build a sleep plan unique to your clients' needs, you'll start to put these skills to use while learning to be an effective consultant and coach. You'll learn how to best work with different types of clients, and how to translate your knowledge as a sleep expert to caregivers who will be implementing your sleep plan on an ongoing basis. You'll go over a number of case studies of unique situations you're likely to encounter as a sleep consultant, to get a first-hand look at how you'll work professionally once you graduate. </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mb-5">
              <p><img className="img-fluid" src={require('../../../images/sl-outline-d.jpg')} alt="Sleep Consultant Course Unit D" /></p>
              <h3 className="text-dark">Unit D: (Optional) Business Training Unit</h3>
              <p>If you plan on launching your own sleep consultant business, don't skip this essential final unit! You'll work through the specific elements of getting your business on its feet, including everything from choosing a business name to building your website to setting your prices and marketing your services. This unit can really catapult your career!</p>
            </div>
            <div className="text-center col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <p className="lead"><strong>Note:</strong> Above is an overview of the sleep consulting course curriculum. For a full and detailed course outline, click below.</p>
              <Link href="/courses-and-tuition/sleep-consultant#outline"><a className="btn btn-outline-secondary text-uppercase">Full Course Outline</a></Link>
            </div>
          </div>
        </div>
      </section>

      <Modal show={popup1} onHide={toggle1} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Assignment A4</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <img className="img-fluid d-block" src={require('../../../images/A4.jpg')} alt="Sample Assignment A4" />
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white justify-content-between">
          <a href="/sample-assignments/A4.pdf" className="ml-1"><IoMdDownload className="mr-1" />Download A4.pdf</a>
          <button type="button" className="btn btn-secondary" onClick={toggle1}>Close</button>
        </Modal.Footer>
      </Modal>

      <Modal show={popup2} onHide={toggle2} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Assignment B3</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <img className="img-fluid d-block" src={require('../../../images/B3.jpg')} alt="Sample Assignment B3" />
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white justify-content-between border-0">
          <a href="/sample-assignments/B3.pdf" className="ml-1"><IoMdDownload className="mr-1" />Download B3.pdf</a>
          <button type="button" className="btn btn-secondary" onClick={toggle2}>Close</button>
        </Modal.Footer>
      </Modal>

      <a className="anchor" id="sampleAssignment"></a>
      <section id="sampleAssignmentSection">
        <div className="container text-center">
          <h2 className="text-center text-dark">Sample Assignments</h2>
          <p className="mb-5">Your course assignments are designed to test your ability to apply foundational sleep consulting concepts and practices. You'll be tested on everything from your knowledge of sleep training methodologies to your ability to make personalized recommendations for client scenarios. You'll also have the opportunity to complete your first practical sleep consulting session.<strong> Click below to preview or download two assignments that are a part of the course.</strong></p>
          <div className="row text-center">
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-4">
              <div className="card">
                <div className="h3 text-light card-header bg-dark">Assignment A4</div>
                <div className="card-body">
                  <p>In addition to providing guidance on sleep training, sleep consultants offer advice onother crucial factors that tie into good sleep, including the sleep environment. In this practical assignment, you'll photograph and evaluate the sleep space of a friend or relative's infant.</p>
                  <button type="button" className="btn btn-primary" onClick={toggle1}>Assignment A4</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-4 order-md-2">
              <div className="card">
                <div className="h3 text-light card-header bg-dark">Assignment B3</div>
                <div className="card-body">
                  <p>Every client's situation will be a little different. In this assignment, you'll read a client scenario and begin developing a customized sleep plan to address the client'sneeds. This is the kind of work you'll do every day when you start taking on your own clients.</p>
                  <button type="button" className="btn btn-primary" onClick={toggle2}>Assignment B3</button>
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
              <p>The sleep consultant course has a tuition of {price?.currency.symbol}{formatPrice(price?.discountedCost)}, or <mark>{price?.currency.symbol}{formatPrice(price?.plans.full.total)} with the pay in full discount</mark>. This cost includes everything that has to do with your training, tutorial, and certification!</p>
              <h3>Choose Your Payment Date</h3>
              <p>As an added level of convenience, if you choose to pay your tuition on an installment plan, you'll be able to select the date your payments start and on which of the month your tuition payments will be processed. If you're on a fixed budget or would like to sync your tuition payments with other monthly expenses, there's no easier way to do it!</p>
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
        <div className="container">
          <div className="row">
            <div className="text-center col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-4">
              <p><img src={require('../../../images/icon-live-chat.svg')} alt="live chat icon" /></p>
              <h2 className="text-dark">Your Support System</h2>
              <p>Just because you're learning online doesn't mean you'll be learning alone. As part of the QC community, you'll have access to a network that will support and encourage you through your entire journey.</p>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1">
              <p><img className="img-fluid" src={require('../../../images/tutor.jpg')} alt="tutor" /></p>
              <h3 className="text-dark">Your Tutor</h3>
              <p>Your personal tutor will be responsible for grading your work and providing detailed audio feedback on all your assignments. Use this feedback to gain encouragement and inspiration in the areas where you excel, and also to help improve skills you haven't quite mastered yet.</p>
              <p>All of QC's sleep consulting tutors are working, certified professional sleep consultants. They're uniquely equipped to challenge you in your studies and launch your own business because they've done this successfully themselves! </p>
            </div>
            <div className="mt-4 mt-lg-0 col-12 col-lg-5">
              <p><img className="img-fluid" src={require('../../../images/student-advisor.jpg')} alt="student advisor" /></p>
              <h3 className="text-dark">Your Student Advisor</h3>
              <p>QC's Student Support team is available 7 days a week to assist you with your studies in any way they can! Your student advisor will be your first point of contact with the school, and will be able to assist you with just about anything with regards to your online training. Contact your student advisor at any time for help with</p>
              <ul>
                <li>Questions about your online course</li>
                <li>Questions about your assignments</li>
                <li>Questions about launching your sleep consulting business</li>
                <li>Managing your tuition payments</li>
                <li>Enrolling in additional courses</li>
              </ul>
            </div>
            <div className="mt-4 col-12 col-lg-10 offset-lg-1">
              <div className="alert alert-primary" role="alert">
                <h3>Student Forum</h3>
                <p>As part of the online student center, you'll have access to the exclusive QC Career School student forum. You'll be able to communicate directly with fellow students and graduates to discuss course work, assignment questions, starting your own business, and other industry-related topics.</p>
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
              <p>Once your enrollment has been processed and you gain access to the online student center, you have 21 days to review the course materials and decide whether you want to take the course. </p>
              <p>This is your chance to inspect the entire course, risk-free! If you decide this course isn't the right fit for you, simply contact your student advisor to withdraw from the course. As long as you haven't submitted any work to your tutor yet, your tuition will be refunded in full!</p>
            </>
          )}
          oneYear={(
            <>
              <p>You'll succeed in your new career, and that's a promise! If you don't earn the equivalent of your tuition within one year after graduating from the sleep consultant course, you'll be eligible for a full refund of your tuition. Simply contact the school, and provide proof that you've made a reasonable effort to gain clients.</p>
              <p><strong>Note:</strong> the 1-year guarantee is only available to graduates who completed all four units of the course, including the optional business unit.</p>
            </>
          )}
        />
      </section>

      <a className="anchor" id="about"></a>
      <section id="aboutSection">
        <div className="container text-light">
          <div className="row col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="">
              <p><img src="/images/logo-footer.svg" alt="About QC Wellness Studies" /></p>
              <h2 className="text-light">About QC Wellness Studies</h2>
              <p>QC Wellness Studies is a faculty of QC Career School, a distance learning institution that has been providing quality career training since 1984! With 35 years of successful graduates launching profitable businesses in their desired fields, QC's course developers are confident you'll achieve success as a professional sleep consultant.</p>
              <p>QC provides even better training than what you'd receive at a brick and mortar school. You'll benefit from regular one-on-one instruction and access to help whenever you need it. QC will help you to build a successful career from the ground up!</p>
            </div>
            <div className="card mb-3">
              <h5 className="card-header text-dark">A+ Rating with the Better Business Bureau</h5>
              <div className="card-body text-dark">
                <p className="card-text">QC Career School is fully accredited with the Better Business Bureau, proudly holding an A+ rating, which is the highest rating available. When you enroll with QC, you can rest assured you're joining a community that's trusted and secure. That's our guarantee!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contactSection">
        <div className="container text-center">
          <h1 className="text-dark">Contact Us</h1>
          <p className="lead">Our student advisors are happy to answer all of your questions!</p>
          <div className="row mb-4">
            <div className="col-12 mb-4 col-lg-4 mb-lg-0">
              <img src={require('../../../images/icon-phone.svg')} className="img-fluid" alt="Phone" />
              <h3 className="text-dark text-center">By Phone</h3>
              <p className="text-dark text-center"><a className="telephone-link" href="tel:1-800-267-1829"><span className="telephone-text">1-800-267-1829</span></a></p>
            </div>
            <div className="col-12 mb-4 col-lg-4 mb-lg-0">
              <img src={require('../../../images/icon-email.svg')} className="text-center" alt="Email" />
              <h3 className="text-dark text-center">By Email</h3>
              <p className="text-dark text-center"><a href="mailto:info@qcwellnessstudies.com">info@qcwellnessstudies.com</a></p>
            </div>
            <div className="col-12 mb-4 col-lg-4 mb-lg-0">
              <img src={require('../../../images/icon-live-chat.svg')} className="img-fluid" alt="Live Chat" />
              <h3 className="text-dark text-center">Live Chat</h3>
              <p className="text-dark text-center"><a onClick={(): false => { window.LC_API.open_chat_window(); return false; }}>Chat with a Student Support Specialist</a></p>
            </div>
          </div>
          <p><a className="btn btn-sm btn-outline-primary" href="/contact/#form">&nbsp;Schedule a Call with a Student Advisor</a></p>
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
        #heroSection{color:white;background-color:#449;background-image:url(${require('../../../images/sl-get-a-preview-hero.jpg')});background-size:cover;background-position: center; }
        #howItWorksSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
        #supportSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
        #aboutSection{background-image:url(${require('../../../images/bg-about-qc.jpg')});background-size:cover}
        #sampleAssignmentSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
        #enrollSection{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}
        #onlineSection{background-image:url(${require('../../../images/bg-fully-online.jpg')});background-size:cover;background-position: center}
      `}</style>

    </MinimalLayout>
  );
};

export default Page;
