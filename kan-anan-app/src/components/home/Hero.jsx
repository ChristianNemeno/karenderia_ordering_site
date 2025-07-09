import React from "react";
import { Link } from "react-router-dom";
import bg from '../../assets/bg.jpg';
import '../../styles/components/home/Hero.css';

const Hero = () => {
  return (
    <section
      className="hero-section"
    >
      <div className="hero-overlay"></div>

      <div className="hero-main-content">
        <div className="hero-text-content">
          <h1 className="hero-headline">
            <span className="hero-headline-bold">Unleash</span> Your <span className="hero-headline-emphasized">Culinary</span> Journey
          </h1>
          <p className="hero-subtitle">
            Discover a world of flavors, crafted by expert chefs and delivered to your door.
          </p>
          <Link
            to="/menu"
            className="hero-cta-button"
          >
            Explore Dishes
          </Link>
          
        </div>

        <div className="hero-circle-visualization">
          <div className="hero-circle-main">
            <span className="hero-specialists-text">Pick your poison</span>
            <div className="profile-image profile-1"></div>
            <div className="profile-image profile-2"></div>
            <div className="profile-image profile-3"></div>
            <div className="profile-image profile-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;