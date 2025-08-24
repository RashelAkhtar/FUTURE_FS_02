import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your One-Stop Online Store</h1>
          <p>Discover amazing products at unbeatable prices.</p>
          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <Link to="/products/menswear">
            <div className="category-card">
              <img
                src="https://i.pinimg.com/originals/94/c8/ff/94c8ff236d7a005d9993722a92d24d50.jpg"
                alt="Men’s Clothing"
              />
              <h3>Men’s Clothing</h3>
            </div>
          </Link>
          <Link to="/products/womenswear">
            <div className="category-card">
              <img
                src="https://i.pinimg.com/originals/42/fb/37/42fb37d82eb98788f8bb09f11f313752.png"
                alt="Women’s Clothing"
              />
              <h3>Women’s Clothing</h3>
            </div>
          </Link>
          <Link to="/products/kidswear">
            <div className="category-card">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.stip__ROYpTPaQLJ31zQwAHaHa?pid=Api&P=0&h=180https://ae01.alicdn.com/kf/HTB13ulCQFXXXXbPXVXXq6xXFXXXY/2017-new-ritual-children-s-clothing-boys-and-girls-baby-clothes-short-sleeve-children-s-suits.jpg"
                alt="Kids & Baby Fashion"
              />
              <h3>Kids & Baby Fashion</h3>
            </div>
          </Link>
          <Link to="/products/footwear">
            <div className="category-card">
              <img
                src="https://images.pexels.com/photos/8159427/pexels-photo-8159427.jpeg"
                alt="Footwear"
              />
              <h3>Footwear</h3>
            </div>
          </Link>
          <Link to="/products/winterwear">
            <div className="category-card">
              <img
                src="https://sustainablysorted.com/wp-content/uploads/2024/07/eco-friendly-winter-clothing.jpg"
                alt="Winter & Seasonal Wear"
              />
              <h3>Winter & Seasonal Wear</h3>
            </div>
          </Link>
          <Link to="/products/accessories">
            <div className="category-card">
              <img
                src="https://img.freepik.com/premium-photo/flat-lay-with-mens-accessories-happy-fathers-day_826551-1811.jpg"
                alt="Accessories"
              />
              <h3>Accessories</h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
