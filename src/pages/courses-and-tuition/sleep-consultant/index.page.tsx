import type { GetServerSideProps } from 'next';

import { Content } from './content';
import { Subnav } from '@/components/Subnav';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { fetchPrice } from '@/lib/fetchPrice';
import { getHeader } from '@/lib/getHeader';
import type { NextPageWithLayout } from '@/pages/_app.page';

interface Props {
  price: Price | null;
}

const courses: CourseCode[] = [ 'sl' ];

const Page: NextPageWithLayout<Props> = ({ price }) => (
  <Content price={price} enrollPath="https://enroll.qcwellnessstudies.com" />
);

const subNavItems = [
  { name: 'Tuition', url: '#paymentPlans' },
  { name: 'Course Outline', url: '#outline' },
  { name: 'Tutors', url: '#tutors' },
];

Page.getLayout = page => (
  <DefaultLayout secondaryNav={<Subnav heading="Infant Sleep Consultant Course" items={subNavItems} />}>
    {page}
  </DefaultLayout>
);

export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
  const countryCodeHeader = getHeader(ctx, 'x-vercel-ip-country');
  const provinceCodeHeader = getHeader(ctx, 'x-vercel-ip-country-region');
  const [ countryCode, provinceCode ] = countryCodeHeader
    ? [ countryCodeHeader, provinceCodeHeader ]
    : [ 'US', 'MD' ];

  const priceResult = await fetchPrice(courses, countryCode, provinceCode);
  return { props: { price: priceResult.success ? priceResult.value : null } };
};

export default Page;
