import type { NextPage } from 'next';

import ThumbnailImage from './lady-plaid-dress-macbook-lap.png';
import { Contact } from '@/components/Contact';
import { SEO } from '@/components/SEO';

const Page: NextPage = () => (
  <>
    <SEO
      title="Contact Us"
      description="You can contact QC at any time by phone, email or live chat. Or, schedule a call with a student advisor and we'll call you!"
      canonical="/contact"
      image={{
        src: ThumbnailImage.src,
        alt: 'lady in a black and white checkered dress leaning back on the floor with her hands resting on a laptop',
      }}
      schemaType="ContactPage"
    />
    <section id="heroSection">
      <Contact />
    </section>
  </>
);

export default Page;
