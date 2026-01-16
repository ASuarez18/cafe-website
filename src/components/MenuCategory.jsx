import React from 'react'
import MenuItem from './MenuItem';

// Joy
const MenuCategory = ({ category, items }) => (
  <section className="category-section">
  <h2 className="category-title">{category}</h2>
  <div className="menu-grid">
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </div>
</section>
);

export default MenuCategory