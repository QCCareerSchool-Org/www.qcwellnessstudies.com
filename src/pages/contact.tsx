import { NextPage } from 'next';
import React from 'react';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default';

const Page: NextPage = () => {

  const openLiveChat = (e: React.MouseEvent): void => {
    e.preventDefault();
    window?.LC_API?.open_chat_window();
  };

  return (
    <DefaultLayout>

      <SEO
        title="Contact Us"
        description="You can contact QC at any time by phone, email or live chat.  Or, schedule a call with a student advisor and we'll call you!"
        canonical="/contact"
        schemaType="ContactPage"
      />

      <section id="heroSection">
        <div className="container text-center">
          <h1 className="text-dark">Contact Us</h1>
          <p className="lead">Our student advisors are happy to answer all of your questions!</p>
          <div className="row mb-4">
            <div className="col-12 mb-4 col-lg-4 mb-lg-0">
              <a className="telephone-link" href="tel:1-800-267-1829"><img src={require('../images/icon-phone.svg')} className="img-fluid" alt="Phone" /></a>
              <h3 className="text-dark text-center">By Phone</h3>
              <p className="text-dark text-center"><a className="telephone-link" href="tel:1-800-267-1829"><span className="telephone-text">1-800-267-1829</span></a></p>
            </div>
            <div className="col-12 mb-4 col-lg-4 mb-lg-0">
              <a href="mailto:info@qcwellnessstudies.com"><img src={require('../images/icon-email.svg')} className="text-center" alt="Email" /></a>
              <h3 className="text-dark text-center">By Email</h3>
              <p className="text-dark text-center"><a href="mailto:info@qcwellnessstudies.com">info@qcwellnessstudies.com</a></p>
            </div>
            <div className="col-12 mb-4 col-lg-4 mb-lg-0">
              <a href="#" onClick={openLiveChat}><img src={require('../images/icon-live-chat.svg')} className="img-fluid" alt="Live Chat" /></a>
              <h3 className="text-dark text-center">Live Chat</h3>
              <p className="text-dark text-center"><a href="#" onClick={openLiveChat}>Chat with a Student Support Specialist</a></p>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="form"></a>
      <section id="formSection">
        <div className="container">
          <div className="row">
            <div className="text-center text-dark col-lg-10 offset-lg-1">
              <img src={require('../images/icon-schedule.svg')} className="text-center" alt="Calendar icon" />
              <h2>Schedule a Call with a Student Advisor</h2>
              <p className="lead">Would you like to speak to a student advisor about your options in online wellness training? Fill out this form and we'll call you at your convenience!</p>
              <p><strong>Please note:</strong> QC's offices are not open 24/7. We'll do our best to call you at the specific times you request, but if our offices will be closed at the time you request, we'll contact you via e-mail to reschedule!</p>
              <p><a className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer" href="https://qccareerschool.activehosted.com/f/52">&nbsp;Schedule a Call with a Student Advisor</a></p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        #formSection{background-image:url(${require('../images/bg-white-green-light.jpg')});background-size:cover}
      `}</style>

    </DefaultLayout>
  );
};

export default Page;
