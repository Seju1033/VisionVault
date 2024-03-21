<?php

// Allow requests from all origins
header("Access-Control-Allow-Origin: *");
// Allow GET requests with the appropriate methods
header("Access-Control-Allow-Methods: GET");
// Set the content type to JSON
header("Content-Type: application/json");

// Check if productId is provided in the query parameters
if(isset($_GET['productId'])) {
    // Sanitize the productId to prevent SQL injection
    $productId = intval($_GET['productId']);

    if($productId <= 0) {
        // Invalid productId provided, return 400 Bad Request error
        http_response_code(400);
        echo json_encode(array("error" => "Invalid Product ID"));
        exit; // Terminate script execution
    }

    // Connect to your MySQL database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "glasses";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        // Database connection error, return 500 Internal Server Error
        http_response_code(500);
        echo json_encode(array("error" => "Database connection failed"));
        exit; // Terminate script execution
    }

    // Prepare and execute a parameterized query to fetch product details
    $sql = "SELECT * FROM frames WHERE product_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $productId); // "i" indicates integer type
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if the product exists
    if ($result->num_rows > 0) {
        // Product found, fetch details and return as JSON
        $product = $result->fetch_assoc();
        echo json_encode($product);
    } else {
        // Product not found, return 404 error
        http_response_code(404);
        echo json_encode(array("error" => "Product not found"));
    }

    // Close the prepared statement and database connection
    $stmt->close();
    $conn->close();
} else {
    // Product ID not provided, return 400 Bad Request error
    http_response_code(400);
    echo json_encode(array("error" => "Product ID not provided"));
}
?>
