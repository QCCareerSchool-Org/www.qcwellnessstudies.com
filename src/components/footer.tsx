import React from 'react';

import { Address } from './address';
import { TelephoneNumber } from './telephone-number';

export const Footer: React.FC = () => (
  <footer id="footer" className="bg-dark mt-auto">
    <div className="container">
      <div className="row text-center text-lg-left">
        <div className="col-12 col-lg-3 text-center pb-5 pb-lg-0">
          <img id="footer-logo" src={require('../images/logo-footer.svg')} alt="QC Wellness Studies" />
        </div>
        <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
          <p className="text-light"><strong>AVAILABLE CERTIFICATIONS:</strong></p>
          <p><a href="/courses-and-tuition/personal-care-aide/">Personal Care Aide</a></p>
          <p><a href="/courses-and-tuition/sleep-consultant/"> Sleep Consultant</a></p>
          <p><a href="/courses-and-tuition/skincare-consultant/">Skincare Consultant</a></p>
          <p><a href="/courses-and-tuition/professional-organizing/">Professional Organizer</a></p>
        </div>
        <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
          <p className="text-light"><strong>GETTING STARTED:</strong></p>
          <p><a href="/faq/">Frequently Asked Questions</a></p>
          <p><a href="/courses-and-tuition/">Tuition</a></p>
          <p><a href="/about/#guarantee">Money-Back Guarantee</a></p>
          <p className="text-secondary"><strong><a href="https://enroll.qcwellnessstudies.com/">ENROLL NOW</a></strong></p>
        </div>
        <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
          <p className="text-light"><strong>CONTACT US:</strong></p>
          <p><a href="mailto:info@qcwellnessstudies.com">Send Us a Message</a></p>
          <p><a href="#" onClick={() => { (window as any).LC_API?.open_chat_window(); return false; }}>Click Here to Chat</a></p>
          <p><TelephoneNumber /></p>
          <p><a target="_blank" href="/terms/" className="termsLink">Privacy Policy</a></p>
        </div>
      </div>
      <hr />
      © {(new Date()).getFullYear()} QC Wellness Studies.<br />
      <span id="footerAddress"><Address /></span>
      <p className="d-none d-md-block">
        <a target="_blank" href="https://www.qcmakeupacademy.com/">QC Makeup Academy</a>
        <span className="px-2">|</span>
        <a target="_blank" href="https://www.qceventplanning.com/">QC Event School</a>
        <span className="px-2">|</span>
        <a target="_blank" href="https://www.qcdesignschool.com/">QC Design School</a>
        <span className="px-2">|</span>
        <a target="_blank" href="https://www.doggroomingcourse.com/">QC Pet Studies</a>
      </p>
    </div>
  </footer>
);
