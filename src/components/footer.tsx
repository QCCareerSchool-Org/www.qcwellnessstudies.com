import Link from 'next/link';
import React from 'react';

import { Address } from './address';
import { TelephoneNumber } from './telephone-number';

export const Footer: React.FC = () => (
  <footer id="footer" className="footer bg-dark mt-auto">
    <div className="container">
      <div className="row text-center text-lg-left">
        <div className="col-12 col-lg-3 text-center pb-5 pb-lg-0">
          <img id="footer-logo" src={require('../images/logo-footer.svg')} alt="QC Wellness Studies" />
        </div>
        <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
          <p className="text-light"><strong>AVAILABLE CERTIFICATIONS:</strong></p>
          <p><Link href="/courses-and-tuition/professional-caregiving"><a>Professional Caregiver</a></Link></p>
          <p><Link href="/courses-and-tuition/personal-caregiving"><a>Personal Caregiver</a></Link></p>
          <p><Link href="/courses-and-tuition/sleep-consultant"><a> Sleep Consultant</a></Link></p>
          <p><Link href="/courses-and-tuition/skincare-consultant"><a>Skincare Consultant</a></Link></p>
          <p><Link href="/courses-and-tuition/aging-in-place"><a>Aging in Place</a></Link></p>
        </div>
        <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
          <p className="text-light"><strong>GETTING STARTED:</strong></p>
          <p><Link href="/faq"><a>Frequently Asked Questions</a></Link></p>
          <p><Link href="/courses-and-tuition"><a>Tuition</a></Link></p>
          <p><Link href="/about#guarantee"><a>Money-Back Guarantee</a></Link></p>
          <p><Link href="/student-features/sarah-pashniak"><a>Student Feature</a></Link></p>
          <p className="text-secondary"><strong><a href="https://enroll.qcwellnessstudies.com/">ENROLL NOW</a></strong></p>
        </div>
        <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
          <p className="text-light"><strong>CONTACT US:</strong></p>
          <p><a href="mailto:info@qcwellnessstudies.com">Send Us a Message</a></p>
          <p><a href="#" onClick={(e): void => { e.preventDefault(); window.LC_API?.open_chat_window(); }}>Click Here to Chat</a></p>
          <p><TelephoneNumber /></p>
          <p><a target="_blank" href="/terms" className="termsLink">Privacy Policy</a></p>
        </div>
      </div>
      <hr />
      © {(new Date()).getFullYear()} QC Wellness Studies.<br />
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
    </div>
  </footer>
);
