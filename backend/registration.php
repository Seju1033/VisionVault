<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-type");

$conn = new mysqli("localhost", "root", "", "practice");
if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $username = $dData['user'];
    $email = $dData['email'];
    $password = $dData['pass'];

    $result = '';

    if($username != '' && $email != '' && $password != '') {
        // Hash the password for security
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Get current date and time for registration_date
        $registration_date = date('Y-m-d H:i:s');

        // Prepare SQL statement to insert data into users table
        $stmt = $conn->prepare("INSERT INTO users (username, password, email, registration_date) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $username, $hashedPassword, $email, $registration_date);

        // Execute the prepared statement
        if($stmt->execute()) {
            $result = "You have registered successfully!";
        } else {
            $result = "Registration failed!";
        }
    } else {
        $result = "All fields are required!";
    }

    $conn->close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}

?>
