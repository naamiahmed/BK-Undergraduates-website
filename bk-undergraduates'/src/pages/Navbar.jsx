// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/gallery"><img src="/assets/images/logo.png" alt="Logo" width={200} height={200} className='navbar-logo' /></Link></li>
        <li><Link to="/team">Events</Link></li>
        <li><Link to="/footer">Contact Us</Link></li>
        <li><Link to="/registration">Registration</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;