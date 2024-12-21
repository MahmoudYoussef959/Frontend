import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartOverlay.css';

function CartOverlay() {
  const { cartItems, showCart, toggleCart } = useContext(CartContext);

  if (!showCart) return null;

  return (
    <div className="cart-overlay">
      <button className="close-cart" onClick={toggleCart}>Close</button>
      <h2>Cart Items</h2>
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
    </div>
  );
}

export default CartOverlay;