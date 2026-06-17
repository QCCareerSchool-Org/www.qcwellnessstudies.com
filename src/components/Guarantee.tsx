import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, ReactElement } from 'react';

import OneYearImage from '@/images/1-year-guarentee.svg';
import FourteenDayImage from '@/images/14-day-guarentee.svg';

interface Props {
  courseName: string;
  doubleGuarantee: boolean;
  fourteenDays?: ReactElement;
  oneYear?: ReactElement;
  starting?: ReactElement;
}

export const Guarantee: FC<Props> = ({ courseName, doubleGuarantee, fourteenDays, oneYear, starting }) => (
  <div className="container text-center">
    <h2 className="text-dark">Your Guarantee</h2>
    {starting ?? <p className="lead mb-5">Starting a new career can be scary but don&apos;t worry!<br />Once you enroll in QC&apos;s {courseName} Course, you&apos;ll be protected by a<br /><strong>{doubleGuarantee ? 'double' : '14-day'} money-back guarantee!</strong></p>}
    <div className="row">
      {doubleGuarantee
        ? (
          <>
            <div className="col-12 mb-5 col-md-6 mb-md-0 col-lg-5 offset-lg-1">
              <p><Image src={FourteenDayImage as StaticImageData} width="100" height="95" alt="14-day guarantee" /></p>
              <h3 className="text-dark">14-Day Guarantee</h3>
              {fourteenDays ?? <p>Once your enrollment has been processed, you have 14 days to review the course materials and decide whether you want to take the course. If you decide this course isn&apos;t the right course for you, simply contact the school for a refund! As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>}
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p><Image src={OneYearImage as StaticImageData} width="100" height="95" alt="1-year guarantee" /></p>
              <h3 className="text-dark">1-Year Guarantee</h3>
              {oneYear ?? <p>You&apos;ll succeed in your new career, and that&apos;s a promise! If you don&apos;t earn the equivalent of your tuition within one year after graduating from the sleep consultant course, you&apos;ll be eligible for a full refund of your tuition. Simply contact the school and provide proof that you&apos;ve made a reasonable effort to gain clients.</p>}
            </div>
          </>
        )
        : (
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mb-4">
            <p><Image src={FourteenDayImage as StaticImageData} width="100" height="95" alt="14-day guarantee" /></p>
            <h3 className="text-dark">14-Day Guarantee</h3>
            {FourteenDays ?? <p>Once your enrollment has been processed, you have 14 days to review the course materials and decide whether you want to take the course. If you decide this course isn&apos;t the right course for you, simply contact the school for a refund! As long as you haven&apos;t submitted any work to your tutor yet, your tuition will be refunded in full!</p>}
          </div>
        )}
    </div>
    <p className="mt-3">Additional information on QC&apos;s money back guarantees is available in your enrollment agreement.</p>
  </div>
);
