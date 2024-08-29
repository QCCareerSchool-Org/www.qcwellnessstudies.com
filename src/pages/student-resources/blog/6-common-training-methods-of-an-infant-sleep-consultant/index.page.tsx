import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Back } from '../../Back';
import BabyInBlueBassinetImage from './baby-sleeping-blue-bassinet-canopy.jpg';
import CryingNewbornMomImage from './crying-newborn-baby-mom.jpg';
import BabyCryingImage from './eight-month-old-baby-crying-sad.jpg';
import FatherHoldingNewbornBabyImage from './father-holding-newborn-baby.jpg';
import HeroBackgroundImage from './hero-bg.jpg';
import MomCarryingNewbornImage from './mom-carrying-her-newborn-baby-at-home.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { SEO } from '@/components/SEO';

const Page: NextPage = () => (
  <>
    <SEO
      title="The 6 Common Training Methods of an Infant Sleep Consultant"
      description="No matter what the level of caregiver involvement or baby fussiness, these six tried and tested training methods can help improve an infant's sleep."
      canonical="/student-resources/blog/6-common-training-methods-of-an-infant-sleep-consultant"
      image={{
        src: HeroBackgroundImage.src,
        alt: 'Loving mom carying of her newborn baby at home',
      }}
    />

    <section>
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container text-light">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1 className="text-center">What Is Infant Sleep Training?</h1>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">Contrary to the common the phrase, &ldquo;sleep like a baby,&rdquo; teaching a baby how to sleep can be surprisingly challenging! To exhausted parents and babies everywhere, infant sleep consultants are superheroes. <Link href="/courses-and-tuition/sleep-consultant">Infant sleep consultants</Link> help parents and infants learn good sleep habits through sleep training.</p>
            <p className="lead">&ldquo;Sleep training&rdquo; refers to the process of teaching a baby how to sleep more completely throughout the night. Some caregivers are looking for their child to sleep entirely through the night, while others are concerned with ensuring they enjoy more restful sleep. Infant sleep consultants can assess the situation and suggest strategies to assist caregivers in achieving their sleep goals for their infant.</p>
            <p className="lead">However, when it comes to sleep, you won&apos;t find a one-size fits all approach. Each infant and caregiver is unique and has different needs, which can make determining how exactly to help a baby sleep can feel overwhelming. Thankfully, trained infant sleep consultants understand that you can use several methods of sleep training to help different families.</p>
            <p className="lead">No matter what the level of caregiver involvement or baby fussiness, these six tried and tested training methods can help improve an infant&apos;s sleep.</p>
            <p><Image className="img-fluid" src={FatherHoldingNewbornBabyImage} alt="Father holding newborn baby son" /></p>

            <h4>How Does Infant Sleep Consulting Work?</h4>
            <p>Remember, infants are new to the whole world&mdash;they don&apos;t understand what&apos;s expected of them! Many infants need a little help learning how to sleep. Caregivers can hire an infant sleep consultant to teach babies, from newborn to toddler, how to sleep. Sometimes, a caregiver will hire an infant sleep consultant before a baby is born to ensure good sleep habits from the beginning. Other caregivers might only hire a sleep consultant if they are having difficulties with sleep training.</p>
            <p>Infant sleep consultants can work virtually, when you set up video call appointments with families in order to assess their needs and make suggestions. Some caregivers prefer sleep consultants to work in-home, seeing the nighttime routine for themselves and actively assisting in implementing the sleep training methods. Both of these situations can work wonderfully!</p>

            <h4>What Are the Benefits of Infant Sleep Consulting?</h4>
            <p>First of all, of course, the main benefit of infant sleep consulting is improving an infant&apos;s sleep! This brings forward many other benefits&mdash;a well-rested baby usually means well-rested parents, and that allows the family&apos;s general mental and physical health to improve.</p>
            <p>Caregivers also have the opportunity to learn more about their infant through sleep consultations. By figuring out what the baby does and doesn&apos;t respond to, they can get a glimpse of their personality and strengthen the bond between one another.</p>
            <p><Image className="img-fluid" src={BabyInBlueBassinetImage} alt="Adorable baby sleeping in blue bassinet" /></p>

            <h4>6 Common Sleep Training Methods</h4>

            <h5>1. The &ldquo;Cry It Out&rdquo; Method</h5>
            <p>The &ldquo;cry it out&rdquo; method, also known as the extinction method, is actually one of the best-known methods of sleep training. People often mistakenly believe that this fully self-soothing method is the <em>only</em> type of sleep training. This strategy allows babies to learn how to self-soothe and fall asleep independently without involvement from the parent or caregiver. Many caregivers find this method off-putting or harsh and discount sleep training as a result. It&apos;s important for families to understand that sleep consultants can work with a variety of sleep training methods to suit each infant and caregiver&apos;s needs. The &ldquo;cry it out&rdquo; method may be too harsh for some families but be effective for others.</p>

            <h5>2. The Check and Console Method</h5>
            <p>Also known as &ldquo;graduated extinction,&rdquo; the check and console method requires caregivers to periodically check in on infants to offer support. You may have also heard this method described as the &ldquo;Ferber method.&rdquo; The check and console method is credited to Dr. Richard Ferber, one of the first physicians to write about sleep training.</p>
            <p>To follow this method, caregivers should put infants down awake but ready for sleep. They&apos;ll then encourage infants to learn self-soothing strategies. Caregivers will allow the baby to cry but offer soothing words and support if the crying continues, without actually touching the baby.</p>
            <p><Image className="img-fluid" src={BabyCryingImage} alt="Eight month old baby crying" /></p>

            <h5>3. The Chair Method</h5>
            <p>The chair method can be seen as a compromise for parents who don&apos;t want to pick up the infant constantly during the night but who are also wary of full self-soothing methods. Using this strategy, a caregiver would sit in a chair beside the crib and allow the baby to self-soothe and fall asleep on their own. The caregiver can provide verbal reassurance and comforting touches to the infant. The chair is moved further and further away from the crib each night over the course of two weeks.</p>
            <p>This method is more flexible than extinction methods. On particularly fussy nights, the chair can be moved slightly closer until the infant calms down. The chair method requires a lot of patience from the caregivers but can lead to great results.</p>

            <h5>4. The Fading Method</h5>
            <p>The fading method involves encouraging the infant to develop self-soothing techniques very gradually, with a lot of caregiver soothing. This method is based on the theory that the easiest and most effective way to change habits is by doing so gradually. This method doesn&apos;t offer a quick fix&mdash;the fading method aims for gradual, gentle results than the much faster extinction methods.</p>
            <p>This method is also used in other stages of development. It can be used with older children, for example, to change a bedtime. Let&apos;s say a parent wants their child to sleep at 8pm instead of 9pm. Using the fading method, caregivers would gradually change the bedtime five minutes each night until the child was used to going to bed at 8pm.</p>

            <h5>5. The Pick Up Put Down Method</h5>
            <p>The pick up put down method utilizes the fading method in a slightly different way. This method involves caregivers picking up the infant in order to sooth almost all fussing. Once the baby has calmed down, the caregiver returns them to the crib. Eventually, fading is introduced to this routine to gradually reduce how often and for how long the infant is being held each night.</p>
            <p>Note that this method doesn&apos;t suggest that caregivers rock the baby to sleep&mdash;almost all sleep training methods recommend putting a baby down tired but still awake. If the infant resumes crying after being placed in the crib, the caregiver should provide verbal encouragement before picking the baby up again.</p>
            <p><Image className="img-fluid" src={CryingNewbornMomImage} alt="Sweet crying newborn baby" /></p>

            <h5>6. &ldquo;No Cry&rdquo; Methods</h5>
            <p>These methods are popular with caregivers who are uncomfortable seeing their infants crying or frustrated. Instead of encouraging infants to learn self-soothing techniques, no cry methods suggest that caregivers should create relaxing, supportive environments to help the infant to learning when and how to sleep. Caregivers are encouraged to massage and sing to the infant, and rock, hold, or otherwise console the baby until they&apos;re fully asleep. If the baby wakes up at any point in the night, caregivers using a no cry method should pick them up and soothe them.</p>
            <p><Image className="img-fluid" src={MomCarryingNewbornImage} alt="Loving mom carying of her newborn baby at home" /></p>
            <p>While parents see infant sleep consultants as super-human, they&apos;re actually the perfect combination of caregiver and detective. They&apos;ll help parents figure out which method of sleep training might work best with each individual infant, and always have a plan B.</p>
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
