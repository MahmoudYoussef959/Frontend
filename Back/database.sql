-- Create the database
CREATE DATABASE myapp;
USE myapp;

-- Create the Products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

-- Create the Product Images table
CREATE TABLE product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Create the Product Colors table
CREATE TABLE product_colors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    color VARCHAR(50) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Create the Product Sizes table
CREATE TABLE product_sizes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    size VARCHAR(10) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Insert product data into the products table
INSERT INTO products (name, description, price)
VALUES
('Running Shorts', 'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.', 50.00),
('Running Shorts', 'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.', 50.00),
('Running Shorts', 'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.', 50.00),
('Running Shorts', 'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.', 50.00),
('Running Shorts', 'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.', 50.00),
('Running Shorts', 'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.', 50.00);

SELECT id, name, description, price FROM products;
-- Insert product images into the product_images table
INSERT INTO product_images (product_id, image_url)
VALUES
(1, '../data/images/productImage1.png'),
(1, '../data/images/productImage1.png'),
(1, '../data/images/productImage1.png'),
(1, '../data/images/productImage1.png'),
(1, '../data/images/productImage1.png'),

(2, '../data/images/productImage2.png'),
(2, '../data/images/productImage2.png'),
(2, '../data/images/productImage2.png'),
(2, '../data/images/productImage2.png'),
(2, '../data/images/productImage2.png'),

(3, '../data/images/productImage3.png'),
(3, '../data/images/productImage3.png'),
(3, '../data/images/productImage3.png'),
(3, '../data/images/productImage3.png'),
(3, '../data/images/productImage3.png'),

(4, '../data/images/productImage4.png'),
(4, '../data/images/productImage4.png'),
(4, '../data/images/productImage4.png'),
(4, '../data/images/productImage4.png'),
(4, '../data/images/productImage4.png'),

(5, '../data/images/productImage5.png'),
(5, '../data/images/productImage5.png'),
(5, '../data/images/productImage5.png'),
(5, '../data/images/productImage5.png'),
(5, '../data/images/productImage5.png'),

(6, '../data/images/productImage6.png'),
(6, '../data/images/productImage6.png'),
(6, '../data/images/productImage6.png'),
(6, '../data/images/productImage6.png'),
(6, '../data/images/productImage6.png');

-- Insert product colors into the product_colors table
INSERT INTO product_colors (product_id, color)
VALUES
(1, 'gray'),
(1, 'black'),
(1, 'green'),

(2, 'Orange'),
(2, 'Silver'),
(2, 'Gold'),

(3, 'gray'),
(3, 'black'),
(3, 'Red'),

(4, 'gray'),
(4, 'black'),
(4, 'Yellow'),

(5, 'gray'),
(5, 'Orange'),
(5, 'Gray'),

(6, 'gray'),
(6, 'black'),
(6, 'green');

-- Insert product sizes into the product_sizes table
INSERT INTO product_sizes (product_id, size)
VALUES
(1, 'XS'),
(1, 'S'),
(1, 'M'),
(1, 'L'),

(2, 'XS'),
(2, 'S'),
(2, 'M'),

(3, 'XS'),
(3, 'S'),
(3, 'XL'),

(4, 'XS'),
(4, 'S'),
(4, 'M'),
(4, 'XL'),

(5, 'S'),
(5, 'M'),
(5, 'XXXL'),

(6, 'M'),
(6, 'XXL');

SELECT p.id, p.name, p.description, p.price,
       GROUP_CONCAT(DISTINCT pi.image_url) AS images,
       GROUP_CONCAT(DISTINCT pc.color) AS colors,
       GROUP_CONCAT(DISTINCT ps.size) AS sizes
FROM products p
LEFT JOIN product_images pi ON pi.product_id = p.id
LEFT JOIN product_colors pc ON pc.product_id = p.id
LEFT JOIN product_sizes ps ON ps.product_id = p.id
GROUP BY p.id;