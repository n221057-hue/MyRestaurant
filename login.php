<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die("Invalid request");
}

$email = trim($_POST['email'] ?? '');
$password = trim($_POST['password'] ?? '');

if ($email === '' || $password === '') {
    die("Email and password are required");
}

$sql = "SELECT * FROM users 
        WHERE LOWER(email) = LOWER('$email') 
        AND password = '$password' 
        LIMIT 1";

$result = mysqli_query($conn, $sql);

if (!$result) {
    die("Query failed: " . mysqli_error($conn));
}

if (mysqli_num_rows($result) === 1) {
    echo "Login successful! Welcome 🎉";
} else {
    echo "Invalid email or password!";
}

mysqli_close($conn);
?>
