<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

// Function to add items to the cart and update the database
function addToCart($productId, $conn) {
    // Modify the database connection parameters accordingly
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "practice";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert the product into the cart
    $stmt = $conn->prepare("INSERT INTO cart (product_id) VALUES (?)");
    $stmt->bind_param("i", $productId);
    $stmt->execute();

    // Close the database connection
    $conn->close();

    // Return success message
    echo json_encode(array("message" => "Product added to cart successfully"));
}

// Handle POST request to add item to cart
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Assuming productId is sent via POST request
    if (isset($_POST['productId'])) {
        $productId = intval($_POST['productId']);

        // Call the addToCart function to add the item to the cart and update the database
        addToCart($productId,$conn);

        // Return success message
        echo json_encode(array("message" => "Product added to cart successfully"));
    } else {
        http_response_code(400);
        echo json_encode(array("error" => "Product ID not provided"));
    }
}

?>
