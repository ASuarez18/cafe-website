import React from 'react'
import MenuItem from './MenuItem';

// Joy
const MenuCategory = ({ category, items }) => (
<section className="py-12 px-4 max-w-7xl mx-auto">
  <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900">{category}</h2>
    <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
      {items.length} Items
    </span>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((item) => (
      <div key={item.id} className="group relative transition-all duration-300 hover:-translate-y-1">
        <MenuItem {...item} />
        {/* Adds a subtle glow effect on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300 blur" />
      </div>
    ))}
  </div>
</section>
);

export default MenuCategory