<?php

  $connexion = new mysqli("containers-us-west-30.railway.app","root","caUqZyt82tpOjkC6zXNo","railway") or die ("not connected".mysqli_connect_error());  
  $error = '';

  $last_name = $_POST["lastname_sign"];
  $first_name = $_POST["firstname_sign"];
  $mail = $_POST["mail_sign"];
  $user = $_POST["user_sign"];
  $pass = $_POST["pass_sign"];
  $confpass = $_POST["confpass_sign"];

  if (empty($last_name)){
    $error = '1';
  }
  if (empty($first_name)){
    $error .= '2';
  }
  if (!filter_var($mail, FILTER_VALIDATE_EMAIL)){
    $error .= '3';
  }
  if (strlen($user) < 5){
    $error .= '4';
  }
  if (strlen($pass) < 8){
    $error .= '5';
  }
  if(strcmp($pass, $confpass) !== 0){
    $error .= '6';
  }
  if(empty($_POST["accept_term"])){
    $error .= '7';
  }
  if ($error == ''){
    $sql = "INSERT INTO `usuarios` (`Usuarios_id`, `first_name`, `last_name`, `username`, `mail`, `password`) VALUES (NULL, '$first_name', '$last_name', '$user', '$mail', '$pass');";
    $query = mysqli_query($connexion,$sql);
    if($query){
      echo "completed";
    } else {
      echo mysqli_error($connexion);
    }
  }

  if($error != ''){
    echo $error;
  }
?>