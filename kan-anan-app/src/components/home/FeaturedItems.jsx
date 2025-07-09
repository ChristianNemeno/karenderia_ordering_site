import React from "react";
import featuredDishes from "../../data/featuredDishes";
import '../../styles/components/home/FeaturedItems.css';

const FeaturedItems = () => {
    return (
        <section className="featured-items-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Chef's Specials</h2>
                    <p className="section-subtitle">
                        Discover our most popular dishes, carefully crafted by our executive chef
                    </p>
                </div>

                <div className="grid-container">
                    {featuredDishes.map((dish) => (
                        <div
                            key={dish.id}
                            className="dish-card"
                        >
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
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="view-menu-button">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedItems;   
