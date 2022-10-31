<?php

  $error = '';

  //*Validate Name
  if(empty($_POST["name"])){
    $error = 'Ingresa un nombre</br>';
  } else {
    $name = $_POST["name"];
    $name = filter_var($name, FILTER_SANITIZE_STRING);
  }
  //*Validate Mail
  if(empty($_POST["email"])){
    $error .= 'Ingresa un email</br>';
  } else{
    $email = $_POST["email"];
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
      $error .= 'Ingresar un Mail valido </br>';
    } else {
      $email = filter_var($email,FILTER_SANITIZE_STRING);
    }
  }
  //*Validate Msj
  if(empty($_POST["msj"])){
    $error .= 'Ingresa un mensaje</br>';
  } else {
    $msj = $_POST["msj"];
    $msj = filter_var($msj, FILTER_SANITIZE_STRING);
  }

  $name = $_POST["name"];
  $email = $_POST["email"];
  $msj = $_POST["msj"];

  //*Body Msj
  $body = "Nombre: ".$name.'\n';
  $body.= 'E-mail: '.$email.'\n';
  $body.= 'Mensaje: '.$msj.'\n';

  //*Direcc
  $sendTo = 'ianc75472@gmail.com';
  $asunto = 'Anashe';

  //*HeadMail
  $headmail = "From: ".$email.'\r\n'."CC: ".$email; 
  //*Send Mail
  if($error == ''){
    $success = mail($sendTo,$asunto,$body,$headmail);
    echo 'exito';
  }else{
      echo $error;
  }
?>