<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");


// Function to remove an item from the cart
function removeFromCart($productId, $conn) {
    // Modify the database connection parameters accordingly
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "glasses";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and execute SQL statement to remove the item from the cart
    $stmt = $conn->prepare("DELETE FROM cart WHERE product_id = ?");
    $stmt->bind_param("i", $productId);
    $stmt->execute();

    // Close the database connection
    $conn->close();

    // Return success message
    echo json_encode(array("message" => "Product removed from cart successfully"));
}

// Handle DELETE request to remove item from cart
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Assuming productId is sent via GET request as a query parameter
    if (isset($_GET['productId'])) {
        $productId = intval($_GET['productId']);

        // Call the removeFromCart function to remove the item from the cart and update the database
        removeFromCart($productId, $conn);

        // Return success message
        echo json_encode(array("message" => "Product removed from cart successfully"));
    } else {
        http_response_code(400);
        echo json_encode(array("error" => "Product ID not provided"));
    }
}

?>
