import React from 'react';

interface Props {
  courseName: string;
  doubleGuarantee: boolean;
}

export const Guarantee: React.FC<Props> = ({ courseName, doubleGuarantee }) => (
  <div className="container text-center">
    <h2 className="text-center text-dark">Your Guarantee</h2>
    <p className="lead mb-5">Starting a new career can be scary. But don't worry!<br />Once you enroll in QC's {courseName} Course, you'll be protected by a<br /><strong>{doubleGuarantee ? 'double' : '21-day'} money-back guarantee!</strong></p>
    {doubleGuarantee
      ? (
        <>
          <div className="row text-center">
            <div className="col-12 mb-5 col-md-6 mb-md-0 col-lg-5 offset-lg-1">
              <p><img src={require('../images/21-day-guarentee.svg')} alt="21-day guarantee" /></p>
              <h3 className="text-dark">21-Day Guarantee</h3>
              <p>Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to take the course. If you decide this course isn't the right course for you, simply contact the school for a refund! As long as you haven't submitted any work to your tutor yet, your tuition will be refunded in full!</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p><img src={require('../images/1-year-guarentee.svg')} alt="1-year guarantee" /></p>
              <h3 className="text-dark">1-Year Guarantee</h3>
              <p>You'll succeed in your new career, and that's a promise! If you don't earn the equivalent of your tuition within one year after graduating from the sleep consultant course, you'll be eligible for a full refund of your tuition. Simply contact the school and provide proof that you've made a reasonable effort to gain clients.</p>
            </div>
          </div>
          <p className="mt-3">Additional information on QC's money back guarantees is available in your enrollment agreement.</p>
        </>
      )
      : (
        <>
          <p><img src={require('../images/21-day-guarentee.svg')} alt="21-day guarantee" /></p>
          <p>Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to take the course. If you decide this course isn't the right course for you, simply contact the school for a refund! As long as you haven't submitted any work to your tutor yet, your tuition will be refunded in full!</p>
          <p>Additional information on QC's money back guarantees is available in your enrollment agreement.</p>
        </>
      )}
  </div>
);
