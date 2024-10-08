import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Back } from '../../Back';
import HappyYoungCoupleImage from './happy-young-family-couple.jpg';
import HeroBackgroundImage from './hero-bg.jpg';
import MotherHoldingBabyImage from './mother-holding-sleeping-baby-on-shoulder.jpg';
import SmilingYoungMotherFatherImage from './smiling-young-mother-father-standing.jpg';
import WomanManNewbornSleepsImage from './woman-man-look-newborn-boy-sleeps.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { SEO } from '@/components/SEO';

const Page: NextPage = () => (
  <>
    <SEO
      title="Sleep Consultants and Helicopter Parents"
      description="Parents are often under a lot of stress when they're facing challenges with an infant's sleep. This stress can easily lead to disagreement and discontent when working with a sleep consultant. Part of a sleep consultant's job is to help parents through stressful situations."
      canonical="/student-resources/blog/working-with-helicopter-parents"
      image={{
        src: HeroBackgroundImage.src,
        alt: 'a mother and baby using a laptop',
      }}
    />

    <section>
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container text-light">
        <div className="row">
          <div className="col-12 mb-4 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1 className="text-center">Sleep Consultants and Helicopter Parents</h1>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">Sleep consultants will work alongside a variety of parents and parenting styles with the goal of improving a baby&apos;s sleep. When creating an infant sleep plan, everyone involved will do their best to design a plan that keeps the baby happy and healthy. However, parents are often under a lot of stress when they&apos;re facing challenges with an infant&apos;s sleep. This stress can easily lead to disagreement and discontent when working with a sleep consultant. Part of a sleep consultant&apos;s job is to help parents through stressful situations.</p>
            <p className="lead">In particular, &ldquo;helicopter parents&rdquo; have developed a reputation for being difficult to work with. It&apos;s important to remember that parents simply have their child&apos;s best interests at heart.</p>
            <p className="lead">In this article, we&apos;ll go over a few strategies to help parents and sleep consultants work together to create successful sleep plans.</p>
            <p><Image className="img-fluid" src={SmilingYoungMotherFatherImage} alt="Smiling mother and father with their baby" /></p>

            <h4>What Is a helicopter parent?</h4>
            <p>Helicopter parents, also known as cosseting parents, are parents and caregivers who pay extremely close attention to their children. A helicopter parent will carefully watch over every area of her child&apos;s life, including the sleep routine. This attention to detail is often perceived in a negative light, but let&apos;s remember that helicopter parents are just looking out for their children!</p>
            <p>A helicopter parent will probably monitor a child&apos;s progress and quantity of sleep. This type of parent may even know the exact lengths of her baby&apos;s naps! Detailed information about an infant&apos;s sleep schedule will actually be extremely helpful for sleep training.</p>
            <p>When it comes to sleep training habits, a helicopter parent might:</p>
            <ul>
              <li>Stay in the same room while her baby sleeps</li>
              <li>Immediately pick the baby up when he or she starts crying</li>
              <li>Have strong opinions about creating the sleep plan</li>
              <li>Become defensive of the current sleep routine</li>
              <li>Criticize a new approach and provide a lot of feedback to a sleep consultant</li>
            </ul>
            <p><Image className="img-fluid" src={WomanManNewbornSleepsImage} alt="Mother and fatehr watching newborn baby sleep" /></p>

            <h4>Communication Is Key</h4>
            <p>Clear communication is <strong><em>essential</em></strong> for helicopter parents. They&apos;ll want to be involved in every step of developing a sleep plan for their infant, so they&apos;ll need the sleep consultant to share as much detailed information as possible. A helicopter parent will want to understand and approve every element of the plan. In some cases, these parents may have trouble asking for help when it comes to their child&apos;s care and wellbeing. Open communication between the parent and sleep consultant will help put the parents at ease.</p>
            <p>Parents, caregivers and sleep consultants should work together to develop the best possible plans and routines for the infant. Sleep consultants can reassure helicopter parents by highlighting their specific role in the plan and emphasizing how each element benefits the child.</p>
            <p>Let&apos;s take a look at the best ways for a sleep consultant to involve parents in the sleep training process:</p>
            <ul>
              <li><strong>Be clear</strong> in all communications about the role of the parents and caregivers for each stage of a sleep plan. Make sure parents know what to expect from sleep consultation services and how these services can help their children.</li>
              <li><strong>Always put the family&apos;s wishes first.</strong> Parents hire sleep consultants to gain professional advice and guidance but ultimately, it&apos;s up to the parents to decide what&apos;s best for their infant.</li>
              <li><strong>Reassure</strong> parents that caregivers and sleep consultants have the same job&mdash;to improve the child&apos;s health and wellness.</li>
              <li><strong>Be understanding</strong> of a parent&apos;s concerns and worries. Listen and provide thoughtful feedback to parents.</li>
              <li><strong>Stay calm</strong> during any moments of tension, conflict or other difficulties. Be empathetic towards parents to keep your interactions positive and productive.</li>
            </ul>
            <p><Image className="img-fluid" src={HappyYoungCoupleImage} alt="Sleep consultant helping a family couple" /></p>

            <h4>Sleep Plans with Parents or Caregivers</h4>
            <p>Sleep consultants work hard to develop sleep plans for infants&mdash;but remember, these plans are for the parents too! A sleep plan provides steps for parents and caregivers to follow. These steps help parents to interact with their babies in ways that ultimately lead to positive, healthy sleep habits for the whole family.</p>
            <p>In your sleep plans for helicopter parents you should:</p>
            <ul>
              <li>Clarify the parent&apos;s role in implementing the schedule</li>
              <li>Identify when a parent should intervene during the sleep plan, such as when the baby is extremely upset, for diaper changes and nighttime feeds</li>
              <li>Explain how the parent should interact with the infant for the sleep plan to succeed</li>
            </ul>
            <p>Remember that your sleep plan and the parent&apos;s role will both depend on the sleep training method your client follows. For instance, the &ldquo;cry it out&rdquo; method requires parents to have a minimal involvement while baby learns to self-soothe. Helicopter parents may not enjoy method. They might feel as though they&apos;re taking a backseat in caring for their child!</p>
            <p><Image className="img-fluid" src={MotherHoldingBabyImage} alt="Mother cuddling sleeping baby daughter" /></p>
            <p>Sleep consultants should always make sure parents feel heard and understood. Clear communication and advice will improve the parent-baby relationship and ensure successful infant sleep training.</p>
            <p className="lead">Want to learn more about infant sleep coaching? Enroll in QC Wellness Studies&apos; <Link href="/courses-and-tuition/sleep-consultant">Infant Sleep Consultant Course</Link> and launch your new career!</p>
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
