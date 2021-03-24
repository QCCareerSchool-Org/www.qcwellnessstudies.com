import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: NextPage = () => (
  <DefaultLayout>

    <SEO
      title="How to Become a Virtual Sleep Consultant"
      description="If you’re on the fence about choosing an online course to start your new career, we’re here to help! Online learning provides students with lots of advantages. You can choose when and where you study, and how long your study sessions last."
      canonical="/student-resources/blog/how-to-become-a-virtual-sleep-consultant"
      image={{
        src: require('../../../images/sr-technology-communication-people-concept-senior-woman.jpg'),
        alt: 'online family gathering',
      }}
    />

    <section id="heroSection">
      <div className="container text-light">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1 className="text-center">How to Become a Virtual Sleep Consultant</h1>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">Becoming a virtual sleep consultant could be a fantastic way to begin a new career from home. Sleep consultants are becoming more and more common – whether for first- or fifth-time parents. Each baby is unique and could benefit from a sleep consultant to help caregivers understand their needs.</p>
            <p className="lead">If the idea of working from home appeals to you, you may be suited to a career as a virtual sleep consultant. You could work with families and infants all over the world to develop positive sleep habits.  If you’re interested in seeing what this career is all about, read on to discover how to become a virtual sleep consultant!</p>
            <p><img className="img-fluid" src={require('../../../images/sr-senior-stylish-woman-taking-notes-notebook.jpg')} alt="Stylish woman taking notes in a notebook" /></p>

            <h4>What is a Virtual Sleep Consultant?</h4>
            <p>First of all, let’s explore the role of a sleep consultant.</p>
            <p>Sleep consultants are hired by caregivers to help infants learn how to properly sleep during the night. As a sleep consultant, you’ll technically be sleep training infants but oftentimes you’ll also have to “train” parents!</p>
            <p>Infant sleep consultants use several tested methods to teach babies how to self-soothe and sleep more consistently through the night. As a sleep consultant, you’ll speak with caregivers and asses their current nighttime routines before suggesting a particular sleep training method. You’ll need to determine which method will work for each family.</p>
            <p>Many sleep consultants provide an in-house service during which they’ll often spend a night or more at clients’ homes to better understand the infant’s sleep routines. It’s also entirely possible to provide sleep consultant services virtually! Instead of visiting a client’s home in person, as a virtual sleep consultant you would speak regularly with clients and view nighttime routines remotely before making your suggestions.</p>

            <h4>Who Can Become a Virtual Sleep Consultant?</h4>
            <p>Sleep consultants require training to become familiar with all of the sleep training methods necessary to help families. If you’re organized, have good people skills, enjoy working with infants and children, and are able to clearly communicate, you might find you’re an excellent virtual sleep consultant!</p>
            <p>If you’re multilingual, becoming a virtual sleep consultant opens up even more doors. You’d be able to assist families in every language you speak – and, because your services are remote, you’ll also be able to assist families in other countries where those languages are spoken.</p>
            <p>Keep in mind that you’ll usually work odd hours as a sleep consultant, virtual or otherwise. After all, your area of concern often involves times when everyone else should be sleeping! Virtual sleep consultants should also consider time zones if they work with international clients.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-technology-communication-people-concept-senior-woman.jpg')} alt="online family gathering" /></p>

            <h4>Performing Virtual Sleep Consultations</h4>
            <p>Virtual sleep consultations should operate similarly to in-person sleep consultations. First, you’ll meet with the caregivers. You’ll ask questions about the infant, their current sleep schedule, their personality, and any sleep issues the caregivers have noticed. You’ll also use this as an opportunity to get to know the caregivers. Some caregivers have very specific requirements or opinions about what they believe is best for their infant. Generally speaking, you should do your best to accommodate those opinions. For example, if a caregiver is strongly against “cry it out” methods, those methods should be the last option you suggest. You have been hired to offer your professional advice and guidance but when it comes down to it, caregivers will decide what’s best for their infant.</p>
            <p>Following the initial consultation, you can decide with your clients either to create a sleep plan for their infant or to provide more in-depth sleep training for the caregivers. You may be “on call” for a night so that parents can contact you with real-time issues. You may also choose to use video conferencing software to remain present all night as your clients begin the sleep training process.</p>
            <p>The most important thing is for your clients to understand that you’re there for them. Show them that you have the best interests of their family at heart. Make sure they feel heard, understood, and respected!</p>
            <p><img className="img-fluid" src={require('../../../images/sr-authentic-close-neo-mother-her-newborn.jpg')} alt="Mother and her newborn taking a selfie" /></p>

            <h4>Virtual Sleep Consultant Training</h4>
            <p>Like any new career, you can’t just decide to become a virtual sleep consultant! When clients consider hiring you, they’ll naturally ask questions about your qualifications and training. So, what training do you need in order to become a virtual sleep consultant?</p>
            <p>Thankfully, the Sleep Consultant course offered by QC Wellness Studies covers everything you need to know in order to begin a successful and fulfilling career as a sleep consultant. Interested in learning more? Check out the information from QC Wellness Studies, or speak to a member of our Student Support team!</p>
            <p>Infant sleep consultants can be the difference that makes an entire family’s mental and physical health much better than it was before. By helping infants to transition to fuller, better sleep, you’re allowing them to start their lives off on the right foot. And if you prefer to operate your sleep consultant business from the comfort of your own home, then you’ll have plenty of opportunities to do so!</p>
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
      #heroSection{background-image:url(${require('../../../images/sr-hero-how-to-become-a-virtual-sleep-consultant.jpg')});background-size:cover;background-position:center}
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
