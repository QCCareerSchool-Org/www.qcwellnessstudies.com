import * as HttpStatus from '@qccareerschool/http-status';
import Big from 'big.js';
import fetch from 'isomorphic-unfetch';
import { GetServerSideProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import React, { useEffect } from 'react';

import { SEO } from '../components/seo';
import { TelephoneNumber } from '../components/telephone-number';
import { DefaultLayout } from '../layouts/default';
import { Enrollment } from '../models/enrollment';

type Props = {
  data?: {
    enrollment: Enrollment;
    ipAddress: string | null;
  };
  errorCode?: number;
};

const precision = 2;

const formatDate = (d: Date): string => {
  const fieldLength = 2;
  return `${d.getFullYear()}-${d.getMonth().toString().padStart(fieldLength, '0')}-${d.getDate().toString().padStart(fieldLength, '0')}`;
};

const Page: NextPage<Props> = ({ data, errorCode }) => {

  // perform this the client side so the right IP address is used
  useEffect(() => {
    if (typeof data === 'undefined') {
      return;
    }

    if (data.enrollment.emailed) {
      return;
    }

    addToActiveCampaign(data.enrollment).catch(() => { /* */ });
    if (data.ipAddress !== '173.242.186.1941') {
      addToIDevAffiliate(data.enrollment).catch(() => { /* */ });
    }

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
    //       price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(precision)),
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
    //       price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(precision)),
    //       quantity: 1,
    //       currency: enrollment.currencyCode,
    //     });
    //   });
    //   ga('ecommerce:send');
    //   console.log('ga');
    // } else {
    //   console.log('no tracker found');
    // }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      ecommerce: {
        purchase: {
          actionField: {
            id: data.enrollment.id,
            affiliation: data.enrollment.school,
            revenue: data.enrollment.cost,
            shipping: 0,
            tax: 0,
            currency: data.enrollment.currencyCode,
          },
          products: data.enrollment.courses.map(c => ({
            id: data.enrollment.id,
            name: c.name,
            price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(precision)),
            quantity: 1,
            currency: data.enrollment.currencyCode,
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
    //       price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(precision)),
    //       quantity: 1,
    //     })),
    //   },
    // });
  }, [ data ]);

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (typeof data === 'undefined') {
    return <ErrorPage statusCode={500} />;
  }

  const paymentDate = new Date(data.enrollment.paymentDate);
  // const cost = (data.enrollment.cost / data.enrollment.currencyExchangeRate).toFixed(2);
  // const name = data.enrollment.firstName + ' ' + data.enrollment.lastName;
  // const iDevAffiliateUrl = `https://affiliates.qccareerschool.com/sale.php?profile=72198&idev_saleamt=${encodeURIComponent(cost)}&idev_ordernum=${encodeURIComponent(data.enrollment.id)}&idev_option_1=${encodeURIComponent(name)}&idev_option_2=${encodeURIComponent(data.enrollment.emailAddress)}`;

  return (
    <DefaultLayout>

      <SEO
        title="Welcome to the School"
        description="Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center."
        canonical="/welcome-to-the-school"
        noIndex={true}
      />

      {/* {data.ipAddress !== '173.242.186.194' && !data.enrollment.emailed && (
        <>
          <script type="text/javascript" src={iDevAffiliateUrl}></script>
          <noscript>
            <img src={iDevAffiliateUrl} style={{ height: 0, width: 0, border: 0 }} />
          </noscript>
        </>
      )} */}

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
                    <td>{data.enrollment.firstName} {data.enrollment.lastName}</td>
                  </tr>
                  <tr>
                    <td><strong>Address</strong></td>
                    <td>
                      {data.enrollment.address1}<br />
                      {data.enrollment.address2 && <>{data.enrollment.address2}<br /></>}
                      {data.enrollment.city} {data.enrollment.provinceName} {data.enrollment.postalCode}<br />
                      {data.enrollment.countryName}
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Currency</strong></td>
                    <td>{data.enrollment.currencyName}</td>
                  </tr>
                  <tr>
                    <td><strong>Payment Plan</strong></td>
                    <td>{data.enrollment.paymentPlan === 'full' ? 'Full Payment' : 'Installment Plan'}</td>
                  </tr>
                  {data.enrollment.paymentPlan !== 'full' && (
                    <>
                      <tr>
                        <td><strong>Payment Day</strong></td>
                        <td>{data.enrollment.paymentDay}</td>
                      </tr>
                      <tr>
                        <td><strong>Installments Start</strong></td>
                        <td>{formatDate(paymentDate)}</td>
                      </tr>
                    </>
                  )}
                  {data.enrollment.courses.map((c, i) => (
                    <React.Fragment key={i}>
                      <tr>
                        <td colSpan={2}><h6 className="mt-4 mb-0">{c.name}</h6></td>
                      </tr>
                      <tr>
                        <td><strong>Cost</strong></td>
                        <td>{data.enrollment.currencySymbol}{c.baseCost.toFixed(precision)}</td>
                      </tr>
                      {c.planDiscount > 0 && (
                        <tr>
                          <td><strong>Discount</strong></td>
                          <td>&minus;{data.enrollment.currencySymbol}{c.planDiscount.toFixed(precision)}</td>
                        </tr>
                      )}
                      {c.discount > 0 && (
                        <tr>
                          <td><strong>Special Discount</strong></td>
                          <td>&minus;{data.enrollment.currencySymbol}{c.discount.toFixed(precision)}</td>
                        </tr>
                      )}
                      <tr>
                        <td><strong>Today&apos;s Deposit</strong></td>
                        <td>{data.enrollment.currencySymbol}{c.deposit.toFixed(precision)}</td>
                      </tr>
                      <tr>
                        <td><strong>Monthly Installment</strong></td>
                        <td>{data.enrollment.currencySymbol}{c.installment.toFixed(precision)}</td>
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
                    <td>{data.enrollment.authorizationId}</td>
                  </tr>
                  <tr>
                    <td>PAN</td>
                    <td>{data.enrollment.maskedPan}</td>
                  </tr>
                  <tr>
                    <td>Amount Processed</td>
                    <td>{data.enrollment.deposit.toFixed(precision)} {data.enrollment.currencyCode}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{data.enrollment.transactionTime}</td>
                  </tr>
                  <tr>
                    <td>Auth Code</td>
                    <td>{data.enrollment.authCode}</td>
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

const addToIDevAffiliate = async (enrollment: Enrollment): Promise<void> => {
  const cost = (enrollment.cost / enrollment.currencyExchangeRate).toFixed(2);
  const name = enrollment.firstName + ' ' + enrollment.lastName;
  const url = `https://affiliates.qccareerschool.com/sale.php?profile=72198&idev_saleamt=${encodeURIComponent(cost)}&idev_ordernum=${encodeURIComponent(enrollment.id)}&idev_option_1=${encodeURIComponent(name)}&idev_option_2=${encodeURIComponent(enrollment.emailAddress)}`;
  const response = await fetch(url, { mode: 'no-cors' });
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

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  try {
    if (typeof query.enrollmentId !== 'string' || typeof query.code !== 'string') {
      throw new HttpStatus.BadRequest();
    }
    const enrollmentId = parseInt(query.enrollmentId, 10);
    const code = query.code;

    const enrollment = await getEnrollment(enrollmentId, code);

    if (!enrollment.complete || !enrollment.success) {
      throw new HttpStatus.NotFound();
    }

    if (!enrollment.emailed) {
      // don't wait here because of vercel's serverless function time limit
      sendEmail(enrollmentId, code).catch(() => { /* */ });
    }

    const ipAddress = Array.isArray(req.headers['x-real-ip']) ? req.headers['x-real-ip']?.[0] : req.headers['x-real-ip'];

    return { props: { data: { enrollment, ipAddress: ipAddress ?? null } } };
  } catch (err: unknown) {
    const internalServerError = 500;
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.statusCode : internalServerError;
    if (res) {
      res.statusCode = errorCode;
    }
    return { props: { errorCode } };
  }
};

export default Page;
