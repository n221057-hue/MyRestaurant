<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'testmongo.php';
// Get form data safely
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Validate empty fields
if (empty($email) || empty($password)) {
    echo "All fields are required";
    exit;
}

try {
    // Fetch user from MongoDB
    $user = $collection->findOne(['email' => $email]);

    if (!$user) {
        echo "User not found";
        exit;
    }
   if($user['email'] !== $email){
    echo "Invalid email";
    exit;
   }
    // Compare password (plain text version)
    if ($user['password'] !== $password) {
        echo "Invalid password";
        exit;
    }

    // Store session variables
    $_SESSION['user_email'] = $user['email'];
    $_SESSION['user_name']  = $user['name'];

    // Redirect to dashboard
    header("Location: dashboard.php");
    exit;

} catch (Exception $e) {
    echo "Something went wrong. Please try again.";
}
?>
