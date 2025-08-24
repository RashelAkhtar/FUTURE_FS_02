import React from "react";
import CategoryPage from "../Components/CategoryPage";
import "../styles/Category.css";

function MenWear() {
  return (
    <div className="appliances-page">
      <div className="appliances-hero">
        <h1 className="appliances-title">Men’s Clothing</h1>
        <p className="appliances-subtitle">
          Upgrade his wardrobe with trendy tees, sharp shirts, and comfy
          essentials—all designed for style and comfort.
        </p>
      </div>
      <div className="appliances-category-container">
        <CategoryPage categoryName="menswear" />
      </div>
    </div>
  );
}

export default MenWear;
