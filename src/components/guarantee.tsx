import PropTypes from 'prop-types';
import React from 'react';

interface Props {
  courseName: string;
  doubleGuarantee: boolean;
  twentyOneDays?: React.ReactElement;
  oneYear?: React.ReactElement;
  starting?: React.ReactElement;
}

export const Guarantee: React.FC<Props> = ({ courseName, doubleGuarantee, twentyOneDays, oneYear, starting }) => (
  <div className="container text-center">
    <h2 className="text-dark">Your Guarantee</h2>
    {starting ? starting : <p className="lead mb-5">Starting a new career can be scary but don&apos;t worry!<br />Once you enroll in QC&apos;s {courseName} Course, you&apos;ll be protected by a<br /><strong>{doubleGuarantee ? 'double' : '21-day'} money-back guarantee!</strong></p>}
    <div className="row">
      {doubleGuarantee
        ? (
          <>
            <div className="col-12 mb-5 col-md-6 mb-md-0 col-lg-5 offset-lg-1">
              <p><img src={require('../images/21-day-guarentee.svg')} alt="21-day guarantee" /></p>
              <h3 className="text-dark">21-Day Guarantee</h3>
              {twentyOneDays ? twentyOneDays : <p>Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to take the course. If you decide this course isn&apos;t the right course for you, simply contact the school for a refund! As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>}
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p><img src={require('../images/1-year-guarentee.svg')} alt="1-year guarantee" /></p>
              <h3 className="text-dark">1-Year Guarantee</h3>
              {oneYear ? oneYear : <p>You&apos;ll succeed in your new career, and that&apos;s a promise! If you don&apos;t earn the equivalent of your tuition within one year after graduating from the sleep consultant course, you&apos;ll be eligible for a full refund of your tuition. Simply contact the school and provide proof that you&apos;ve made a reasonable effort to gain clients.</p>}
            </div>
          </>
        )
        : (
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mb-4">
            <p><img src={require('../images/21-day-guarentee.svg')} alt="21-day guarantee" /></p>
            <h3 className="text-dark">21-Day Guarantee</h3>
            {twentyOneDays ? twentyOneDays : <p>Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to take the course. If you decide this course isn&apos;t the right course for you, simply contact the school for a refund! As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>}
          </div>
        )}
    </div>
    <p className="mt-3">Additional information on QC&apos;s money back guarantees is available in your enrollment agreement.</p>
  </div>
);

Guarantee.propTypes = {
  courseName: PropTypes.string.isRequired,
  doubleGuarantee: PropTypes.bool.isRequired,
  twentyOneDays: PropTypes.element,
  oneYear: PropTypes.element,
  starting: PropTypes.element,
};
