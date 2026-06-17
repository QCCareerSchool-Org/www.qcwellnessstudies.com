import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import Modal from 'react-bootstrap/Modal';

import OneYearImage from '@/images/1-year-guarentee.svg';
import FourteenDayImage from '@/images/14-day-guarentee.svg';

interface Props {
  show: boolean;
  doubleGuarantee: boolean;
  onHide: () => void;
}

export const GuaranteeModal: FC<Props> = ({ show, doubleGuarantee, onHide: handleHide }) => (
  <Modal show={show} onHide={handleHide} size={doubleGuarantee ? 'lg' : undefined}>
    <Modal.Header closeButton>
      <Modal.Title>14-Day Money-Back Guarantee!</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {doubleGuarantee
        ? (
          <div className="row text-center">
            <div className="col-12 col-md-6">
              <p><Image src={FourteenDayImage as StaticImageData} alt="14-day guarantee" /></p>
              <h3 className="text-dark">14-Day Guarantee</h3>
              <p>Once your enrollment has been processed, you have 14 days to review the course materials and decide whether you want to take the course. If you decide this course isn&apos;t the right course for you, simply contact the school for a refund! As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>
            </div>
            <div className="col-12 col-md-6">
              <p><Image src={OneYearImage as StaticImageData} alt="1-year guarantee" /></p>
              <h3 className="text-dark">1-Year Guarantee</h3>
              <p>You&apos;ll succeed in your new career, and that&apos;s a promise! If you don&apos;t earn the equivalent of your tuition within one year after graduating from the sleep consultant course, you&apos;ll be eligible for a full refund of your tuition. Simply contact the school, and provide proof that you&apos;ve made a reasonable effort to gain clients.</p>
            </div>
          </div>
        )
        : (
          <div className="text-center">
            <p><Image src={FourteenDayImage as StaticImageData} alt="14-day guarantee" /></p>
            <h3 className="text-dark">14-Day Guarantee</h3>
            <p>Once your enrollment has been processed, you have 14 days to review the course materials and decide whether you want to take the course. If you decide this course isn&apos;t the right course for you, simply contact the school for a refund! As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>
          </div>
        )
      }
    </Modal.Body>

    <Modal.Footer>
      <button type="button" className="btn btn-secondary" onClick={handleHide}>Close</button>
    </Modal.Footer>
  </Modal>
);
