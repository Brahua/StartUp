$(document).ready(function(){

	// Scroll del menu principal
	var inicio 	= $('#inicio').offset().top,
		caracteristicas	= $('#caracteristicas').offset().top,
		precio		= $('#precio').offset().top,
		contacto	= $('#contacto').offset().top;


	if ( $(window).width() > 768 ) {

		$('#btn-inicio').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: inicio - 80
			}, 1000);
		});

		$('#btn-caracteristicas').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: caracteristicas - 80
			}, 2000);
		});

		$('#btn-precio').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: precio - 80
			}, 3000);
		});

		$('#btn-contacto').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: contacto - 80
			}, 3000);
		});

	} else {
		
		$('#btn-inicio').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: inicio - 140
			}, 1000);
		});

		$('#btn-caracteristicas').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: caracteristicas - 140
			}, 2000);
		});

		$('#btn-precio').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: precio - 140
			}, 3000);
		});

		$('#btn-contacto').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: contacto - 140
			}, 3000);
		});

	}

});