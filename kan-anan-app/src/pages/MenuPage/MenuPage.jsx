import React, { useState, useEffect } from 'react';
import DishCard from '../../components/menu/DishCard';
import menuItems from '../../data/menuItems';
import './MenuPage.css'; 

const MenuPage = () => {
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    let itemsToDisplay = menuItems;

    if (selectedCategory !== 'All') {
      itemsToDisplay = itemsToDisplay.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      itemsToDisplay = itemsToDisplay.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(itemsToDisplay);
  }, [selectedCategory, searchTerm]);

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const handleLearnMore = (dish) => {
    setSelectedDish(dish);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDish(null);
  };

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      <p className="menu-description">Explore our delicious dishes.</p>

      <div className="menu-controls">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search dishes..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="dish-grid">
        {filteredItems.map(dish => (
          <DishCard key={dish.id} dish={dish} onLearnMore={handleLearnMore} />
        ))}
      </div>

      {showModal && selectedDish && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h2>{selectedDish.name}</h2>
            <img src={selectedDish.image} alt={selectedDish.name} className="modal-image" />
            <p>{selectedDish.description}</p>
            <p><strong>Price:</strong> ₱{selectedDish.price.toFixed(2)}</p>
            <p><strong>Category:</strong> {selectedDish.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPage;