import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ProductShowcase from "./Components/ProductShowcasePage";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Admin from "./Components/Admin";

// Categories
import MenWear from "./Categories/MenWear";
import WomenWear from "./Categories/WomenWear";
import KidsWear from "./Categories/KidsWear";
import Footwear from "./Categories/Footwear";
import WinterWear from "./Categories/WinterWear";
import Accessories from "./Categories/Accessories";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductShowcase />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />

          {/* Categories Routes */}
          <Route path="/products/menswear" element={<MenWear />} />
          <Route path="/products/womenswear" element={<WomenWear />} />
          <Route path="/products/kidswear" element={<KidsWear />} />
          <Route path="/products/footwear" element={<Footwear />} />
          <Route path="/products/winterwear" element={<WinterWear />} />
          <Route path="/products/accessories" element={<Accessories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
