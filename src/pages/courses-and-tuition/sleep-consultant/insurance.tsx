import Link from 'next/link';
import React from 'react';

import { SEO } from '../../../components/seo';
import { DefaultLayout } from '../../../layouts/default';

const Page: React.FC = () => (
    <DefaultLayout>

        <SEO
            title="The Different Types of Insurance Recommended for Sleep Consultants"
            description="Learn about the different types of insurance recommended for sleep consultants"
            canonical="/courses-and-tuition/sleep-consultant/insurance"
            image={{
                src: require('../../../images/cute-baby-boy.jpg'),
                alt: 'cute baby boy',
              }}
        />

        <section id="heroSection">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">The Different Types of Insurance Recommended for Sleep Consultants</h1>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-12">
                        <h2 className="h3">Sleep consulting can be an incredibly rewarding career. To many parents, your advice will be life-changing; to them, you’re a superhero!</h2>
                        <p>People become sleep consultants for different reasons. You may choose to train to be a sleep consultant so that you can help parents and parents-to-be better adjust to changes in their life. You may be a parent yourself, looking for ways to help your children sleep better at night. You may just have a calling for helping others. Regardless of why you’re interested in becoming a sleep consultant, there’s a major perk to the job: the potential to start your own business.</p>
                        <p>Before you begin your exciting new career, you’ll have a lot to think about and plan for. One consideration that may be overlooked at first is insurance. While some types of insurance are optional, there are certain types of insurance that are strongly recommended to operate a sleep consulting business. Before you set out on your sleep consultant journey, read up about the types of insurance you should consider for your business!</p>             
                    </div>                 
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <h2 className="h3">Why Do You Need Insurance as a Sleep Consultant?</h2>
                        <p>Insurance will protect the physical parts of your business, such as your office, computer and car, as well as the services you provide, like your consulting advice. The sleep consulting industry isn’t governed by a professional body, which means that you don’t need specific types of insurance in order to be a licensed sleep consultant. Sleep consultants should then make their own decisions about what types of insurance they purchase. You should always consult an insurance broker before making a final decision on purchasing insurance, and deciding which types of insurance are best for you and your business.</p>
                        <p>You may think that because there isn’t a governing body regulating the sleep consulting industry, you don’t need any insurance at all. However, since you’ll be working directly with very young children and families, it’s always a good idea to protect yourself against potential lawsuits or other challenges that could occur over the course of your career.</p>             
                    </div>
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6">
                        <p><img className="img-fluid" src={require('../../../images/yawning-baby-girl.jpg')} alt="Yawning Baby Girl" /></p>
                    </div>            
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 order-lg-6">
                        <h2 className="h3">What Could Happen Without Insurance?</h2>
                        <p>Not having insurance leaves you vulnerable to having to pay out of pocket for large, unexpected expenses. Say, for example, that as you’re driving to a client’s home for a consultation, you’re rear-ended by another car. If you don’t have business car insurance, you may have to pay for the repairs out of your own pocket, even though you weren’t at fault.</p>
                        <p>In a worst-case scenario, forgoing insurance could mean that your business is forced to close if you’re sued by a client. If the amount of damages the client is seeking is more than what your business is worth, your business may be forced to file for bankruptcy and you may not be able to continue practicing as a sleep consultant. If you have liability insurance, you’d be in a better position to defend yourself in the suit, as at least some of your legal fees should be covered by the insurance.</p>             
                    </div>
                    <div className="col-12 mb-4 col-sm-10 col-md-8 col-lg-6">
                        <p><img className="img-fluid" src={require('../../../images/close-handshake.jpg')} alt="Closed handshake" /></p>
                    </div>         
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-12 text-center">
                        <h2 className="h3">Types of Insurance Recommended for Sleep Consultants</h2>
                        <p>You’ll explore different types of insurance when you begin your business as a sleep consultant. Remember that you should always consult an insurance broker and investigate the local laws and regulations that may be in place in your area before making any final decisions regarding insurance.</p>
                        <p>If you already know you’re interested in covering yourself as much as possible, here are a few insurance policies you should consider.</p>             
                    </div>        
                    <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                        <h2 className="h3">Public and Professional Liability Insurance</h2>
                        <p>Public and professional liability insurance was created specifically for business owners, which makes it broader in scope than personal liability. You’ll be covered if you are accused of doing something to a client, such as causing an injury, damaging property, or putting your client in danger. All physical aspects of your business will be protected during a related consultant. Your legal expenses as well as defense and settlements outside of court can be covered with public and professional liability insurance.</p>                                
                    </div>               
                    <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                        <h2 className="h3">Professional Indemnity Insurance</h2>
                        <p>Often overlooked, professional indemnity insurance protects you if someone is dissatisfied with your advice and decides to file a lawsuit. For example, if a client’s baby doesn’t take to your sleep consulting advice, your client can try to sue you for damages. Since no physical harm was done to the client, your legal fees would only be covered by indemnity insurance.</p>                                
                    </div>               
                    <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                        <h2 className="h3">Specialized Insurance</h2>
                        <p>You may be offered specific insurance packages that seem to cover everything you need in a business. These packages could be sold as “coaching insurance,” “consulting insurance,” or similar. While these packages can work for you and your business, they may come at a higher cost than other types of insurance. They may not also be as complete as you think they are – many packages don’t include professional indemnity insurance, for example. Always read the fine print of your insurance policy to determine exactly what is and isn’t covered.</p>                                
                    </div>                
                    <div className="col-12 col-sm-10 col-md-8 col-lg-12 text-center">
                        <h2 className="h3">Other Types of Insurance</h2>
                        <p>Depending on how you run your business, you may be interested in exploring other types of insurance. For example, if you’re running your sleep consulting business from your home you should check your home or mortgage insurance to see what is or isn’t covered. If you’re going to be using your car to travel to clients’ houses, you should check with your auto insurance provider to make sure you’re still covered even when you’re using your car for business.</p>
                        <p>As a small business owner, you may consider self-employment insurance if sleep consulting is your primary form of employment. This will protect you in the case of serious illness or injury. If you’re not able to work for any length of time, self-employment insurance can cover some of your income and loan repayments, such as mortgage payments or a small business loan repayment.</p>  
                        <p>Any business needs insurance, but when you’re working with families and children as a sleep consultant it’s usually a good idea to look into many different types of insurance. When you start out as a sleep consultant, you may feel overwhelmed by all of the decisions you’ll have to make, and insurance will almost definitely be one of those decisions. But taking a moment to carefully consider your options and make the best choice for your own business will go a long way in making your business stay the course and continue for years to come!</p> 
                    </div>                 
                </div>
            </div>
        </section>        

        <section id="enrollSection" className="text-light text-center">
            <div className="container">
                <h2>Start Your Journey</h2>
                <p className="h5 sans-serif">It’s never too early or too late to begin a career you’ll love.</p>
                <p className="h5 sans-serif">Enroll in QC’s Sleep Consultant Course today and launch a successful career in as little as 3-6 months!</p>
                <a href="https://enroll.qcwellnessstudies.com/" className="btn btn-secondary btn-lg mt-4">ENROLL NOW</a>
            </div>
        </section>

        <style jsx>{`       
      #enrollSection{background-image: url(${require('../../../images/bg-enrollment.jpg')});background-size: cover;}
      #heroSection{background-image:url(${require('../../../images/cute-baby-boy.jpg')});background-size:cover;background-position:center} 
    `}</style>

    </DefaultLayout>
);

export default Page;
