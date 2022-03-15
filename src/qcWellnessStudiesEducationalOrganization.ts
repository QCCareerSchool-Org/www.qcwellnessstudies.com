import type { EducationalOrganization, WithContext } from 'schema-dts';

import { getTelephoneNumber } from './lib/functions';

export const qcWellnessStudiesEducationalOrganization: WithContext<EducationalOrganization> = {
  '@context': 'https://schema.org',
  '@id': 'https://www.qcwellnessstudies.com/#school',
  '@type': 'EducationalOrganization',
  'name': 'QC Career School',
  'url': 'https://www.qcwellnessstudies.com/',
  'logo': 'https://www.qcwellnessstudies.com/logo.svg',
  'email': 'info@qcwellnessstudies.com',
  'foundingDate': '2019-03-11T00:09:00-05:00',
  'sameAs': 'https://www.facebook.com/QCWellnessStudies',
  'parentOrganization': { '@id': 'https://www.qccareerschool.com/#school' },
  'address': [
    {
      '@type': 'PostalAddress',
      'streetAddress': '38 McArthur Avenue',
      'addressLocality': 'Ottawa',
      'addressRegion': 'ON',
      'postalCode': 'K1L 6R2',
      'addressCountry': 'CA',
      'telephone': getTelephoneNumber('CA'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '07:30-04:00', 'closes': '21:00-04:00', 'dayOfWeek': [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '07:30-04:00', 'closes': '18:00-04:00', 'dayOfWeek': 'Friday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '12:30-04:00', 'closes': '18:30-04:00', 'dayOfWeek': 'Saturday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '17:00-04:00', 'closes': '22:00-04:00', 'dayOfWeek': 'Sunday' },
      ],
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': '1 Research Court, Suite 450',
      'addressLocality': 'Rockville',
      'addressRegion': 'MD',
      'postalCode': '20850',
      'addressCountry': 'US',
      'telephone': getTelephoneNumber('US'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '07:30-04:00', 'closes': '21:00-04:00', 'dayOfWeek': [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '07:30-04:00', 'closes': '18:00-04:00', 'dayOfWeek': 'Friday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '12:30-04:00', 'closes': '18:30-04:00', 'dayOfWeek': 'Saturday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '17:00-04:00', 'closes': '22:00-04:00', 'dayOfWeek': 'Sunday' },
      ],
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': '186 St. Albans Road, Suite 18',
      'addressLocality': 'Watford',
      'addressRegion': 'Hertfordshire',
      'postalCode': 'WD24 4AS',
      'addressCountry': 'GB',
      'telephone': getTelephoneNumber('GB'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '12:30+00:00', 'closes': '24:00+00:00', 'dayOfWeek': [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '12:30+00:00', 'closes': '23:00+00:00', 'dayOfWeek': 'Friday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '17:30+00:00', 'closes': '23:30+00:00', 'dayOfWeek': 'Saturday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '00:00+00:00', 'closes': '00:00+00:00', 'dayOfWeek': 'Sunday' },
      ],
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': '78 Williams Street, Suite 23',
      'addressLocality': 'Bethesda',
      'addressRegion': 'NSW',
      'postalCode': '2011',
      'addressCountry': 'AU',
      'telephone': getTelephoneNumber('AU'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '09:00+11:00', 'closes': '14:00+11:00', 'dayOfWeek': 'Monday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '06:00+11:00', 'closes': '14:00+11:00', 'dayOfWeek': [ 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '00:00', 'closes': '00:00', 'dayOfWeek': [ 'Saturday', 'Sunday' ] },
      ],
    },
  ],
};
