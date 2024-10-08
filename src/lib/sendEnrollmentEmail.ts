import * as HttpStatus from '@qccareerschool/http-status';

export const sendEnrollmentEmail = async (enrollmentId: number, code: string): Promise<void> => {
  const url = `https://api.qccareerschool.com/enrollments/${enrollmentId}/email`;
  const response = await fetch(url, {
    method: 'post',
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'X-API-Version': '2',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  await response.json();
};
