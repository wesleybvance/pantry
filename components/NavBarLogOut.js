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

  // <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  //   <div className="container-fluid">
  //     <Link passHref href="/">
  //       <a className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
  //         Logo
  //       </a>
  //     </Link>
  //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon" />
  //     </button>

  //     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
  //       <ul className="navbar-nav me-auto">
  //         <li className="nav-item">
  //           <Link passHref href="/">
  //             <a className="nav-link">
  //               Public Recipes
  //             </a>
  //           </Link>
  //         </li>
  //         <div className="flexp">
  //           <Button onClick={signIn}>Sign In</Button>
  //         </div>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  );
}
