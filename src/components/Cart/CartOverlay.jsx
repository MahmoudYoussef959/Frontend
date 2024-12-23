import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartOverlay.css';

const CartOverlay = () => {
  const { cartItems, showCart, toggleCart } = useContext(CartContext);

  if (!showCart) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-overlay-content">
        <button className="close-btn" onClick={toggleCart}>Close</button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartOverlay;