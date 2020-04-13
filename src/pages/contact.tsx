import React from 'react';
import { NextPage } from 'next';
import { IoMdClock } from 'react-icons/io';

import { DefaultLayout } from '../layouts/default';

const Page: NextPage = () => (
  <DefaultLayout>

    <section id="heroSection">

      <div className="container text-center">

        <h1 className="text-dark">Contact Us</h1>
        <p className="lead">Our student advisors are happy to answer all of your questions!</p>

        <div className="row mb-4">

          <div className="col-12 mb-4 col-lg-4 mb-lg-0">
            <a className="telephone-link" href="tel:1-800-267-1829"><img src="/images/icon-phone.svg" className="img-fluid" alt="Phone" /></a>
            <h3 className="text-dark text-center">By Phone</h3>
            <p className="text-dark text-center"><a className="telephone-link" href="tel:1-800-267-1829"><span className="telephone-text">1-800-267-1829</span></a></p>
          </div>

          <div className="col-12 mb-4 col-lg-4 mb-lg-0">
            <a href="mailto:info@qcwellnessstudies.com"><img src="/images/icon-email.svg" className="text-center" alt="Email" /></a>
            <h3 className="text-dark text-center">By Email</h3>
            <p className="text-dark text-center"><a href="mailto:info@qcwellnessstudies.com">info@qcwellnessstudies.com</a></p>
          </div>

          <div className="col-12 mb-4 col-lg-4 mb-lg-0">
            <a href="#" onClick={() => { (window as any).LC_API?.open_chat_window(); return false; }}><img src="/images/icon-live-chat.svg" className="img-fluid" alt="Live Chat" /></a>
            <h3 className="text-dark text-center">Live Chat</h3>
            <p className="text-dark text-center"><a href="#" onClick={() => { (window as any).LC_API?.open_chat_window(); return false; }}>Chat with a Student Support Specialist</a></p>
          </div>

        </div>

        <p className="mb-4">
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModalCenter">
            <IoMdClock className="text-center"></IoMdClock>&nbsp; Hours of Operation
          </button>
        </p>

        <p><a className="btn btn-sm btn-outline-primary" href="#form">&nbsp;Schedule a Call with a Student Advisor</a></p>

      </div>

    </section>


    <a className="anchor" id="form"></a>
    <section id="formSection">

      <div className="container">

        <div className="row">

          <div className="text-center text-dark col-lg-10 offset-lg-1">
            <img src="/images/icon-schedule.svg" className="text-center" alt="Calendar icon" />
            <h2>Schedule a Call with a Student Advisor</h2>
            <p className="lead">Would you like to speak to a student advisor about your options in online wellness training? Fill out this form and we'll call you at your convenience!</p>
            <p><strong>Please note:</strong> QC's offices are not open 24/7. We'll do our best to call you at the specific times you request, but if our offices will be closed at the time you request, we'll contact you via e-mail to reschedule!</p>
          </div>

        </div>

        <div className="_form_52"></div>
        <script src="https://qccareerschool.activehosted.com/f/embed.php?id=52" type="text/javascript" charSet="utf-8"></script>

      </div>

    </section>


    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title sans-serif" id="exampleModalLongTitle">Hours of Operation</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body text-center">
            <table className="table">
              <thead>
                <tr className="table table-primary">
                  <th scope="col">Day</th>
                  <th scope="col">Open</th>
                  <th scope="col">Close</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mon – Thu</td>
                  <td>7:30 am</td>
                  <td>9:00 pm</td>
                </tr>
                <tr>
                  <td>Fri</td>
                  <td>7:30 am</td>
                  <td>6:00 pm</td>
                </tr>
                <tr>
                  <td>Sat</td>
                  <td>12:30 pm</td>
                  <td>6:30 pm</td>
                </tr>
                <tr>
                  <td>Sun</td>
                  <td>5:00 pm</td>
                  <td>10:00 pm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="text-center"><strong>All times are eastern daylight time.</strong></p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </DefaultLayout>
);

export default Page;
