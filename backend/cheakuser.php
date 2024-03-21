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

    $result = '';

    if($username != '') {
        // Prepare SQL statement to check if the username already exists
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $res = $stmt->get_result();

        if($res->num_rows != 0 ){
            $result = "Username is already taken";
        }
    }

    $conn->close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}

?>
