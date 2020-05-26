import React from 'react';

import { SEO } from '../../../../components/seo';
import { DefaultLayout } from '../../../../layouts/default';

const Page: React.FC = () => {
	return (
		<DefaultLayout>
			<SEO
				title="Professional Caregiver Regulations - By State - Pennsylvania"
				description="Different states have different regulations for professional caregivers. Before you begin your training, make sure you understand the regulations in Pennsylvania!"
				canonical="/courses-and-tuition/professional-caregiver/regulations/pennsylvania"
			/>

			<section id="heroSection">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-10 col-md-8 col-lg-7">
							<h1>Pennsylvania</h1>
							<h2 className="h5">In Pennsylvania, Personal Caregivers are called “Direct Care Workers.”</h2>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
							<p>Direct Care Workers are regulated by the state of Pennsylvania, but there is no official training Caregivers must take. Instead, all Caregivers must pass a competency exam to practice in Pennsylvania.</p>
							<ul>
								<li>Licensing for Caregivers in Pennsylvania is competency-based.</li>
							</ul>
						</div>
						<div className="col-12 col-md-6 col-lg-5">
							<p><img src={require('../../../../images/fc-regulations-icon-take-this-course.svg')} alt="Take This Course Icon" width="60" height="60" /></p>
							<p>Take this course if: you would like to prepare for the Pennsylvania competency exam, to receive higher pay in your current caregiving career, or to complete additional training.</p>
							<p><a className="btn btn-secondary" href="https://enroll.qcwellnessstudies.com/?c[]=fc">ENROLL NOW</a></p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-light text-dark">
				<div className="container">
					<div className="col-12 col-lg-10 offset-lg-1 mb-6 mb-md-0">
						<h2>Funding</h2>
						<p>Medicaid programs to support caregiving are available to qualifying residents of Pennsylvania. However, to qualify for these programs, clients must require a nursing-home level of care. Your clients would probably not be reimbursed by Medicaid for your services.</p>
						<p>If your client has served in the US Military and sustained a serious injury in the line of duty on or after September 11th, 2001, a Caregiver may be partially or fully reimbursed by <a className="text-info" href="https://www.benefits.gov/benefit/5918">Veteran’s’ Affairs</a>. Serious injuries include traumatic brain injury, psychological trauma, and other mental disorders.</p>
						<p>Sources:</p>
						<p><a className="text-info" href="https://www.health.pa.gov/topics/Documents/Facilities%20and%20Licensing/Chapter611.pdf">https://www.health.pa.gov/topics/Documents/Facilities%20and%20Licensing/Chapter611.pdf</a></p>
						<p><a className="text-info" href="https://www.benefits.gov/benefit/5918">https://www.benefits.gov/benefit/5918</a></p>
					</div>
				</div>
			</section>

			<section id="enrollSection" className="text-light text-center">
				<div className="container">
					<h2>Enroll Today</h2>
					<p className="lead mb-5">Start your caregiving training today<br />and launch an exciting, rewarding career!</p>
					<p><a href="https://enroll.qcwellnessstudies.com/?c[]=fc" className="btn btn-secondary btn-lg">ENROLL ONLINE</a></p>
				</div>
			</section>

			<style jsx>{`
        #heroSection{color:white;background-color:#449;background-image:url(${require('../../../..//images/fc-regulations-top-image-states.jpg')});background-size:cover;background-position:center;}      
        #enrollSection{background-image:url(${require('../../../../images/bg-enrollment.jpg')});background-size:cover}
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
