var $ = require('jquery');

module.exports = {
	btnMenu: function(message){
		// evento del boton del menu
		$(".btnMenu").click(function(){
			$("body").toggleClass("menu-open");
			$(this).toggleClass("active");
		});
	},

	linksMenu: function(){
		// evento de los links del menu
		$(".nav a").click(function(){
			$(".nav a").removeClass("active");
			$(this).addClass("active");
		});
	}
};