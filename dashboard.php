<?php
session_start();
if(!isset($_SESSION['user_email'])){
    header("Location:signinr.html");
    exit;
}
?>
<h2>welcome <?php echo $_SESSION['user_name']; ?></h2>
<a href="logout.php">Logout</a>