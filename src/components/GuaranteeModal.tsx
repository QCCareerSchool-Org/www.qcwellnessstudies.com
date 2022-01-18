import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';
import Modal from 'react-bootstrap/Modal';

type Props = {
  show: boolean;
  doubleGuarantee: boolean;
  toggle: () => void;
};

export const GuaranteeModal = ({ show, doubleGuarantee, toggle }: Props): ReactElement => (
  <Modal show={show} onHide={toggle} size={doubleGuarantee ? 'lg' : undefined}>
    <Modal.Header closeButton>
      <Modal.Title>21-Day Money-Back Guarantee!</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {doubleGuarantee
        ? (
          <div className="row text-center">
            <div className="col-12 col-md-6">
              <p><img src={require('../images/21-day-guarentee.svg')} alt="21-day guarantee" /></p>
              <h3 className="text-dark">21-Day Guarantee</h3>
              <p>Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to take the course. If you decide this course isn&apos;t the right course for you, simply contact the school for a refund! As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>
            </div>
            <div className="col-12 col-md-6">
              <p><img src={require('../images/1-year-guarentee.svg')} alt="1-year guarantee" /></p>
              <h3 className="text-dark">1-Year Guarantee</h3>
              <p>You&apos;ll succeed in your new career, and that&apos;s a promise! If you don&apos;t earn the equivalent of your tuition within one year after graduating from the sleep consultant course, you&apos;ll be eligible for a full refund of your tuition. Simply contact the school, and provide proof that you&apos;ve made a reasonable effort to gain clients.</p>
            </div>
          </div>
        )
        : (
          <div className="text-center">
            <p><img src={require('../images/21-day-guarentee.svg')} alt="21-day guarantee" /></p>
            <h3 className="text-dark">21-Day Guarantee</h3>
            <p>Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to take the course. If you decide this course isn&apos;t the right course for you, simply contact the school for a refund! As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>
          </div>
        )
      }
    </Modal.Body>

    <Modal.Footer>
      <button type="button" className="btn btn-secondary" onClick={toggle}>Close</button>
    </Modal.Footer>
  </Modal>
);

GuaranteeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  doubleGuarantee: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
