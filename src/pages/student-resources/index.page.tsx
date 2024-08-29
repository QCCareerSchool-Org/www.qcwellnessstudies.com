import type { NextPage } from 'next';
import Link from 'next/link';

import CanOnlineCoursePrepareImage from './blog/can-an-online-course-prepare-you-for-a-sleep-consultant-career/thumb.jpg';
import HowToBecomeVirtualConsultantImage from './blog/how-to-become-a-virtual-sleep-consultant/thumb.jpg';
import StagesOfDevelopmentImage from './blog/stages-of-development/thumb.jpg';
import SevenTipsTravellingImage from './tipsheets/7-tips-for-travelling-with-a-baby/thumb.jpg';
import SevenTipsVirtualImage from './tipsheets/7-tips-for-virtual-sleep-consulting/thumb.jpg';
import EightTipsRoutine from './tipsheets/8-tips-for-improving-bedtime-routine/thumb.jpg';
import { ArticleCard } from '@/components/ArticleCard';
import { BackgroundImage } from '@/components/BackgroundImage';
import { CardColumn } from '@/components/CardColumn';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { SEO } from '@/components/SEO';
import HeroBackgroundImage from '@/images/home-hero-bg.jpg';

const Page: NextPage = () => (
  <>
    <SEO
      title="QC Student Resources"
      description="As a student of QC Wellness Studies, you have countless resources to help you succeed in your Sleep Consulting course. Read the featured articles and tipsheets in this page for up-to-date advice for sleep consultants."
      canonical="/student-resources"
      image={{
        src: HowToBecomeVirtualConsultantImage.src,
        alt: 'online family gathering',
      }}
    />

    <section>
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container text-center text-light">
        <h1>Sleep Resources</h1>
        <p className="lead">As a student of QC Wellness Studies, you have countless resources to help you succeed in your Sleep Consulting course. Read the featured articles and tipsheets below for up-to-date advice for sleep consultants.</p>
      </div>
    </section>

    <section>
      <div className="container">
        <h2 className="text-dark text-center">Featured Articles</h2>
        <div className="row mb-2">
          <CardColumn>
            <ArticleCard
              image={CanOnlineCoursePrepareImage}
              alt="Can an Online Course Prepare You for a Sleep Consultant Career?"
              title="Can an Online Course Prepare You for a Sleep Consultant Career?"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/blog/can-an-online-course-prepare-you-for-a-sleep-consultant-career"
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              image={HowToBecomeVirtualConsultantImage}
              alt="How to Become a Virtual Sleep Consultant"
              title="How to Become a Virtual Sleep Consultant"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/blog/how-to-become-a-virtual-sleep-consultant"
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              image={StagesOfDevelopmentImage}
              alt="Stages of Development: How Sleep Consultants Can Help"
              title="Stages of Development: How Sleep Consultants Can Help"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/blog/stages-of-development"
            />
          </CardColumn>
        </div>

        <div className="row">
          <div className="col-12 offset-md-2 offset-lg-0">
            <h2 className="text-dark">More Articles</h2>
            <p className="lead"><Link href="/student-resources/blog/working-with-helicopter-parents"><strong>Working with Helicopter Parents</strong></Link></p>
            <p className="lead"><Link href="/student-resources/blog/6-common-training-methods-of-an-infant-sleep-consultant"><strong>The 6 Common Training Methods of Sleep Consultants</strong></Link></p>
            <p className="lead"><Link href="/student-resources/blog/baby-sign-language-for-beginners"><strong>Baby Sign Language for Beginners</strong></Link></p>
            <p className="lead"><Link href="/student-resources/blog/insurance"><strong>Insurance Types Recommended for Sleep Consultants</strong></Link></p>
            <p className="lead"><Link href="/student-resources/blog/working-during-covid"><strong>Learning &amp; Working During COVID-19</strong></Link></p>
            <p className="lead"><Link href="/student-resources/blog/student-features/sarah-pashniak"><strong>Meet a QC Graduate: Sarah Pashniak</strong></Link></p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <h2 className="text-dark text-center">Tipsheets</h2>
      <div className="container">
        <div className="row">
          <CardColumn>
            <ArticleCard
              image={SevenTipsTravellingImage}
              alt="7 Tips for Travelling with a Baby"
              title="7 Tips for Travelling with a Baby"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/tipsheets/7-tips-for-travelling-with-a-baby"
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              image={SevenTipsVirtualImage}
              alt="7 Tips for Virtual Sleep Consulting"
              title="7 Tips for Virtual Sleep Consulting"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/tipsheets/7-tips-for-virtual-sleep-consulting"
            />
          </CardColumn>
          <CardColumn>
            <ArticleCard
              image={EightTipsRoutine}
              alt="8 Tips for Improving the Bedtime Routine"
              title="8 Tips for Improving the Bedtime Routine"
              body=""
              buttonText="READ ONLINE"
              link="/student-resources/tipsheets/8-tips-for-improving-bedtime-routine"
            />
          </CardColumn>
        </div>
        <div className="row">
          <div className="col-12 offset-md-2 offset-lg-0">
            <h2 className="text-dark">More Tipsheets</h2>
            <p className="lead"><Link href="/student-resources/tipsheets/10-tips-for-creating-the-ideal-sleep-environment"><strong>10 Tips for Creating the Ideal Sleep Environment</strong></Link></p>
            <p className="lead"><Link href="/student-resources/tipsheets/seasonally-dressing-a-baby-for-sleep-time"><strong>Seasonally Dressing a Baby for Sleep Time</strong></Link></p>
            <p className="lead"><Link href="/student-resources/tipsheets/sleep-planning-for-school-aged-children"><strong>Sleep Planning for School-Aged Children</strong></Link></p>
          </div>
        </div>
      </div>
    </section>

    <EnrollmentSection heading="Get Started Today!">
      Why wait? Start your professional training program today and get on the path toward a new and exciting career
    </EnrollmentSection>
  </>
);

export default Page;
