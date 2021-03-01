import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: React.FC = () => { 

  return (
    <DefaultLayout>
      <SEO
        title="The 6 Common Training Methods of an Infant Sleep Consultant"
        description="A sleep training method is a system used to encourage children to develop natural, healthy sleeping habits. Experts in the field have developed these methodologies over time, based on research developments and personal best practices. "
        canonical="/courses-and-tuition/sleep-consultant/the-6-common-training-methods-of-an-infant-sleep-consultant"
        image={{
          src: require('../../../images/sl-mother-working-in-laptop.jpg'),
          alt: 'mother working in a laptop',
        }}
      />

      <section id="heroSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">The 6 Common Training Methods of an Infant Sleep Consultant </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <h2 className="h3">Sleep Training Methods</h2>
              <p>As a professional sleep consultant, you’ll use your expertise in sleep training methodology to help your clients establish healthy sleep habits for their babies.</p>
              <p> Earn your certification from the safety of home with  <a href="/courses-and-tuition/sleep-consultant">QC’s online Sleep Consultant Course!</a></p>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <p><img className="img-fluid" src={require('../../../images/sl-close-portrait-newborn-baby.jpg')} alt="happy baby with raised arms" /></p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div>
              <h2 className="h3">What is a Sleep Training Method?</h2>
              <p>A sleep training method is a system used to encourage children to develop natural, healthy sleeping habits. Experts in the field have developed these methodologies over time, based on research developments and personal best practices.</p>
              <p>Sleep training methods can be placed on a spectrum based on the amount of parental soothing involved in each strategy. You’ll find self-soothing methods on one end of the spectrum and caregiver-soothing methods on the other. The majority of sleeping training methods are a mixture of self- and caregiver-soothing, falling somewhere in the middle of the spectrum. You’ll personalize your sleep training recommendations to each client and their unique needs. There is no single “right answer” when it comes to sleep training.</p>
              <p>Importantly, sleep training methods aren’t likely to resolve sleep issues all on they’re own. You’ll also need to consider a variety of other factors, such as establishing routines and improving sleep spaces, to successfully implement sleep training.</p>
            </div>     
          </div>
        </div>
      </section>

      <section>
        <div className="container">       
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <h2 className="h3">The 6 Most Commonly Used Sleep Training Methods</h2>
            <p>Here are the methods most regularly recommended by certified sleep consultants:</p>
              <h2 className="h3">1) Cry It Out Method (a.k.a. The Extinction Method)</h2>
              <ul>
                <li>A fully self-soothing form of sleep training</li>
                <li>Teaches the infant how to fall asleep without assistance</li>
                <li>Parents/caregivers have little to no involvement outside of supervising to ensure the baby’s safety</li>
                <li>Goal: Eliminate the need for parental soothing
                  <ul>
                    <li>Parents may miss the signs of a medical emergency if the mistake the reason for their child’s crying </li>
                  </ul></li>
              </ul>
              <h2 className="h3">2) Check and Console Method (a.k.a. The Graduated Extinction Method)</h2>
              <ul>
                <li>Another form of self-soothing but with more parental involvement than the extinction method</li>
                <li>Caregivers check in periodically to offer soothing words of encouragement/support but do not pickup or touch the infant </li>
                <li>Goal: Teach the baby self-soothing methods with some support from caregivers</li>
                <li>Downsides: Concern that strict self-soothing methods can potentially be damaging to a young baby’s future emotional health</li>
              </ul>        
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <p><img className="img-fluid" src={require('../../../images/sl-mother-working-in-laptop.jpg')} alt="happy baby with raised arms" /></p>
            </div>
          </div>
        </div>
      </section>     

      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 order-lg-2">
            <h2 className="h3">3) The Chair Method</h2>
              <ul>
                <li>A modified version of self-soothing sleep training methods</li>
                <li>Caregivers place the baby in their crib while partially awake and then sit in a chair next to the crib until the baby falls asleep, periodically reaching in to calm the baby</li>
                <li>Over time, the chair is to be moved further away from the crib until finally out of the room</li>
                <li>Goal: Teach infants how to recognize bedtime habits and fall asleep without direct assistance</li>
                <li>Downsides: This method takes time and requires patience—parents looking for immediate results may become frustrated. </li>
              </ul>
              
              <h2 className="h3">4) The Fading Method</h2>
              <ul>
                <li>An even mix of self-soothing and caregiver-soothing methods</li>
                <li>A very slow and gradual sleep training method that requires a lot of caregiver soothing, especially in early stages</li>
                <li>Most often used to set a specific bedtime, or change an existing one, by gradually fading the bedtime in small, regular increments until the desired bedtime is met</li>
                <li>Goal: Modify behaviors and sleep routines, and implement new habits</li>
                <li>Downsides: This method takes time, discipline, and consistency, and will be far less effective if the infant does not already have established sleep habits</li>
              </ul>
            </div>
            <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6">
              <p><img className="img-fluid" src={require('../../../images/sl-baby-lying-on-bed-falling-asleep.jpg')} alt="baby smiling and covering mouth with hands" /></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <h2 className="h3">5) The Pick Up Put Down Method</h2>
              <ul>
                <li>Another mixture of self-soothing and caregiver-soothing techniques that requires the caregiver to respond to almost ALL fussing</li>
                <li>Parents will pick up and soothe the fussing infant, then immediately put them back down once fussing has stopped.</li>
                <li>Gradually, caregivers will reduce the number (and length) of handling times and switch to the fading the method.</li>
                <li>Goal: Gradually teach the infant self-soothing with a lot of caregiver support.</li>
                <li>Downsides: This sleep training method requires a lengthy implementation time, with limited improvements often seen in the early stages of the process
                  <ul>
                    <li>This method can be disruptive to infants who are easily stimulated </li>
                  </ul></li>
              </ul>
              <h2 className="h3">6) The No Cry Methods </h2>
              <ul>
                <li>Many unnamed sleep training techniques follow the no cry method. They encourage caregivers to relax and soothe the infant and avoid tears altogether.</li>
                <li>Developing strict yet relaxing pre-bedtime routines is key for this method’s success</li>
                <li>Goal: Provide sufficient comfort to avoid tears and stress before sleep to limit the baby and caregiver’s discomfort</li>
                <li>Downsides: Some people believe that no cry methods limit a baby’s independence and prevent them from learning to self-soothe</li>
              </ul>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <p><img className="img-fluid" src={require('../../../images/sl-newborn-baby-sleeping.jpg')} alt="happy baby with raised arms" /></p>
            </div>
          </div>
        </div>
      </section>   

      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div>
              <h2 className="h3">Which Method is Right for You?</h2>
              <p>There is NO scientific proof that one sleep training method works better than another. It all depends on each individual infant’s needs and your client’s goals. Become well-versed in multiple sleep training methods. This way, you can provide clients with a wider variety of options, based on their personal situation, circumstances, and needs.</p>
              <p>Keep in mind that you can also adapt any of these techniques in order to better serve your client and their infant. Ultimately, the more experience you gain in the field, the better your understanding will be of the different sleep training methods at your disposal.</p>
              <p>Want to learn more about the type of training you’ll get from QC’s Sleep Consultant Course? Check out our feature on QC Wellness Studies graduate, <a href="/student-features">Sarah Pashniak!</a></p>
            </div>       
          </div>
        </div>
      </section>

      <section id="enrollSection" className="text-light text-center">
        <div className="container">
          <h2>Start Your Journey Today</h2>
          <p className="h5 sans-serif">Make 2021 the year you follow your dreams and launch a successful career!</p>
          <p className="h5 sans-serif">Enroll in QC’s Sleep Consultant Course today and graduate in as little as 3-6 months!</p>
          <a href="https://enroll.qcwellnessstudies.com/" className="btn btn-secondary btn-lg mt-4">ENROLL NOW</a>
        </div>
      </section>

      <style jsx>{`       
      #enrollSection{background-image: url(${require('../../../images/bg-enrollment.jpg')});background-size: cover;}
      #heroSection{background-image:url(${require('../../../images/sl-mother-working-in-laptop.jpg')});background-size:cover;background-position:center} 
    `}</style>

    </DefaultLayout>
  );
};

export default Page;
