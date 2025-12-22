import type { FC } from 'react';

import { GuaranteeModal } from './GuaranteeModal';
import { useLocation } from '../hooks/useLocation';
import { usePrice } from '../hooks/usePrice';
import { useToggle } from '../hooks/useToggle';
import { formatPrice } from '../lib/functions';

interface Props {
  courses: string[];
  doubleGuarantee: boolean;
  enrollPath?: string;
}

export const PaymentPlans: FC<Props> = ({ courses, doubleGuarantee, enrollPath = 'https://enroll.qcwellnessstudies.com/' }) => {
  const location = useLocation();
  const price = usePrice(courses, location?.countryCode, location?.provinceCode);
  const [ modal, handleClick ] = useToggle();

  return (
    <>
      <GuaranteeModal show={modal} doubleGuarantee={doubleGuarantee} onHide={handleClick} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
            <h2 className="text-dark">Tuition &amp;<br />Payment Plans</h2>
            <p className="text-dark">Includes everything you need to get certified!<br />All prices are in {price?.currency.name}</p>
            <button type="button" className="btn btn-dark" onClick={handleClick}>{doubleGuarantee ? 'Double' : '21-Day'} Money-Back Guarantee!</button>
          </div>
          <div className="d-flex col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 mb-4 mb-md-0">
            <div className="card shadow text-center w-100">
              <div className="card-body">
                <p className="card-text">PAY IN FULL</p>
                <p className="small text-muted mb-0"><del>{price?.currency.symbol}{formatPrice(price?.discountedCost)}</del></p>
                <p className="card-text price text-dark"><small>{price?.currency.symbol}</small>{formatPrice(price?.plans.full.total)}</p>
                <p className="card-text"><a href={`${enrollPath}?${courses.map(c => `c=${encodeURIComponent(c)}`).join('&')}`} className="btn btn-secondary">ENROLL NOW</a></p>
                <p className="card-text"><strong><mark>SAVE {price?.currency.symbol}{formatPrice(price?.plans.full.discount)}</mark></strong><br />when you pay in full.</p>
              </div>
            </div>
          </div>
          <div className="d-flex col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4">
            <div className="card shadow text-center w-100">
              <div className="card-body">
                <p className="card-text">INSTALLMENT PLAN</p>
                <p className="small text-muted mb-0">&nbsp;</p>
                <p className="card-text price text-dark"><small>{price?.currency.symbol}</small>{formatPrice(price?.plans.part.installmentSize)} <small className="text-muted">/ mo</small></p>
                <p className="card-text"><a href={`${enrollPath}?${courses.map(c => `c=${c}`).join('&')}`} className="btn btn-secondary">ENROLL NOW</a></p>
                <p className="card-text"><strong>Deposit of {price?.currency.symbol}{formatPrice(price?.plans.part.deposit)}</strong><br />then {price?.plans.part.installments} monthly payments of {price?.currency.symbol}{formatPrice(price?.plans.part.installmentSize)}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
