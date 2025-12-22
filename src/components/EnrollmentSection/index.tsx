import type { FC, PropsWithChildren } from 'react';

import EnrollmentBackgroundImage from './enrollment-background.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';

interface Props {
  heading?: string;
  buttonText?: string;
  courseCodes?: string[];
}

export const EnrollmentSection: FC<PropsWithChildren<Props>> = props => {
  const baseUrl = 'https://enroll.qcwellnessstudies.com';
  const queryString = props.courseCodes?.map(c => `c=${encodeURIComponent(c)}`).join('&');
  const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

  return (
    <section id="enrollSection" className="text-light text-center">
      <BackgroundImage src={EnrollmentBackgroundImage} />
      <div className="container">
        <h2>{props.heading ?? 'Enroll Today'}</h2>
        <p className="lead mb-4">{props.children}</p>
        <a href={url} className="btn btn-secondary btn-lg">{props.buttonText ?? 'ENROLL ONLINE'}</a>
      </div>
    </section>
  );
};
