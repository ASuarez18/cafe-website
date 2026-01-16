import React from 'react'

// 1. Mako
const Header = ({ name, tagline }) => (
 <header className="header">
    <h1 className="title">{name}</h1>
    <div className="divider"></div>
    <p className="tagline">{tagline}</p>
  </header>
);

export default Header