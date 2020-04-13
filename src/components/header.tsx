import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

import { useScreenWidth } from '../providers/screen-width';

export const Header: React.FC = () => {
  const screenWidth = useScreenWidth();
  return (
    <header className="flex-shrink-0">
      <Navbar id="mainNav" variant="dark" expand="md" fixed="top" bg="dark">
        <Navbar.Brand>
          <Link href="/">
            <a>
              {screenWidth >= 768 && screenWidth < 992
                ? <img className="header-logo" src={require('../images/logo.svg')} />
                : <img className="header-logo" src={require('../images/logo-lg.svg')} />
              }
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-md-3 mr-lg-4">
            <NavDropdown title="Courses &amp; Tuition" id="coursesDropdown">
              <Link href="/courses-and-tuition/"><a className="dropdown-item">All Courses &amp; Tuition</a></Link>
              <NavDropdown.Divider />
              <Link href="/courses-and-tuition/personal-care-aide/"><a className="dropdown-item"><strong>Personal Care Aide</strong>&nbsp;&nbsp;<span className="badge badge-secondary">New</span></a></Link>
              <Link href="/courses-and-tuition/sleep-consultant/"><a className="dropdown-item">Sleep Consultant</a></Link>
              <Link href="/courses-and-tuition/skincare-consultant/"><a className="dropdown-item">Skincare Consultant</a></Link>
              <Link href="/courses-and-tuition/aging-in-place/"><a className="dropdown-item">Aging in Place</a></Link>
            </NavDropdown>
            <NavDropdown title="How It Works" id="howItWorksDropdown">
              <Link href="/how-it-works/"><a className="dropdown-item">How Online Learning Works</a></Link>
              <Link href="/faq/"><a className="dropdown-item">FAQ</a></Link>
            </NavDropdown>
            <NavDropdown title="About" id="aboutDropdown">
              <Link href="/about/"><a className="dropdown-item">About QC</a></Link>
              <Link href="/contact/"><a className="dropdown-item">Contact</a></Link>
            </NavDropdown>
          </Nav>
          <a className="btn btn-secondary" href="https://enroll.qcwellnessstudies.com">Enroll Online</a>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
