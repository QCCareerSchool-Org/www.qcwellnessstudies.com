import type { FC } from 'react';
import { IoMdBook, IoMdDocument, IoMdPeople, IoMdSchool } from 'react-icons/io';

interface Props {
  certification: string;
}

export const Included: FC<Props> = ({ certification }) => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
        <h2>Included in Your Course</h2>
        <p><IoMdBook size={40} /></p>
        <h3>Newest Course Materials</h3>
        <p>You&apos;ll have online access to all your lessons and assignments, which are regularly updated with the newest and most up-to-date content. You&apos;ll also have access to custom business templates to help you work with clients effectively!</p>
        <p><IoMdDocument size={40} /></p>
        <h3>Assignments &amp; Personalized Feedback</h3>
        <p>Complete assignments quickly and efficiently on the Online Student Center. Once you submit all your assignments for a unit, your expert tutor will evaluate and grade your work. Your tutor is an industry expert with a wealth of experience to share with you! She will provide you with detailed audio feedback highlighting what you did well and where you need to improve. Use this feedback to enhance your skills in the next unit.</p>
        <p><IoMdPeople size={40} /></p>
        <h3>Student Advisor Support</h3>
        <p>In addition to your personal tutor, you&apos;ll be able to get help from QC&apos;s expert team of student advisors. Any time you have questions about your course, student account, certification, or anything else, you can reach out to your QC Student Advisor by phone, email, or live chat. Advisors are available 7 days/week to help you through your course.</p>
        <p><IoMdSchool size={40} /></p>
        <h3>Certification &amp; Professional Designation</h3>
        <p>Once you graduate, you&apos;ll be sent your certificate by mail. The certification allows you to put the {certification} designation on your business cards, website, resume, and more. Get a certification that&apos;s noticed and respected.</p>
      </div>
    </div>
  </div>
);
