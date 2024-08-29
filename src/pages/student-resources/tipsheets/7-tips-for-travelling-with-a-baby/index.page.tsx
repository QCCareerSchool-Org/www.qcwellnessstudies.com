import type { NextPage } from 'next';
import Image from 'next/image';

import { SEO } from '../../../../components/SEO';
import { Back } from '../../Back';
import BabyBlueBassinetImage from './baby-blue-bassinet.jpg';
import HeroBackgroundImage from './hero-bg.jpg';
import MotherGivingBottleImage from './mother-giving-bottle.jpg';
import NewbornSleepsToyHareImage from './newborn-baby-sleeps-toy-hare.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';

const Page: NextPage = () => (
  <>
    <SEO
      title="7 Tips for Travelling with a Baby"
      description="Following an infant's sleep plan while travelling can be a challenge. A new sleep environment, a change in routine or different eating habits can all impact an infant's sleep. Consider the tips in this tipsheet for travelling with an infant, without disrupting the sleep schedule"
      canonical="/student-resources/tipsheets/7-tips-for-travelling-with-a-baby"
      image={{
        src: HeroBackgroundImage.src,
        alt: 'Mother travelling with her child',
      }}
    />

    <section>
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container text-light text-center">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1>7 Tips for Travelling with a Baby</h1>
            <p><a href="/tip-sheets/7-tips-travelling-baby.pdf" className="btn btn-primary" rel="noopener noreferrer" target="_blank"><strong>Download PDF</strong></a></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">Following an infant&apos;s sleep plan while travelling can be a challenge. A new sleep environment, a change in routine or different eating habits can all impact an infant&apos;s sleep. Consider these seven tips for travelling with an infant, without disrupting the sleep schedule.</p>

            <h4>1. Plan Accomodation in Advance.</h4>
            <p>Planning is key to a successful trip. When travelling with children, accommodations should include a designated space for babies and young children to sleep. Check that accommodations will include a separate living space for children and will be equipped with a crib or child&apos;s bed.</p>

            <h4>2. Bring comforts from home.</h4>
            <p>Bring comforting items from home to help soothe and comfort infants in unfamiliar settings. These home comforts could include:</p>
            <ul>
              <li>Favorite sleepwear</li>
              <li>A favorite stuffed toy, such as a teddy bear</li>
              <li>A nightlight</li>
            </ul>
            <p><Image className="img-fluid" src={NewbornSleepsToyHareImage} alt="newborn baby sleeps with toy" /></p>

            <h4>3. Stay in your time zone.</h4>
            <p>If possible, travel within your home time zone. Altering a sleep schedule to suit a new time zone is confusing for anyone but infants and children will find adjusting to a new schedule especially difficult. If you do travel outside your time zone, try to change the sleep plan gradually to suit to new schedule. You might even start adjusting the baby&apos;s schedule before the trip to give infants time to adjust.</p>

            <h4>4. Maintain regular nap times.</h4>
            <p>Follow through with nap times as much as possible while travelling to keep the baby in a familiar routine. Naps will help prevent the infant from becoming grumpy and unhappy during the trip.</p>

            <h4>5. Follow the usual bedtime routine as closely as possible</h4>
            <p>Routine helps an infant settle and know that bedtime is coming soon. Follow through with the usual bedtime activities, such as having a bath, reading a story, etc., to establish routine while away from home.</p>
            <p><Image className="img-fluid" src={MotherGivingBottleImage} alt="mother giving baby bottle" /></p>

            <h4>6. Relax the routine for events and activities.</h4>
            <p>Be flexible and ease the schedule slightly to suit travel plans and events, such as weddings, parties, day trips and family celebrations. Allow the infant to fall asleep outside of the regular nap times, such as in a car or plane, to keep the baby in a good mood later on. Trying to follow a rigid schedule will cause stress for the parents and infant!</p>

            <h4>7. Reinstate the sleep plan at home.</h4>
            <p>After the trip, get back to the regular sleep plan and routine as quickly as possible. Put down the infant at the normal nap times and follow the usual bedtime routine. However, if the infant is adjusting between time zones, change the sleep schedule gradually. The baby will need time to adapt.</p>
            <p><Image className="img-fluid" src={BabyBlueBassinetImage} alt="baby sleeping in a crib" /></p>
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
