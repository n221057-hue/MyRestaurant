<?php
require 'vendor/autoload.php';

$client = new MongoDB\Client("mongodb://localhost:27017");

$database = $client->myProjectDB;
$collection = $database->users;
?>