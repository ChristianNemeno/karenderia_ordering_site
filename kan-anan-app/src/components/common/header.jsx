

import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
    return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">
          Laarni's
        </h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-orange-600">Home</a>
          <a href="#menu" className="text-gray-700 hover:text-orange-600">Menu</a>
          <a href="#about" className="text-gray-700 hover:text-orange-600">About</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <FiShoppingCart className="text-2xl text-gray-700 hover:text-orange-600" />
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
    );
};

export default Header;