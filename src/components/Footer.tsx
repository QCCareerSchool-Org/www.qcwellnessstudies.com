import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement } from 'react';

import { Address } from './Address';
import { ChatLink } from './ChatLink';
import styles from './Footer.module.scss';
import { TelephoneNumber } from './TelephoneNumber';
import FooterLogo from '../images/logo-footer.svg';

export const Footer = (): ReactElement => (
  <footer id="footer" className={`${styles.footer} footer bg-dark mt-auto`}>
    <div className="container">
      <div className="row text-center text-lg-left">
        <div className="col-12 col-lg-3 text-center pb-5 pb-lg-0">
          <Image id="footer-logo" src={FooterLogo as StaticImageData} alt="QC Wellness Studies" />
        </div>
        <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
          <p className="text-light"><strong>AVAILABLE CERTIFICATIONS:</strong></p>
          <p><Link href="/courses-and-tuition/professional-caregiving">Professional Caregiver</Link></p>
          <p><Link href="/courses-and-tuition/personal-caregiving">Personal Caregiver</Link></p>
          <p><Link href="/courses-and-tuition/sleep-consultant"> Sleep Consultant</Link></p>
          <p><Link href="/courses-and-tuition/skincare-consultant">Skincare Consultant</Link></p>
          <p><Link href="/courses-and-tuition/aging-in-place">Aging in Place</Link></p>
        </div>
        <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
          <p className="text-light"><strong>GETTING STARTED:</strong></p>
          <p><Link href="/faq">Frequently Asked Questions</Link></p>
          <p><Link href="/courses-and-tuition">Tuition</Link></p>
          <p><Link href="/about#guarantee">Money-Back Guarantee</Link></p>
          <p><Link href="/student-resources/blog/student-features">Student Features</Link></p>
          <p className="text-secondary"><strong><a href="https://enroll.qcwellnessstudies.com/">ENROLL NOW</a></strong></p>
        </div>
        <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
          <p className="text-light"><strong>CONTACT US:</strong></p>
          <p><a href="mailto:info@qcwellnessstudies.com">Send Us a Message</a></p>
          <p><ChatLink>Click Here to Chat</ChatLink></p>
          <p><TelephoneNumber /></p>
          <p><a target="_blank" href="/terms" className="termsLink">Privacy Policy</a></p>
        </div>
      </div>
      <hr />
      © {new Date().getFullYear()} QC Wellness Studies.<br />
      <span id="footerAddress"><Address /></span>
      <p className="d-none d-md-block">
        <a target="_blank" rel="noopener noreferrer" href="https://www.qcmakeupacademy.com/">QC Makeup Academy</a>
        <span className="px-2">|</span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.qceventplanning.com/">QC Event School</a>
        <span className="px-2">|</span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.qcdesignschool.com/">QC Design School</a>
        <span className="px-2">|</span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.doggroomingcourse.com/">QC Pet Studies</a>
      </p>
      <small>This site is protected by reCAPTCHA and the Google <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }} href="https://policies.google.com/privacy">Privacy Policy</a> and <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }} href="https://policies.google.com/terms">Terms of Service</a> apply.</small>
    </div>
  </footer>
);
