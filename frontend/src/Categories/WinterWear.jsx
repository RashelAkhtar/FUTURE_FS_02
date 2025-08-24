import React from "react";
import CategoryPage from "../Components/CategoryPage";
import "../styles/Category.css";

function WinterWear() {
  return (
    <div className="appliances-page">
      <div className="appliances-hero">
        <h1 className="appliances-title">Winter & Seasonal Wear</h1>
        <p className="appliances-subtitle">
          Stay warm in style with cozy jackets, snug sweaters, and winter-ready
          essentials.
        </p>
      </div>
      <div className="appliances-category-container">
        <CategoryPage categoryName="winterwear" />
      </div>
    </div>
  );
}

export default WinterWear;
