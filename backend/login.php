<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-type");

$conn = new mysqli("localhost", "root", "", "practice");

if ($conn->connect_error) {
    $response = array("success" => false, "message" => "Database connection failed");
    echo json_encode($response);
    exit();
}

$eData = file_get_contents("php://input");
$dData = json_decode($eData, true);

$username = $dData['user'];
$password = $dData['pass'];

if ($username != '' && $password != '') {
    $sql = "SELECT * FROM users WHERE username='$username'";
    $res = $conn->query($sql);

    if ($res->num_rows > 0) {
        $row = $res->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            $userData = array("user_id" => $row["id"], "username" => $row["username"]);
            $response = array("success" => true, "userData" => $userData);
        } else {
            $response = array("success" => false, "message" => "Invalid Password!");
        }
    } else {
        $response = array("success" => false, "message" => "Invalid Username!");
    }
} else {
    $response = array("success" => false, "message" => "All fields are required!");
}

echo json_encode($response);

$conn->close();
?>
