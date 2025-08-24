import React from "react";
import CategoryPage from "../Components/CategoryPage";
import "../styles/Category.css";

function Accessories() {
  return (
    <div className="appliances-page">
      <div className="appliances-hero">
        <h1 className="appliances-title">Accessories</h1>
        <p className="appliances-subtitle">
          Complete your look with handbags, watches, jewelry, and must-have
          accents for any outfit.
        </p>
      </div>
      <div className="appliances-category-container">
        <CategoryPage categoryName="accessories" />
      </div>
    </div>
  );
}

export default Accessories;
