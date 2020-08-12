import PropTypes from 'prop-types';
import React from 'react';
import { IoMdBook, IoMdDocument, IoMdPeople, IoMdSchool, IoMdTimer } from 'react-icons/io';

interface Props {
  certification: string;
}

export const Included: React.FC<Props> = ({ certification }) => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
        <h2>Included in Your Course</h2>
        <p><IoMdBook size={40} /></p>
        <h3>Newest Course Materials</h3>
        <p>You’ll have online access to all your course books and guides, which are regularly updated with the newest and most up-to-date content!</p>
        <p><IoMdDocument size={40} /></p>
        <h3>Assignments &amp; Templates</h3>
        <p>Download assignment templates to quickly and efficiently complete all your course work. Then, upload your work to the Online Student Center. Your tutor will evaluate you and provide personalized audio feedback for each unit!</p>
        <p><IoMdPeople size={40} /></p>
        <h3>Personalized Tutor Feedback</h3>
        <p>Once you submit all your assignments for a unit, your tutor will evaluate and grade your work. She will provide you with detailed audio feedback highlighting what you did well and where you need to improve. Use this feedback to enhance your skills in the next unit!</p>
        <p><IoMdTimer size={40} /></p>
        <h3>Extended-Hours Access to your Student Advisor</h3>
        <p>In addition to your personal tutor, you’ll be able to get help from QC’s expert team of student advisors. Any time you have a question about your course, your student account, your certification or anything else, you can reach out to your QC Student Advisor by phone, email or live chat. Advisors are available 7 days/week to help you through your course!</p>
        <p><IoMdSchool size={40} /></p>
        <h3>Certification &amp; Professional Designation</h3>
        <p>Once you graduate, you’ll be sent your certificate by mail. The certification allows you to put the {certification} designation on your business cards, website, resume, and more. Get a certification that’s noticed and respected!</p>
      </div>
    </div>
  </div>
);

Included.propTypes = {
  certification: PropTypes.string.isRequired,
};
