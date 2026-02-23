<?php
require 'testmongo.php';

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

if(empty($name) || empty($email) || empty($password)){
    echo "All fields are required";
    exit;
}

if(strlen($password) < 6){
    echo "Password must be at least 6 characters";
    exit;
}

// Check duplicate email
$existingUser = $collection->findOne(['email' => $email]);

if($existingUser){
    echo "Email already exists ,Try with unique,valid email";
    exit;
}

// Insert user
$insertResult = $collection->insertOne([
    'name' => $name,
    'email' => $email,
    'password' => $password
]);

if($insertResult->getInsertedCount() > 0){
    echo "Signup successful";
}else{
    echo "Error occurred";
}
?>