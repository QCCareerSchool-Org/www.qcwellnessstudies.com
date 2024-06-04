import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

type Props = {
  subheader?: string;
  affordable: string;
  flexible: string;
  comprehensive: string;
  courses: string[];
  hideButton?: boolean;
};

export const WhyChoose = ({ subheader, affordable, flexible, comprehensive, courses, hideButton }: Props): ReactElement => (
  <div className="container text-center">
    <h2 className="text-dark">Why Choose QC?</h2>
    {typeof subheader !== 'undefined' && <p className="lead mb-5">{subheader}</p>}
    <div className="row">
      <div className="col-12 col-lg-4 mb-5 mb-lg-0">
        <p><img src={require('../images/icon-affordable.svg')} className="text-center" alt="Affordable" /></p>
        <h3 className="h4 text-dark text-center">Affordable</h3>
        <p className="text-dark text-center">{affordable}</p>
      </div>
      <div className="col-12 col-lg-4 mb-5 mb-lg-0">
        <p><img src={require('../images/icon-flexible.svg')} className="img-fluid" alt="Flexible" /></p>
        <h3 className="h4 text-dark text-center">Flexible</h3>
        <p className="text-dark text-center">{flexible}</p>
      </div>
      <div className="col-12 col-lg-4">
        <p><img src={require('../images/icon-comprehensive.svg')} className="img-fluid" alt="Comprehensive" /></p>
        <h3 className="h4 text-dark text-center">Comprehensive</h3>
        <p className="text-dark text-center">{comprehensive}</p>
      </div>
    </div>
    {!hideButton && <p className="mt-5"><a href={`https://enroll.qcwellnessstudies.com/?${courses.map(c => `c=${c}`).join('&')}`} className="btn btn-secondary">GET STARTED TODAY!</a></p>}
  </div>
);

WhyChoose.propTypes = {
  subheader: PropTypes.string.isRequired,
  affordable: PropTypes.string.isRequired,
  flexible: PropTypes.string.isRequired,
  comprehensive: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  hideButton: PropTypes.bool,
};
