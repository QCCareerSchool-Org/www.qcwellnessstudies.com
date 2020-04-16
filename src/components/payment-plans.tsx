import PropTypes from 'prop-types';
import React from 'react';

import { usePrice } from '../hooks/usePrice';
import { useToggle } from '../hooks/useToggle';
import { formatPrice } from '../lib/functions';
import { useLocation } from '../providers/location';
import { GuaranteeModal } from './guarantee-modal';

interface Props {
  courses: string[];
  doubleGuarantee: boolean;
}

export const PaymentPlans: React.FC<Props> = ({ courses, doubleGuarantee }) => {
  const location = useLocation();
  const price = usePrice(courses, location?.countryCode, location?.provinceCode);
  const [ modal, toggle ] = useToggle();
  return (
    <>
      <GuaranteeModal show={modal} doubleGuarantee={doubleGuarantee} toggle={toggle} />

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
            <h2 className="text-dark">Tuition &amp;<br />Payment Plans</h2>
            <p className="text-dark">Includes everything you need to get certified!<br />All prices are in {price?.currency.name}</p>
            <button type="button" className="btn btn-dark" onClick={toggle}>{doubleGuarantee ? 'Double' : '21-Day'} Money-Back Guarantee!</button>
          </div>
          <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 mb-4 mb-lg-0">
            <div className="card shadow text-center">
              <div className="card-body">
                <p className="card-text">PAY IN FULL</p>
                <p className="small text-muted mb-0"><del>{price?.currency.symbol}{formatPrice(price?.discountedCost)}</del></p>
                <p className="card-text price text-dark"><small>{price?.currency.symbol}</small>{formatPrice(price?.plans.full.total)}</p>
                <p className="card-text"><a href={`https://enroll.qcwellnessstudies.com/?${courses.map(c => `c[]=${c}`).join('&')}`} className="btn btn-secondary">ENROLL NOW</a></p>
                <p className="card-text"><strong><mark>SAVE {price?.currency.symbol}{formatPrice(price?.plans.full.discount)}</mark></strong><br />when you pay in full.</p>
              </div>
            </div>
          </div>
          <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4">
            <div className="card shadow text-center">
              <div className="card-body">
                <p className="card-text">INSTALLMENT PLAN</p>
                <p className="small text-muted mb-0">&nbsp;</p>
                <p className="card-text price text-dark"><small>{price?.currency.symbol}</small>{formatPrice(price?.plans.part.installmentSize)} <small className="text-muted">/ mo</small></p>
                <p className="card-text"><a href={`https://enroll.qcwellnessstudies.com/?${courses.map(c => `c[]=${c}`).join('&')}`} className="btn btn-secondary">ENROLL NOW</a></p>
                <p className="card-text"><strong>Deposit of {price?.currency.symbol}{formatPrice(price?.plans.part.deposit)}</strong><br />then {price?.plans.part.installments} monthly payments of {price?.currency.symbol}{formatPrice(price?.plans.part.installmentSize)}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentPlans.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  doubleGuarantee: PropTypes.bool.isRequired,
};

