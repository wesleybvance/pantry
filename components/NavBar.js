/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Container, Nav, Navbar, Button,
} from 'react-bootstrap';
import Image from 'next/image';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import logo from '../images/logo.png';

export default function NavBar() {
  const { user } = useAuth();
  const signOutNavBar = () => {
    console.warn(user.photoURL);
    if (window.confirm('Are you sure you want to sign out?')) {
      signOut();
    }
  };

  return (
    <Navbar expand="lg" variant="light" className="nav-bar">
      <Container fluid>
        <Nav.Link href="/"><Image src={logo} alt="Pantry Logo" width={250} height={125} /></Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '500px' }}
            // navbarScroll
          >
            <Nav.Link className="nav-text text-bold" href="/pantry">my pantry</Nav.Link>
            <Nav.Link className="nav-text" href="/">public recipes</Nav.Link>
            <Nav.Link className="nav-text" href="/recipes/user">my recipes</Nav.Link>
            <Nav.Link className="nav-text" href="/recipes/new">new recipe</Nav.Link>
            <Nav.Link className="nav-text" href="/recipes/user/readytocook">cook now</Nav.Link>
          </Nav>
          <div className="sign-out-container">
            <Button className="sign-out-btn-nav" variant="danger" onClick={signOutNavBar}>SIGN OUT</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
