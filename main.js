$(document).ready(function(){
  var valeur = 0;
  var prog = 0;
  var color = "";
  setInterval(function() {
    $('.progress-bar').each(function(){
      if ( $(this).attr('value') > valeur )
      {
        valeur = $(this).attr('value');
      }
      $('.progress-bar:eq('+prog+')').css('width', valeur+'%').attr('value', valeur);
      $('.progress-bar:eq('+prog+')').html(valeur+' %');
      prog++;
      valeur = 0;
    });
    prog = 0;
    $('.multi-progress-bar').each(function(){
      if ( $(this).attr('value') > valeur )
      {
        valeur = $(this).attr('value');
      }
      color = $(this).attr('color');
      $('.multi-progress-bar:eq('+prog+')').css('width', valeur+'%').attr('value', valeur);
      $('.multi-progress-bar:eq('+prog+')').css('background-color', color);
      $('.multi-progress-bar:eq('+prog+')').html(valeur+' %');
      prog++;
      valeur = 0;
    });
  }, 400);
});