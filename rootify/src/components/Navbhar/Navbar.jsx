import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/auth">Login/Signup</Link></li>
        <li><Link to="/schemes">Scheme Finder</Link></li>
        <li><Link to="/disaster-relief">Disaster Relief</Link></li>
        <li><Link to="/ContactUs">Profile & Support</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
