<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die("Invalid request");
}

$username = trim($_POST['username'] ?? '');
$email    = trim($_POST['email'] ?? '');
$password = trim($_POST['password'] ?? '');

if ($username === '' || $email === '' || $password === '') {
    die("All fields are required");
}

$sql = "INSERT INTO users (username, email, password)
        VALUES ('$username', '$email', '$password')";

if (mysqli_query($conn, $sql)) {
    echo "Registration successful ✅<br>";
    echo "Username: $username <br>";
    echo "Email: $email <br>";
} else {
    die("Error inserting user: " . mysqli_error($conn));
}
mysqli_close($conn);
?>
