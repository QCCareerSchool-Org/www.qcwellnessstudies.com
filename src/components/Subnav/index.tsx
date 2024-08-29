import Link from 'next/link';
import type { FC } from 'react';
import { useRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './index.module.scss';

interface Props {
  heading: string;
  items: {
    name: string;
    url: string;
  }[];
}

export const Subnav: FC<Props> = ({ heading, items }) => {
  const radix = 32;
  const startPosition = 2;
  const uniqueId = useRef(Math.random().toString(radix).slice(startPosition));
  return (
    <Navbar variant="light" expand="md" fixed="top" bg="light" className="shadow subnav">
      <Navbar.Brand>
        <Link href="#" className={`brandLink ${styles.link}`}>{heading}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`${uniqueId.current}-navbar-nav`} />
      <Navbar.Collapse id={`${uniqueId.current}-navbar-nav`}>
        <Nav className="ml-auto mr-md-2 mr-lg-4">
          {items.map((item, i) => <Nav.Link href={item.url} key={i}>{item.name}</Nav.Link>)}
        </Nav>
      </Navbar.Collapse>
      <style jsx>{`
        .brandLink{color:inherit !important;text-decoration:none !important}
      `}</style>
    </Navbar>
  );
};
