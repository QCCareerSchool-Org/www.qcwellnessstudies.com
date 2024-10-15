import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { BackgroundImage } from './BackgroundImage';
import TwentyOneDayIcon from '@/images/21-day-guarentee.svg';
import GuaranteeBackgroundImage from '@/images/bg-white-green-light.jpg';

export const GuarenteeSection: FC = () => (
  <section id="guaranteeSection">
    <BackgroundImage src={GuaranteeBackgroundImage} />
    <div className="container text-center">
      <div className="col-12 col-lg-8 offset-lg-2 mb-6 mb-md-0">
        <p><Image src={TwentyOneDayIcon as StaticImageData} alt="21-day-guarentee" /></p>
        <h2 className="text-dark">QC&apos;s Guarantee</h2>
        <p>At QC, providing high quality online wellness courses is our top priority. With QC&apos;s 100% money-back guarantee, you&apos;ll have 21 days to review your course materials from the day you receive them. If you have a question or concern, contact us. If, in the 21 days, you decide the course isn&apos;t for you, we&apos;ll give you a full refund.</p>
      </div>
    </div>
  </section>
);
