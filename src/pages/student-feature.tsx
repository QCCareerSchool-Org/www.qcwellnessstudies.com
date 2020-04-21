import Link from 'next/link';
import React from 'react';

import { SEO } from '../components/seo';
import { DefaultLayout } from '../layouts/default';

const Page: React.FC = () => (
  <DefaultLayout>

    <SEO
      title="Student Feature - Sarah Pashniak"
      description="QC graduate, Sarah Pashniak, discusses her sleep consultant journey, her passion about sleep, how QC fine-tuned her skills as a professional, and more!"
      canonical="/student-feature"
    />

    <section id="heroSection">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <h1 className="text-light">Graduate Feature: Sarah Pashniak</h1>
            <p className="text-light">Graduate Feature: Sarah Pashniak</p>
            <p className="text-light">Business: Pashionate About Sleep</p>
            <p className="text-light">Facebook: <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Sarahpashniak/">@Sarahpashniak</a></p>
            <p className="text-light">Instagram: <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pashionateaboutsleep/">@pashionateaboutsleep</a></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row d-flex align-items-center">     
          <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6 mb-lg-0">
            <hr />
            <h2 className="h3">About Sarah</h2>
            <p>My name is Sarah Pashniak, and I am passionate about sleep! (Hence the fun little pun in my business name!)  I am the mama of three children: twin boys (age 4) and a 1-year-old daughter. I’ve also been a kindergarten teacher for the past 7 years.</p>
            <p>When I was in University to complete my education degree, I majored in Psychology. I’m fascinated by human behavior and how the mind works! I love my little family, and feel like I truly enjoy my children because we’re always feeling well-rested and happy.</p>
            <p>This is a huge reason why I’m so passionate about sleep!</p>
            <hr />
            <h2 className="h3">Becoming a Sleep Consultant</h2>
            <p>There are SO many reasons why I took the plunge and decided to become a Sleep Coach.</p>
            <p>After the birth of our twin boys, I suffered with postpartum depression and anxiety. Having twins is wonderful in so many ways, but it was also a major life adjustment. I felt like my world was turned upside down; I had difficulty coping. The lack of sleep made my anxiety and depression worse.</p>
            <p>My mind was filled with spiraling thoughts and “what ifs”. When one baby was awake, the other was sleeping, and vice-versa. I barely slept for 4 months! I knew I needed something to change. So I read books and spent hours (in the middle of the night), learning about sleep.</p>
            <p>I used this knowledge to sleep train the boys. After that, things started looking up! The boys started sleeping regularly, and at the same time—which meant that I could as well. Slowly but surely, I felt the fog lift. I began to feel more and more like myself, and was able to better manage my emotions. I could also finally receive help for my PPA / PPD.</p>
            <p>Sleep had such an incredible impact on my mental health! I’d suffered for a few months with my postpartum depression and anxiety, but I know some women struggle for much longer. I wanted to help other parents who were struggling with a lack of sleep.</p>
            <p>After that, when my daughter was 4 months old, I actually worked with a Sleep Consultant for her. It was this individual who inspired me to get my certification as well! We became instant best friends. Along the way, she’s also been my mentor. She recognized my passion and desire to not only help babies, but to help the whole family get the sleep they need and deserve.</p>
            <hr/>
          </div>        
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <p><img className="img-fluid" src={require('../images/student-feature/sarah-pashniak-family.jpg')} alt="Sarah Pashniak Family" /></p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <p><img className="img-fluid" src={require('../images/student-feature/sarah-pashniak-family-lake.jpg')} alt="Sarah Pashniak Family in the Lake" /></p>
          </div>
          <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6 mb-lg-0">
            <hr />
            <h2 className="h3">Starting a Sleep Consulting Business</h2>
            <p>Starting and then running my own business has been very challenging—yet extremely rewarding. This time last year, I never would have imagined that I’d have a successful business that’s all mine!</p>
            <p>Sleep, and the benefits of sleep, has always been an interest of mine. But I was always afraid of taking the plunge. I was hesitant about the “what ifs”! I am SO glad that I took a leap of faith and pursued my goals, because I’m extremely proud of my business. I take great pride in the work I’ve done, and the parents I’ve been able to help and get to know along the way.</p>
            <p>I’m truly passionate about what I do. That, in large part, has fueled my motivation to be persistent! That being said, there was a lot of work involved. (I cannot stress this enough!) But if you are truly dedicated to helping your clients get the rest they need, and improving their mental health, then all of the hard work is worth it.</p>
            <p>The most rewarding part of my job is receiving messages of gratitude from clients who were once sleep-deprived and exhausted. Helping parents get their babies to sleep is only one part of this job. The ripple effects that come AFTER baby is sleeping trained is what I love the most about what I do.</p>
            <hr />
            <h2 className="h3">Taking a Sleep Consulting Course</h2>
            <p>The Sleep Consultant Course divides the learning into easy-to-digest portions. The assignments effectively reflect the information taught in each section, and there’s a variety of different types of assignments to test and apply your knowledge.</p>
            <p>Quick assessments throughout the program allow you to regularly check in on your progress, and keep track of where your strengths and weaknesses are. There are also smaller assignments as well, which gradually build towards one larger, final assignment at the end of every Unit.</p>
            <p>I really enjoyed that I received thorough feedback after each assignment from my tutor. I was able to learn from it and refer back to it as often as needed, in order to improve my work and grade. I also found that the course includes sample materials that you can adapt and make your own. </p>
            <p>By the time you complete the course, you’ll have so many materials that you’ll be able to use in your actual career, such as</p>
            <ul>
                <li>Intake forms</li>
                <li>Sleep plans</li>
                <li>A business logo</li>
                <li>And so much more! </li>
              </ul>            
            <Link href="/courses-and-tuition/sleep-consultant"><a className="btn btn-secondary mt-3 mb-3">Course Overview</a></Link>
            <hr/>
          </div>        
          <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6 mb-lg-0">
            <hr />
            <h2 className="h3">Life as a QC Student</h2>
            <p>I had a WONDERFUL experience as a student at QC Wellness School! My favorite thing about my program was the quick feedback from my instructor. I enjoyed that it was always provided to me in a detailed audio message. It felt so personal!</p>
            <p>I also found the turnaround rate (from when I’d submit my Unit to when I’d receive my tutor’s feedback) to be exceptionally fast. If I needed any support or had questions about my assignment, I could ask my tutor. They were always there to help!</p>
            <p>Not to mention, there was also the Student Support Team. I was always able to reach out to them by phone, email, or live chat. The entire QC staff supports you, helps you with assignments, and answers any questions you may have!</p>
            <Link href="/courses-and-tuition/sleep-consultant#tutors"><a className="btn btn-secondary mt-3 mb-3">Meet Your Tutor</a></Link>
            <hr/>
            <h2 className="h3">Business Training</h2>
            <p>I would definitely recommend that you take the additional business training, especially if you have any goals of starting your own business. After all, how you market your business is key to your success! If you have no business training, how can you ever hope to run one?</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <p><img className="img-fluid" src={require('../images/student-feature/sarah-pashniak-office.jpg')} alt="Sarah Pashniak Office" /></p>
          </div>       
          <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12 mb-lg-0">
            <hr />
            <h2 className="h3">The Challenges of a Sleep Consultant</h2>
            <p>Letting the client know that it’s okay to ask for help is a big challenge. A lot of the time, parents think that they’re doing something wrong if their baby doesn’t sleep well. They feel that they should be able to figure it out all by themselves, and that if they can’t, they’re somehow falling short as a parent. But this is not true at all!</p>
            <p>Also, I often hear mothers say that they were always under the impression that constantly being tired was “just a part” of motherhood. This is also false! </p>
            <p>As a professional Sleep Consultant, it’s important to remind parents that they’re doing a fabulous job, and that it’s not only okay, but healthy to ask for support if they need it.</p>
            <hr />
            <h2 className="h3">Building the Brand</h2>
            <p>To be honest, social media is a mystery to me! I’m slowly learning more about it, though. I was never overly into sites like Facebook or Instagram before. But in today’s market, these types of online forums are essential for a successful business!</p>
            <p>Your website and social media pages reflect your business. You need to find a balance of demonstrating knowledge and promoting yourself and your brand. Your first impression on both potential clients and followers is made by the overall look of your page. </p>
            <p>As a general tip: when you begin building your business on these platforms, consider the colors and content you want to be associated with your business. This will help build your brand and make you recognizable to your audience!</p>
          </div>
          <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-12 mb-lg-0">
            <hr />
            <h2 className="h3">Why Choose QC?</h2>
            <p>I chose an online school because I have three children at home and I needed flexibility.  I liked that I was able to dedicate chunks of time whenever I had a spare hour or two. I chose QC Wellness Studies to complete my certification because it offered a number of different perks that worked for my budget and busy lifestyle. In particular</p>
            <ol>
              <li>I found the course to be very affordable.</li>
              <li>I liked how my questions were responded to quickly by the staff, and always in a friendly manner.</li>
              <li>I was able to complete the course at my OWN pace. This is a great option if you have children, another job, etc.</li>
              <li>I was able to complete the entire course online.</li>
            </ol>
            <Link href="/how-it-works"><a className="btn btn-secondary mt-3 mb-3">How Online Learning Works</a></Link>
            <hr />
            <h2 className="h3">Your Proudest Moment</h2>
            <p>It’s difficult to name just one proud moment, because my Sleep Coaching journey has been so rewarding. It’d constantly filled with small celebrations!</p>
            <p>However, I’d have to say that one I am very proud of is how many families I’ve been able to work with in the last 8 months. In that time, I’ve helped over 50 infants and their families! I’ve also developed friendships, and connected with several women who follow me on social media.</p>
            <p>I am going to continue to work hard and grow my business! I’ll see where my hard work and dedication takes me. If this past year has taught me anything, it’s that there are a LOT of surprises in store. Social media allows for people to connect in such unique ways, so hopefully more opportunities come my way!</p>
          </div>
        </div>
      </div>
    </section>
    
    <section id="enrollSection" className="text-light text-center">
      <div className="container">
        <h2>Enroll Online Today!</h2>
        <p className="h5 sans-serif">Become a certified sleep consultant with QC and start a successful business like Sarah did!</p>
        <a href="https://enroll.qcwellnessstudies.com/" className="btn btn-secondary btn-lg mt-4">ENROLL ONLINE</a>
      </div>
    </section>

    <style jsx>{`
      #enrollSection{background-image: url(${require('../images/bg-enrollment.jpg')});background-size: cover;}
      #guaranteeSection{background-image: url(${require('../images/bg-white-green-light.jpg')});background-size: cover;}
      #partnerSection{background-image: url(${require('../images/bg-dark-green-navy.jpg')});background-size: cover;}
      #heroSection{background-image:url(${require('../images/student-feature/sarah-pashniak-cover.jpg')});background-size:cover;background-position:center}
      .course-icon{width:80px}
    `}</style>

  </DefaultLayout>
);

export default Page;
