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

    $email = $dData['email'];

    $result = '';

    if($email != '') {
        // Prepare SQL statement to check if the email is already registered
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $res = $stmt->get_result();

        if($res->num_rows != 0 ){
            $result = "Email is already registered";
        }
    }

    $conn->close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}

?>
