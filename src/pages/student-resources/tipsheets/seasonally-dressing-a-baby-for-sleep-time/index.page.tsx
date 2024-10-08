import type { NextPage } from 'next';
import Image from 'next/image';

import { Back } from '../../Back';
import FatherToddlerImage from './father-toddler-children-sitting-on-floor.jpg';
import HeroBackgroundImage from './hero-bg.jpg';
import SwaddlingImage from './newborn-baby-swaddling-white-cloth.jpg';
import SleepingBabyImage from './sleeping-baby-on-back-white-bed.jpg';
import ThreeMonthOldImage from './three-month-baby-girl.jpg';
import { BackgroundImage } from '@/components/BackgroundImage';
import { EnrollmentSection } from '@/components/EnrollmentSection';
import { SEO } from '@/components/SEO';

const Page: NextPage = () => (
  <>
    <SEO
      title="Seasonally Dressing a Baby for Sleep Time"
      description="Temperature can have a significant affect on a baby's quality and quantity of sleep. While the bedroom itself should be kept a comfortable temperature between 68°F to 70°F, you can also help a baby sleep through the night by providing appropriate sleepwear for each season."
      canonical="/student-resources/tipsheets/seasonally-dressing-a-baby-for-sleep-time"
      image={{
        src: HeroBackgroundImage.src,
        alt: 'Father and toddler children sitting on the floor at home at bedtime',
      }}
    />

    <section>
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container text-light text-center">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1 className="text-center">Seasonally Dressing a Baby for Sleep Time</h1>
            <p><a href="/tip-sheets/Seasonally-dressing-baby-for-sleep.pdf" className="btn btn-primary" rel="noopener noreferrer" target="_blank"><strong>Download PDF</strong></a></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <p className="lead">Temperature can have a significant affect on a baby&apos;s quality and quantity of sleep. While the bedroom itself should be kept a comfortable temperature between 68°F to 70°F, you can also help a baby sleep through the night by providing appropriate sleepwear for each season.</p>
            <p><Image className="img-fluid" src={SleepingBabyImage} alt="sleeping baby on back white bed" /></p>

            <h4>Thermal Overall Grade (TOG) Ratings</h4>
            <p>Thermal Overall Grade (TOG) ratings measure the thickness and warmth of blankets, duvets and padded sleepwear. You can use these ratings to choose the right type of seasonal bedding and sleepwear to keep a baby comfortable. You&apos;ll find TOG ratings on product labels indicating the following:</p>
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>TOG Rating</th>
                  <th>Room Temperature</th>
                  <th>Sleepwear</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.2</td>
                  <td>26°C+</td>
                  <td>Light-weight, such as a bodysuit and light sleeping bag</td>
                </tr>
                <tr>
                  <td>0.5</td>
                  <td>23°C to 27°C</td>
                  <td>Light-weight, such as a bodysuit and medium sleep pouch</td>
                </tr>
                <tr>
                  <td>1.0</td>
                  <td>20°C to 24°C</td>
                  <td>Mid-light-weight, such as a sleepsuit and warm sleep sack</td>
                </tr>
                <tr>
                  <td>2.5</td>
                  <td>16°C to 20°C</td>
                  <td>Mid-heavy-weight, such as a body suit, sleepsuit and pouch</td>
                </tr>
                <tr>
                  <td>3.5</td>
                  <td>10°C to 16°C</td>
                  <td>Heavy-weight, such as pajamas with a warm sleep sack</td>
                </tr>
              </tbody>
            </table>
            <p><Image className="img-fluid" src={SwaddlingImage} alt="Newborn baby in a white cloth" /></p>
            <p>Usually, you&apos;ll dress a baby in sleepwear with low TOG ratings in the summer months and higher TOG ratings in the winter. However, you&apos;ll need to check the temperature of the bedroom to determine the appropriate TOG rating. In the summer, for instance, temperatures may drop during the night or an air-conditioned house could produce a cool sleep environment that requires a higher TOG rating to keep the baby comfortable.</p>

            <h4>Summer Sleepwear</h4>
            <p>A baby can easily overheat if he or she is overdressed for bedtime during the summer. Dress the baby for sleep in light, breathable layers, such as sleeve-less, foot-less bodysuits. You may also consider summer sleep pouches or a swaddle. Usually, clothing with a low TOG rating works well in the summer months.</p>
            <p><Image className="img-fluid" src={ThreeMonthOldImage} alt="Three month baby girl wrapped in a modern winged baby swaddle laying on a bed" /></p>

            <h4>Spring and Fall Sleepwear</h4>
            <p>During springtime and fall, you&apos;ll often dress a baby in sleepwear with a midrange TOG rating. Temperatures often stay cool or mild, but tend to be quite changeable during spring and fall. You might use light layers for infant sleepwear. For instance, you might dress an infant in a long-sleeved sleepsuit and light sleep pouch on a fall evening. On cooler evenings, you may also opt for a bodysuit underneath the sleepsuit. Check on the baby during the night to ensure he or she doesn&apos;t overheat.</p>

            <h4>Winter Sleepwear</h4>
            <p>Keep babies warm and cozy during cold months using sleepwear with high TOG ratings. Cozy bedding and sleepwear options include sleepsuits, sleep sacks and base layers, such as bodysuits over diapers.</p>
            <p>Sleep sacks, also known as sleep pouches and sleeping bags, are wearable blankets. This option has a high TOG rating and keeps babies secure and warm throughout winter nights. Sleep sacks are a safe alternative to loose blankets, which are a suffocation hazard to young infants.</p>
            <p><Image className="img-fluid" src={FatherToddlerImage} alt="Father and toddler children sitting on the floor at home at bedtime." /></p>
          </div>
        </div>
      </div>
    </section>

    <EnrollmentSection heading="Get Started Today!">
      Why wait? Start your professional training program today and get on the path toward a new and exciting career
    </EnrollmentSection>

    <Back />
  </>
);

export default Page;
