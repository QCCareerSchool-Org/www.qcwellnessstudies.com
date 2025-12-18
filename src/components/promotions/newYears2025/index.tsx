import Image from 'next/image';
import type { FC } from 'react';

import HeroImageUK from './desktop-uk.jpg';
import HeroImageDefault from './desktop.jpg';
import { isGBPCountry } from '@/lib/functions';

interface Props {
  countryCode: string;
}

export const NewYears2025: FC<Props> = ({ countryCode }) => {
  const heroImageSrc = isGBPCountry(countryCode) ? HeroImageUK : HeroImageDefault;
  const discount = isGBPCountry(countryCode) ? '£300' : '$300';

  return (
    <section className="bg-light">
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2 className="mb-3">Limited-Time Offer</h2>
            <p>Take control of your future in sleep consulting. Enroll today in the Pediatric Sleep Consultant Course and save {discount} on tuition, with even more savings when you pay in full. Start taking on clients as you train and get certified in under 3 months.</p>
            <div className="mb-4">
              <a href="https://enroll.qcwellnessstudies.com/300-off?c=sl"><Image src={heroImageSrc} alt="" className="img-fluid" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
