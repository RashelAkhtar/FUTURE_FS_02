import React, { useEffect, useState } from "react";
import CategoryPage from "../Components/CategoryPage";

function Footwear() {
  return (
    <div className="appliances-page">
      <div className="appliances-hero">
        <h1 className="appliances-title">Footwear</h1>
        <p className="appliances-subtitle">
          Step out in confidence with sneakers, heels, boots, and more—perfect
          for every occasion.
        </p>
      </div>
      <div className="appliances-category-container">
        <CategoryPage categoryName="footwear" />
      </div>
    </div>
  );
}

export default Footwear;
