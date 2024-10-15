import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

export interface WhyChooseSection {
  title: string;
  text: string;
  icon: StaticImageData;
}

interface Props {
  subheader?: string;
  sections: [WhyChooseSection, WhyChooseSection, WhyChooseSection];
  courses: string[];
  hideButton?: boolean;
}

export const WhyChoose: FC<Props> = ({ subheader, sections, courses, hideButton }) => (
  <div className="container text-center">
    <h2 className="text-dark">Why Choose QC?</h2>
    {typeof subheader !== 'undefined' && <p className="lead mb-5">{subheader}</p>}
    <div className="row">
      {sections.map(section => (
        <div className="col-12 col-lg-4 mb-5 mb-lg-0">
          <p><Image src={section.icon} className="text-center" alt=""/></p>
          <h3 className="h4 text-dark text-center">{section.title}</h3>
          <p className="text-dark text-center">{section.text}</p>
        </div>
      ))}
    </div>
    {!hideButton && <p className="mt-5"><a href={`https://enroll.qcwellnessstudies.com/?${courses.map(c => `c=${c}`).join('&')}`} className="btn btn-secondary">GET STARTED TODAY!</a></p>}
  </div>
);
