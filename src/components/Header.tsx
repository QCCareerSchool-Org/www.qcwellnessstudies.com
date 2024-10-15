import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useScreenWidth } from '../hooks/useScreenWidth';
import LogoLg from '../images/logo-lg.svg';
import Logo from '../images/logo.svg';
import * as breakpoints from '../lib/breakpoints';
import { showButton } from './ButtonWrapper';
import { useScrollPosition } from '@/hooks/useScrollPosition';

interface Props {
  enrollPath?: string;
  nav: boolean;
  buttonContent?: ReactNode;
  buttonOnClick?: () => void;
}

export const Header: FC<Props> = ({ nav, enrollPath = 'https://enroll.qcwellnessstudies.com/', buttonContent, buttonOnClick }) => {
  const [ key, setKey ] = useState(0);

  const scrollPosition = useScrollPosition();
  const screenWidth = useScreenWidth();

  const resetMenu = (): void => {
    setKey(k => (k < Number.MAX_SAFE_INTEGER ? k + 1 : 0));
  };

  return (
    <header className="flex-shrink-0">
      <Navbar key={key} id="mainNav" variant="dark" expand="md" fixed="top" bg="dark" className="d-flex justify-content-between">
        <Navbar.Brand>
          <Link href="/" onClick={resetMenu}>
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
              <Navbar.Collapse id="main-navbar-nav" data-testid="main-nav">
                <Nav className="ml-auto mr-md-2 mr-lg-4">
                  <NavDropdown title="Courses &amp; Tuition" id="coursesDropdown">
                    <Link href="/courses-and-tuition" onClick={resetMenu} className="dropdown-item">All Courses &amp; Tuition</Link>
                    <NavDropdown.Divider />
                    <Link href="/courses-and-tuition/sleep-consultant" onClick={resetMenu} className="dropdown-item">Pediatric Sleep Consultant</Link>
                    <Link href="/caregiver" onClick={resetMenu} className="dropdown-item">Caregiver</Link>
                    <Link href="/courses-and-tuition/skincare-consultant" onClick={resetMenu} className="dropdown-item">Skincare Consultant</Link>
                    <Link href="/courses-and-tuition/aging-in-place" onClick={resetMenu} className="dropdown-item">Aging in Place</Link>
                  </NavDropdown>
                  <NavDropdown title="How It Works" id="howItWorksDropdown">
                    <Link href="/how-it-works" onClick={resetMenu} className="dropdown-item">How Online Learning Works</Link>
                    <Link href="/student-resources" onClick={resetMenu} className="dropdown-item">Sleep Resources</Link>
                    <Link href="/faq" onClick={resetMenu} className="dropdown-item">FAQ</Link>
                  </NavDropdown>
                  <NavDropdown title="About" id="aboutDropdown">
                    <Link href="/about" onClick={resetMenu} className="dropdown-item">About QC</Link>
                    <Link href="/student-resources/blog/student-features" onClick={resetMenu} className="dropdown-item">Student Features</Link>
                    <Link href="/contact" onClick={resetMenu} className="dropdown-item">Contact</Link>
                  </NavDropdown>
                </Nav>
                <a className="btn btn-secondary" href={enrollPath}>Enroll Online</a>
              </Navbar.Collapse>
            </>
          )
        }
        {buttonContent && showButton(screenWidth, scrollPosition) &&
            <button onClick={buttonOnClick} className={'btn btn-light'}>{buttonContent}</button>
        }
      </Navbar>
    </header>
  );
};
