import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SarahImage from './sarah-1.jpg';
import TeresaImage from './teresa-1.jpg';

const StudentFeaturesPage: NextPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1>Student Features</h1>
          <p className="lead">Meet the real success stories from QC Wellness Studies—graduates who've transformed their lives and launched thriving businesses through our expert-led Sleep Consultant certification.</p>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center g-5">
            <div className="col-12 col-md-8 col-lg-6 d-flex">
              <div className="card">
                <Image src={TeresaImage} className="card-img-top" alt="" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="mb-4">
                    <h3 className="card-title text-center mb-3">Teresa Sedlmair</h3>
                    <p className="card-text">Teresa Sedlmair is a former Grade 2 teacher who transformed her own family's sleep struggles into a calling by earning QC Wellness Studies' Certified Infant Sleep Consultant credential. Today, as founder of Little Trees Sleep Consulting, she's helped over 350 Vancouver-area families reclaim restful nights and joyful days.</p>
                  </div>
                  <Link href="student-features/teresa-sedlmair"><button className="btn btn-primary w-100">Read Teresa's Story</button></Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-6 d-flex">
              <div className="card">
                <Image src={SarahImage} className="card-img-top" alt="" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="mb-4">
                    <h3 className="card-title text-center mb-3">Sarah Pashniak</h3>
                    <p className="card-text">Sarah Pashniak is a former kindergarten teacher and mother of three who overcame postpartum sleep struggles by mastering QC Wellness Studies' Sleep Consultant Certification. Today she runs Pashionate About Sleep, guiding families to restorative rest and improved mental well-being.</p>
                  </div>
                  <Link href="student-features/sarah-pashniak"><button className="btn btn-primary w-100">Read Sarah's Story</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentFeaturesPage;
