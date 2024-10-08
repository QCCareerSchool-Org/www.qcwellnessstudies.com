import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import FooterLogo from '../images/logo-footer.svg';

interface Props {
  profession: string;
}

export const About: FC<Props> = ({ profession }) => (
  <div className="container text-light">
    <div className="row col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
      <div className="">
        <p><Image src={FooterLogo as StaticImageData} width="82" height="92" alt="About QC Wellness Studies" /></p>
        <h2 className="text-light">About QC Wellness Studies</h2>
        <p>QC Wellness Studies is a faculty of QC Career School, a distance learning institution that has been providing quality career training since 1984! With 35 years of successful graduates launching profitable businesses in their desired fields, QC&apos;s course developers are confident you&apos;ll achieve success as {profession}.</p>
        <p>QC provides even better training than what you&apos;d receive at a brick and mortar school. You&apos;ll benefit from regular one-on-one instruction and access to help whenever you need it. QC will help you to build a successful career from the ground up!</p>
      </div>
      <div className="card mb-3">
        <h5 className="card-header text-dark">A+ Rating with the Better Business Bureau</h5>
        <div className="card-body text-dark">
          <p className="card-text">QC Career School is fully accredited with the Better Business Bureau, proudly holding an A+ rating, which is the highest rating available. When you enroll with QC, you can rest assured you&apos;re joining a community that&apos;s trusted and secure. That&apos;s our guarantee!</p>
        </div>
      </div>
    </div>
  </div>
);
