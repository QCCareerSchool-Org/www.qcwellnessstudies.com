import type { NextPage } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import ThumbnailImage from './lady-plaid-dress-macbook-lap.png';
import { BackgroundImage } from '@/components/BackgroundImage';
import { Contact } from '@/components/Contact';
import { SEO } from '@/components/SEO';
import FormBackgroundImage from '@/images/bg-white-green-light.jpg';
import ScheduleIcon from '@/images/icon-schedule.svg';

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

    {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
    {false && <FormSection />}
  </>
);

const FormSection: FC = () => (
  <>
    <a className="anchor" id="form"></a>
    <section id="formSection">
      <BackgroundImage src={FormBackgroundImage} />
      <div className="container">
        <div className="row">
          <div className="text-center text-dark col-lg-10 offset-lg-1">
            <Image src={ScheduleIcon as StaticImageData} className="text-center" alt="calendar with clock" />
            <h2>Schedule a Call with a Student Advisor</h2>
            <p className="lead">Would you like to speak to a student advisor about your options in online wellness training? Fill out this form and we&apos;ll call you at your convenience!</p>
            <p><strong>Please note:</strong> QC&apos;s offices are not open 24/7. We&apos;ll do our best to call you at the specific times you request, but if our offices will be closed at the time you request, we&apos;ll contact you via email to reschedule!</p>
            <p><a className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer" href="https://qccareerschool.activehosted.com/f/52">&nbsp;Schedule a Call with a Student Advisor</a></p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Page;
