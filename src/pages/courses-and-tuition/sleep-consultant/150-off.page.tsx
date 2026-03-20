import type { GetServerSideProps } from 'next';
import type { ReactNode } from 'react';

import { Content } from './content';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import { LandingPageLayout } from '@/layouts/LandingPageLayout';
import { fetchPrice } from '@/lib/fetchPrice';
import { getHeader } from '@/lib/getHeader';
import type { NextPageWithLayout } from '@/pages/_app.page';

interface Props {
  price: Price | null;
}

const courses: CourseCode[] = [ 'sl' ];

const Page: NextPageWithLayout<Props> = ({ price }) => (
  <>
    <DeadlineFunnelScript />
    <Content price={price} enrollPath="https://enroll.qcwellnessstudies.com/150-off" />
  </>
);

Page.getLayout = function Layout(page): ReactNode {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
  const countryCodeHeader = getHeader(ctx, 'x-vercel-ip-country');
  const provinceCodeHeader = getHeader(ctx, 'x-vercel-ip-country-region');
  const [ countryCode, provinceCode ] = countryCodeHeader
    ? [ countryCodeHeader, provinceCodeHeader ]
    : [ 'US', 'MD' ];

  const priceResult = await fetchPrice(courses, countryCode, provinceCode);
  return { props: { price: priceResult.success ? priceResult.value : null } };
};
