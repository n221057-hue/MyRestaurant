<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'testmongo.php';

$email = $_POST['email'] ?? '';

if(empty($email)){
    echo "Email required";
    exit;
}

$result = $collection->deleteOne(['email' => $email]);

if($result->getDeletedCount() > 0){
    echo "User deleted successfully";
} else {
    echo "User not found";
}
?>