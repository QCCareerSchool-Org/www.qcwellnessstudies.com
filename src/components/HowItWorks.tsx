import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';
import { IoMdChatboxes, IoMdCheckbox, IoMdHome, IoMdSchool, IoMdTime } from 'react-icons/io';

type Props = {
  /** the name of the course, including the word "Course, Workshop, etc." e.g., "Sleep Consultant Course" */
  courseName: string;
  /** used before "training" and "scenarios" e.g., "sleep-consultant */
  adjective: string;
  /** occupation of the tutors marking the courses e.g., "professional sleep consultant" */
  tutorOccupation: string;
  /** the certification a student gets after completing the course, including abbreviation in brackets e.g., "Infant Sleep Consultant Professional (ISCP™)" */
  certification: string;
  /** a JSX Element to completely replace the text of the enroll section */
  enroll?: JSX.Element;
  /** a JSX Element to completely replace the text of the study section */
  study?: JSX.Element;
  /** a JSX Element to completely replace the text of the assignments section */
  assignments?: JSX.Element;
  /** a JSX Element to completely replace the text of the tutor section */
  tutor?: JSX.Element;
  /** a JSX Element to completely replace the text of the graduate section */
  graduate?: JSX.Element;
  /** additional text to add to the end of the case studies bullet point */
  caseStudiesExtended?: string;
};

export const HowItWorks = (props: Props): ReactElement => (
  <div className="container text-center">
    <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-4">
      <h2 className="text-dark mb-4">How Online Training Works</h2>
      <IoMdTime size={40} />
      <h3 className="text-dark">Enroll Online at Any Time</h3>
      {props.enroll ? props.enroll : <p>With no enrollment or study deadlines, you can enroll in the {props.courseName} whenever you&apos;re ready, and start working on your course right away. Within a day of enrolling, you&apos;ll receive access to your online student center, course materials, and assignment templates.</p>}
      <hr className="my-4" />
      <IoMdHome size={40} />
      <h3 className="text-dark">Study Your Course Materials from Home</h3>
      {props.study ? props.study : <p>You&apos;ll follow your detailed course guide that explains when you need to read a textbook and when to complete your assignments. Your books are all available online as PDF downloads, so you can study from home or download them to take with you anywhere!</p>}
      <p><strong>Have questions while studying?</strong></p>
      <p>Just like in the classroom, sometimes you&apos;ll have a question about your course or assignment instructions. You can always reach out to your student advisor for help, either by phone, email or via Live Chat. If your advisor cannot answer your question, they will pass your request along to your tutor who will get back to you as quickly as they can!</p>
      <hr className="my-4" />
      <IoMdCheckbox size={40} />
      <h3 className="text-dark ">Complete &amp; Submit Your Assignments</h3>
      {props.assignments ? props.assignments : (
        <>
          <p>Your assignments are completed at your leisure, and submitted to your tutor for grading via the online student center. As part of your practical {props.adjective} training, you&apos;ll complete different types of assignments that are designed to test your knowledge and challenge your skills.</p>
          <ul className="text-left">
            <li><strong>Quizzes</strong> are used to evaluate your core knowledge on a number of topics.</li>
            <li><strong>Long-answer or &ldquo;discussion&rdquo; questions</strong> challenge you to think through various scenarios and provide detailed answers where you can take the time to explain your reasoning.</li>
            <li><strong>Case studies</strong> and other <strong>practical assignments</strong> allow you to experience real-world {props.adjective} scenarios. {props.caseStudiesExtended}</li>
          </ul>
          <p className="text-dark"><strong>Pro tip:</strong> Students who treat their case studies and practical assignments like they&apos;re dealing with an actual paying client are those who are the most successful upon graduation. Don&apos;t skimp on your practical assignments!</p>
        </>
      )}
      <hr className="my-4" />
      <IoMdChatboxes size={40} />
      <h3 className="text-dark">Listen to Feedback from Your Tutor</h3>
      {props.tutor ? props.tutor : (
        <>
          <p>When you enroll in the {props.courseName}, you&apos;re assigned a personal tutor who is responsible for evaluating/grading your work, and providing detailed feedback on your assignments. After you submit a unit for grading, you&apos;ll receive detailed audio feedback from your tutor who will explain exactly where you excelled and where you need some improvement.</p>
          <p>Your tutor is your best resource throughout the course! Each tutor is not only a successful {props.tutorOccupation}, but also a business owner. They&apos;ve taken the journey you&apos;re taking now, and have done it successfully. Take their feedback to heart. They want to see you succeed!</p>
        </>
      )}
      <hr className="my-4" />
      <IoMdSchool size={40} />
      <h3 className="text-dark">Graduate &amp; Start Working</h3>
      {props.graduate ? props.graduate : <p>Once you&apos;ve completed all your course units and your tuition has been paid in full, you&apos;ll graduate from QC Wellness Studies and receive your {props.certification} certification. With this certification, and the business training you&apos;ve received as part of your course, you&apos;ll have all the knowledge and skills you need to launch your successful {props.adjective} business!</p>}
      <hr className="my-4" />
      <h3 className="text-center text-dark">Want to know more about how online learning can work?</h3>
      <p className="text-center"><Link href="/how-it-works"><a className="btn btn-secondary">LEARN MORE</a></Link></p>
    </div>
  </div>
);

HowItWorks.propTypes = {
  courseName: PropTypes.string.isRequired,
  adjective: PropTypes.string.isRequired,
  tutorOccupation: PropTypes.string.isRequired,
  certification: PropTypes.string.isRequired,
  enroll: PropTypes.element,
  study: PropTypes.element,
  assignments: PropTypes.element,
  tutor: PropTypes.element,
  graduate: PropTypes.element,
  caseStudiesExtended: PropTypes.string,
};
