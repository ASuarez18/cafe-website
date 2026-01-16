import React from 'react'
import MenuItem from './MenuItem';

// Joy
const MenuCategory = ({ category, items }) => (
  <section className="category-section">
  <h2 className="category-title">{category}</h2>
  <p>kausgdkua</p>
  <div className="menu-grid">
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </div>
  <p>adasdasd</p>
  <p>adasdasd</p>
  <p>adasdasd</p>
  <p>adasdasd</p>
  <p>asiljslaj</p>
  <p>aklsjdlak</p>
  <p>fcjal;ksdj</p>
  <p>lajskl</p>
  <p>ajksljdkl</p>
</section>
);

export default MenuCategory