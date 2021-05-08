import * as HttpStatus from '@qccareerschool/http-status';
import Big from 'big.js';
import fetch from 'isomorphic-unfetch';
import { GetServerSideProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { SEO } from '../components/seo';
import { TelephoneNumber } from '../components/telephone-number';
import { DefaultLayout } from '../layouts/default';
import { Enrollment } from '../models/enrollment';

interface Props {
  enrollment?: Enrollment;
  errorCode?: number;
}

const Page: NextPage<Props> = ({ errorCode, enrollment }) => {
  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!enrollment) {
    return null;
  }

  useEffect(() => {
    console.log('enrollment.emailed', enrollment.emailed);
    if (enrollment.emailed === false) {
      // if (typeof gtag !== 'undefined') {
      //   // https://developers.google.com/analytics/devguides/collection/gtagjs/ecommerce
      //   gtag('event', 'purchase', {
      //     transaction_id: enrollment.id,
      //     affiliation: enrollment.school,
      //     value: enrollment.cost,
      //     currency: enrollment.currencyCode,
      //     tax: 0,
      //     shipping: 0,
      //     items: enrollment.courses.map(c => ({
      //       id: c.code,
      //       name: c.name,
      //       price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(2)),
      //       quantity: 1,
      //     })),
      //   });
      // } else if (typeof ga !== 'undefined') {
      //   // https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
      //   ga('require', 'ecommerce');
      //   ga('ecommerce:addTransaction', {
      //     id: enrollment.id,
      //     affiliation: enrollment.school,
      //     revenue: enrollment.cost,
      //     shipping: 0,
      //     tax: 0,
      //     currency: enrollment.currencyCode,
      //   });
      //   enrollment.courses.forEach(c => {
      //     ga('ecommerce:addItem', {
      //       id: enrollment.id,
      //       name: c.name,
      //       price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(2)),
      //       quantity: 1,
      //       currency: enrollment.currencyCode,
      //     });
      //   });
      //   ga('ecommerce:send');
      //   console.log('ga');
      // } else {
      //   console.log('no tracker found');
      // }

    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      ecommerce: {
        purchase: {
          actionField: {
            id: enrollment.id,
            affiliation: enrollment.school,
            revenue: enrollment.cost,
            shipping: 0,
            tax: 0,
            currency: enrollment.currencyCode,
          },
          products: enrollment.courses.map(c => ({
            id: enrollment.id,
            name: c.name,
            price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(2)),
            quantity: 1,
            currency: enrollment.currencyCode,
          })),
        },
      },
    });

    // window.dataLayer.push({
    //   event: 'purchase',
    //   ecommerce: {
    //     transaction_id: enrollment.id,
    //     affiliation: enrollment.school,
    //     value: enrollment.cost,
    //     currency: enrollment.currencyCode,
    //     tax: 0,
    //     shipping: 0,
    //     items: enrollment.courses.map(c => ({
    //       item_name: c.name,
    //       item_id: c.code,
    //       price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(2)),
    //       quantity: 1,
    //     })),
    //   },
    // });
  }, [ enrollment.emailed ]);

  const paymentDate = new Date(enrollment.paymentDate);

  return (
    <DefaultLayout>

      <SEO
        title="Welcome to the School"
        description="Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center."
        canonical="/welcome-to-the-school"
        noIndex={true}
      />

      <section id="thankyouSection">
        <div className="container">
          <div className="row row d-flex align-items-center mb-3 mt-3">
            <div className="col-12 col-sm-10 col-md-8 col-lg-8">
              <h1 className="text-dark">Thank You for Enrolling with QC Wellness Studies!</h1>
              <p>Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center. If you don&apos;t see an email from us, please check your spam folder.</p>
              <p>If you have any questions regarding the course, or if you want to discuss your goals, our friendly and knowledgeable student support advisors are available 7 days a week by email at <a href="mailto:info@qcwellnessstudies.com">info@qcwellnessstudies.com</a> or by phone at <TelephoneNumber />. We would be delighted to speak with you and assist you in any way we can. We hope your learning experience with us will be enjoyable, interesting, and valuable.</p>
              <p className="lead">Remember, we want to develop a personal relationship with you and be readily available for you whenever you need us.</p>
              <p className="text-dark"><strong>Best of luck with your studies!</strong></p>
              <p className="lead">Sincerely,</p>
              <p className="text-dark"><img src={require('../images/alex-myers.png')} className="text-center" alt="Alex Myers" /><br /><strong>Director</strong> QC Career School</p>
            </div>
          </div>
        </div>
      </section>

      <section id="detailsSection" className="bg-light text-dark">
        <div className="container">
          <h2>Enrollment Details</h2>
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <table id="enrollmentTable" className="mb-4 w-100">
                <tbody>
                  <tr>
                    <td><strong>Name</strong></td>
                    <td>{enrollment.firstName} {enrollment.lastName}</td>
                  </tr>
                  <tr>
                    <td><strong>Address</strong></td>
                    <td>
                      {enrollment.address1}<br />
                      {enrollment.address2 && <>{enrollment.address2}<br /></>}
                      {enrollment.city} {enrollment.provinceName} {enrollment.postalCode}<br />
                      {enrollment.countryName}
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Currency</strong></td>
                    <td>{enrollment.currencyName}</td>
                  </tr>
                  <tr>
                    <td><strong>Payment Plan</strong></td>
                    <td>{enrollment.paymentPlan === 'full' ? 'Full Payment' : 'Installment Plan'}</td>
                  </tr>
                  {enrollment.paymentPlan !== 'full' && (
                    <>
                      <tr>
                        <td><strong>Payment Day</strong></td>
                        <td>{enrollment.paymentDay}</td>
                      </tr>
                      <tr>
                        <td><strong>Installments Start</strong></td>
                        <td>{paymentDate.getFullYear()}-{paymentDate.getMonth().toString().padStart(2, '0')}-{paymentDate.getDate().toString().padStart(2, '0')}</td>
                      </tr>
                    </>
                  )}
                  {enrollment.courses.map((c, i) => (
                    <React.Fragment key={i}>
                      <tr>
                        <td colSpan={2}><h6 className="mt-4 mb-0">{c.name}</h6></td>
                      </tr>
                      <tr>
                        <td><strong>Cost</strong></td>
                        <td>{enrollment.currencySymbol}{c.baseCost.toFixed(2)}</td>
                      </tr>
                      {c.planDiscount > 0 && (
                        <tr>
                          <td><strong>Discount</strong></td>
                          <td>&minus;{enrollment.currencySymbol}{c.planDiscount.toFixed(2)}</td>
                        </tr>
                      )}
                      {c.discount > 0 && (
                        <tr>
                          <td><strong>Special Discount</strong></td>
                          <td>&minus;{enrollment.currencySymbol}{c.discount.toFixed(2)}</td>
                        </tr>
                      )}
                      <tr>
                        <td><strong>Today&apos;s Deposit</strong></td>
                        <td>{enrollment.currencySymbol}{c.deposit.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td><strong>Monthly Installment</strong></td>
                        <td>{enrollment.currencySymbol}{c.installment.toFixed(2)}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-12 col-xl-6">
              <table className="table table-bordered text-dark">
                <tbody>
                  <tr>
                    <td>Reference Code</td>
                    <td>{enrollment.authorizationId}</td>
                  </tr>
                  <tr>
                    <td>PAN</td>
                    <td>{enrollment.maskedPan}</td>
                  </tr>
                  <tr>
                    <td>Amount Processed</td>
                    <td>{enrollment.deposit.toFixed(2)} {enrollment.currencyCode}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{enrollment.transactionTime}</td>
                  </tr>
                  <tr>
                    <td>Auth Code</td>
                    <td>{enrollment.authCode}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p>If you would like to make changes to your account, please contact the School at your earliest convenience by phone or email.</p>
        </div>
      </section>

    </DefaultLayout>
  );
};

Page.propTypes = {
  enrollment: PropTypes.any,
  errorCode: PropTypes.number,
};

const sendEmail = async (enrollmentId: number, code: string): Promise<void> => {
  const url = `https://api.qccareerschool.com/enrollments/${enrollmentId}/email`;
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'X-API-Version': '2',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  await response.json();
};

const addToActiveCampaign = async (enrollment: Enrollment): Promise<void> => {
  const payload = {
    firstName: enrollment.firstName,
    lastName: enrollment.lastName,
    emailAddress: enrollment.emailAddress,
    phoneNumber: enrollment.telephoneNumber,
    country: enrollment.countryName,
    state: enrollment.provinceName,
    listId: 39,
    customFields: {
      SALE_AMOUNT: enrollment.cost,
      SALE_CURRENCY: enrollment.currencyCode,
    },
  };
  
  const url = 'https://api.qccareerschool.com/activeCampaign/subscribe';
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  await response.json();
};

const getEnrollment = async (enrollmentId: number, code: string): Promise<Enrollment> => {
  const url = `https://api.qccareerschool.com/enrollments/${enrollmentId}?code=${code}`;
  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  return response.json();
};

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  try {
    if (typeof query.enrollmentId !== 'string' || typeof query.code !== 'string') {
      throw new HttpStatus.BadRequest();
    }
    const enrollmentId = parseInt(query.enrollmentId, 10);
    const code = query.code;

    const enrollment = await getEnrollment(enrollmentId, code);
    console.log(enrollment);

    if (!enrollment.complete || !enrollment.success) {
      throw new HttpStatus.NotFound();
    }

    if (!enrollment.emailed) {
      try {
        await sendEmail(enrollmentId, code);
      } catch (err) { /* ignore */ }
      try {
        await addToActiveCampaign(enrollment);
      } catch (err) { /* ignore */ }
    }

    return { props: { enrollment } };
  } catch (err) {
    const errorCode = typeof err.statusCode === 'undefined' ? 500 : err.statusCode;
    if (res) {
      res.statusCode = errorCode;
    }
    return { props: { errorCode } };
  }
};

export default Page;
