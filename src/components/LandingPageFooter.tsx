import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { TelephoneNumber } from './TelephoneNumber';
import FooterLogoImage from '../images/logo-footer.svg';

export const LandingPageFooter: FC = () => {
  return (
    <footer id="landing-page-footer" className="footer bg-dark text-white mt-auto text-center">
      <div className="container">
        <h2 className="h3">Have a question? Give us a call.</h2>
        <h3 className="h4 sans-serif"><TelephoneNumber /></h3>
        <p className="mt-3">To schedule a call with a student advisor, <Link href="/contact/#formSection">click here</Link></p>
        <Image src={FooterLogoImage as StaticImageData} width="110" className="img-fluid my-4" alt="QC Wellness Studies" />
      </div>
    </footer>
  );
};
