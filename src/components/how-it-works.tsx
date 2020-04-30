import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { IoMdChatboxes, IoMdCheckbox, IoMdHome, IoMdSchool, IoMdTime } from 'react-icons/io';

interface Props {
  profession: string;
  sleepConsultantBoolean: boolean;
  otherProfessions?: React.ReactElement;
  sleepConsultant?: React.ReactElement;
}

export const HowItWorks: React.FC<Props> = ({ profession, sleepConsultantBoolean, otherProfessions, sleepConsultant }) => (
  <div className="container text-center">
    <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-4">
      <h2 className="text-dark mb-4">How Online Training Works</h2>
      <div className="row">
        {sleepConsultantBoolean
          ? (
            <>
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mb-4">                
                {sleepConsultant ? sleepConsultant :
                  <div className="container text-center">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-4">
                      <IoMdTime size={40} />
                      <h3 className="text-dark">Enroll Online at Any Time</h3>
                      <p>With no enrollment or study deadlines, you can enroll in the sleep consultant course whenever you're ready, and start working on your course right away. Within a day of enrolling, you'll receive access to your online student center, course materials, and assignment templates.</p>
                      <hr className="my-4" />
                      <IoMdHome size={40} />
                      <h3 className="text-dark">Study Your Course Materials from Home</h3>
                      <p>You'll follow your detailed course guide that explains when you need to read a textbook and when to complete your assignments. Your books are all available online as PDF downloads, so you can study from home or download them to take with you anywhere!</p>
                      <p><strong>Have questions while studying?</strong></p>
                      <p>Just like in the classroom, sometimes you'll have a question about your course or assignment instructions. You can always reach out to your student advisor for help, either by phone, email or via Live Chat. If your advisor cannot answer your question, they will pass your request along to your tutor who will get back to you as quickly as they can!</p>
                      <hr className="my-4" />
                      <IoMdCheckbox size={40} />
                      <h3 className="text-dark ">Complete &amp; Submit Your Assignments</h3>
                      <p>Your assignments are completed at your leisure, and submitted to your tutor for grading via the online student center. As part of your practical sleep consultant training, you'll complete different types of assignments that are designed to test your knowledge and challenge your skills.</p>
                      <ul className="text-left">
                        <li><strong>Quizzes</strong> are used to evaluate your core knowledge on a number of topics.</li>
                        <li><strong>Long-answer or “discussion” questions</strong> challenge you to think through various scenarios and provide detailed answers where you can take the time to explain your reasoning.</li>
                        <li><strong>Case studies</strong> and other <strong>practical assignments</strong> allow you to experience real-world sleep consulting scenarios. As part of this course, you'll be presented with a number of case studies and will be asked to create full sleep plans to address unique circumstances.</li>
                      </ul>
                      <p className="text-dark"><strong>Pro tip:</strong> Students who treat their case studies and practical assignments like they're dealing with an actual paying client are those who are the most successful upon graduation. Don't skimp on your practical assignments!</p>
                      <hr className="my-4" />
                      <IoMdChatboxes size={40} />
                      <h3 className="text-dark">Listen to Feedback from Your Tutor</h3>
                      <p>When you enroll in the sleep consultant course, you're assigned a personal tutor who is responsible for evaluating/grading your work, and providing detailed feedback on your assignments. After you submit a unit for grading, you'll receive detailed audio feedback from your tutor who will explain exactly where you excelled and where you need some improvement.</p>
                      <p>Your tutor is your best resource throughout the course! Each tutor is not only a successful professional sleep consultant, but also a business owner. They've taken the journey you're taking now, and have done it successfully. Take their feedback to heart. They want to see you succeed!</p>
                      <hr className="my-4" />
                      <IoMdSchool size={40} />
                      <h3 className="text-dark">Graduate &amp; Start Working</h3>
                      <p>Once you've completed all your course units and your tuition has been paid in full, you'll graduate from QC Wellness Studies and receive your Infant Sleep Consultant Professional (ISCP™) Certification. With this certification, and the business training you've received as part of your course, you'll have all the knowledge and skills you need to launch your successful sleep consultant business!</p>
                      <hr className="my-4" />
                      <h3 className="text-center text-dark">Want to know more about how online learning can work?</h3>
                      <p className="text-center"><Link href="/how-it-works"><a className="btn btn-secondary">LEARN MORE</a></Link></p>
                    </div>
                  </div>
                }
              </div>
            </>
          )
          : (
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mb-4">
              {otherProfessions ? otherProfessions :
                <div className="container text-center">
                  <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1 mb-4">
                    <IoMdTime size={40} />
                    <h3 className="text-dark">Enroll Online at Any Time</h3>
                    <p>With no enrollment or study deadlines, you can enroll in the {profession} course whenever you're ready, and start working on your course right away. Within a day of enrolling, you'll receive access to your online student center, course materials, and assignment templates.</p>
                    <hr className="my-4" />
                    <IoMdHome size={40} />
                    <h3 className="text-dark">Study Your Course Materials from Home</h3>
                    <p>You'll follow your detailed course guide that explains when you need to read a text and when to complete your assignments. Your books are all available online as PDF downloads, so you can study from home or download them to take with you anywhere!</p>
                    <p><strong>Have questions while studying?</strong></p>
                    <p>Just like in the classroom, sometimes you'll have a question about your course or assignment instructions. You can always reach out to your student advisor for help, either by phone, email or via Live Chat. If your advisor cannot answer your question, they will pass your request along to your tutor who will get back to you as quickly as they can!</p>
                    <hr className="my-4" />
                    <IoMdCheckbox size={40} />
                    <h3 className="text-dark ">Complete &amp; Submit Your Assignments</h3>
                    <p>Your assignments are completed at your leisure, and submitted to your tutor for grading via the online student center. As part of your practical {profession} training, you'll complete different types of assignments that are designed to test your knowledge and challenge your skills.</p>
                    <ul className="text-left">
                      <li><strong>Quizzes</strong> are used to evaluate your core knowledge on a number of topics.</li>
                      <li><strong>Long-answer or “discussion” questions</strong> challenge you to think through various scenarios and provide detailed answers where you can take the time to explain your reasoning.</li>
                      <li><strong>Case studies</strong> and other <strong>practical assignments</strong> allow you to experience real-world scenarios. As part of this course, you'll be presented with a number of practical assignments and case studies that will put you in the shoes of a {profession} to test your technical skills and practical knowledge.</li>
                    </ul>
                    <p className="text-dark"><strong>Pro tip:</strong> Students who treat their case studies and practical assignments like they're dealing with an actual paying client are those who are the most successful upon graduation. Don't skimp on your practical assignments!</p>
                    <hr className="my-4" />
                    <IoMdChatboxes size={40} />
                    <h3 className="text-dark">Listen to Feedback from Your Tutor</h3>
                    <p>When you enroll in the {profession} course, you're assigned a personal tutor who is responsible for evaluating/grading your work and providing detailed feedback on your assignments. After you submit a unit for grading, you'll receive detailed audio feedback from your tutor who will explain exactly where you excelled and where you need some improvement.</p>
                    <p>Your tutor is your best resource throughout the course! They've taken the journey you're taking now and have done it successfully. Take their feedback to heart. They want to see you succeed!</p>
                    <hr className="my-4" />
                    <IoMdSchool size={40} />
                    <h3 className="text-dark">Graduate &amp; Start Working</h3>
                    <p>Once you've completed all your course units and your tuition has been paid in full, you'll graduate from QC Wellness Studies and receive your Personal Caregiving Professional (PCGP™) certification. With this certification, and the business training you've received as part of your course, you'll have all the knowledge and skills you need to launch your business!</p>
                    <hr className="my-4" />
                    <h3 className="text-center text-dark">Want to know more about how online learning can work?</h3>
                    <p className="text-center"><Link href="/how-it-works"><a className="btn btn-secondary">LEARN MORE</a></Link></p>
                  </div>
                </div>
              }
            </div>
          )}
      </div>
    </div>
  </div>
);

HowItWorks.propTypes = {
  profession: PropTypes.string.isRequired,
  sleepConsultantBoolean: PropTypes.bool.isRequired,
  otherProfessions: PropTypes.element,
  sleepConsultant: PropTypes.element,
};
