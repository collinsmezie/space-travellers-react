import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Navbar = () => (
  <nav className="nav-bar">
    <Image src="../planet.png" className="logo" />
    <h1 className="main-header">Space Traveler&apos;s Hub</h1>
    <ul className="nav-items">
      <li className="list-item">
        <NavLink to="/" className="links">Rockets</NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/missions" className="links">Missions</NavLink>
      </li>
      <div className="divider" />
      <li className="list-item">
        <NavLink to="/profile" className="links">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
