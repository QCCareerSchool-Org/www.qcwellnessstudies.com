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
    <div className="row g-5">
      {sections.map((section, i) => (
        <div key={i} className="col-12 col-lg-4">
          <p><Image src={section.icon} className="text-center" alt="" /></p>
          <h3 className="h4 text-dark text-center">{section.title}</h3>
          <p className="text-dark text-center">{section.text}</p>
        </div>
      ))}
    </div>
    {!hideButton && <p className="mt-5"><a href={`https://enroll.qcwellnessstudies.com/?${courses.map(c => `c=${encodeURIComponent(c)}`).join('&')}`} className="btn btn-secondary">GET STARTED TODAY!</a></p>}
  </div>
);
