import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
      <nav className="navbar">
        <NavLink to={'/about'} activeClassName="active">ABOUT</NavLink>
        <NavLink to={'/ebooks'} activeClassName="active">EBOOKS</NavLink>
        <NavLink to={'/contact'} activeClassName="active">CONTACT</NavLink>
      </nav>
    );

}

export default NavBar;