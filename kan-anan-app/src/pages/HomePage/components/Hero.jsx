import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Hero.css'; 

const Hero = () => {
  const sparkleRef = useRef(null);

  useEffect(() => {
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const sparkleClass = size > 3 ? 'sparkles-l' : size > 2 ? 'sparkles-m' : 'sparkles-s';
      
      sparkle.classList.add(sparkleClass);
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
      sparkle.style.animationDelay = `${Math.random()}s`;

      sparkleRef.current.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 3000);
    };

    const interval = setInterval(createSparkle, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
    >
      <div className="hero-overlay"></div>
      <div className="sparkle-background" ref={sparkleRef}></div>

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
            <div className="placeholder-image"></div>
            
            <div className="profile-image profile-1"></div>
            <div className="profile-image profile-2"></div>
            <div className="profile-image profile-3"></div>
            <div className="profile-image profile-4"></div>
            <div className="profile-image profile-5"></div>
            <div className="profile-image profile-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;