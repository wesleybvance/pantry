/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Button, Container, Nav, Navbar,
} from 'react-bootstrap';
import Image from 'next/image';
import logo from '../images/logo.png';
import { signIn } from '../utils/auth';

export default function NavBarLogOut() {
  return (
    <Navbar className="nav-bar" expand="lg" id="navbar">
      <Container fluid>
        <Nav.Link href="/"><Image src={logo} alt="Pantry Logo" width={250} height={125} /></Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="nav-text" href="/">public recipes</Nav.Link>
          </Nav>
          <Button variant="danger sign-in-btn" onClick={signIn}>SIGN IN</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
