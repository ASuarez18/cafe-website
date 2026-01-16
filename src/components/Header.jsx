import React from "react";

// 1. Mako
const Header = ({ name, tagline }) => (
  <header className="header">
    <h1 className="title">{name}</h1>
    <p>This is a paragraph</p>
    <div className="divider"></div>
    <p>This is another paragraph</p>
    <p className="tagline">{tagline}</p>
  </header>
);

export default Header;
