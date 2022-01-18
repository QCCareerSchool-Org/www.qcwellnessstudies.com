import React, { ReactElement } from 'react';

import { openLiveChat } from '../lib/livechat';
import { TelephoneNumber } from './TelephoneNumber';

export const Contact = (): ReactElement => (
  <div className="container text-center">
    <h1 className="text-dark">Contact Us</h1>
    <p className="lead">Our student advisors are happy to answer all of your questions!</p>
    <div className="row mb-4">
      <div className="col-12 mb-4 col-lg-4 mb-lg-0">
        <img src={require('../images/icon-phone.svg')} className="img-fluid" alt="Phone" />
        <h3 className="text-dark text-center">By Phone</h3>
        <p className="text-dark text-center"><TelephoneNumber /></p>
      </div>
      <div className="col-12 mb-4 col-lg-4 mb-lg-0">
        <img src={require('../images/icon-email.svg')} className="text-center" alt="Email" />
        <h3 className="text-dark text-center">By Email</h3>
        <p className="text-dark text-center"><a href="mailto:info@qcwellnessstudies.com">info@qcwellnessstudies.com</a></p>
      </div>
      <div className="col-12 mb-4 col-lg-4 mb-lg-0">
        <img src={require('../images/icon-live-chat.svg')} className="img-fluid" alt="Live Chat" />
        <h3 className="text-dark text-center">Live Chat</h3>
        <p className="text-dark text-center"><a href="#" onClick={openLiveChat}>Chat with a Student Support Specialist</a></p>
      </div>
    </div>
    <p><a className="btn btn-sm btn-outline-primary" href="/contact#form">&nbsp;Schedule a Call with a Student Advisor</a></p>
  </div>
);
