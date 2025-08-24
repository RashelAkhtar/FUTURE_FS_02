import React, { useEffect, useState } from "react";
import "../styles/ProductShowcasePage.css";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartMessage, setCartMessage] = useState("");

  const API_BASE = import.meta.env.VITE_API_URL;

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE}/products`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      let cartID = localStorage.getItem("cartID");

      // Create new cart if none exists
      if (!cartID) {
        const newCartRes = await fetch(`${API_BASE}/cart/new`);
        const newCartData = await newCartRes.json();
        cartID = newCartData.cart_id;
        localStorage.setItem("cartID", cartID);
      }

      const res = await fetch(`${API_BASE}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart_id: cartID,
          product_id: productId,
          quantity: 1,
        }),
      });

      if (!res.ok) throw new Error(`Failed to add to cart`);

      // Display add to cart message
      setCartMessage("✅ Added to cart!");
      setTimeout(() => setCartMessage(""), 3000); // Hide after 3 sec
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="dots-loading-container">
        <div className="dots-loading">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <p>Loading products</p>
      </div>
    );
  }

  return (
    <div>
      <div className="products-page">
        <h1>Our Products</h1>
        <div className="category-links">
          <Link to="/products/menswear">Men’s Clothing</Link>
          <Link to="/products/womenswear">Women’s Clothing</Link>
          <Link to="/products/kidswear">Kids & Baby Fashion</Link>
          <Link to="/products/footwear">Footwear</Link>
          <Link to="/products/winterwear">Winter & Seasonal Wear</Link>
          <Link to="/products/accessories">Accessories</Link>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      {cartMessage && <div className="cart-message">{cartMessage}</div>}
    </div>
  );
}

export default ProductsPage;
