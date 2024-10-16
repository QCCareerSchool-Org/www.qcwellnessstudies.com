import type { StaticImageData } from 'next/image';
import type { FC } from 'react';
import { IoBarChart, IoDocument, IoPeople, IoSchool } from 'react-icons/io5';

import { BackgroundImage } from './BackgroundImage';

interface Props {
  certification: string;
  className?: string;
  backgroundImageSrc?: StaticImageData;
}

const iconSize = 40;
const iconColor = '#1ED1C4';

export const IncludedSection: FC<Props> = ({ certification, className, backgroundImageSrc }) => (
  <section id="includedSection" className={className}>
    {backgroundImageSrc && <BackgroundImage src={backgroundImageSrc} />}
    <div className="container">
      <h2 className="text-center">Included in Your Course</h2>
      <div className="row pt-4">
        <div className="col-12 col-md-6 col-xl-3 text-center">
          <IoDocument size={iconSize} color={iconColor} />
          <h3 className="pt-3">Assignments & Personalized Feedback</h3>
          <p>Complete assignments quickly and efficiently in the Online Student Center. Our expert tutor will evaluate your work and provide personalized audio feedback. Your tutor will share industry tips giving you a huge advantage as you're beginning your career.</p>
        </div>
        <div className="col-12 col-md-6 col-xl-3 text-center">
          <IoPeople size={iconSize} color={iconColor} />
          <h3 className="pt-3">Student Advisor Support</h3>
          <p>In addition to your personal tutor, you'll be able to get help from QC's expert team of student advisors and teaching assistants. Any time you have questions about your course, student account, certification, or anything else, you can reach out to your QC Student Advisor by phone, email, or live chat. Advisors are available 7 days/week to help you through your course.</p>
        </div>
        <div className="col-12 col-md-6 col-xl-3 text-center">
          <IoBarChart size={iconSize} color={iconColor} />
          <h3 className="pt-3">Business Training</h3>
          <p>You'll learn how to set up your business, create pricing packages, market your services and more. You'll also have access to all your lessons and assignments, which are regularly updated with the newest and most up-to-date content. You'll also have access to custom business templates to help you work with clients effectively!</p>
        </div>
        <div className="col-12 col-md-6 col-xl-3 text-center">
          <IoSchool size={iconSize} color={iconColor} />
          <h3 className="pt-3">Certification & Professional Designation</h3>
          <p>Once you graduate, you'll be sent your certificate by mail. The certification allows you to put the {certification} designation on your business cards, website, resume, and more. Get a certification that's noticed and respected.</p>
        </div>
      </div>
    </div>
  </section>
);
