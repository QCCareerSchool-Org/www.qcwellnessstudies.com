import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FaBook } from 'react-icons/fa';
import { IoBarChart, IoSchool } from 'react-icons/io5';
import { useCountUp } from 'react-use-count-up';

import Image1 from './image-1.jpg';
import Image2 from './image-2.jpg';
import Image3 from './image-3.jpg';
import VideoPosterImage from './video-preview-cover.jpg';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const iconSize = 64;
const duration = 2_000; // 2 seconds

const TeresaSedlmairPage: NextPage = () => {
  const clientsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const clientsStart = useIntersectionObserver(clientsRef);
  const reviewsStart = useIntersectionObserver(reviewsRef);

  const clients = useCountUp({ start: 0, end: 350, duration, started: clientsStart, easingFunction: 'easeOutCubic' });
  const reviews = useCountUp({ start: 0, end: 125, duration, started: reviewsStart, easingFunction: 'easeOutCubic' });

  return (
    <>
      <section>
        <div className="container text-center">
          <h1>From Classroom to Calm Nights</h1>
          <p className="lead">Teresa Sedlmair | Certified Infant Sleep Consultant</p>
          <div className="ratio ratio-16x9">
            <video src="https://1b42a0e06c41c1a1efaf-e0e54072af1cb962a4847b2205399911.ssl.cf1.rackcdn.com/teresa-sedlmair.mp4" poster={VideoPosterImage.src} controls />
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center g-3">
            <div className="col-12 col-sm-10 col-md-8">
              <h2>The Journey</h2>
            </div>
            <div className="col-12 col-sm-10 col-md-8">
              <div className="d-flex">
                <div>
                  <FaBook size={iconSize} className="text-secondary" />
                </div>
                <div className="ms-4">
                  <h3>Enrolled with QC Wellness Studies</h3>
                  <p>Inspired by her personal experience navigating infant sleep, Teresa enrolled in QC's Sleep Consultant certification program to turn her passion into a profession.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8">
              <div className="d-flex">
                <div>
                  <IoBarChart size={iconSize} className="text-secondary" />
                </div>
                <div className="ms-4">
                  <h3>Certified & Ready to Support</h3>
                  <p>Through QC's flexible and practical training, Teresa began supporting families even before graduation.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8">
              <div className="d-flex">
                <div>
                  <IoSchool size={iconSize} className="text-secondary" />
                </div>
                <div className="ms-4">
                  <h3>Launched Little Trees Sleep Consulting</h3>
                  <p>Soon after graduating, Teresa launched Little Trees and has since supported over 350 families across the Vancouver area.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-6">
              <h2>From Passion to Profession</h2>
              <p>I was a grade 2 teacher before doing sleep consulting. Sleep training truly saved me. It gave me back my strength, my joy, and allowed me to enjoy motherhood finally.</p>
              <p>I became fascinated by infant sleep—obsessively reading, learning, and experimenting until things finally clicked for our family.</p>
              <p>I then decided to get my certification as I had already begun to help some friends and family with their children's sleep. After finishing my certification, I had everything up and running in terms of my website. I was also well-versed with sleep training support groups and I quickly built up a strong referral base. My certification gave me the foundation I needed to even understand the workflow of being a sleep consultant.</p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  <Image src={Image1} className="img-fluid" alt="" />
                </div>
                <div className="col-6 d-flex">
                  <div className="d-flex flex-column justify-content-between">
                    <Image src={Image2} className="img-fluid" alt="" />
                    <Image src={Image3} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 mt-4">
              <hr />
              <p className="lead my-4">“Rested families are thriving families—helping you get there is my greatest joy. It's like a puzzle that I have to crack and can’t rest until I do.”</p>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8">
              <h2>Key Accomplishments</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4" ref={clientsRef}>
              <h3 className="h2 text-secondary">{clients}+</h3>
              Clients
            </div>
            <div className="col-4">
              <h3 className="h2 text-secondary">Top-3 Keyword Rank</h3>
              "sleep consultant near Vancouver"
            </div>
            <div className="col-4" ref={reviewsRef}>
              <h3 className="h2 text-secondary">{reviews}+</h3>
              5-Star Google Reviews
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8">
              <h2>Advice for Future Students</h2>
              <p>Lessons from the journey from practitioner to business owner:</p>
              <ul className="mb-5">
                <li>Your role is to support struggling parents who need to feel seen and heard.</li>
                <li>Engagement and connection are everything.</li>
                <li>Learn how to manage your finances, workflow, and visibility.</li>
                <li>Social media and SEO are your allies—don't underestimate them.</li>
                <li>Don't try to be the right fit for everyone if it means losing what makes you unique.</li>
              </ul>
              <hr />
              <p className="lead my-4">Sleep training is a deeply personal choice. Parenting today can feel overwhelming because we're surrounded by so much information. One choice doesn't make another wrong—it's about what's right and sustainable for your own situation.</p>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 text-center">
              <h2>The Value of Certification</h2>
              <p>Professional training builds confidence, teaches practical skills, and helps earn the trust of families looking for expert guidance. Teresa used her certification to start a business that has already supported over 350 families, and continues to grow.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 text-center">
              <h2>Start Your Own Success Story</h2>
              <p>Follow in Teresa's footsteps. Our comprehensive online course will give you the tools and business know-how to become a certified Sleep Consultant.</p>
              <button className="btn btn-lg btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h2 className="mb-5">Connect with Teresa</h2>
              <div className="d-flex justify-content-between">
                <Link href="https://littletreessleepconsulting.com/"><button className="btn btn-secondary">Website</button></Link>
                <Link href="https://www.instagram.com/littletreessleepconsulting/#"><button className="btn btn-secondary">Instagram</button></Link>
                <Link href="https://www.facebook.com/people/Little-Trees-Sleep-Consulting/100089354994612/"><button className="btn btn-secondary">Facebook</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeresaSedlmairPage;
