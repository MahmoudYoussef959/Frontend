import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';
import productImage1 from './Assets/productImage1.png';
import productImage2 from './Assets/productImage2.png';
import productImage3 from './Assets/productImage3.png';
import productImage4 from './Assets/productImage4.png';
import productImage5 from './Assets/productImage5.png';
import productImage6 from './Assets/productImage6.png';
import circleCart from './Assets/circleCart.png';  // Add your cart icon image here

const Category = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); // Mock cart state

  const products = [
    { id: '1', name: 'Running Short', image: productImage1, price: 50.00, inStock: true },
    { id: '2', name: 'Running Short', image: productImage2, price: 50.00, inStock: true },
    { id: '3', name: 'Running Short', image: productImage3, price: 50.00, inStock: false },  // Out of stock
    { id: '4', name: 'Running Short', image: productImage4, price: 50.00, inStock: true },
    { id: '5', name: 'Running Short', image: productImage5, price: 50.00, inStock: true },
    { id: '6', name: 'Running Short', image: productImage6, price: 50.00, inStock: true }
  ];

  const handleCardClick = (productId) => {
    navigate(`/pdp/${productId}`);
  };

  const handleQuickShop = (product) => {
    // Add the product to the cart with its default option (first option, here we assume there's only one for simplicity)
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className='category'>
      <h1>Women</h1>
      <div className='women-items'>
        {products.map((product) => (
          <div 
            className='product-card' 
            key={product.id} 
            data-testid={`product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => handleCardClick(product.id)}
            style={{
              cursor: product.inStock ? 'pointer' : 'not-allowed',
              opacity: product.inStock ? 1 : 0.5
            }}
          >
            <div className='product-image-container'>
              <img 
                src={product.image} 
                alt={product.name} 
                className={`product-image ${!product.inStock ? 'out-of-stock' : ''}`} 
              />
              {!product.inStock && <div className="out-of-stock-message">Out of Stock</div>}
            </div>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            {product.inStock && (
              <button 
                className='circleCartButton' 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  handleQuickShop(product);
                }}
              >
                <img src={circleCart} alt="Add to Cart" className="circleCart" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
