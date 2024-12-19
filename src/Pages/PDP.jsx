import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PDP.css';

// Sample product images
import productImage from './Assets/productImage1.png';

const PDP = () => {
    const { productId } = useParams(); // Get the productId from the URL params

    // Store images in an array
    const productImages = [
        productImage,
        productImage,
        productImage,
        productImage,
        productImage,
        productImage
    ];

    // State to track the currently selected image
    const [selectedImage, setSelectedImage] = useState(productImages[0]);

    // State to track the current index of the selected image
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle previous image
    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? productImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(productImages[newIndex]);
    };

    // Function to handle next image
    const handleNext = () => {
        const newIndex = currentIndex === productImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(productImages[newIndex]);
    };

    return (
        <div className="product-details">
            <div className="product-images-container">
                {/* Left side: 5 images stacked vertically */}
                <div className="small-images">
                    {productImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`product ${index + 1}`}
                            className={`small-image ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                setSelectedImage(image);
                                setCurrentIndex(index);
                            }}
                        />
                    ))}
                </div>

                {/* Right side: larger image */}
                <div className="large-image-container">
                    <button className="arrow left" onClick={handlePrev}>
                        &lt;
                    </button>
                    <img src={selectedImage} alt="Selected Product" className="large-image" />
                    <button className="arrow right" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>

            {/* Right side: Product Info */}
            <div className="product-info">
                <h2 className="product-name">Running Short</h2>

                {/* Size selection */}
                <div className="size-selection">
                    <h4>Size:</h4>
                    <div className="size-buttons">
                        {['XS', 'S', 'M', 'L'].map((sizeOption) => (
                            <button key={sizeOption} className="size-btn">
                                {sizeOption}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color selection */}
                <div className="color-selection">
                    <h4>Color:</h4>
                    <div className="color-buttons">
                        {['White', 'Black', 'Green'].map((colorOption) => (
                            <button
                                key={colorOption}
                                className={`color-btn ${colorOption.toLowerCase()}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Price section */}
                <div className="price">
                    <h4>Price:</h4>
                    <p className="price-value">$50.00</p>
                </div>

                {/* Add to cart button */}
                <button className="add-to-cart-btn">Add to Cart</button>

                {/* Find text */}
                <p className="find-text">Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
            </div>
        </div>
    );
};

export default PDP;
