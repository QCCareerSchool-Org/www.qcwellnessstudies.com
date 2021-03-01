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
                <h1 className="h2">Baby Sign Language for Beginners: When (and How) to Start</h1>
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
            <h2 className="h3">A Useful Tool</h2>
            <p>As a certified Sleep Consultant, you will not be required to know baby sign language. However, this can prove to be a useful tool to recommend to your clients!</p>
            <p> Not a certified Sleep Consultant yet? Enroll today in <a href="/courses-and-tuition/sleep-consultant">QC Wellness Studies’ online Sleep Consultant Course!</a></p>
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
            <h2 className="h3">What is Baby Sign Language?</h2>
            <p>Until they are old enough to communicate with words, baby sign language provides young children with a way to express their emotions and needs. By teaching a baby how to sign, they can successfully tell others when they’re:</p>
            <ul>
              <li>Tired</li>
              <li>Hungry</li>
              <li>Thirsty</li>
              <li>In pain</li>
              <li>Frustrated</li>
              <li>Grateful</li>
              <li>And much more!</li>
            </ul>
            <p>Plus, research indicates that baby sign language can be beneficial for verbal development. Learn more about this <Link href="https://www.nbcnews.com/id/wbna8060750"><a rel="noopener noreferrer" target="_blank">here!</a></Link></p>
          </div>
          <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6">
            <p><img className="img-fluid" src={require('../../../images/sl-baby-sign-language-hands.jpg')} alt="baby smiling and covering mouth with hands" /></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <h2 className="h3">When to Teach Baby Sign Language</h2>
        <p>Your client might wonder when it’s appropriate (or effective) to start teaching their infant sign language. While most babies won’t be able to sign until they’re anywhere from 8 to 14 months old, parents can introduce signing at as early as 6 months. The earlier your client starts to teach it, the better. So, as soon as their baby shows an interest in communicating, they can begin.</p>
      </div>
    </section>

    <section className="bg-light">
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
    </section>

    <section>
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
    </section>

    <section id="enrollSection" className="text-light text-center">
      <div className="container">
        <h2>Become a Certified Sleep Consultant Today!</h2>
        <p className="h5 sans-serif">Train at your own pace, in your own space.</p>
        <p className="h5 sans-serif">Be ready to launch your career and even start your very own business in as little as 3-6 months!</p>
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
