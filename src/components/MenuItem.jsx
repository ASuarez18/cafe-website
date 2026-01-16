import React from "react";

// jamie
const MenuItem = ({ name, price, description, tags, image, rating }) => (
  <div className="menu-item">
    
    {image && <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }} />}

    <div className="item-main">
      <h3 className="item-name">{name}</h3>
      <span className="item-price">${price}</span>
    </div>

    <p className="item-desc">{description}</p>

    
    {rating && (
      <div style={{ fontSize: "0.85rem", color: "#ffb400", margin: "5px 0" }}>
        {"⭐".repeat(Math.round(rating))} ({rating.toFixed(1)})
      </div>
    )}

    
    {tags && tags.length > 0 && (
      <div className="tag-container">
        {tags.map((tag) => {
          const colorMap = {
            Spicy: "#ff6b6b",
            Vegan: "#6ab04c",
            New: "#f9ca24",
          };
          return (
            <span
              key={tag}
              className="tag"
              style={{ backgroundColor: colorMap[tag] || "#eaddcf", color: "#fff" }}
            >
              {tag}
            </span>
          );
        })}
      </div>
    )}
  </div>
);

export default MenuItem;