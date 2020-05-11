import PropTypes from 'prop-types';
import React from 'react';

interface Props {
  shortName: string;
  fullName: string;
  abbr: string;
  registered: boolean;
  logo?: JSX.Element;
  graduation?: JSX.Element;
  completion?: JSX.Element;  
}

export const Certification: React.FC<Props> = ({ shortName, fullName, abbr, registered, logo, graduation, completion }) => (
  <div className="container">
    <div className="row d-flex align-items-center">
      <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
        {logo ? logo : <img src={require('../images/certificate.png')} className="img-fluid text-center" alt={`${shortName} Certification`} />}
      </div>
      <div className="col-12 col-md-6 col-lg-5">
        {graduation ? graduation : <h2 className="text-light">Your {shortName} <p>Certification</p>
        </h2>}
        {completion ? completion : <p>Once you successfully complete the course, you'll receive your <strong>{fullName} ({abbr}{registered ? '®' : '™'})</strong> certificate. This certification is yours forever and doesn't expire. Use it as proof of competency with clients and/or employers. Your professional designation is a great way to set yourself from the competition. Display it proudly on your business cards, marketing materials, website, and anywhere else you advertise your services!</p>}
      </div>
    </div>
  </div>
);

Certification.propTypes = {
  shortName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  abbr: PropTypes.string.isRequired,
  registered: PropTypes.bool.isRequired,
  logo: PropTypes.element,
  graduation: PropTypes.element,
  completion: PropTypes.element,  
};
