import React from "react";

// jamie
const MenuItem = ({ name, price, description, tags }) => (
  <div className="menu-item">
    {" "}
    <div className="item-main">
      <h3 className="item-name">{name}</h3>{" "}
      <span className="item-price">${price}</span>{" "}
    </div>
    <p className="item-desc">{description}</p>{" "}
    {tags && (
      <div className="tag-container">
        {" "}
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}{" "}
      </div>
    )}{" "}
  </div>
);

export default MenuItem;
