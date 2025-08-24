import React from "react";
import CategoryPage from "../Components/CategoryPage";
import "../styles/Category.css";

function WomenWear() {
  return (
    <div className="appliances-page">
      <div className="appliances-hero">
        <h1 className="appliances-title">Women’s Clothing</h1>
        <p className="appliances-subtitle">
          Discover chic dresses, cozy knits, and statement pieces that blend
          elegance with everyday ease.
        </p>
      </div>
      <div className="appliances-category-container">
        <CategoryPage categoryName="womenswear" />
      </div>
    </div>
  );
}

export default WomenWear;
