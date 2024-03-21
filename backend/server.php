<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$host = 'localhost';
$db_name = 'login_fnc';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;
    $email = $data->email;
    $password = $data->password;

    // Handle user registration
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "User registered successfully"));
    } else {
        echo json_encode(array("message" => "Error: " . $sql . "<br>" . $conn->error));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Handle user profile fetching
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $token = $_SERVER['HTTP_AUTHORIZATION'];
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            // Handle user profile fetching
            if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
                $token = $_SERVER['HTTP_AUTHORIZATION'];
                // Validate and decode the token
                // Assuming token validation and decoding logic here
                // Fetch user profile based on the token
                $sql = "SELECT * FROM users WHERE token = '$token'";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    $user = $result->fetch_assoc();
                    echo json_encode($user);
                } else {
                    http_response_code(404);
                    echo json_encode(array("message" => "User not found"));
                }
            } else {
                http_response_code(401);
                echo json_encode(array("message" => "Unauthorized"));
            }
        }
        
    } else {
        http_response_code(401);
        echo json_encode(array("message" => "Unauthorized"));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['HTTP_AUTHORIZATION'])) {
    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;
    $password = $data->password;

    // Handle user login
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // User authenticated successfully
            // Generate and return an authentication token
            $token = bin2hex(random_bytes(16));
            $sql = "UPDATE users SET token = '$token' WHERE username = '$username'";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(array("token" => $token));
            } else {
                echo json_encode(array("message" => "Error: " . $sql . "<br>" . $conn->error));
            }
        } else {
            // Invalid credentials
            http_response_code(401);
            echo json_encode(array("message" => "Invalid credentials"));
        }
    } else {
        // Invalid credentials
        http_response_code(401);
        echo json_encode(array("message" => "Invalid credentials"));
    }
}

$conn->close();
?>
