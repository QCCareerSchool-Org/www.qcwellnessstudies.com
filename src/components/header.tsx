import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useLocation } from '../hooks/useLocation';
import { useScreenWidth } from '../hooks/useScreenWidth';
import * as breakpoints from '../lib/breakpoints';
import { getTelephoneNumber } from '../lib/functions';

type Props = {
  enrollPath?: string;
  nav: boolean;
};

export const Header = ({ nav, enrollPath = 'https://enroll.qcwellnessstudies.com/' }: Props): ReactElement => {
  const screenWidth = useScreenWidth();
  const location = useLocation();
  const telephoneNumber = getTelephoneNumber(location?.countryCode);
  return (
    <header className="flex-shrink-0">
      <Navbar id="mainNav" variant="dark" expand="md" fixed="top" bg="dark">
        <Navbar.Brand>
          <Link href="/">
            <a>
              {((nav && (screenWidth < breakpoints.sm.start || (screenWidth >= breakpoints.md.start && screenWidth < breakpoints.lg.start))) || (!nav && screenWidth < breakpoints.md.start))
                ? <Image width="34" height="32" data-testid="header-logo-sm" className="header-logo" src={require('../images/logo.svg')} alt="QC Wellness Studies" />
                : <Image width="212" height="32" data-testid="header-logo-lg" className="header-logo" src={require('../images/logo-lg.svg')} alt="QC Wellness Studies" />
              }
            </a>
          </Link>
        </Navbar.Brand>
        {nav
          ? (
            <>
              <Navbar.Toggle aria-controls="main-navbar-nav" />
              <Navbar.Collapse id="main-navbar-nav" data-testid="main-nav">
                <Nav className="ml-auto mr-md-2 mr-lg-4">
                  <NavDropdown title="Courses &amp; Tuition" id="coursesDropdown">
                    <Link href="/courses-and-tuition"><a className="dropdown-item">All Courses &amp; Tuition</a></Link>
                    <NavDropdown.Divider />
                    <Link href="/caregiver"><a className="dropdown-item"><strong>Caregiver</strong>&nbsp;&nbsp;<span className="badge badge-secondary">New</span></a></Link>
                    <Link href="/courses-and-tuition/sleep-consultant"><a className="dropdown-item">Sleep Consultant</a></Link>
                    <Link href="/courses-and-tuition/skincare-consultant"><a className="dropdown-item">Skincare Consultant</a></Link>
                    <Link href="/courses-and-tuition/aging-in-place"><a className="dropdown-item">Aging in Place</a></Link>
                  </NavDropdown>
                  <NavDropdown title="How It Works" id="howItWorksDropdown">
                    <Link href="/how-it-works"><a className="dropdown-item">How Online Learning Works</a></Link>
                    <Link href="/student-resources"><a className="dropdown-item">Sleep Resources</a></Link>
                    <Link href="/faq"><a className="dropdown-item">FAQ</a></Link>
                  </NavDropdown>
                  <NavDropdown title="About" id="aboutDropdown">
                    <Link href="/about"><a className="dropdown-item">About QC</a></Link>
                    <Link href="/student-resources/blog/student-features"><a className="dropdown-item">Student Features</a></Link>
                    <Link href="/contact"><a className="dropdown-item">Contact</a></Link>
                  </NavDropdown>
                </Nav>
                <a className="btn btn-secondary" href={enrollPath}>Enroll Online</a>
              </Navbar.Collapse>
            </>
          )
          : (
            <div className="ml-auto text-muted">Call Us Toll Free:&nbsp; <a className="text-white" href={`tel:${telephoneNumber}`}>{telephoneNumber}</a></div>
          )}
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  nav: PropTypes.bool.isRequired,
};
