import * as HttpStatus from '@qccareerschool/http-status';

import { type Enrollment, isRawEnrollment } from '../models/enrollment';

export const getEnrollment = async (enrollmentId: number, code: string): Promise<Enrollment> => {
  const url = `https://api.qccareerschool.com/enrollments/${enrollmentId}?code=${code}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  const responseBody: unknown = await response.json();
  if (!isRawEnrollment(responseBody)) {
    throw Error('Invalid reponse');
  }
  return {
    ...responseBody,
    transactionTime: responseBody.transactionTime === null ? null : new Date(responseBody.transactionTime),
    paymentDate: new Date(responseBody.paymentDate),
  };
};
