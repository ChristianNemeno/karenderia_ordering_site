import React from "react";
import { Link } from "react-router-dom"; // If you're using react-router
import bg from '../../assets/bg.jpg';
const Hero = ()  => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/50 absolute inset-0 z-0"></div>

      <div className="z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Authentic Flavors, Delivered.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Taste the tradition in every bite – fresh, fast, and unforgettable.
        </p>
        <Link
          to="/menu"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default Hero;