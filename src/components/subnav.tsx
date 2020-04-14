import React, { useRef } from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface Props {
  heading: string;
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const Subnav: React.FC<Props> = ({ heading, items }) => {
  const uniqueId = useRef(Math.random().toString(32).slice(2));
  return (
    <Navbar variant="light" expand="md" fixed="top" bg="light" className="shadow subnav">
      <Navbar.Brand>
        <Link href="#"><a className="brandLink">{heading}</a></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`${uniqueId.current}-navbar-nav`} />
      <Navbar.Collapse id={`${uniqueId.current}-navbar-nav`}>
        <Nav className="ml-auto mr-md-2 mr-lg-4">
          {items.map((item, i) => (
            <Nav.Link href={item.url} key={i}>{item.name}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
      <style jsx>{`
        .brandLink{color:inherit;text-decoration:none}
      `}</style>
    </Navbar>
  );
};
