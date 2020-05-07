import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

import { useBanner } from '../providers/banner';

export interface Props {
  delay?: number;
}

export const ConsentBanner: React.FC<Props> = ({ delay = 1000 }) => {
  const [ open, setOpen ] = useBanner();
  const [ consent, setConsent ] = useState(false);
  const [ slide, setSlide ] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();
  const tracking = useRef(false);

  useEffect(() => {
    const bannerClosed = window.sessionStorage.getItem('bannerClosed');
    const consentCookie = Cookies.get('consent');
    if (typeof consentCookie === 'undefined' && !bannerClosed) {
      setTimeout(() => {
        setOpen(true);
      }, delay);
    } else if (consentCookie) {
      setConsent(true);
      window.dataLayer.push({ event: 'track' });
      tracking.current = true;
    }
  }, []);

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (open) {
      timeout.current = setTimeout(() => {
        setSlide(true);
      }, 50);
    } else {
      setSlide(false);
    }
  }, [ open ]);

  const acceptClick = (): void => {
    if (!tracking.current) {
      window.dataLayer.push({ event: 'track' });
    }
    setConsent(true);
    setOpen(false);
    Cookies.set('consent', '1', { expires: 3650 });
  };

  const revokeClick = (): void => {
    setConsent(false);
    Cookies.set('consent', '', { expires: 3650 });
  };

  const closeClick = (): void => {
    window.sessionStorage.setItem('bannerClosed', '1');
    setOpen(false);
  };

  const moreInfoClick = (): void => {
    //
  };

  return (
    <div id="consentBanner" className={slide ? 'open' : ''}>
      {open && (
        <div className="container py-4">
          <button id="closeButton" className="btn btn-link" onClick={closeClick}><IoMdCloseCircle /></button>
          <div className="row mt-2 align-items-center">
            <div className="col-8 col-md-9 col-lg-10">
              We are always working to improve our visitor experience. To do this, we use the anonymous data provided by cookies. <a onClick={moreInfoClick} href="#">Learn more about how we use cookies</a>
            </div>
            <div className="col-4 col-md-3 col-lg-2 text-right">
              {consent
                ? <button className="btn btn-danger" onClick={revokeClick}>Revoke</button>
                : <button className="btn btn-primary" onClick={acceptClick}>Accept</button>
              }
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        #closeButton {
          position: absolute;
          top: 0;
          right: 0;
        }
        #consentBanner{
          height: 0;
          transition: none;
          z-index: 2147483640;
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: rgba(0,0,0,0.95);
          color: white;
        }
        #consentBanner.open {
          height: 224px;
          transition: height 1s;
        }
      `}</style>
    </div >
  );
};

ConsentBanner.propTypes = {
  delay: PropTypes.number,
};
