import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import { openLiveChat as handleClick } from '../../lib/livechat';
import { TelephoneNumber } from '../TelephoneNumber';
import EmailIcon from '@/images/icon-email.svg';
import ChatIcon from '@/images/icon-live-chat.svg';
import PhoneIcon from '@/images/icon-phone.svg';

export const Contact: FC = () => (
  <div className="container text-center">
    <h1 className="text-dark">Contact Us</h1>
    <p className="lead">Our student advisors are happy to answer all of your questions!</p>
    <div className="row mb-4">
      <div className="col-12 mb-4 col-lg-4 mb-lg-0">
        <Image src={PhoneIcon as StaticImageData} className="img-fluid" alt="Phone" />
        <h3 className="text-dark text-center">By Phone</h3>
        <p className="text-dark text-center"><TelephoneNumber /></p>
      </div>
      <div className="col-12 mb-4 col-lg-4 mb-lg-0">
        <Image src={EmailIcon as StaticImageData} className="text-center" alt="Email" />
        <h3 className="text-dark text-center">By Email</h3>
        <p className="text-dark text-center"><a href="mailto:info@qcwellnessstudies.com">info@qcwellnessstudies.com</a></p>
      </div>
      <div className="col-12 mb-4 col-lg-4 mb-lg-0">
        <Image src={ChatIcon as StaticImageData} className="img-fluid" alt="Live Chat" />
        <h3 className="text-dark text-center">Live Chat</h3>
        <p className="text-dark text-center"><a href="#" onClick={handleClick}>Chat with a Student Support Specialist</a></p>
      </div>
    </div>
  </div>
);
