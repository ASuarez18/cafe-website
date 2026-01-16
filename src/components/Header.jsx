import React from 'react'

// 1. Mako
const Header = ({ name, tagline }) => (
 <header className="header elegant">
    <div className="border-frame">
      <h1 className="title">{name}</h1>
      <div className="divider-icon">✦</div> 
      <p className="tagline">{tagline}</p>
    </div>
  </header>
);

export default Header