import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/SEO';

const Page: NextPage = () => (
  <>

    <SEO
      title="10 Tips for Creating the Ideal Sleep Environment"
      description="A suitable sleep environment is essential to help babies and young children get a good night's rest. Follow these universal tips to create healthy sleep environments for babies and infants."
      canonical="/student-resources/tipsheets/10-tips-for-creating-the-ideal-sleep-environment"
      image={{
        src: require('../../../images/sr-little-girl-reading-book-bed-dark.jpg'),
        alt: 'little girl reading in bed',
      }}
    />

    <section id="heroSection">
      <div className="container text-light text-center">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1>10 Tips for Creating the Ideal Sleep Environment</h1>
            <p><a href="/tip-sheets/10-tips-creating-sleep-environment.pdf" className="btn btn-primary" rel="noopener noreferrer" target="_blank"><strong>Download PDF</strong></a></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">A suitable sleep environment is essential to help babies and young children get a good night&apos;s rest. Follow these universal tips to create healthy sleep environments for babies and infants.</p>

            <h4>1. Adjust the bedroom lighting to set the mood for sleep.</h4>
            <p>Use lightbulbs with warm hues to create a soft, relaxing environment for the bedtime routine. Bulbs that give off bright white and blue light can keep children alert. Use lighting options such as nightlights, dimmer switches and lamps to create a soft and serene atmosphere.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-little-girl-reading-book-bed-dark.jpg')} alt="little girl reading in bed" /></p>

            <h4>2. Create a quiet, soothing space for sleep time.</h4>
            <p>Ideally, infants and children should have a noise-free environment for sleep. Limit sounds from traffic, neighbors, television, older siblings, pets, etc. as much as possible to ensure a quiet space. If you can&apos;t limit disruptive sounds in the sleep space, you might introduce soothing noise for rest and sleep. Soft music, mobiles and noise machines can help improve the sounds for the baby.</p>

            <h4>3. Install heavy curtains or blinds to control natural light.</h4>
            <p>Use heavy curtains and blinds to control lighting in the sleep environment. Natural light can create a bright and cheerful space during waking hours, but when it comes to sleep time all age groups benefit from a dark sleep space. As an added bonus, heavy blackout curtains reduce sound from outside as well as natural light.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-real-photo-cot-yellow-blanket-standing.jpg')} alt="baby room interior" /></p>

            <h4>4. Monitor temperature and humidity in the sleep space.</h4>
            <p>Check the temperature and humidity in the bedroom using a thermometer. Infants and young children can usually sleep comfortably with a room temperature between 68°F to 70°F, while humidity should fall between 45 to 50%.</p>

            <h4>5. Consider your bedding choices.</h4>
            <p>Make sure bedding is sufficiently warm without causing the child to overheat. Overheating or becoming too cold will prevent babies and infants from sleeping soundly and can even pose health risks for babies. The best way to determine if bedding is appropriate is to monitor the child&apos;s sleep. Touch the child&apos;s chest to check temperature. The child should feel warm, but not hot or sweaty.</p>
            <p><em>Always remember that a baby&apos;s crib should be free of blankets and pillows.</em> These soft objects greatly increase the risk of suffocation. Babies should use appropriate clothing rather than bedding to stay warm while they sleep.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-happy-family-mother-playing-her-baby.jpg')} alt="happy mother playing with her baby in the bedroom" /></p>

            <h4>6. Keep the bedroom tidy.</h4>
            <p>Tidying up the bedroom helps babies and young children fall asleep quickly by reducing distractions. Children are also more likely to &ldquo;sleep in&rdquo; in a tidy bedroom since they won&apos;t be enticed by toys and other distractions when they wake.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-mother-home-hospital-newborn-baby-nursery.jpg')} alt="newborn baby nursery" /></p>

            <h4>7. Keep the bedroom clean.</h4>
            <p>Eliminating dust and other allergens from the bedroom improves the space for the health and wellness of the baby. Frequent dusting, vacuuming and reducing clutter will enable quick and efficient cleaning.</p>

            <h4>8. Provide comforting toys or &ldquo;blankies.&rdquo;</h4>
            <p><em>No toys or other items should be in the cribs of babies who are one year old or under. These items present a safety risk.</em> However, older babies and children sometimes sleep better with their favorite toys or blankies. Soft, stuffed toys, such as teddy bears, sometimes provide comfort and make children feel safe as they fall asleep. Keep in mind that, for some children, these toys could be distracting. Get to know a child&apos;s individual needs.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-photo-baby-boy-sleeping-together-teddy.jpg')} alt="Boy sleeping on bed with teddy bear" /></p>

            <h4>9. Divide the bedroom into zones.</h4>
            <p>Create different areas in the bedroom that serve specific purposes. You might have one area of the room dedicated to reading stories and calming the infant down for sleep, another area dedicated to playtime and a third area, the crib or bed, for sleep. If each zone is only used for its intended purpose, the child will begin to associate the crib or bed with sleep (not playtime!).</p>

            <h4>10. Ensure bedroom safety.</h4>
            <p>Above all else, make sure the bedroom is safe for the child. The crib or bed must be free of choking or smothering hazards at all times. Remember that safety concerns in the bedroom will constantly need to be reassessed as children age and grow.</p>
            <p><img className="img-fluid" src={require('../../../images/sr-reading-interesting-story-my-mom.jpg')} alt="Mom reading interesting story" /></p>
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
      #heroSection{background-image:url(${require('../../../images/sr-hero-10-tips-creating-sleep-environment.jpg')});background-size:cover;background-position:center}
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

  </>
);

export default Page;
