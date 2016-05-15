var $ = require('jquery');

window.onload = function(){
	console.log("------------------- Art 3 Soft -------------------");
	
	// evento del boton del menu
	$(".btnMenu").click(function(){
		$("body").toggleClass("menu-open");
		$(this).toggleClass("active");
	});
	
	// evento de los links del menu
	$(".nav a").click(function(){
		$(".nav a").removeClass("active");
		$(this).addClass("active");
	});
}