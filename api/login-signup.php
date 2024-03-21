<?php
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

// Handle signup request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['signup'])) {
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

  // Add input validation and other security measures
  // ...

  $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

  if ($conn->query($sql) === TRUE) {
    echo "Signup successful";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

// Handle login request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Add input validation and other security measures
  // ...

  $sql = "SELECT * FROM users WHERE username = '$username'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
      echo "Login successful";
    } else {
      echo "Incorrect password";
    }
  } else {
    echo "User not found";
  }
}

$conn->close();
?>
