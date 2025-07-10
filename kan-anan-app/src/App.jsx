import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Common components
import Header from './components/common/header';
import Footer from './components/common/footer';

// Page components
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import MenuPage from './pages/MenuPage/MenuPage';
import CartCheckoutPage from './pages/CartCheckoutPage/CartCheckoutPage';
import ContactPage from './pages/ContactPage/ContactPage';

import './App.css'; // Your main App styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart-checkout" element={<CartCheckoutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* add 404 later */}
            
          </Routes>
        </main>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;