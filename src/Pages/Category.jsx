import React from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';
import productImage1 from './Assets/productImage1.png';
import productImage2 from './Assets/productImage2.png';
import productImage3 from './Assets/productImage3.png';
import productImage4 from './Assets/productImage4.png';
import productImage6 from './Assets/productImage6.png';
import circleCart from './Assets/circleCart.png';  // Add your cart icon image here

const Category = () => {
  const navigate = useNavigate();

  const products = [
    { id: '1', name: 'Running Shorts', image: productImage1, price: 50.00 },
    { id: '2', name: 'Running Shoes', image: productImage2, price: 120.00 },
    { id: '3', name: 'Sports Jacket', image: productImage3, price: 80.00 },
    { id: '4', name: 'Yoga Pants', image: productImage4, price: 60.00 },
    { id: '1', name: 'Fitness Tracker', image: productImage1, price: 150.00 },
    { id: '6', name: 'Water Bottle', image: productImage6, price: 20.00 }
  ];

  const handleCardClick = (productId) => {
    navigate(`/pdp/${productId}`);
  };

  return (
    <div className='category'>
      <h1>Women</h1>
      <div className='women-items'>
        {products.map((product) => (
          <div className='product-card' key={product.id} onClick={() => handleCardClick(product.id)}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>
            <button className='circleCartButton'>
              <img src={circleCart} alt="Add to Cart" className="circleCart" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;