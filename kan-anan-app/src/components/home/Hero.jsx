import React from "react";
import { Link } from "react-router-dom"; 
import bg from '../../assets/bg.jpg';
import '../../styles/components/home/Hero.css';

const Hero = ()  => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Authentic Flavors, Delivered.
        </h1>
        <p className="hero-subtitle">
          Taste the tradition in every bite – fresh, fast, and unforgettable.
        </p>
        <Link
          to="/menu"
          className="hero-button"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default Hero;