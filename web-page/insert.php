<?php

//create connection to the DB
function Connect() {
    $dbserver = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "Robot";
    $conn = new mysqli($dbserver, $dbuser, $dbpass, $dbname) or die("Connect failed: %s\n". $conn -> error); //servername, username, password, DBname.
    return $conn;
}

//Close connection 
function Disconnect($conn) {
    $conn -> close();
}

//Insertion to DB
function Insert($conn, $dir, $val, $name) {
    $stmt= "INSERT INTO Directions (direction, distance, path_name)
    VALUES ('$dir', '$val', '$name')";

    if ($conn->query($stmt) === TRUE) {
       // echo $move;
    } else {
        echo "Error: " . $stmt . "<br>" . $conn->error;
    }
}



//print_r($_POST['array1']);

//Open connection
$conn = Connect();
 
$paths = json_decode($_POST['path'], true); 
$pathname = array_pop($paths);
  

foreach($paths as $path){
    Insert($conn, $path["dir"], $path["val"], $pathname);
}

echo "success";


//Close connection
Disconnect($conn);
?>