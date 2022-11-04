<?php
$output = '';

$connexion = new mysqli("containers-us-west-30.railway.app","root","caUqZyt82tpOjkC6zXNo","railway") or die ("not connected".mysqli_connect_error());  

$user = $_POST["user_log"];
$pass = $_POST["pass_log"];

$sql_query = "SELECT username,mail,password FROM `usuarios` WHERE username='$user' OR mail='$user'";
$sql_connect = mysqli_query($connexion,$sql_query);

if (mysqli_num_rows($sql_connect) > 0) {
  while($row = mysqli_fetch_assoc($sql_connect)) {
    if($row["password"] == $pass){
      echo 'exito';
    } else{
      $output = 'not_pass';
    }
  }
} else {
  $output = 'not_user';
}

mysqli_close($connexion);
  
if($output != ''){
  echo $output;
} 
?>
