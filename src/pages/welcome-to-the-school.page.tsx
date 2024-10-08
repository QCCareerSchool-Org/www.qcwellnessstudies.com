import * as HttpStatus from '@qccareerschool/http-status';
import type { GetServerSideProps, NextPage } from 'next';
import ErrorPage from 'next/error';
import Image from 'next/image';
import { Fragment, useEffect, useMemo } from 'react';

import { SEO } from '@/components/SEO';
import { TelephoneNumber } from '@/components/TelephoneNumber';
import AlexMyersSignatureImage from '@/images/alex-myers.png';
import { addToIDevAffiliate } from '@/lib/addToIDevAffiliate';
import { brevoIdentifyStudent } from '@/lib/brevo';
import { createBrevoContact } from '@/lib/brevoAPI';
import { fbqSale } from '@/lib/fbq';
import { gaSale } from '@/lib/ga';
import { getEnrollment } from '@/lib/getEnrollment';
import { sendEnrollmentEmail } from '@/lib/sendEnrollmentEmail';
import type { Enrollment, RawEnrollment } from '@/models/enrollment';

interface Props {
  data?: {
    rawEnrollment: RawEnrollment;
  };
  errorCode?: number;
}

const precision = 2;
const brevoStudentListId = 22;

const formatDate = (d: Date): string => {
  const fieldLength = 2;
  return `${d.getFullYear()}-${d.getMonth().toString().padStart(fieldLength, '0')}-${d.getDate().toString().padStart(fieldLength, '0')}`;
};

const Page: NextPage<Props> = ({ data, errorCode }) => {
  const enrollment: Enrollment | undefined = useMemo(() => {
    if (typeof data?.rawEnrollment === 'undefined') {
      return;
    }
    return {
      ...data.rawEnrollment,
      paymentDate: new Date(data.rawEnrollment.paymentDate),
      transactionTime: data.rawEnrollment.transactionTime === null ? null : new Date(data.rawEnrollment.transactionTime),
    };
  }, [ data?.rawEnrollment ]);

  // perform this the client side so the right IP address is used
  useEffect(() => {
    if (typeof data === 'undefined' || typeof enrollment === 'undefined') {
      return;
    }
    if (!enrollment.emailed) {
      gaSale(enrollment);
      fbqSale(enrollment);
    }
    brevoIdentifyStudent(enrollment.emailAddress, enrollment.countryCode, enrollment.provinceCode ?? undefined, enrollment.firstName, enrollment.lastName);
  }, [ data, enrollment ]);

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (typeof data === 'undefined' || typeof enrollment === 'undefined') {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <>
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
              <p className="text-dark"><Image src={AlexMyersSignatureImage} className="text-center" alt="Alex Myers" /><br /><strong>Director</strong> QC Career School</p>
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
                        <td>{formatDate(enrollment.paymentDate)}</td>
                      </tr>
                    </>
                  )}
                  {enrollment.courses.map((c, i) => (
                    <Fragment key={i}>
                      <tr>
                        <td colSpan={2}><h6 className="mt-4 mb-0">{c.name}</h6></td>
                      </tr>
                      <tr>
                        <td><strong>Cost</strong></td>
                        <td>{enrollment.currencySymbol}{c.baseCost.toFixed(precision)}</td>
                      </tr>
                      {c.planDiscount > 0 && (
                        <tr>
                          <td><strong>Discount</strong></td>
                          <td>&minus;{enrollment.currencySymbol}{c.planDiscount.toFixed(precision)}</td>
                        </tr>
                      )}
                      {c.discount > 0 && (
                        <tr>
                          <td><strong>Special Discount</strong></td>
                          <td>&minus;{enrollment.currencySymbol}{c.discount.toFixed(precision)}</td>
                        </tr>
                      )}
                      <tr>
                        <td><strong>Today&apos;s Deposit</strong></td>
                        <td>{enrollment.currencySymbol}{c.deposit.toFixed(precision)}</td>
                      </tr>
                      <tr>
                        <td><strong>Monthly Installment</strong></td>
                        <td>{enrollment.currencySymbol}{c.installment.toFixed(precision)}</td>
                      </tr>
                    </Fragment>
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
                    <td>{enrollment.deposit.toFixed(precision)} {enrollment.currencyCode}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{enrollment.transactionTime?.toISOString()}</td>
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res, query }) => {
  try {
    if (typeof query.enrollmentId !== 'string' || typeof query.code !== 'string') {
      throw new HttpStatus.BadRequest();
    }

    const enrollmentId = parseInt(query.enrollmentId, 10);
    const code = query.code;

    if (isNaN(enrollmentId)) {
      throw new HttpStatus.BadRequest();
    }

    const rawEnrollment = await getEnrollment(enrollmentId, code);

    if (!rawEnrollment.complete || !rawEnrollment.success) {
      throw new HttpStatus.NotFound();
    }

    if (!rawEnrollment.emailed) {
      const getHeader = (headerName: string): string | null => {
        const rawHeader = req.headers[headerName];
        if (Array.isArray(rawHeader)) {
          return rawHeader[0] ?? null;
        }
        return rawHeader ?? null;
      };

      const ipAddress = getHeader('x-real-ip');
      // const userAgent = getHeader('user-agent');

      // const getCookie = (cookieName: string): string | undefined => {
      //   const rawCookie = req.cookies[cookieName];
      //   if (Array.isArray(rawCookie)) {
      //     return req.headers['x-real-ip']?.[0];
      //   }
      //   return rawCookie;
      // };

      // const fbc = getCookie('_fbc');
      // const fbp = getCookie('_fbp');

      // send email
      try {
        await sendEnrollmentEmail(enrollmentId, code);
      } catch (err) {
        console.error(err);
      }

      // create Brevo contact
      try {
        await createBrevoContact(rawEnrollment.emailAddress, rawEnrollment.firstName, rawEnrollment.lastName, rawEnrollment.countryCode, rawEnrollment.provinceCode, { STATUS_WELLNESS_STUDENT: true }, [ brevoStudentListId ]);
      } catch (err) {
        console.error(err);
      }

      // TrustPulse
      // try {
      //   await trustPulseEnrollment(rawEnrollment, ipAddress);
      // } catch (err) {
      //   console.error(err);
      // }

      // iDevAffiliate
      try {
        await addToIDevAffiliate(rawEnrollment, ipAddress);
      } catch (err) {
        console.error(err);
      }

      // Facebook
      // if (rawEnrollment.transactionTime === null || new Date().getTime() - new Date(rawEnrollment.transactionTime).getTime() < 7 * 24 * 60 * 60 * 1000) {
      //   try {
      //     const source = (process.env.HOST ?? 'https://www.qcpetstudies.com') + resolvedUrl;
      //     await fbPostPurchase(rawEnrollment, source, ipAddress, userAgent, fbc, fbp);
      //   } catch (err) {
      //     console.error(err);
      //   }
      // }

    }

    return { props: { data: { rawEnrollment } } };
  } catch (err) {
    const internalServerError = 500;
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.statusCode : internalServerError;
    res.statusCode = errorCode;
    return { props: { errorCode } };
  }
};

export default Page;
