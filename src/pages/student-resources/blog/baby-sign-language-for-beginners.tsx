import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/SEO';

const Page: NextPage = () => (
  <>
    <SEO
      title="Baby Sign Language for Beginners: When (and How) to Start"
      description="Baby sign language can prove to be a useful tool to recommend to your clients!"
      canonical="/student-resources/blog/baby-sign-language-for-beginners"
      image={{
        src: require('../../../images/sr-hero-baby-sign-language-for-beginners.jpg'),
        alt: 'baby sign language',
      }}
    />

    <section id="heroSection">
      <div className="container text-light">
        <div className="row">
          <div className="col-12 mb-4 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1 className="text-center">Baby Sign Language for Beginners: When (and How) to Start</h1>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h2 className="h3">A Useful Tool</h2>
            <p>As a certified Sleep Consultant, you will not be required to know baby sign language. However, this can prove to be a useful tool to recommend to your clients!</p>
            <p>Not a certified Sleep Consultant yet? Enroll today in <Link href="/courses-and-tuition/sleep-consultant"><a>QC Wellness Studies&apos; online Sleep Consultant Course!</a></Link></p>
            <p><img className="img-fluid" src={require('../../../images/sl-baby-sign-language-what-is.jpg')} alt="happy baby with raised arms" /></p>
            <h2 className="h3">What Is Baby Sign Language?</h2>
            <p>Until they are old enough to communicate with words, baby sign language provides young children with a way to express their emotions and needs. By teaching a baby how to sign, they can successfully tell others when they&apos;re:</p>
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
            <p><img className="img-fluid" src={require('../../../images/sl-baby-sign-language-hands.jpg')} alt="baby smiling and covering mouth with hands" /></p>
            <h2 className="h3">When to Teach Baby Sign Language</h2>
            <p>Your client might wonder when it&apos;s appropriate (or effective) to start teaching their infant sign language. While most babies won&apos;t be able to sign until they&apos;re anywhere from 8 to 14 months old, parents can introduce signing at as early as 6 months. The earlier your client starts to teach it, the better. So, as soon as their baby shows an interest in communicating, they can begin.</p>
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
            <p><img className="img-fluid" src={require('../../../images/sl-baby-sign-language-thirsty.jpg')} alt="thirsty baby moving towards baby bottle" /></p>
            <h2 className="h3">How This Affects You as the Sleep Consultant</h2>
            <p>Your job is to help parents create a safe, healthy routine for their infant&apos;s sleep schedule. While you personally won&apos;t be expected to teach your clients baby sign language, you can ultimately make their lives easier by bringing this option to their attention and providing helpful tips for getting started. After all, a sleepy baby might not be able to say they&apos;re tired with actual words&mdash;but this way, they&apos;ll have a way of saying it with signs. Thus, your clients can gain an even better understanding of their baby&apos;s needs and more efficiently implement a plan of action.</p>
            <p><img className="img-fluid" src={require('../../../images/sl-baby-sign-language-arms.jpg')} alt="smiling baby crawling in bed" /></p>
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
      #heroSection{background-image:url(${require('../../../images/sr-hero-baby-sign-language-for-beginners.jpg')});background-size:cover;background-position:center} 
    `}</style>
  </>
);

export default Page;
