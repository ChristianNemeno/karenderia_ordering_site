import React from 'react';
import '../../styles/components/common/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">Laarni's</h3>
            <p className="footer-text">
              Lutong bahay na makabuhay.
            </p>
          </div>
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="quick-links-list">
              <li><a href="#menu" className="quick-link">Menu</a></li>
              <li><a href="#about" className="quick-link">About Us</a></li>
              <li><a href="#contact" className="quick-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Contact Info</h4>
            <p className="footer-text">
              Phone: (555) 123-4567<br />
              Email: info@foodiehub.com
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 FoodieHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;