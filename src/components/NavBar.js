import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
      <nav className="navbar">
        <Link to={'/about'}>ABOUT</Link>
        <Link to={'/ebooks'}>EBOOKS</Link>
        <Link to={'/contact'}>CONTACT</Link>
      </nav>
    );

}

export default NavBar;