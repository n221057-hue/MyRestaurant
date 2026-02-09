<?php
$fileP = fopen("file.txt","r");
if($fileP){
    while(($line = fgets($fileP))!==false) {
        echo $line ."<br>";
    }
    fclose($fileP);
} else {
    echo "unable to open file.";
}
?>