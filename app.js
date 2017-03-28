$(document).ready(function(){
	$("body").css("background-color", "red")
});

$(document).ready(function(){
	$("#logo").animate({height: "300px"});
});

$("#logo").css( "background-color", "red" );

$ ("#logo").attr("src", "https://pbs.twimg.com/profile_images/1437922305/obama-fail4.jpg");

$ ("#logo").attr("src", "https://mburufleitas.files.wordpress.com/2010/09/fail_08.jpg");

$("#logo").click(function(event){
  event.preventDefault();
  var nuevaImagen = "https://s-media-cache-ak0.pinimg.com/564x/89/cf/7b/89cf7b60664f27bb12debe0299e15731.jpg";
  $("#logo").attr("src", nuevaImagen);  // o  $(this).attr("src", nuevaImagen);
});

$( "#logo" ).animate({height: "200px"}, 500);