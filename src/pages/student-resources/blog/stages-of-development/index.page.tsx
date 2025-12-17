import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import ToddlerLyingOnBedImage from './close-top-view-lying-bed-toddler.jpg';
import HeroBackgroundImage from './hero-bg.jpg';
import NewbornBabyMotherImage from './home-portrait-newborn-baby-mother.jpg';
import ChildSleepingWhiteBedImage from './one-year-old-child-sleeps-white-bed.jpg';
import SmilingGirlLyingOnBedImage from './smiling-baby-girl-lying-on-bed.jpg';
import { Back } from '../../Back';
import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { SEO } from '@/components/SEO';

const Page: NextPage = () => (
  <>
    <SEO
      title="Stages of Development: How Sleep Consultants Can Help"
      description="Infant sleep consultants work with babies at different stages of development. Sleep training a newborn baby can be very different to sleep training a toddler and every infant develops at a different rate."
      canonical="/student-resources/blog/stages-of-development"
      image={{
        src: HeroBackgroundImage.src,
        alt: 'Child sleeping in white bed',
      }}
    />

    <section>
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container text-light">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1 className="text-center">Stages of Development: How Sleep Consultants Can Help</h1>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">Infant sleep consultants work with babies at different stages of development. Sleep training a newborn baby can be <strong>very</strong> different to sleep training a toddler and every infant develops at a different rate. One baby may adapt quickly to a bedtime routine, while another baby of the same age may have trouble creating associations between the bedtime routine and actually sleeping.</p>
            <p className="lead">A good sleep plan will address the unique challenges of each infant but the plan should also be adaptable. A sleep plan should change as a child grows and his or her needs change.</p>
            <p><Image className="img-fluid" src={SmilingGirlLyingOnBedImage} alt="Smiling baby girl lying on bed" /></p>

            <h4>Working with Newborns</h4>
            <p>Newborn babies, from 0 to 3 months, sleep a lot! Newborns often sleep for short periods at a time, waking mainly for milk, bath times and diaper changes. A sleep plan for a newborn should account for naps, feeding times and more naps to ensure a happy, healthy baby.</p>
            <p>At this stage of an infant&apos;s life, parents and caregivers are often completely exhausted as they try to keep up with this new, fast-paced routine. This means that sleep plans for newborns also need to give parents a break. Parents should aim to get at least several hours of sleep during the night, which is sometimes difficult to achieve!</p>
            <p>With guidance from a trained sleep consultant, parents can use a few strategies to help their newborns get sufficient sleep:</p>
            <ul>
              <li>Introduce a consistent bedtime routine to help settle the baby in the evenings. Establishing routine early in a baby&apos;s development helps parents and infants develop good sleep habits right from the beginning.</li>
              <li>Create a nap timetable to map out the ideal times for a newborn to sleep during the day.</li>
              <li>Arrange nap times around feeding times so the baby won&apos;t wake up hungry.</li>
              <li>Remember that the sleep plan can be slightly flexible to accommodate the rest of the household. Parents and other members of the household will need to look after themselves as well as the baby!</li>
            </ul>
            <p><Image className="img-fluid" src={NewbornBabyMotherImage} alt="Mother with newborn baby" /></p>

            <h4>Sleep Consulting for Babies</h4>
            <p>When babies reach 3 to 9 months, sleep plans should be updated to suit this new stage of development. At this age, babies are developing their motor skills and their senses. Sleep gives a baby&apos;s brain time to rest and process new skills. Establish a regular sleep pattern to help a baby can develop at the best pace for the age group.</p>
            <p>At 9 to 18 months of age, older babies are ready to fall into routines and develop habits in their daily lives. An older baby is even able to start standing and walking with assistance! But to reach these milestones, babies need adequate sleep. Effective sleep plans for babies help them develop skills and brain function to process the world around them and step into the future of toddlerhood!</p>
            <p>Sleep consultants can help parents guide infants through these developmental phases and get adequate sleep by:</p>
            <ul>
              <li>Creating a step-by-step bedtime routine. For instance, a warm bath followed by milk and story time every night can prepare a baby for bedtime. The baby will begin to associate sleep with a warm bath and a snack, and won&apos;t be surprised when her parents put her down to sleep!</li>
              <li>Create a nap timetable to map out the ideal times for a newborn to sleep during the day.</li>
              <li>Suggesting a specific time for the bedtime routine every night. Remember, consistency is key. </li>
              <li>Starting to reduce naptimes and limit sleep in the afternoons. While babies still need naps, they don&apos;t need as much sleep as newborns.</li>
            </ul>
            <p><Image className="img-fluid" src={ChildSleepingWhiteBedImage} alt="Year old child sleeps in white bed" /></p>

            <h4>Working with Toddlers</h4>
            <p>Toddlers begin to push boundaries and rebel against schedules between the ages of 18 months and 4 years old. This can be a frustrating&mdash;and long&mdash;time for parents who are trying help their children develop healthy sleep habits.</p>
            <p>Sleep consultants can advise parents about different strategies for lulling toddlers to sleep, such as:</p>
            <ul>
              <li>Improving the sleep environment to encourage sleep with calm lighting, favorite stuffed toys and pleasant scents</li>
              <li>Creating bedtime routines to calm toddlers down for sleep. These might include bath time, brushing teeth, reading stories with a parent and a pre-bedtime snack. As always, consistency is key!</li>
              <li>Getting active during the day. Fresh air and exercise will tire the toddler out and help him settle in the evenings.</li>
              <li>Avoiding naps late in the day. Ideally, parents should keep the toddler awake in the mid-to-late afternoon to ensure the infant is able to fall asleep at bedtime.</li>
              <li>Staying calm. Relaxed, calming parents and caregivers will improve the chances of the toddler falling asleep.</li>
            </ul>
            <p><Image className="img-fluid" src={ToddlerLyingOnBedImage} alt="Toddler lying in bed" /></p>
            <p>Newborns, babies and toddlers all need enough sleep to ensure they continue to develop and grow. Sleep plans should suit each individual infant&apos;s sleep needs, surroundings and feeding schedule. Remember to update sleep plans and bedtime routines as infants reach new stages of development!</p>
            <p className="lead">Want to learn more about infant sleep consulting? Enroll in QC Career School&apos;s <Link href="/courses-and-tuition/sleep-consultant">Infant Sleep Consultant Course</Link> today and start your new career!</p>
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
