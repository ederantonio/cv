(function ($) {
	"use strict";
	var nav = $('nav');
  	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function() {
		if( ! $('#mainNav').hasClass('navbar-reduce')) {
		$('#mainNav').addClass('navbar-reduce');
		}
	})

	/*--------/ Preloader  /-------*/
	$(window).on('load', function () {
		if ($('#preloader').length) {
		$('#preloader').delay(100).fadeOut('slow', function () {
			$(this).remove();
		});
		}
	});

	/*-------------/ Back to top button /-------*/
	$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
	});
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
		return false;
	});

	/*-----------/ Star ScrollTop /---------*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--------/ Star Counter /------------*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*-----------/ Star Scrolling nav /----------*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	// $('.js-scroll').on("click", function () {
	// 	$('.navbar-collapse').collapse('hide');
	// });

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});

	/*-------------------/ Navbar Menu Reduce /----------------*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {/* Al bajar el scroll hace los cambios en el nav */
	 
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) { //Al bajar scroll
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} 
		else
		{ //Al subir scroll
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		} 
	});

	/*------------------/ Star Typed /------------*/
	if ($('.text-slider').length == 1) {
		// var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: [
				"<span style='font-family:serif;font-size:1.2em'>Desarrollador <span style='color:#00AEAE'><b>Web</b></span><span> ",
				"<span style='font-family:serif;font-size:1.2em'>Maquetador <span style='color:#00AEAE'><b>  Web</b></span><span>",
				"<span style='font-family:serif;font-size:1.2em'>Entusiasta  de la <span style='color:#00AEAE'><b>  Web</b></span><span>",
		  	],
			typeSpeed:0, 
			loop: true,
			backDelay: 2000,
			backSpeed: 20
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	/* -----------------/ Switch modo claro  / nocturno /-------------*/
	$("#chk").click(()=> {
	 
		if($('#chk').is(':checked')){ 
			 
			$('.theme').attr('href','css/dark.css'); 
			$("#luna").css("color","#fff")
			$("#sol").css("color","#fff") 
			 
		}else{  //Sino los coloca en color negro
			$('.theme').attr('href','css/light.css') 
			$("#luna").css("color","#454360")
			$("#sol").css("color","#454360") 
		}
	 })

    /* --------- / Porcentajes /----------*/
	$('.skill-per').each(function () {
		var $this = $(this);
		var per = $this.attr('per');
		$this.css("width", per + '%');
		$({ animatedValue: 0 }).animate({ animatedValue: per }, {
		  duration: 1000,
		  step: function () {
			$this.attr('per', Math.floor(this.animatedValue) + '%');
		  },
		  complete: function () {
			$this.attr('per', Math.floor(this.animatedValue) + '%');
		  }
		});
	});  
 
})(jQuery); 
	// if($( window ).scrollTop() > 10){   scroll down abit and get the action   
    //  }  

   /* -----------/ Menu responsive hamburguesa /--------------*/
	const mainHeader = document.querySelector(".main-header")
	const dropdownMenu = document.querySelector(".dropdown-menu ul")
	const dropdownMenuItems = document.querySelectorAll(".dropdown-menu-item")
	// const HEADER_HEIGHT = 200
	const DROPDOWN_MENU_HEIGHT = 336 /*tamaño del ul*/
	// const TOP_DISTANCE_TO_HIDE_THE_HEADER = 430
	
	// SHOW/HIDE MAIN HEADER ON SCROLL
	const showMainHeader = () => mainHeader.style.top = "0"
	const hideMainHeader = () => mainHeader.style.top = `-${HEADER_HEIGHT}px`
	let previousScrollPosition = window.pageYOffset
	
	// const toggleMainHeader = window.onscroll = () => {
	// 	let currentScrollPosition = window.pageYOffset
	// 	if (previousScrollPosition > currentScrollPosition || currentScrollPosition < TOP_DISTANCE_TO_HIDE_THE_HEADER) showMainHeader()
	// 	else hideMainHeader()
	// 	previousScrollPosition = currentScrollPosition
	// }
	
	// TOGGLE DROPDOWN MENU
	let dropdownMenuState = 0
	const openDropdownMenu = () => dropdownMenu.style.height = `${DROPDOWN_MENU_HEIGHT}px`
	
	const closeDropdownMenu = () => {
		dropdownMenuState = 0
		dropdownMenu.style.height = "0"
	}
	
	const toggleDropdownMenu = n => {
		dropdownMenuState += n
		switch (dropdownMenuState) {
			case 1:
				openDropdownMenu()
				break
			case 2:
				closeDropdownMenu()
				break
			default:
				closeDropdownMenu()
		}
	}
	const closeDropdownMenuSelectingItem = (() => dropdownMenuItems.forEach((item) => item.addEventListener("click", closeDropdownMenu)))()
	  
   /*--------/ Validacion de formulario/-------- */
	$.validator.addMethod("email", function(value, element) {
		return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
	}, "Email Address is invalid: Please enter a valid email address.");

 // $.validator.addMethod('intlphone', function(value) { 
 // 	return (value.match(/^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}(\s*(ext|x)\s*\.?:?\s*([0-9]+))?$/)); 
 // }, 'Please enter a valid phone number'); 

	$("#myForm").validate({ 
		rules: {
			name:{required:true},
			email:{required:true},
			subject:{required:true},
			description:{required:true}
		},
		messages:{ 
			name:'<span style="color:#C95E81">Llenar campo</span> ',
			email:'<span style="color:#C95E81">Llenar campo / incorrecto</span>',
			subject:' <span style="color:#C95E81">Llenar campo</span> ',
			description:'<span style="color:#C95E81">Llenar campo</span>'
		} ,
		submitHandler: function(form){ //si todos los controles cumplen con las validaciones, se ejecuta este codigo
			$(".loader").css("visibility","visible"); 
			jQuery.ajax({ 
				url: 'sendEmail.php', 
				type: 'POST',      
				dataType: 'json',  
				data: {
					name: $("#name").val(),
					email:$("#email").val(),
					subject:$("#subject").val(),
					description:$("#description").val()
				},  
			  complete: function(xhr, textStatus) {
				//se llama cuando se recibe la respuesta (no importa si es error o exito)
				// alert("La respuesta regreso");
			  },
			  success: function(data, textStatus, xhr) {
				  console.log(data)
				$(".loader").css("visibility","hidden"); 
				$("#name").val(" ") ; 
				$("#email").val(" ") ; 
				$("#subject").val(" ") ; 
				$("#description").val(" ") ; 
				$('.notificacion').html(`
				<div class="alert alert-success">
					<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					 Enviado correctamente!
				</div> `); 
			  },
			  error: function(xhr, textStatus, errorThrown) {
				$(".loader").css("visibility","hidden");
				//called when there is an error
				$('.notificacion').html(`
				<div class="alert alert-danger"> 
					<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
					Algo ocurrio
 				</div> `);
			  }
			});
	    },  
	});	
	 
  
 $(document).on('click','#enlace-crud',function(e){
	 e.preventDefault();
	$(this).attr('href','www.google.com');
 })
	 
 
 
	 