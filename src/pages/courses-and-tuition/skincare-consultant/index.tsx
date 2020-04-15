import React from 'react';

import { DefaultLayout } from '../../../layouts/default';
import { Subnav } from '../../../components/subnav';
import { PaymentPlans } from '../../../components/payment-plans';
import { WhyChoose } from '../../../components/why-chose';
import { Included } from '../../../components/included';
import { UnitOutline, OutlineData } from '../../../components/unit-outline';
import { Certification } from '../../../components/certification';
import { Guarantee } from '../../../components/guarantee';

const Page: React.FC = () => {
  const doubleGuarantee = false;
  const units: { [key: string]: OutlineData[] } = {
    a: [
      {
        title: 'Introduction to Skincare Consulting',
        topics: [
          'What is skincare and why it\'s so important',
          'Why makeup artists should learn about skincare',
          'What skincare consultants do, and where they work',
          'What skincare consultants DON\'T do',
          'The difference between skincare consultants, dermatologists and estheticians',
          'Required characteristics to succeed as a skincare consultant'
        ]
      },
      {
        title: 'Skin anatomy and skin types',
        topics: [
          'The role of skin in the body',
          'The structure of the skin: from epidermis to hypodermis',
          'How skin grows and gets its color',
          'The Fitzpatrick scale and how to use it',
          'The six FPS types',
          'The five major skin types: from dry to sensitive',
          'How to classify skin types',
          'Common issues & concerns related to different skin types'
        ]
      }
    ],
    b: [
      {
        title: 'Skincare Products and Treatments',
        topics: [
          {
            title: 'The most common and essential skincare products: what they do, and how to use them properly:',
            topics: [
              'Makeup Remover',
              'Cleanser',
              'Toner',
              'Exfoliant',
              'Moisturizer and Serum',
              'Sunscreen',
              'Eye cream',
              'Spot treatments',
              'Face masks'
            ]
          },
          'Day products vs. night products',
          'Ingredients in skincare products',
          'The truth about fragrance-free products',
          'Skincare tools: Safety and effectiveness',
          'Common skincare treatments: what to recommend',
          'How nutrition affects the skin',
          'How the environment (and environmental changes) affect the skin'
        ]
      }
    ],
    c: [
      {
        title: 'Skincare Products and Treatments',
        topics: [
          {
            title: 'Common skin problems:',
            topics: [
              'Dry patches',
              'Pimples',
              'Blackheads',
              'Whiteheads',
              'Clogged pores',
              'Large pores',
              'Hyperpigmentation',
              'Dark undereye circles',
              'Rosacea',
              'Post-inflammatory hyperpigmentation',
              'Stretch marks',
              'Birth marks',
              'Scarring'
            ]
          },
          'Skincare and facial hair (working with clients with beards & mustaches)',
          {
            title: 'Common skin conditions & diseases: from hygiene & safety to symptoms & treatment plans',
            topics: [
              'Acne',
              'Eczema',
              'Psoriasis',
              'Dermatitis',
              'Sunburns',
              'Skin cancer',
              'Moles',
              'Vitiligo',
              'Cold sores',
              'Hives & rashes',
              'Warts',
              'Shingles',
              'Perioral dermatitis',
              'Folliculitis',
              'Pseudofolliculitis barbae',
              'Keloids',
              'Keratosis pilaris',
              'Melasma'
            ]
          }
        ]
      }
    ],
    d: [
      {
        title: 'Aging Skin',
        topics: [
          'What happens to skin as we age',
          'Visible symptoms of aging skin: from wrinkles to liver spots',
          'Signs of aging',
          'Causes of aging and how to combat them',
          'Premature aging: causes and prevention',
          {
            title: 'Anti-aging products',
            topics: [
              'Decoding product marketing and product claims',
              'Popular anti-aging products, ingredients and treatments',
              'What anti-aging products actually do'
            ]
          },
          'Creating a skincare routine for aging skin',
          'Working with clients who have aging concerns'
        ]
      }
    ],
    e: [
      {
        title: 'Natural Skincare',
        topics: [
          'Pros and Cons of making your own products',
          {
            title: 'How to make your own natural skincare products:',
            topics: [
              'Sourcing ingredients',
              'Common recipes',
              'Storing your products'
            ]
          },
          'Complying with regional and national health standards'
        ]
      },
      {
        title: 'The Skincare Consultation',
        topics: [
          'The client consultation process from start to finish',
          {
            title: 'How to run a skincare consultation:',
            topics: [
              'Getting the client',
              'Assessing the skin',
              'Important questions to ask',
              'Building a nonjudgmental rapport',
              'Building a skincare regime and recommending products'
            ]
          },
          'Building positive client relationships',
          'How to manage difficult or challenging clients',
          'Marketing your skincare services',
          'Pricing and selling your skincare services',
          'Promoting your skincare services through your makeup artistry business.'
        ]
      }
    ],
  };

  return (
    <DefaultLayout SecondaryNav={() => (
      <Subnav
        heading="Skincare Consultant Course"
        items={[
          { name: 'Tuition', url: '#paymentPlans' },
          { name: 'Course Outline', url: '#outline' },
          { name: 'Tutors', url: '#tutors' },
        ]}
      />
    )}>

      <section id="heroSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <h1>Become a Certified Skincare Consultant</h1>
              <h2 className="h4">Get certified quickly with online training!</h2>
              <ul>
                <li>No previous skincare experience required.</li>
                <li>No set deadlines, mandatory webinars, or classrooms to attend.</li>
                <li>Get plenty of hands-on training through practical assignments</li>
                <li>Become certified to work with a diverse clientele in a variety of industries!</li>
              </ul>
              <p className="lead">This course is provided in partnership with QC Makeup Academy.</p>
            </div>
          </div>
        </div>
      </section>

      <a className="anchor" id="paymentPlans"></a>
      <section id="paymentPlansSection" className="bg-light">
        <PaymentPlans courses={['sk']} doubleGuarantee={doubleGuarantee} />
      </section>

      <section id="whatSection">
        <div className="container">
          <h2 className="text-dark text-center">What Is a Skincare Consultant?</h2>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
              <p>A skincare consultant is a professional in the makeup artistry/cosmetology industry who specializes in helping clients achieve healthy and glowing skin. As a professional skincare consultant, you'll meet with clients to identify their particular skincare needs, and create a skincare routine specifically designed for their unique skin type.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p>You'll become an expert in skincare products and know what ingredients certain clients should avoid. By helping clients achieve healthier skin, you'll be contributing to their physical and emotional wellness!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="requirementsSection" className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2>Basic Requirements for Becoming a Skinare Consultant</h2>
              <ul className="mb-4">
                <li><p><strong>Attention to Detail </strong> &mdash; You'll need to become familiar with a multitude of skin types and conditions, and be able to identify them based on a single consultation with your client. This will require precision and care!</p></li>
                <li><p><strong>Flexibility</strong> &mdash; Most skincare consultants work on appointments, and most clients will expect you to be available outside of regular business hours. Skincare professionals who have availability on some evenings and weekends have a much greater chance of success.</p></li>
                <li><p><strong>Reliability</strong> &mdash; As a professional, you'll be expected to adhere to a set schedule. Time management skills are essential to succeed in this career.</p></li>
                <li><p><strong>Empathy</strong> &mdash; Some of your clients will come to you in a desperate state, having tried everything they can think of to get a specific skin condition under control. Some clients might get frustrated if the results you offer aren't transformative enough. You'll need the ability to deal with these clients compassionately and professionally, always!</p></li>
              </ul>
              <p className="text-center"><a href="https://enroll.qcwellnessstudies.com/?c[]=sk" className="btn btn-secondary">ENROLL NOW</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="whatYoullLearnSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-5">
              <h2 className="text-dark">What You'll Learn</h2>
              <p className="lead">In this highly interactive self-paced training course, you'll learn:</p>
              <ul className="mb-4">
                <li>How the skincare consultant industry works</li>
                <li>Skincare basics, skin anatomy and skin types</li>
                <li>Skincare products, tools, and treatments</li>
                <li>How to recommend cleansers, moisturizers, tools, and makeup</li>
                <li>Creating skincare routines</li>
                <li>Assessing skin types and skin conditions</li>
                <li>Dealing with acne-prone skin</li>
                <li>Anti-aging skincare</li>
                <li>Natural skincare</li>
              </ul>
              <a className="btn btn-dark" href="#outline" role="button">Read the Full Course Outline</a>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <p className="d-none d-lg-block"><img src={require('../../../images/sk-what-youll-learn.jpg')} className="text-center" alt="What You'll Learn in the Skincare Consultant Course" /></p>
            </div>
          </div>
        </div>
      </section>

      <section id="howYoullLearnSection" className="bg-light text-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2>How You'll Learn</h2>
              <p>QC's signature online learning experience is made for highly motivated and ambitious individuals! You'll learn at your own pace, with the help of your student advisor and expert tutor who will be with you every step of the way!</p>
              <ul>
                <li>Follow the course guide that will tell you when you need to read a course book, watch a video, or complete an assignment.</li>
                <li>Complete a variety of assignments including knowledge quizzes, open-ended discussions, and comprehensive real-world case studies where you experience what it's like to be a professional skincare consultant.</li>
                <li>Upload your completed assignments to the online student center.</li>
                <li>Submit your unit once all assignments are completed and uploaded.</li>
                <li>Your tutor will grade your work and provide feedback on every assignment.</li>
                <li>Listen to your tutor's personalized feedback, and apply their suggestions as you progress through the course.</li>
                <li>Reach out to your student advisor at any time with questions about your training, assignments, or anything else!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="whyChooseQCSection">
        <WhyChoose
          subheader="Get certified faster with a fully online skincare consultant course!"
          affordable="Since QC's course is fully online, you don't have to pay surcharges for attending lectures or webinars. You complete the full course from home."
          flexible="No start dates, no deadlines, no mandatory webinars! This course is completely self-directed and self-paced. Get certified quickly, or take your time."
          comprehensive="You'll learn many different facets of skincare to ensure you'll be prepared to work with any client that walks through your doors!"
          courses={['sk']}
        />
      </section>

      <section id="includedSection" className="bg-light text-dark">
        <Included certification="International Skincare Consultant Professional (ISCP™)" />
      </section>

      <a className="anchor" id="outline"></a>
      <section id="outlineSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <h2 className="text-dark text-center">Full Course Outline</h2>
              <p className="lead text-center">Here's a detailed outline of all topics you'll learn in the skincare consultant certification course.</p>
            </div>
          </div>
          <div className="row my-5" id="unitA">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/sk-outline-a.jpg')} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit A" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit A: Introduction to Skincare</h3>
              <p className="mb-0">In this first unit, you'll explore the basics of skincare consulting. You'll get a thorough understanding of why skincare is so important, and why makeup artists in particular should all be trained in skincare as well. You'll then dive into what you need to succeed as a skincare consultant, and get a deep dive into skin anatomy, and how to identify the five major skin types. </p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.a} />
            </div>
          </div>
          <div className="row my-5" id="unitB">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/sk-outline-b.jpg')} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit B" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit B: Skincare Products, Tools &amp; Treatments</h3>
              <p className="mb-0">Now that you have a good basic understanding of skin, and of your specific role as a skincare consultant, you'll start learning about the products, tools, and treatments you can recommend to your clients based on their needs. You'll learn to read labels and identify key ingredients, and build a personalized skincare routine tailor-made to your client.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.b} />
            </div>
          </div>
          <div className="row my-5" id="unitC">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/sk-outline-c.jpg')} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit C" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit C: Workng with Skin Conditions</h3>
              <p className="mb-0">In this unit you'll learn about specific skin conditions and skin concerns that you'll encounter as a skincare professional. You'll learn how to assess these conditions, and what products/tools to specifically recommend or stay away from based on the client's unique needs. You'll also learn what serious but rare conditions to look out for, and when you should refer a client to a dermatologist or other healthcare professional.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.c} />
            </div>
          </div>
          <div className="row my-5" id="unitD">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/sk-outline-d.jpg')} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit D" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit D: Anti-Aging Skincare</h3>
              <p className="mb-0">As a skincare consultant, you’ll probably see your fair share of clients who are looking for aging cures. This is a high demand industry so you’ll be expected to be well versed in anti-aging treatments, tools and products. Be sure to also keep up with the latest trends and gimmicks so that you can advise your clients!</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.d} />
            </div>
          </div>
          <div className="row my-5" id="unitE">
            <div className="col-12 col-md-10 offset-md-1 col-lg-4 text-lg-left mb-4">
              <img src={require('../../../images/sk-outline-e.jpg')} className="rounded img-fluid mt-2" alt="Sleep Consultant Course Unit E" />
            </div>
            <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-0 text-lg-left mb-4">
              <h3 className="text-dark">Unit E: Natural Skincare &amp; The Skincare Consultation Process</h3>
              <p className="mb-0">Some clients will insist on going “all natural” and you'll quickly learn that this term can mean different things to different people. In the first part of this final unit, you'll learn how to make your own skincare products safely and naturally. In your final section of the unit, you'll put together everything you've learned so far and apply it to the skincare consultation process.</p>
            </div>
            <div className="col-12 col-md-10 offset-md-1">
              <UnitOutline data={units.e} />
            </div>
          </div>
          <p className="text-center"><a href="https://enroll.qcwellnessstudies.com/?c[]=sk" className="btn btn-secondary">ENROLL ONLINE</a></p>
        </div>
      </section>

      <a className="anchor" id="tutors"></a>
      <section id="tutorsSection" className="bg-light">
        <div className="container text-center">
          <div className="row text-center">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="text-dark text-center">Your Skincare Consultant Tutor</h2>
              <p><img src={require('../../../images/tutor-nathan.jpg')} alt="Nathan Johnson" /></p>
              <h3 className="text-dark">Nathan Johnson</h3>
              <p>With over 18 years of experience as an executive makeup artist and skincare consultant, Nathan is excited to share that knowledge with you and help you advance your skillset. Nathan is featured in QC Makeup Academy's instructional videos, and will be the expert to mentor you through your learning journey!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="certificationSection" className="bg-dark text-light">
        <Certification
          shortName="Skincare Consulting"
          fullName="International Skincare Consulting Professional"
          abbr="ISCP"
          registered={false}
        />
      </section>

      <section id="guaranteeSection">
        <Guarantee courseName="Skincare Consultant" doubleGuarantee={doubleGuarantee} />
      </section>

      <section id="enrollSection" className="text-light text-center">
        <div className="container">
          <h2>Enroll Today</h2>
          <p className="lead mb-5">Start your online skincare consultant training today<br />and launch an exciting, rewarding career!</p>
          <p><a href="https://enroll.qcwellnessstudies.com/?c[]=sk" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
        </div>
      </section>

      <style jsx>{`
        #heroSection{color:white;background-color:#449;background-image:url(${require('../../../images/sk-hero.jpg')});background-size:cover;background-position:center;}
        #certificationSection{background-image:url(${require('../../../images/bg-dark-green-navy.jpg')});background-size:cover}
        #requirementsSection{background-image:url(${require('../../../images/sk-requirements.jpg')});background-size:cover}
        #paymentPlansSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
        #includedSection{background-image:url(${require('../../../images/bg-white-green-light.jpg')});background-size:cover}
        #enrollSection{background-image:url(${require('../../../images/bg-enrollment.jpg')});background-size:cover}
        section:first-of-type {
          padding-top: 105px;
        }
        @media (min-width: 992px)
          section:first-of-type {
            padding-top: 101px;
          }
        }
      `}</style>

    </DefaultLayout>
  );
};

export default Page;
