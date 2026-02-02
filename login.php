<?php
include "db.php";

$email = $_POST['email'];
$password = $_POST['password'];
$loginSuccess = false;
$sql = "SELECT * FROM users WHERE LOWER(email)=LOWER('$email') AND password='$password' LIMIT 1";
$result = mysqli_query($conn, $sql);

if (!$result) {
    die("Query failed: " . mysqli_error($conn));
}

if (mysqli_num_rows($result) == 1) {
    $loginSuccess = true;
    echo "Login successful! Welcome, " 
} else {
    echo "Invalid email or password!";
}

mysqli_close($conn);
