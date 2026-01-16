import React, { useState } from 'react';
import './App.css'; // Don't forget to import your CSS!
import Header from './components/Header';
import MenuCategory from './components/MenuCategory';
import MenuItem from './components/MenuItem';

export default function App() {
  const [filter, setFilter] = useState('All');

  const menuData = [
    { 
      category: "Coffee", 
      items: [
        { name: "Flat White", price: "4.50", description: "Velvety steamed milk over double espresso.", tags: ["Hot"] },
        { name: "Cold Brew", price: "5.00", description: "12-hour steep for a smooth kick.", tags: ["Cold"] }
      ]
    },
    { 
      category: "Eats", 
      items: [
        { name: "Avocado Toast", price: "12.00", description: "Sourdough, chili flakes, and radish.", tags: ["Vegan"] },
        { name: "Almond Croissant", price: "4.50", description: "Twice-baked with house-made frangipane.", tags: ["Sweet"] }
      ]
    }
  ];

  const filteredMenu = filter === 'All' 
    ? menuData 
    : menuData.filter(cat => cat.category === filter);

  return (
    <div className="menu-container">
      <Header name="BEANS & BREAD" tagline="ESTABLISHED 2024" />
      
      <nav className="nav-filters">
        {['All', 'Coffee', 'Eats'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </nav>

      <main>
        {filteredMenu.map((cat, index) => (
          <MenuCategory key={index} category={cat.category} items={cat.items} />
        ))}
      </main>
    </div>
  );
}