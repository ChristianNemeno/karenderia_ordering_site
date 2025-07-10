import React from "react";
import featuredDishes from "../../../data/featuredDishes";
import DishCard from "../../../components/menu/DishCard";
import './FeaturedItems.css'; 
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
                        <DishCard key={dish.id} dish={dish} />
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
