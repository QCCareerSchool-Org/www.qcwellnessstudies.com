import type { NextPage } from 'next';
import Image from 'next/image';

import { Back } from '../../Back';
import BabySleepingSheetsImage from './baby-sleeping-in-comfortable-sheets.jpg';
import NewbornBrotherImage from './family-son-newborn-brother-nursery.jpg';
import HeroBackgroundImage from './hero-bg.jpg';
import MotherFeedingBabyBottleImage from './mother-holding-feeding-baby-milk-bottle.jpg';
import MotherKidTabletImage from './mother-kid-play-tablet-computer-nursery.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { SEO } from '@/components/SEO';

const Page: NextPage = () => (
  <>
    <SEO
      title="8 Tips for Improving the Bedtime Routine"
      description="The bedtime routine should prepare an infant or child for sleep. The following tips can help you develop an effective routine to encourage a good sleep and a positive experience for everyone."
      canonical="/student-resources/tipsheets/8-tips-for-improving-bedtime-routine"
      image={{
        src: HeroBackgroundImage.src,
        alt: 'a mother feeding her baby a milk bottle',
      }}
    />

    <section id="heroSection">
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container text-light text-center">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1 className="text-center">8 Tips for Improving the Bedtime Routine</h1>
            <p><a href="/tip-sheets/8-tips-improving-bedtime-routine.pdf" className="btn btn-primary" rel="noopener noreferrer" target="_blank"><strong>Download PDF</strong></a></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">The bedtime routine should prepare an infant or child for sleep. The following tips can help you develop an effective routine to encourage a good sleep and a positive experience for everyone.</p>
            <p><Image className="img-fluid" src={BabySleepingSheetsImage} alt="baby sleeping in comfortable sheets" /></p>

            <h4>1. Keep a consistent routine.</h4>
            <p>Follow the same routine every night so that the infant feels safe and secure, and ready for bed. Parents and children alike will feel more confident and comfortable with the bedtime routine if it stays consistent. </p>

            <h4>2. Avoid naps late in the day.</h4>
            <p>Daytime naps are important for babies and infants. However, letting a child nap too close to bedtime could disrupt the sleep schedule. Encourage naps earlier in the day so that the baby or infant is tired again by bedtime.</p>

            <h4>3. Reduce screen time.</h4>
            <p>Many believe that blue light from electronic screens hinders sleep. Interacting with these devices can also cause excitement, making it difficult for a child to fall asleep. Reducing screen time, especially during the bedtime routine, can improve a child&apos;s overall quality of sleep.</p>
            <p><Image className="img-fluid" src={MotherKidTabletImage} alt="mother and kid play on tablet computer" /></p>

            <h4>4. Make bath time part of the routine.</h4>
            <p>A warm bath helps to relax the baby or infant before bed. If bath time is consistently part of a baby&apos;s bedtime routine, the baby will start to associate the feelings and scents of the bath with comfort and sleep.</p>

            <h4>5. Provide pre-bedtime snacks.</h4>
            <p>No one should go to bed on an empty stomach&mdash;especially not infants. A hungry child will have a hard time falling asleep or will wake up during the night in need of a snack. Provide a healthy snack such as breastmilk, formula or another nutritious option to help an infant sleep through the night.</p>
            <p><Image className="img-fluid" src={MotherFeedingBabyBottleImage} alt="mother holding baby milk bottle" /></p>

            <h4>6. Read a story together.</h4>
            <p>Listening to a parent or caregiver&apos;s voice is a soothing and restful activity that prepares an infant for sleep. Reading to young children can also boost their imaginations and encourage them to learn to read from an early age.</p>

            <h4>7. Prioritize bonding time.</h4>
            <p>A parent or caregiver spending quality time with an infant before bed will help the child feel safe and secure. Relaxing activities such as reading together or cuddling will go a long way in getting an infant ready for sleep. When the parent or caregiver feels relaxed, this also helps baby calm down.</p>

            <h4>8. Involve siblings in the bedtime routine.</h4>
            <p>Including an older sibling in an infant&apos;s bedtime routine encourages bonding between children. You can also use this time to help the older child relax and settle down before bed.</p>
            <p><Image className="img-fluid" src={NewbornBrotherImage} alt="brother meets newborn baby" /></p>
          </div>
        </div>
      </div>
    </section>

    <EnrollmentSection heading="Get Started Today!">
      Why wait? Start your professional training program today and get on the path toward a new and exciting career
    </EnrollmentSection>

    <Back />
  </>
);

export default Page;
