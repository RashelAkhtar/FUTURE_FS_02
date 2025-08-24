import React from "react";
import CategoryPage from "../Components/CategoryPage";

function KidsWear() {
  return (
    <div className="appliances-page">
      <div className="appliances-hero">
        <h1 className="appliances-title">Kids & Baby Fashion</h1>
        <p className="appliances-subtitle">
          Adorable, durable, and playful outfits to keep your little ones
          stylish from playtime to party time!
        </p>
      </div>
      <div className="appliances-category-container">
        <CategoryPage categoryName="kidswear" />
      </div>
    </div>
  );
}

export default KidsWear;
