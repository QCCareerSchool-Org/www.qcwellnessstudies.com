import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import IconAffordable from '../images/icon-affordable.svg';
import IconComprehensive from '../images/icon-comprehensive.svg';
import IconFlexible from '../images/icon-flexible.svg';

interface Props {
  subheader?: string;
  affordable: string;
  flexible: string;
  comprehensive: string;
  courses: string[];
  hideButton?: boolean;
}

export const WhyChoose: FC<Props> = ({ subheader, affordable, flexible, comprehensive, courses, hideButton }) => (
  <div className="container text-center">
    <h2 className="text-dark">Why Choose QC?</h2>
    {typeof subheader !== 'undefined' && <p className="lead mb-5">{subheader}</p>}
    <div className="row">
      <div className="col-12 col-lg-4 mb-5 mb-lg-0">
        <p><Image src={IconAffordable as StaticImageData} className="text-center" alt="Affordable" /></p>
        <h3 className="h4 text-dark text-center">Affordable</h3>
        <p className="text-dark text-center">{affordable}</p>
      </div>
      <div className="col-12 col-lg-4 mb-5 mb-lg-0">
        <p><Image src={IconFlexible as StaticImageData} className="img-fluid" alt="Flexible" /></p>
        <h3 className="h4 text-dark text-center">Flexible</h3>
        <p className="text-dark text-center">{flexible}</p>
      </div>
      <div className="col-12 col-lg-4">
        <p><Image src={IconComprehensive as StaticImageData} className="img-fluid" alt="Comprehensive" /></p>
        <h3 className="h4 text-dark text-center">Comprehensive</h3>
        <p className="text-dark text-center">{comprehensive}</p>
      </div>
    </div>
    {!hideButton && <p className="mt-5"><a href={`https://enroll.qcwellnessstudies.com/?${courses.map(c => `c=${c}`).join('&')}`} className="btn btn-secondary">GET STARTED TODAY!</a></p>}
  </div>
);
