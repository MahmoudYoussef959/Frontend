import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PDP.css'; // Ensure you have the necessary styles

const PDP = () => {
  const { productId } = useParams(); // Get the productId from the URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Fetch product data from the JSON file
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        console.log('Fetching product data...');
        console.log('Product ID:', productId);
        const response = await fetch('/data/items.json'); // Correct path
        const data = await response.json();
        console.log('Fetched data:', data);
        const productData = data.find(item => item.id === productId);
        console.log('Product Data:', productData);
        setProduct(productData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchProductData();
  }, [productId]);

  // Update selectedImage and currentIndex when product data is fetched
  useEffect(() => {
    if (product && product.images) {
      setSelectedImage(product.images[0]);
      setCurrentIndex(0);
    }
  }, [product]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  if (!product) {
    return <div>Product not found</div>; // Display message if product is not found
  }

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

  return (
    <div className="pdp">
      <div className="pdp-left">
        {/* Image Thumbnails (Smaller images on the left) */}
        <div className="image-thumbnails">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={product.images[index % product.images.length]} // Repeat the images
              alt={`Product ${index + 1}`}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setSelectedImage(product.images[index % product.images.length]);
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
        <div className="size">
          <h4>SIZE:</h4>
          {product.sizes.map((size, index) => (
            <button key={index} onClick={() => setSelectedSize(size)} className={selectedSize === size ? 'selected' : ''}>
              {size}
            </button>
          ))}
        </div>
        <div className="color">
          <h4>COLOR:</h4>
          {product.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={selectedColor === color ? 'selected' : ''}
              style={{ backgroundColor: color, border: 'none', width: '50px', height: '50px', gap: '10px' }}
            />
          ))}
        </div>
        <div className="price">
          <h4>PRICE:</h4>
          <p className="price-value">${product.price}</p>
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
        <div className="product-description">
          <h2>{product.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default PDP;
