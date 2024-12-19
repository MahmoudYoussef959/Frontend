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
    const productName = "Running Short";
    const price = 50.00;

    const handleCardClick = () => {
        navigate('/pdp');
    };
    const handleCardClick2 = () => {
        navigate('/pdp2');
    };
    const handleCardClick3 = () => {
        navigate('/pdp3');
    };
    const handleCardClick4 = () => {
        navigate('/pdp4');
    };
    const handleCardClick6 = () => {
        navigate('/pdp6');
    };

    return (
        <div className='category'>
            <h1>Women</h1>
            <div className='women-items'>
                <div className='product-card' onClick={handleCardClick}>
                    <img src={productImage1} alt={productName} className="product-image" />
                    <h2 className="product-name">{productName}</h2>
                    <p className="product-price">${price}</p>
                    <button className='circleCartButton'><img src={circleCart} alt="Add to Cart" className="circleCart" /></button>
                </div>
                <div className='product-card' onClick={handleCardClick2}>
                    <img src={productImage2} alt={productName} className="product-image" />
                    <h2 className="product-name">{productName}</h2>
                    <p className="product-price">${price}</p>
                    <button className='circleCartButton'><img src={circleCart} alt="Add to Cart" className="circleCart" /></button>
                </div>
                <div className='product-card' onClick={handleCardClick3}>
                    <img src={productImage3} alt={productName} className="product-image" />
                    <h2 className="product-name">{productName}</h2>
                    <p className="product-price">${price}</p>
                    <button className='circleCartButton'><img src={circleCart} alt="Add to Cart" className="circleCart" /></button>
                </div>
                <div className='product-card' onClick={handleCardClick4}>
                    <img src={productImage4} alt={productName} className="product-image" />
                    <h2 className="product-name">{productName}</h2>
                    <p className="product-price">${price}</p>
                    <button className='circleCartButton'><img src={circleCart} alt="Add to Cart" className="circleCart" /></button>
                </div>
                <div className='product-card' onClick={handleCardClick}>
                    <img src={productImage1} alt={productName} className="product-image" />
                    <h2 className="product-name">{productName}</h2>
                    <p className="product-price">${price}</p>
                    <button className='circleCartButton'><img src={circleCart} alt="Add to Cart" className="circleCart" /></button>
                </div>
                <div className='product-card' onClick={handleCardClick6}>
                    <img src={productImage6} alt={productName} className="product-image" />
                    <h2 className="product-name">{productName}</h2>
                    <p className="product-price">${price}</p>
                    <button className='circleCartButton'><img src={circleCart} alt="Add to Cart" className="circleCart" /></button>
                </div>
            </div>
        </div>
    );
}

export default Category;