/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Image } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link passHref href="/">
          <a className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            Pantry
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/ingredients/new">
                <a className="nav-link">
                  +
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/pantry">
                <a className="nav-link">
                  my pantry
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/recipes/new">
                <a className="nav-link">
                  +
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/recipes">
                <a className="nav-link">
                  my recipes
                </a>
              </Link>
            </li>
            <Image src={user.photoURL} alt="signOut" onClick={signOut} />
          </ul>
        </div>
      </div>
    </nav>
  );
}
