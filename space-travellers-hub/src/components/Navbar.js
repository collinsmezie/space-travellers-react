import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="nav-bar">
            <h1 className="main-header">Space Travller's Hub</h1>
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
    )

}

export default Navbar;