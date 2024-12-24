<?php
// Set headers to allow cross-origin requests (CORS) if needed
header('Content-Type: application/json');

// Database connection details
$host = 'localhost';
$db_name = 'myapp';
$username = 'root';
$password = '';

// Create a connection
$conn = new mysqli($host, $username, $password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to get product data
$sql = "SELECT p.id, p.name, p.description, p.price,
               GROUP_CONCAT(DISTINCT pi.image_url) AS images,
               GROUP_CONCAT(DISTINCT pc.color) AS colors,
               GROUP_CONCAT(DISTINCT ps.size) AS sizes
        FROM products p
        LEFT JOIN product_images pi ON pi.product_id = p.id
        LEFT JOIN product_colors pc ON pc.product_id = p.id
        LEFT JOIN product_sizes ps ON ps.product_id = p.id
        GROUP BY p.id";

$result = $conn->query($sql);

// If there are results
if ($result->num_rows > 0) {
    $products = [];
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    echo json_encode($products); // Send the data as JSON
} else {
    echo json_encode([]); // No products found
}

$conn->close();
?>