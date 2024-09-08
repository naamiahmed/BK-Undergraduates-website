// eslint-disable-next-line no-unused-vars
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#events">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#gallery"><img src="/assets/images/logo.png" alt="Logo" width={200} height={200} className='navbar-logo' /></a></li>
        <li><a href="#team">Events</a></li>
        <li><a href="#footer">Contact Us</a></li>
        <li><a href="#footer">Registation</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
