import type { GetServerSideProps } from 'next';
import type { ReactNode } from 'react';

import { Content } from './content';
import { SleepConsultantPromo } from './sleepConsultantPromoSection/SleepConsultantPromo';
import { DeadlineFunnelScript } from '@/components/DeadlineFunnelScript';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import { LandingPageLayout } from '@/layouts/LandingPageLayout';
import { fetchPrice } from '@/lib/fetchPrice';
import { getHeader } from '@/lib/getHeader';
import type { NextPageWithLayout } from '@/pages/_app.page';

interface Props {
  price: Price | null;
  countryCode: string;
}

const courses: CourseCode[] = [ 'sl' ];

const Page: NextPageWithLayout<Props> = ({ price, countryCode }) => (
  <>
    <DeadlineFunnelScript />
    <Content
      price={price}
      enrollPath="https://enroll.qcwellnessstudies.com/300-off"
      heroPromotion={(
        <SleepConsultantPromo
          countryCode={countryCode}
          discountAmount={300}
          enrollHref="https://enroll.qcwellnessstudies.com/300-off?c=sl"
        />
      )}
    />
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
  return { props: { countryCode, price: priceResult.success ? priceResult.value : null } };
};
