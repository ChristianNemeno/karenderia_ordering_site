import React from 'react';

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
      <div className="dish-image-container">
        <img
          src={dish.image}
          alt={dish.name}
          className="dish-image"
        />
      </div>

      <div className="dish-content">
        <h3 className="dish-name">
          {dish.name}
        </h3>
        <p className="dish-description">
          {dish.description}
        </p>

        <button className="learn-more-button">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default DishCard;
