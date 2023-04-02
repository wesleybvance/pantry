/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Container, Nav, Navbar,
} from 'react-bootstrap';
import Image from 'next/image';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import logo from '../images/logo.png';

export default function NavBar() {
  const { user } = useAuth();
  const signOutNavBar = () => {
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
          <Image src={user.photoURL} alt="userURL" width="70" height="70" className="profile-photo" id="navbarprofile" onClick={signOutNavBar} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
