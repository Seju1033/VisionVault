<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check if POST data is set
if (isset($_POST['username'], $_POST['password'], $_POST['email'])) {
    include 'db_config.php';

    // Escape user input to prevent SQL injection
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);

    // Check if the username already exists
    $sql_check = "SELECT * FROM users WHERE username='$username'";
    $result_check = $conn->query($sql_check);
    if ($result_check->num_rows > 0) {
        echo "Username already exists";
    } else {
        // Insert the user into the database
        $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";
        if ($conn->query($sql) === TRUE) {
            echo "User registered successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    $conn->close();
} else {
    echo "Incomplete POST data";
}
?>
