import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <nav className="navbar">
      <div className="navbar-brand">
         
        <header>
  <h1><span className="leaf-icon">🌱</span> Rootify</h1>
  <div className="tagline">Grounded Solutions for Farmers</div>
</header> 
        </div><br />
        
    
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/MarketRates">Market Prices</Link></li>
        <li><Link to="/Loans">Loans & schemes </Link></li>
        <li><Link to="/DisasterRelief">Claims </Link></li>
        <li><Link to="/Auth">Login</Link></li>
        <li><Link to="/ContactUs">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;