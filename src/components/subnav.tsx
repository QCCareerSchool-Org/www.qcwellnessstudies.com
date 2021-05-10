import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface Props {
  heading: string;
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const Subnav: React.FC<Props> = ({ heading, items }) => {
  const radix = 32;
  const startPosition = 2;
  const uniqueId = useRef(Math.random().toString(radix).slice(startPosition));
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

Subnav.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
