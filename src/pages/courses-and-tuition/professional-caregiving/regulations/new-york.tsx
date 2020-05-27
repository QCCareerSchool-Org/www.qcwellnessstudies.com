import React from 'react';

import { SEO } from '../../../../components/seo';
import { DefaultLayout } from '../../../../layouts/default';

const Page: React.FC = () => {
	return (
		<DefaultLayout>
			<SEO
				title="Professional Caregiver Regulations - By State - New York"
				description="Different states have different regulations for professional caregivers. Before you begin your training, make sure you understand the regulations in New York!"
				canonical="/courses-and-tuition/professional-caregiver/regulations/new-york"
			/>

			<section id="heroSection">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-10 col-md-8 col-lg-7">
							<h1>New York</h1>
							<h2 className="h5">In New York, Professional Caregivers are called “Personal Care Aides.”</h2>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-5 offset-lg-1 mb-3 mb-md-0">
							<p className="text-center"><img src={require('../../../../images/fc-regulations-icon-state-regulations.svg')} alt="State Icon" width="60" height="60" /></p>
							<h2 className="h5 text-center">State Requirements</h2>
							<p>The state of New York regulates all professional caregivers. To become a Personal Care Aide, you must register with the New York State Department of Public Health by taking an approved class or a competency exam.</p>
							<ul>
								<li>Caregivers must complete 40 hours of training.</li>
								<li>Caregivers must also complete an additional 6 hours of training per year</li>
							</ul>
						</div>
						<div className="col-12 col-md-6 col-lg-5">
							<p className="text-center"><img src={require('../../../../images/fc-regulations-icon-take-this-course.svg')} alt="Take This Course Icon" width="60" height="60" /></p>
							<h2 className="h5 text-center">Take this course:</h2>
							<ul>
								<li>To receive higher pay in your current caregiving career</li>
								<li>To complete additional training</li>
							</ul>
							<p className="text-center"><a className="btn btn-secondary" href="https://enroll.qcwellnessstudies.com/?c[]=fc">ENROLL NOW</a></p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-light text-dark">
				<div className="container">
					<div className="col-12 col-lg-10 offset-lg-1 mb-6 mb-md-0">
						<h2>Funding</h2>
						<p>If your clients can demonstrate the need for assistance with activities of daily living and are eligible to receive New York Medicaid, they can be partially or fully reimbursed by Medicaid through New York’s Consumer-Directed Personal Assistance Program (CDPAP).</p>
						<p>If your client has served in the US Military and sustained a serious injury in the line of duty on or after September 11th, 2001, a Caregiver may be partially or fully reimbursed by <a className="text-info" href="https://www.benefits.gov/benefit/5918">Veteran’s’ Affairs.</a> Serious injuries include traumatic brain injury, psychological trauma, and other mental disorders.</p>
						<p className="font-italic">Please note that while these regulations are accurate at time of publication, laws can change quickly. It’s always a good idea to check on government websites or contact public health representatives to get the most up-to-date information.</p>
						<p>Sources:</p>
						<p><a className="text-info" href="https://www.health.ny.gov/professionals/home_care/hhtap_training_program_faq.htm">https://www.health.ny.gov/professionals/home_care/hhtap_training_program_faq.htm</a></p>
						<p><a className="text-info" href="https://www.payingforseniorcare.com/new-york/personal-assistance-program">https://www.payingforseniorcare.com/new-york/personal-assistance-program</a></p>
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
