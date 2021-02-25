import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: React.FC = () => (
  <DefaultLayout>

    <SEO
      title="Baby Sign Language for Beginners: When (and How) to Start"
      description="Baby sign language can prove to be a useful tool to recommend to your clients!"
      canonical="/courses-and-tuition/sleep-consultant/baby-sign-language-for-beginners"
      image={{
        src: require('../../../images/sl-baby-sign-language-cover.jpg'),
        alt: 'baby sign language',
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
            <h2 className="h3">Sleep Training Methodology</h2>
            <p>As a professional sleep consultant, you’ll use your expertise in sleep training methodology to help your clients establish healthy sleep habits for their babies.</p>
            <p> Earn your certification from the safety of home with  <a href="/courses-and-tuition/sleep-consultant">QC’s online Sleep Consultant Course!</a></p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <p><img className="img-fluid" src={require('../../../images/sl-baby-sign-language-what-is.jpg')} alt="happy baby with raised arms" /></p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 order-lg-2">
            <h2 className="h3">What is a Sleep Training Method?</h2>
            <p>A sleep training method is a system used to encourage children to develop natural, healthy sleeping habits. Experts in the field have developed these methodologies over time, based on research developments and personal best practices.
            Sleep training methods can be placed on a spectrum based on the amount of parental soothing involved in each strategy. You’ll find self-soothing methods on one end of the spectrum and caregiver-soothing methods on the other. The majority of sleeping training methods are a mixture of self- and caregiver-soothing, falling somewhere in the middle of the spectrum. You’ll personalize your sleep training recommendations to each client and their unique needs. There is no single “right answer” when it comes to sleep training.
            Importantly, sleep training methods aren’t likely to resolve sleep issues all on they’re own. You’ll also need to consider a variety of other factors, such as establishing routines and improving sleep spaces, to successfully implement sleep training.</p>           
          </div>
          <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6">
            <p><img className="img-fluid" src={require('../../../images/sl-baby-sign-language-hands.jpg')} alt="baby smiling and covering mouth with hands" /></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <h2 className="h3">The 6 Most Commonly Used Sleep Training Methods</h2>
        <p>Here are the methods most regularly recommended by certified sleep consultants:</p>
      </div>
    </section>

    <section>
      <div className="container">
        <h2 className="h3">Which Method is Right for You?</h2>
        <p>There is NO scientific proof that one sleep training method works better than another. It all depends on each individual infant’s needs and your client’s goals. Become well-versed in multiple sleep training methods. This way, you can provide clients with a wider variety of options, based on their personal situation, circumstances, and needs.</p>
        <p>Keep in mind that you can also adapt any of these techniques in order to better serve your client and their infant. Ultimately, the more experience you gain in the field, the better your understanding will be of the different sleep training methods at your disposal.</p>
        <p>Want to learn more about the type of training you’ll get from QC’s Sleep Consultant Course? Check out our feature on QC Wellness Studies graduate, <a href="/student-features">Sarah Pashniak!</a> </p>
      </div>
    </section>

    {/* <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 order-lg-2">
            <h2 className="h3">How to Get Started</h2>
            <p>If your clients are unsure where to begin, here are a few tips you can suggest:</p>
            <ul>
              <li>Choose signs that are meaningful and relevant to the child</li>
              <li>Signs should express common, everyday needs (i.e. being hungry, being sleepy, etc.)</li>
              <li>To be most effective, signing should be consistent</li>
              <li>Speak AND sign at the same time so the baby can establish a connection between the sign and the spoken word</li>
              <li>Make signs as close to your face as possible</li>
              <li>If the baby creates their own sign, use it</li>
              <li>Reward the baby whenever they successfully use the right sign</li>
            </ul>
            <p>
              <Link href="https://www.youtube.com/watch?v=MchIPOm2G0Q"><a rel="noopener noreferrer" target="_blank">Watch this informative video</a></Link> on the Top 15 signs your clients should teach their infants!</p>
          </div>
          <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6">
            <p><img className="img-fluid" src={require('../../../images/sl-baby-sign-language-thirsty.jpg')} alt="thirsty baby moving towards baby bottle" /></p>
          </div>
        </div>
      </div>
    </section> */}

    {/* <section>
      <div className="container">

        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <h2 className="h3">How This Affects You as the Sleep Consultant</h2>
            <p>Your job is to help parents create a safe, healthy routine for their infant’s sleep schedule. While you personally won’t be expected to teach your clients baby sign language, you can ultimately make their lives easier by bringing this option to their attention and providing helpful tips for getting started. After all, a sleepy baby might not be able to say they’re tired with actual words – but this way, they’ll have a way of saying it with signs. Thus, your clients can gain an even better understanding of their baby’s needs and more efficiently implement a plan of action.</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <p><img className="img-fluid" src={require('../../../images/sl-baby-sign-language-arms.jpg')} alt="smiling baby crawling in bed" /></p>
          </div>
        </div>
      </div>
    </section> */}

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
      #heroSection{background-image:url(${require('../../../images/sl-baby-sign-language-cover.jpg')});background-size:cover;background-position:center} 
    `}</style>

  </DefaultLayout>
);

export default Page;
