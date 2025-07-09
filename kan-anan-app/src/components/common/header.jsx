

import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import '../../styles/components/common/header.css';

const Header = () => {
    return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          Laarni's
        </div>
        <nav className="main-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="header-actions">
          <button className="cart-button">
            <FiShoppingCart className="cart-icon" />
            <span className="cart-badge">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
    );
};

export default Header;