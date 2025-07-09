import React from "react";
import featuredDishes from "../../data/featuredDishes";

const FeaturedItems = () => {
    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Chef's Specials</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our most popular dishes, carefully crafted by our executive chef
                    </p>
                </div>

                {/* Featured Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredDishes.map((dish) => (
                        <div
                            key={dish.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {dish.name}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {dish.description}
                                </p>

                                {/* Optional: Add a "Learn More" button */}
                                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedItems;   
