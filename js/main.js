$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides-portfolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  pause: true,           // Boolean: Pause on hover, true or false

});

$(".rslides-portfolio-home").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  pause: true,           // Boolean: Pause on hover, true or false

});

Visibility.onVisible(function(){
		setTimeout(function () {
	$(".introducao .bem-vindo").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao h1").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".introducao blockquote").addClass("animated fadeInDown");
	}, 1200);
	setTimeout(function () {
		$(".introducao .btn").addClass("animated fadeInDown");
	}, 1600);
	setTimeout(function () {
		$(".animar").addClass("animated fadeInDown");
	}, 2000);


	setTimeout(function () {
		$(".introducao-interna h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao-interna p").addClass("animated fadeInDown");
	}, 800);


	setTimeout(function () {
		$(".animar-interno").addClass("animated fadeInDown");
	}, 1200);

	setTimeout(function () {
		$(".animar-interno1600").addClass("animated fadeInDown");
	}, 1600);

	setTimeout(function () {
		$(".animar-interno2000").addClass("animated fadeInDown");
	}, 2000);

	setTimeout(function () {
		$(".animar-interno2400").addClass("animated fadeInDown");
	}, 2400);

	setTimeout(function () {
		$(".animar-interno2800").addClass("animated fadeInDown");
	}, 2800);

		setTimeout(function () {
		$(".animar-interno3200").addClass("animated fadeInDown");
	}, 3200);

		setTimeout(function () {
		$(".animar-interno3600").addClass("animated fadeInDown");
	}, 3600);


	setTimeout(function () {
		$(".animar-interno2").addClass("animated fadeInDown");
	}, 2200);

	setTimeout(function () {
		$(".animar-interno3").addClass("animated fadeInDown");
	}, 2400);

	setTimeout(function () {
		$(".animar-interno4").addClass("animated fadeInDown");
	}, 2600);

	setTimeout(function () {
		$(".animar-interno5").addClass("animated fadeInDown");
	}, 2800);

	setTimeout(function () {
		$(".animar-interno6").addClass("animated fadeInDown");
	}, 3200);
});

// Formulario

$('.formphp').on('submit', function() {
	var emailContato = "emaildeteste@e1000son.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar directo para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contacto com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar directo para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});