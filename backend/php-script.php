<?php
// Set headers to allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-type");

// Assuming your database connection credentials
$servername = "localhost";
$username = "root";
$password = "";
$database = "glasses";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the "frames" table
$sql = "SELECT * FROM frames";
$result = $conn->query($sql);

$frames = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $frames[] = $row;
    }
}

// Close the connection
$conn->close();

// Return the data as JSON
echo json_encode($frames);
?>
