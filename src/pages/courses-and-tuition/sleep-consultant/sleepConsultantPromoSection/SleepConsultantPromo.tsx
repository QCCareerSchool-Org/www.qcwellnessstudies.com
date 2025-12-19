import Image from 'next/image';
import type { FC } from 'react';

import HeroImage300UK from './300-desktop-uk.jpg';
import HeroImage300Default from './300-desktop.jpg';
import HeroImage400UK from './400-desktop-uk.jpg';
import HeroImage400Default from './400-desktop.jpg';
import { isGBPCountry } from '@/lib/functions';

interface Props {
  countryCode: string;
  discountAmount: number;
  enrollHref?: string;
}

const heroImages = {
  300: {
    default: HeroImage300Default,
    uk: HeroImage300UK,
  },
  400: {
    default: HeroImage400Default,
    uk: HeroImage400UK,
  },
} as const;

export const SleepConsultantPromo: FC<Props> = ({ countryCode, discountAmount, enrollHref = 'https://enroll.qcwellnessstudies.com/300-off?c=sl' }) => {
  const heroImageSet = heroImages[discountAmount as keyof typeof heroImages];
  const heroImageSrc = isGBPCountry(countryCode) ? heroImageSet.uk : heroImageSet.default;
  const discount = `${isGBPCountry(countryCode) ? '£' : '$'}${discountAmount}`;

  return (
    <section className="bg-light">
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2 className="mb-3">Limited-Time Offer</h2>
            <p>Take control of your future in sleep consulting. Enroll today in the Pediatric Sleep Consultant Course and save <strong>{discount}</strong> on tuition, with even more savings when you pay in full. Start taking on clients as you train and get certified in under 3 months.</p>
            <div className="mb-4">
              <a href={enrollHref}><Image src={heroImageSrc} alt="" className="img-fluid" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
