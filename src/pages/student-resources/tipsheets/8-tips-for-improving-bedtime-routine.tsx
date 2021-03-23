import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: NextPage = () => (

  <DefaultLayout>

    <SEO
      title="8 Tips for Improving the Bedtime Routine"
      description="The bedtime routine should prepare an infant or child for sleep. The following tips can help you develop an effective routine to encourage a good sleep and a positive experience for everyone."
      canonical="/student-resources/tipsheets/8-tips-for-improving-bedtime-routine"
      image={{
        src: require('../../../images/sr-mother-holding-feeding-baby-milk-bottle.jpg'),
        alt: 'mother holding baby milk bottle',
      }}
    />

    <section id="heroSection">
      <div className="container col-12 mb-4 col-sm-10 col-md-8 col-lg-6 mb-lg-0">
        <div className="row d-flex align-items-center">
          <div className="col-12">
            <div className="text-light text-center">
              <h1 className="text-center">8 Tips for Improving the Bedtime Routine</h1>
              <p><Link href="/tip-sheets/8-tips-improving-bedtime-routine.pdf"><a className="btn btn-primary" rel="noopener noreferrer" target="_blank"><strong>Download PDF</strong></a></Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container col-12 mb-4 col-sm-10 col-md-8 col-lg-6 mb-lg-0">
        <div className="row mb-4">
          <div className="col-12">
            <p className="lead">The bedtime routine should prepare an infant or child for sleep. The following tips can help you develop an effective routine to encourage a good sleep and a positive experience for everyone.</p>
            <div>
              <p><img className="img-fluid" src={require('../../../images/sr-baby-sleeping-in-comfortable-sheets.jpg')} alt="baby sleeping in comfortable sheets" /></p>
            </div>
            <h4>1. Keep a consistent routine.</h4>
            <p>Follow the same routine every night so that the infant feels safe and secure, and ready for bed. Parents and children alike will feel more confident and comfortable with the bedtime routine if it stays consistent. </p>
            <h4>2. Avoid naps late in the day.</h4>
            <p>Daytime naps are important for babies and infants. However, letting a child nap too close to bedtime could disrupt the sleep schedule. Encourage naps earlier in the day so that the baby or infant is tired again by bedtime.</p>
            <h4>3. Reduce screen time.</h4>
            <p>Many believe that blue light from electronic screens hinders sleep. Interacting with these devices can also cause excitement, making it difficult for a child to fall asleep. Reducing screen time, especially during the bedtime routine, can improve a child’s overall quality of sleep.</p>
            <div>
              <p><img className="img-fluid" src={require('../../../images/sr-mother-kid-play-tablet-computer-nursery.jpg')} alt="mother and kid play on tablet computer" /></p>
            </div>
            <h4>4. Make bath time part of the routine.</h4>
            <p>A warm bath helps to relax the baby or infant before bed. If bath time is consistently part of a baby’s bedtime routine, the baby will start to associate the feelings and scents of the bath with comfort and sleep.</p>
            <h4>5. Provide pre-bedtime snacks.</h4>
            <p>No one should go to bed on an empty stomach—especially not infants. A hungry child will have a hard time falling asleep or will wake up during the night in need of a snack. Provide a healthy snack such as breastmilk, formula or another nutritious option to help an infant sleep through the night.</p>
            <div>
              <p><img className="img-fluid" src={require('../../../images/sr-mother-holding-feeding-baby-milk-bottle.jpg')} alt="mother holding baby milk bottle" /></p>
            </div>
            <h4>6. Read a story together.</h4>
            <p>Listening to a parent or caregiver’s voice is a soothing and restful activity that prepares an infant for sleep. Reading to young children can also boost their imaginations and encourage them to learn to read from an early age.</p>
            <h4>7. Prioritize bonding time.</h4>
            <p>A parent or caregiver spending quality time with an infant before bed will help the child feel safe and secure. Relaxing activities such as reading together or cuddling will go a long way in getting an infant ready for sleep. When the parent or caregiver feels relaxed, this also helps baby calm down.</p>
            <h4>8. Involve siblings in the bedtime routine. </h4>
            <p>Including an older sibling in an infant’s bedtime routine encourages bonding between children. You can also use this time to help the older child relax and settle down before bed.</p>
            <div>
              <p><img className="img-fluid" src={require('../../../images/sr-family-son-newborn-brother-nursery.jpg')} alt="brother meets newborn baby" /></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="enrollToday" className="text-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h2>Get Started Today!</h2>
            <p className="lead">Why wait? Start your professional training program today and get on the path toward a new and exciting career</p>
            <p><a className="btn btn-secondary btn-lg text-uppercase" href="https://enroll.qcwellnessstudies.com/">Enroll Online</a></p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light text-dark">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <Link href="/student-resources"><a className="btn btn-primary btn-lg text-uppercase">Back to Student Resources</a></Link>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      #enrollToday{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}     
      #heroSection{background-image:url(${require('../../../images/sr-hero-8-tips-improving-bedtime-routine.jpg')});background-size:cover;background-position:center}
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
