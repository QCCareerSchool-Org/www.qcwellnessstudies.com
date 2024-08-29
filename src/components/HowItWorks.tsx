import Link from 'next/link';
import type { FC, JSX } from 'react';
import { IoMdChatboxes, IoMdCheckbox, IoMdHome, IoMdSchool, IoMdTime } from 'react-icons/io';

interface Props {
  /** the name of the course, including the word "Course, Workshop, etc." e.g., "Sleep Consultant Course" */
  courseName: string;
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
}

export const HowItWorks: FC<Props> = props => (
  <div className="container text-center">
    <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-4">
      <h2 className="text-dark mb-4">How Online Training Works</h2>
      <IoMdTime size={40} />
      <h3 className="text-dark">Enroll Any Time</h3>
      {props.enroll ? props.enroll : <p>With no enrollment or study deadlines, you can join the {props.courseName} whenever you&apos;re ready and start right away. Within a day of enrolling, you&apos;ll get access to your online student center and course materials.</p>}
      <hr className="my-4" />
      <IoMdHome size={40} />
      <h3 className="text-dark">Study From Home</h3>
      {props.study ? props.study : <p>Log into your Student Center to complete interactive lessons, watch detailed instructional videos and submit your coursework. All course materials are available online, allowing you to study from home or on the go.</p>}
      <p>If you have questions while studying, you can reach out to your student advisor by phone, email, or live chat. QC&apos;s team of support specialists is here to help with every step of your learning journey!</p>
      <hr className="my-4" />
      <IoMdCheckbox size={40} />
      <h3 className="text-dark ">Complete &amp; Submit Your Assignments</h3>
      {props.assignments
        ? props.assignments
        : (
          <>
            <p>Complete your assignments at your own pace and submit them via the Online Student Center for grading. QC&apos;s practical sleep consultant training includes various assignments designed to test and challenge your skills:</p>
            <ul className="text-left">
              <li><strong>Quizzes</strong> evaluate your core knowledge.</li>
              <li><strong>Long-Answer/Discussion Questions</strong> challenge you to think through scenarios and provide detailed answers.</li>
              <li><strong>Case Studies:</strong> Experience real-world sleep consultant scenarios and create comprehensive sleep plans.</li>
            </ul>
            <p className="text-dark"><strong>Pro Tip:</strong> Treat your case studies and practical assignments as if you&apos;re working with actual clients to gain the most from your training.</p>
          </>
        )}
      <hr className="my-4" />
      <IoMdChatboxes size={40} />
      <h3 className="text-dark">Get Tutor Feedback</h3>
      {props.tutor
        ? props.tutor
        : (
          <>
            <p>Upon enrollment, you are assigned a personal tutor who will evaluate your work and provide detailed feedback. After submitting a unit, you&apos;ll get comprehensive audio feedback, highlighting your strengths and areas for improvement. Your tutor, a successful business owner, is your best resource throughout the course. Their insights and feedback are invaluable for your success.</p>
          </>
        )}
      <hr className="my-4" />
      <IoMdSchool size={40} />
      <h3 className="text-dark">Graduate &amp; Launch Your Career</h3>
      {props.graduate ? props.graduate : <p>Upon completing all course units and paying your tuition in full, you&apos;ll graduate from QC Wellness Studies and receive your {props.certification} certification. With this certification and the business training provided in the course, you&apos;ll be fully equipped to launch your successful business!</p>}
      <hr className="my-4" />
      <h3 className="text-center text-dark">Want to know more about how online learning can work?</h3>
      <p className="text-center"><Link href="/how-it-works" className="btn btn-secondary">LEARN MORE</Link></p>
    </div>
  </div>
);
