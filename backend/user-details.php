<?php
// Set headers to allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-type");

// Assuming your database connection credentials
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "practice";

// Check if user ID is provided in the request
if (isset($_GET['user_id'])) {
    $userId = $_GET['user_id'];

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Fetch user details from the database
    $sql = "SELECT username, email FROM users WHERE user_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $userId); // Bind user ID parameter
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Fetch and format user details
        $userDetails = $result->fetch_assoc();

        // Close prepared statement
        $stmt->close();

        // Return user details in JSON format
        echo json_encode($userDetails);
    } else {
        echo json_encode(array("error" => "No user found"));
    }

    // Close database connection
    $conn->close();
} else {
    echo json_encode(array("error" => "User ID is not provided"));
}
?>
