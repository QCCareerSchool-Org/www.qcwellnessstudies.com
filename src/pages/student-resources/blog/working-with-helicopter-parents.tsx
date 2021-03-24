import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="Sleep Consultants and Helicopter Parents"
      description="Parents are often under a lot of stress when they’re facing challenges with an infant’s sleep. This stress can easily lead to disagreement and discontent when working with a sleep consultant. Part of a sleep consultant’s job is to help parents through stressful situations."
      canonical="/student-resources/blog/working-with-helicopter-parents"
      image={{
        src: require('../../../images/sr-smiling-young-mother-father-standing.jpg'),
        alt: 'Mother and fatehr watching newborn baby sleep',
      }}
    />

    <section id="heroSection">
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
            <p className="lead">Sleep consultants will work alongside a variety of parents and parenting styles with the goal of improving a baby’s sleep. When creating an infant sleep plan, everyone involved will do their best to design a plan that keeps the baby happy and healthy. However, parents are often under a lot of stress when they’re facing challenges with an infant’s sleep. This stress can easily lead to disagreement and discontent when working with a sleep consultant. Part of a sleep consultant’s job is to help parents through stressful situations.</p>
            <p className="lead">In particular, “helicopter parents” have developed a reputation for being difficult to work with. It’s important to remember that parents simply have their child’s best interests at heart.</p>
            <p className="lead">In this article, we’ll go over a few strategies to help parents and sleep consultants work together to create successful sleep plans.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-smiling-young-mother-father-standing.jpg')} alt="Smiling mother and father with their baby" /></p>

            <h4>What is a helicopter parent?</h4>
            <p>Helicopter parents, also known as cosseting parents, are parents and caregivers who pay extremely close attention to their children. A helicopter parent will carefully watch over every area of her child’s life, including the sleep routine. This attention to detail is often perceived in a negative light, but let’s remember that helicopter parents are just looking out for their children!</p>
            <p>A helicopter parent will probably monitor a child’s progress and quantity of sleep. This type of parent may even know the exact lengths of her baby’s naps! Detailed information about an infant’s sleep schedule will actually be extremely helpful for sleep training.</p>
            <p>When it comes to sleep training habits, a helicopter parent might:</p>
            <ul>
              <li>Stay in the same room while her baby sleeps</li>
              <li>Immediately pick the baby up when he or she starts crying</li>
              <li>Have strong opinions about creating the sleep plan</li>
              <li>Become defensive of the current sleep routine</li>
              <li>Criticize a new approach and provide a lot of feedback to a sleep consultant</li>
            </ul>
            <p><img className="img-fluid" src={require('../../../images/sr-woman-man-look-newborn-boy-sleeps.jpg')} alt="Mother and fatehr watching newborn baby sleep" /></p>

            <h4>Communication is Key</h4>
            <p>Clear communication is <strong><em>essential</em></strong> for helicopter parents. They’ll want to be involved in every step of developing a sleep plan for their infant, so they’ll need the sleep consultant to share as much detailed information as possible. A helicopter parent will want to understand and approve every element of the plan. In some cases, these parents may have trouble asking for help when it comes to their child’s care and wellbeing. Open communication between the parent and sleep consultant will help put the parents at ease.</p>
            <p>Parents, caregivers and sleep consultants should work together to develop the best possible plans and routines for the infant. Sleep consultants can reassure helicopter parents by highlighting their specific role in the plan and emphasizing how each element benefits the child.</p>
            <p>Let’s take a look at the best ways for a sleep consultant to involve parents in the sleep training process:</p>
            <ul>
              <li><strong>Be clear</strong> in all communications about the role of the parents and caregivers for each stage of a sleep plan. Make sure parents know what to expect from sleep consultation services and how these services can help their children.</li>
              <li><strong>Always put the family’s wishes first.</strong> Parents hire sleep consultants to gain professional advice and guidance but ultimately, it’s up to the parents to decide what’s best for their infant.</li>
              <li><strong>Reassure</strong> parents that caregivers and sleep consultants have the same job—to improve the child’s health and wellness.</li>
              <li><strong>Be understanding</strong> of a parent’s concerns and worries. Listen and provide thoughtful feedback to parents.</li>
              <li><strong>Stay calm</strong> during any moments of tension, conflict or other difficulties. Be empathetic towards parents to keep your interactions positive and productive.</li>
            </ul>
            <p><img className="img-fluid" src={require('../../../images/sr-happy-young-family-couple.jpg')} alt="Sleep consultant helping a family couple" /></p>

            <h4>Sleep Plans with Parents or Caregivers</h4>
            <p>Sleep consultants work hard to develop sleep plans for infants—but remember, these plans are for the parents too! A sleep plan provides steps for parents and caregivers to follow. These steps help parents to interact with their babies in ways that ultimately lead to positive, healthy sleep habits for the whole family.</p>
            <p>In your sleep plans for helicopter parents you should:</p>
            <ul>
              <li>Clarify the parent’s role in implementing the schedule</li>
              <li>Identify when a parent should intervene during the sleep plan, such as when the baby is extremely upset, for diaper changes and nighttime feeds</li>
              <li>Explain how the parent should interact with the infant for the sleep plan to succeed</li>
            </ul>
            <p>Remember that your sleep plan and the parent’s role will both depend on the sleep training method your client follows. For instance, the “cry it out” method requires parents to have a minimal involvement while baby learns to self-soothe. Helicopter parents may not enjoy method. They might feel as though they’re taking a backseat in caring for their child!</p>
            <p><img className="img-fluid" src={require('../../../images/sr-close-mother-cuddling-sleeping-baby-daughter.jpg')} alt="Mother cuddling sleeping baby daughter" /></p>
            <p>Sleep consultants should always make sure parents feel heard and understood. Clear communication and advice will improve the parent-baby relationship and ensure successful infant sleep training.</p>
            <p className="lead">Want to learn more about infant sleep coaching? Enroll in QC Wellness Studies’ <Link href="/courses-and-tuition/sleep-consultant"><a>Infant Sleep Consultant Course</a></Link> and launch your new career!</p>
          </div>
        </div>
      </div>
    </section>

    <section id="enrollToday" className="text-light">
      <div className="container text-center">
        <h2>Get Started Today!</h2>
        <p className="lead">Why wait? Start your professional training program today and get on the path toward a new and exciting career</p>
        <p><a className="btn btn-secondary btn-lg text-uppercase" href="https://enroll.qcwellnessstudies.com/">Enroll Online</a></p>
      </div>
    </section>

    <section className="bg-light text-dark">
      <div className="container text-center">
        <Link href="/student-resources"><a className="btn btn-primary btn-lg text-uppercase">Back to Student Resources</a></Link>
      </div>
    </section>

    <style jsx>{`
      #enrollToday{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}     
      #heroSection{background-image:url(${require('../../../images/sr-hero-working-with-helicopter-parents.jpg')});background-size:cover;background-position:center}
      .course-icon{width:80px}

      /* sm */
      @media (min-width: 576px) {
        .course-icon {
          width: 85px;
        }
      }

      /* md */
      @media (min-width: 768px) {
      }

      /* lg */
      @media (min-width: 992px) {
        .course-icon {
          width: 90px;
        }
      }

      /* xl */
      @media (min-width: 1200px) {
      }
    `}</style>

  </DefaultLayout>
);

export default Page;
