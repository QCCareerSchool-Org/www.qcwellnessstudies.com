import React, { NextPage } from 'next';

import { SEO } from '../components/SEO';
import { useLocation } from '../hooks/useLocation';
import { getTelephoneNumber } from '../lib/functions';
import { openLiveChat } from '../lib/livechat';

const OfferExpiredPage: NextPage = () => {
  const location = useLocation();
  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  return (
    <>
      <SEO
        title="Offer Expired"
        description="Your offer has expired, but there may be something else we can do for you. Talk to one of our student advisors."
        canonical="/offer-expired"
      />

      <section id="top">
        <div className="container text-center">
          <img src={require('../images/offer-expired-tag.svg')} alt="offer expired" />
          <h1 className="text-dark"><strong>Oops!</strong> Your Offer Has Expired!</h1>
          <p className="lead mb-5">But there may be something else we can do for you.<br />Talk to one of our student advisors to learn about all of QC&apos;s special offers and discounts.</p>
          <div className="row">
            <div className="col col-lg-8 offset-lg-2">
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-around">
                <a href={`tel:${telephoneNumber}`}><button className="btn btn-outline-primary mb-3 mb-lg-0">Call Us Now {telephoneNumber}</button></a>
                <button onClick={openLiveChat} className="btn btn-secondary">Chat with a Student Advisor</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferExpiredPage;
