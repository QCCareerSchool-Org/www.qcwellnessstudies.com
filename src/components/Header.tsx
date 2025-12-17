import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { showButton } from './ButtonWrapper';
import { useScreenWidth } from '../hooks/useScreenWidth';
import LogoLg from '../images/logo-lg.svg';
import Logo from '../images/logo.svg';
import * as breakpoints from '../lib/breakpoints';
import { useScrollPosition } from '@/hooks/useScrollPosition';

interface Props {
  enrollPath?: string;
  nav: boolean;
  buttonContent?: ReactNode;
  onButtonOnClick?: () => void;
}

export const Header: FC<Props> = ({ nav, enrollPath = 'https://enroll.qcwellnessstudies.com/', buttonContent, onButtonOnClick: handleButtonClick }) => {
  const [ key, setKey ] = useState(0);

  const scrollPosition = useScrollPosition();
  const screenWidth = useScreenWidth();

  const handleClick = (): void => {
    setKey(k => (k < Number.MAX_SAFE_INTEGER ? k + 1 : 0));
  };

  return (
    <header className="flex-shrink-0 bg-dark">
      <div className="container">
        <Navbar key={key} id="mainNav" variant="dark" expand="md" bg="dark">
          <Navbar.Brand>
            <Link href="/" onClick={handleClick}>
              {(nav && (screenWidth < breakpoints.sm.start || (screenWidth >= breakpoints.md.start && screenWidth < breakpoints.lg.start))) || (!nav && screenWidth < breakpoints.md.start)
                ? <Image width="34" height="32" data-testid="header-logo-sm" className="header-logo" src={Logo as StaticImageData} alt="QC Wellness Studies" />
                : <Image width="212" height="32" data-testid="header-logo-lg" className="header-logo" src={LogoLg as StaticImageData} alt="QC Wellness Studies" />
              }
            </Link>
          </Navbar.Brand>
          {nav
            && (
              <>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav" data-testid="main-nav" className="justify-content-end">
                  <Nav className="ml-auto mr-md-2 mr-lg-4">
                    <NavDropdown title="Courses &amp; Tuition" id="coursesDropdown">
                      <Link href="/courses-and-tuition" onClick={handleClick} className="dropdown-item">All Courses &amp; Tuition</Link>
                      <NavDropdown.Divider />
                      <Link href="/courses-and-tuition/sleep-consultant" onClick={handleClick} className="dropdown-item">Pediatric Sleep Consultant</Link>
                      <Link href="/caregiver" onClick={handleClick} className="dropdown-item">Caregiver</Link>
                      <Link href="/courses-and-tuition/skincare-consultant" onClick={handleClick} className="dropdown-item">Skincare Consultant</Link>
                      <Link href="/courses-and-tuition/aging-in-place" onClick={handleClick} className="dropdown-item">Aging in Place</Link>
                    </NavDropdown>
                    <NavDropdown title="How It Works" id="howItWorksDropdown">
                      <Link href="/how-it-works" onClick={handleClick} className="dropdown-item">How Online Learning Works</Link>
                      <Link href="/student-resources" onClick={handleClick} className="dropdown-item">Sleep Resources</Link>
                      <Link href="/faq" onClick={handleClick} className="dropdown-item">FAQ</Link>
                    </NavDropdown>
                    <NavDropdown title="About" id="aboutDropdown">
                      <Link href="/about" onClick={handleClick} className="dropdown-item">About QC</Link>
                      <Link href="/contact" onClick={handleClick} className="dropdown-item">Contact</Link>
                      <Link href="/student-resources/blog/student-features" onClick={handleClick} className="dropdown-item">Student Features</Link>
                    </NavDropdown>
                  </Nav>
                  <a className="btn btn-secondary" href={enrollPath}>Enroll Online</a>
                </Navbar.Collapse>
              </>
            )
          }
          {buttonContent && showButton(screenWidth, scrollPosition) &&
            <button onClick={handleButtonClick} className="btn btn-light">{buttonContent}</button>
          }
        </Navbar>
      </div>
    </header>
  );
};
