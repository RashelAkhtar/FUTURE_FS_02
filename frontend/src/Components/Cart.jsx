import React, { useEffect, useState } from "react";
import "../styles/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const cartID = localStorage.getItem("cartID");

  const API_BASE = import.meta.env.VITE_API_URL;

  const fetchCart = async () => {
    try {
      const response = await fetch(`${API_BASE}/cart/${cartID}`);
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await response.json();
      setCartItems(data.cartItems || []);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  };

  useEffect(() => {
    if (cartID && cartID !== "null" && cartID !== "undefined") {
      fetchCart();
    }
  }, [cartID]);

  const deleteCart = async (cartId, productId) => {
    try {
      const response = await fetch(`${API_BASE}/cart/${cartId}/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to remove item from cart");
      }

      const result = await response.json();
      console.log(result.message);
      // Refresh cart after deletion
      fetchCart();
      return result;
    } catch (error) {
      console.error("Error removing item from cart: ", error);
      throw error;
    }
  };

  if (!cartID || cartID === "null" || cartID === "undefined") {
    return (
      <div className="cart-page">
        <h1>Your Shopping Cart</h1>
        <div className="empty-cart-message">
          <h2>Your cart is empty</h2>
          <p>You haven't added anything yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <h2>No items in your cart</h2>
          <p>Start shopping to add items to your cart.</p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">₹{item.price} each</div>
                <div className="cart-item-quantity">
                  Quantity: {item.quantity}
                </div>
              </div>
              <div className="cart-item-total">
                ₹{item.price * item.quantity}
              </div>
              <div>
                <button
                  className="delete-btn"
                  onClick={() => deleteCart(cartID, item.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
