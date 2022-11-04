const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function tabFrom(){
  $('#Log-In').toggleClass('form-active');
  $('#btn_log').toggleClass('btn-active');
  $('#Sign-In').toggleClass('form-active');
  $('#btn_sign').toggleClass('btn-active');
}

$(document).ready(function(){
  

function sucessLog(){
  alert("Se inicio sesion correctamente");
  window.location.href = "UI.html"; 
}

$('#Log-In').submit(function(event){
  event.preventDefault();
  log_In();
})
function log_In() {
  var datos = $('#Log-In').serialize();
  $.ajax({
    type: 'post',
    url: "login.php",
    data: datos,
    success: function(text){
      if(text != '') {
        validateLog(text);
      }
    }
  })
}

function validateLog(text){
  if (text === 'not_user'){
    $("#log_user").addClass("is-invalid");
    $("#log_user_group .bar").get(0).style.setProperty("--bar-color", "#fe0039");
  } else if (text === 'not_pass'){
    $("#log_user").removeClass("is-invalid");
    $("#log_user").addClass("is-valid");
    $("#log_pass").addClass("is-invalid");
    $("#log_user_group .bar").get(0).style.setProperty("--bar-color", "#198754");
  } else {
    $("#log_user").addClass("is-valid");
    $("#log_pass").addClass("is-valid");
    sucessLog();
  }
}


$('#Sign-In').submit(function(event){
  event.preventDefault();
  signIn();
})
function signIn() {
  let datos = $('#Sign-In').serialize();
  $.ajax({
    type: 'post',
    url: "signin.php",
    data: datos,
    success: function(text){
      if(text != '') {
        validateSignin(text);
      }
    }
  })
}

function validateSignin(text){
  console.log(text)
  if(text.includes(1)){
    $("#sign_lastname").addClass("is-invalid");
    $("#lastname_group .bar").get(0).style.setProperty("--bar-color", "#fe0039");
  } else {
    $("#sign_lastname").removeClass("is-invalid");
    $("#sign_lastname").addClass("is-valid");
    $("#lastname_group .bar").get(0).style.setProperty("--bar-color", "#198754");
  }
  if(text.includes(2)){
    $("#sign_firstname").addClass("is-invalid");
    $("#firstname_group .bar").get(0).style.setProperty("--bar-color", "#fe0039");
  } else {
    $("#sign_firstname").removeClass("is-invalid");
    $("#sign_firstname").addClass("is-valid");
    $("#firstname_group .bar").get(0).style.setProperty("--bar-color", "#198754");
  }
  if(text.includes(3)){
    $("#sign_mail").addClass("is-invalid");
    $("#mail_group .bar").get(0).style.setProperty("--bar-color", "#fe0039");
  }else{
    $("#sign_mail").removeClass("is-invalid");
    $("#sign_mail").addClass("is-valid");
    $("#mail_group .bar").get(0).style.setProperty("--bar-color", "#198754");
  }
  if(text.includes(4)){
    $("#sign_user").addClass("is-invalid");
    $("#user_group .bar").get(0).style.setProperty("--bar-color", "#fe0039");
  } else {
    $("#sign_user").removeClass("is-invalid");
    $("#sign_user").addClass("is-valid");
    $("#user_group .bar").get(0).style.setProperty("--bar-color", "#198754");
  }
  if(text.includes(5)){
    $("#sign_pass").addClass("is-invalid");
    $("#pass_group .bar").get(0).style.setProperty("--bar-color", "#fe0039");
  } else {
    $("#sign_pass").removeClass("is-invalid");
    $("#sign_pass").addClass("is-valid");
    $("#pass_group .bar").get(0).style.setProperty("--bar-color", "#198754");
  }
  if(text.includes(6)){
    $("#sign_confpass").addClass("is-invalid");
    $("#confpass_group .bar").get(0).style.setProperty("--bar-color", "#fe0039");
  }else{
    $("#sign_confpass").removeClass("is-invalid");
    $("#sign_confpass").addClass("is-valid");
    $("#confpass_group .bar").get(0).style.setProperty("--bar-color", "#198754");
  }
  if(text.includes(7)){
    $("#term").addClass("is-invalid");
  }else{
    $("#term").removeClass("is-invalid");
    $("#term").addClass("is-valid");
  }
  if(text == "completed"){
    sucessLog();
  }
}

})