<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'testmongo.php';

$oldEmail = $_POST['oldEmail'] ?? '';
$newName = $_POST['newName'] ?? '';
$newEmail = $_POST['newEmail'] ?? '';
$newPassword = $_POST['newPassword'] ?? '';

if(empty($oldEmail)){
    echo "Current email required";
    exit;
}

// Check if user exists
$user = $collection->findOne(['email' => $oldEmail]);

if(!$user){
    echo "User not found";
    exit;
}

// Prepare update fields
$updateFields = [];

if(!empty($newName)){
    $updateFields['name'] = $newName;
}

if(!empty($newEmail)){
    $updateFields['email'] = $newEmail;
}

if(!empty($newPassword)){
    $updateFields['password'] = $newPassword;
}

if(empty($updateFields)){
    echo "Nothing to update";
    exit;
}

$result = $collection->updateOne(
    ['email' => $oldEmail],
    ['$set' => $updateFields]
);

if($result->getModifiedCount() > 0){
    echo "Profile updated successfully";
} else {
    echo "No changes made";
}
?>