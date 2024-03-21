<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

// Function to get the items from the cart
function getCart($conn) {
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

    // Prepare and execute SQL statement to retrieve items from the cart
    $result = $conn->query("SELECT * FROM cart");

    // Fetch the results and store them in an array
    $cartItems = array();
    while ($row = $result->fetch_assoc()) {
        $cartItems[] = $row;
    }

    // Close the database connection
    $conn->close();

    // Return the cart items as JSON
    echo json_encode($cartItems);
}

// Handle GET request to retrieve items from cart
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Call the getCart function to retrieve items from the cart
    getCart($conn);
}

?>
