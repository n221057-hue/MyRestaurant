<?php
include "db.php";

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$registrationSuccess = false;

$sql = "INSERT INTO users (username, email, password)
        VALUES ('$username', '$email', '$password')";

if (mysqli_query($conn, $sql)) {
     $registrationSuccess = true;
    echo "Registration successful";
    echo "Username: $username <br>";
    echo "Email: $email <br>";
    echo "Password: $password <br>";
} else {
    die("Error inserting user: " . mysqli_error($conn));
}
?>
