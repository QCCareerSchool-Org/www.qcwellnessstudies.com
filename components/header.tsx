import React from 'react';
import { useScreenWidth } from '../providers/screen-width';

export const Header: React.FC = () => {
  const screenWidth = useScreenWidth();
  return (
    <header className="flex-shrink-0">
      <nav id="mainNav" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/">
          {screenWidth < 768
            ? <img id="header-logo-md" className="header-logo" src="/images/logo.svg" />
            : <img id="header-logo" className="header-logo" src="/images/logo-lg.svg" />
          }
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul id="navList" className="navbar-nav ml-auto">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/courses-and-tuition/" id="coursesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses &amp; Tuition</a>
              <div className="dropdown-menu" aria-labelledby="coursesDropdown">
                <a className="dropdown-item" href="/courses-and-tuition/">All Courses &amp; Tuition</a>
                <hr className="my-1" />
                <a className="dropdown-item" href="/courses-and-tuition/personal-care-aide/"><strong>Personal Care Aide</strong>&nbsp;&nbsp;<span className="badge badge-secondary">New</span></a>
                <a className="dropdown-item" href="/courses-and-tuition/sleep-consultant/">Sleep Consultant</a>
                <a className="dropdown-item" href="/courses-and-tuition/skincare-consultant/">Skincare Consultant</a>
                <a className="dropdown-item" href="/courses-and-tuition/aging-in-place/">Aging in Place</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/how-it-works/" id="howItWorksDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">How It Works</a>
              <div className="dropdown-menu" aria-labelledby="howItWorksDropdown">
                <a className="dropdown-item" href="/how-it-works/">How Online Learning Works</a>
                <a className="dropdown-item" href="/faq/">FAQ</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/about/" id="aboutDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
              <div className="dropdown-menu" aria-labelledby="aboutDropdown">
                <a className="dropdown-item" href="/about/">About QC</a>
                <a className="dropdown-item" href="/contact/">Contact</a>
              </div>
            </li>

          </ul>
          <a className="btn btn-secondary" href="https://enroll.qcwellnessstudies.com">Enroll Online</a>
        </div>
      </nav>
    </header>
  );
};
