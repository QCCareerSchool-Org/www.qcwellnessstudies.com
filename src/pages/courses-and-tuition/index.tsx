import Link from 'next/link';
import React from 'react';

import { PriceCard } from '../../components/price-card';
import { SEO } from '../../components/seo';
import { DefaultLayout } from '../../layouts/default';

const Page: React.FC = () => (
  <DefaultLayout>

    <SEO
      title="Courses &amp; Tuition"
      description="QC offers many courses in the wellness industry. Whether you want to become a sleep consultant, skincare consultant, aging in place designer or other wellness professional, you'll find your dream career with QC's training!"
      canonical="/courses-and-tuition"
    />

    <section id="heroSection" className="bg-light">
      <div className="container">
        <h1 className="text-dark text-center mb-5">Wellness Training<br />Courses &amp; Tuition</h1>
        <hr className="mt-5" />
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-lg-5 offset-lg-0 col-xl-4">
            <PriceCard courses={[ 'ic' ]} />
          </div>
          <div className="col-12 mb-5 col-md-12 col-lg-7 mb-lg-0 col-xl-8 text-center text-lg-left order-first order-lg-last">
            <h2 className="text-dark">Caregiver</h2>
            <p>As a caregiver, you&apos;ll help vulnerable individuals maintain their independence by providing companionship and helping them with daily tasks that they may find difficult to do on their own. </p>
            <p><strong>Professional caregivers</strong> are in extremely high demand. The industry is expected to grow very quickly over the next few years! QC&apos;s Professional Caregiver course will give you the skills to work in a professional environment, either working for an agency or independently by running your own caregiver business.</p>
            <p>If you want to be a <strong>personal caregiver</strong> for a loved one, the personal caregiver course will give you the skills you need to do the job safely.</p>
            <Link href="/caregiver"><a className="btn btn-secondary">LEARN MORE</a></Link>
          </div>
        </div>
      </div>
    </section>

    <section id="sleepSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-lg-5 offset-lg-0 col-xl-4">
            <PriceCard courses={[ 'sl' ]} />
          </div>
          <div className="col-12 mb-5 col-md-12 col-lg-7 mb-lg-0 col-xl-8 text-center text-lg-left order-first order-lg-last">
            <h2 className="text-dark">Sleep Consultant Course</h2>
            <p>Help parents and caregivers set healthy long term sleep habits for their newborns and young children. Sleep consulting is a booming industry and can either be a full-time job or a source of additional income for anyone in the child care industry!</p>
            <p>Learn the science of sleep and all different methods used to help infants and toddlers sleep, from &ldquo;no cry&rdquo; to &ldquo;cry it out&rdquo; methods. Learn how to turn these skills into a thriving business with QC&apos;s business start-up training, and start booking clients quickly!</p>
            <Link href="/courses-and-tuition/sleep-consultant"><a className="btn btn-secondary">LEARN MORE</a></Link>
          </div>
        </div>
      </div>
    </section>

    <section id="skincareSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-lg-5 offset-lg-0 col-xl-4">
            <PriceCard courses={[ 'sk' ]} />
          </div>
          <div className="col-12 mb-5 col-md-12 col-lg-7 mb-lg-0 col-xl-8 text-center text-lg-left order-first order-lg-last">
            <h2 className="text-dark">Skincare Consultant Course</h2>
            <p>Work with clients to build a skincare routine that will give them healthy, glowing skin. Add skincare as a revenue stream to an existing business, such as a makeup &amp; hair studio or spa, or start your own skincare consulting business.</p>
            <p>You&apos;ll learn the anatomy of skin, products to use and avoid based on different skin conditions, how to build a skincare routine your clients will follow, how to launch your own business, and much more!</p>
            <Link href="/courses-and-tuition/skincare-consultant"><a className="btn btn-secondary">LEARN MORE</a></Link>
          </div>
        </div>
      </div>
    </section>

    <section id="agingSection">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-lg-5 offset-lg-0 col-xl-4">
            <PriceCard courses={[ 'ap' ]} />
          </div>
          <div className="col-12 mb-5 col-md-12 col-lg-7 mb-lg-0 col-xl-8 text-center text-lg-left order-first order-lg-last">
            <h2 className="text-dark">Aging in Place Course</h2>
            <p>Work with clients who want to keep their independence and stay in their homes for as long as possible. The amount of senior citizens is increasing and they&apos;ll be looking for help to either stay in their home or downsize to a more manageable home. Help these clients with a specialized design service catered just for them!</p>
            <p>Youl&apos;ll learn how to safely design a space with the unique challenges and special requirements that come with aging. With safety and convenience as your top priority, you&apos;ll create a solution that helps your client (and their family) feel safe in their home and avoid having to relocate to assisted living facilities.</p>
            <Link href="/courses-and-tuition/aging-in-place"><a className="btn btn-secondary">LEARN MORE</a></Link>
          </div>
        </div>
      </div>
    </section>

    <section id="enrollSection" className="text-light text-center">
      <div className="container">
        <h2>Enroll Today</h2>
        <p className="lead mb-5">With QC&apos;s flexible online training, enroll and start your course(s) at any time. There are no start dates or deadlines to worry about. Complete your training as quickly as you&apos;d like, or take your time. The choice is yours!</p>
        <p><a href="https://enroll.qcwellnessstudies.com" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
      </div>
    </section>

    <style jsx>{`
      #heroSection{background-image:url(${require('../../images/bg-white-green-light.jpg')});background-size:cover}
      #enrollSection{background-image:url(${require('../../images/bg-enrollment.jpg')});background-size:cover}
    `}</style>
  </DefaultLayout>
);

export default Page;
