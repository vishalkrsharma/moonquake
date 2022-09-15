import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='navbar__brand' to='/'>
        MOON
      </Link>
      <ul className='navbar__links'>
        {/* <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/model'>Model</Link>
        </li> */}
        <li>
          <Link className='navbar__links__link' to='/about'>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
