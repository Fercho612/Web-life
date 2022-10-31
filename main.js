$('#form').submit(function(event){
  event.preventDefault();
  send();
})
function send() {
  var datos = $('#form').serialize();
  $.ajax({
    type: 'post',
    url: "form.php",
    data: datos,
    success: function(text){
      if(text === 'exito') {
        correcto();
      } else {
        phpError(text);
      }
    }
  })
}

function correcto() {
  $('#msjsucces').removeClass('d-none');
}
function phpError(text) {
  $('#msjerror').removeClass('d-none');
  $('#msjerror').html(text);
}