


<?php
/*
$fileP = fopen("file.txt","r");
if($fileP){
    while(($line = fgets($fileP))!==false) {
        echo $line ."<br>";
    }
    fclose($fileP);
} else {
    echo "unable to open file.";
}
fwrite($fileP, "Hello PHP File Handling");
fclose($fileP);*/
/*
$fileP = fopen("file.txt","w");

if($fileP){
    fwrite($fileP,"It overwrites the previous text");
    fclose($fileP);
    echo "File written successfully!";
} else {
    echo "Unable to open file.";
}
    */
/*
$fileP = fopen("file.txt","r");
if($fileP){
    while(($line = fgets($fileP))!==false) {
        echo $line ."<br>";
    }
    fclose($fileP);
} else {
    echo "unable to open file.";
}
fwrite($fileP, "Hello PHP File Handling");
fclose($fileP);*/
/*$file = fopen("file.txt", "r");
$content = fread($file, filesize("file.txt"));
echo $content;
fclose($file);
*/
/*
file_put_contents("file.txt","Hello");
$putcontent = file_put_contents("file.txt","New Line\n",FILE_APPEND);
$content =  file_get_contents("file.txt");
echo $content;
*/
/*
if(file_exists("file.txt")){
    echo "file exists <br>";
    echo "File Size:" .filesize("file.txt") . "bytes <br>";
    echo "File Type:" .filetype("file.txt") ."<br>";
    $ltime = fileatime("file.txt");
    $ftime = filemtime("file.txt");
    $ctime = filectime("file.txt");
    echo "Last access time:" . date("d-m-Y H:i:s",$ltime) ."<br>";
    echo "Last modified time:" . date("d-m-Y  H:i:s",$ftime) ."<br>";
     echo "Last change time:" . date("d-m-Y  H:i:s",$ctime) ."<br>";
     echo "permissions:" .fileperms("file.txt") ."<br>";
     echo "Owner Id:" . fileowner("file.txt") ."<br>";
     echo "Group Id:" . filegroup("file.txt") . "<br>";
     echo "Inode Number:" . fileinode("file.txt") ."<br>";
     copy("file.txt","copyfile.txt");

     echo "file copied" . "<br>";
     copy("copyfile.txt","another.txt");
     echo "copied another File" ."<br>";
     rename("copyfile.txt","file1.txt");
     echo "File renamed" ."<br>";
     unlink("another.txt");
     echo "File deleted". "<br>";
}

else{
    echo "file doesnt exist";
}
*/
/*
if(is_file("file.txt")){
    echo "It is a file";
}
*/
/*
if(is_dir("javascript")){
    echo "It is a directory";
}
$files = scandir(".");
print_r($files);
*/
/*
$dir = opendir(".");
while(($file = readdir($dir))!==false){
    echo $file . "<br>";
}
closedir($dir);
*/
/*
mkdir("myfolder");
echo "Folder created" ."<br>";
rmdir("myfolder");
echo "Folder removed";
chdir("");

echo getcwd();
*/

//$file = fopen("file.txt" ,"a");
/*
if(flock($file,LOCK_EX)){
    fwrite($file,"lock is used\n");
    flock($file,LOCK_UN);
}
fclose($file);
echo "Data written with lock!";
*/
/*
fwrite($file,"Appended line\n");
fclose($file);
echo "Data appended";
*/
/*
$file3 = fopen("file3.txt","x");
if($file3){
    fwrite($file3,"New file created");
    fclose($file3);
}
else{
    echo "File already exists";
}
*/
/*
$file = fopen("file.txt","r+");
fwrite($file,"iam using both read/write file mode");
rewind($file);
echo fread($file,filesize("file.txt"));
fclose($file);
*/
/*
$file = fopen("file.txt","a+");
fwrite($file," iam using both read/append");
rewind($file);
echo fread($file,filesize("file.txt")) ."<br>";
fclose($file);
*/
/*
$file = fopen("newfile.txt","x+");
fwrite($file, " iam creating a new file");
rewind($file);
echo fread($file,filesize("file.txt"))."<br>";
fclose($file);
*/
?>
