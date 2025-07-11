

import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../../styles/components/common/header.css';

const Header = () => {
    return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          Laarni's
        </div>
        <nav className="main-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        
      </div>
    </header>
    );
};

export default Header;