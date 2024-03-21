<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");





$host = "localhost";
$username = "root";
$password = "";
$database = "glasses"; 

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT * FROM frames"; 
$result = $conn->query($query);

$frames = array();

while ($row = $result->fetch_assoc()) {
    $moviedata[] = $row;
}

echo json_encode($moviedata);

$conn->close();
?>