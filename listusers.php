<?php
require 'testmongo.php';

$users = $collection->find();

foreach($users as $user){
    echo "Name: " . $user['name'] . "<br>";
    echo "Email: " . $user['email'] . "<br><br>";
}
?>