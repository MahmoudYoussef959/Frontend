import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PDP.css';

const PDP = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Fetch product data
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/data/items.json');
        const data = await response.json();
        const productData = data.find(item => item.id === productId);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  useEffect(() => {
    if (product && product.images) {
      setSelectedImage(product.images[0]);
      setCurrentIndex(0);
    }
  }, [product]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // Handling previous and next image carousel functionality
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(product.images[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(product.images[newIndex]);
  };

  // Disable Add to Cart button until size and color are selected
  const isAddToCartDisabled = !selectedSize || !selectedColor;

  return (
    <div className="pdp">
      <div className="pdp-left">
        {/* Image Thumbnails */}
        <div className="image-thumbnails" data-testid="product-gallery">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setSelectedImage(img);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
      <div className="pdp-right">
        <div className="image-container">
          <button className="arrow left" onClick={handlePrev}>&lt;</button>
          <img src={selectedImage} alt="Selected Product" className="large-image" />
          <button className="arrow right" onClick={handleNext}>&gt;</button>
        </div>
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>

        {/* Product Attributes */}
        <div className="size" data-testid="product-attribute-size">
          <h4>SIZE:</h4>
          <div className="size-selection">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                className={selectedSize === size ? 'selected' : ''}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="color" data-testid="product-attribute-color">
          <h4>COLOR:</h4>
          <div className="color-selection">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={selectedColor === color ? 'selected' : ''}
                style={{
                  backgroundColor: color,
                  border: 'none',
                  width: '50px',
                  height: '50px',
                }}
              />
            ))}
          </div>
        </div>

        {/* Product Price */}
        <div className="price" data-testid="product-price">
          <h4>PRICE:</h4>
          <p className="price-value">${product.price.toFixed(2)}</p>
        </div>

        {/* Add to Cart Button */}
        <button
          className="add-to-cart-btn"
          data-testid="add-to-cart"
          disabled={isAddToCartDisabled}
          onClick={() => console.log('Product added to cart')}
        >
          Add to Cart
        </button>

        {/* Product Description */}
        <div className="product-description" data-testid="product-description">
          <h2>{product.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default PDP;
