$(window).on("load", function() {

	$(window).on('beforeunload', function(){
	  $(window).scrollTop(0);
	});

	function parallax() {
    	var scrolled = $(window).scrollTop();
    	console.log(scrolled);
    	$(".main .background").css("transform", "translateY(" + -(scrolled * 0.3) + "px)");
		$(".main .background").css("-webkit-transform", "translateY(" + -(scrolled * 0.3) + "px)");
		$(".main .background").css("-moz-transform", "translateY(" + -(scrolled * 0.3) + "px)");
		$(".main .background").css("-o-transform",  "translateY(" + -(scrolled * 0.3) + "px)");
		$(".main .background").css("-ms-transform", "translateY(" + -(scrolled * 0.3) + "px)");

    }



    $(".nav-button").click(function(){
    	if ($(window).scrollTop() > 210) {
	    	if ($(".sub-menu").hasClass("sub-menu-active-down")) {
	    		$(".sub-menu").removeClass("sub-menu-active-down");
	    		$(".nav-button").removeClass("nav-button-clicked");
	        	$(".sub-menu").hide();
	        } else if ($(".sub-menu").hasClass("sub-menu-active-up")) {
	        	$(".sub-menu").hide();
	        	$(".sub-menu").removeClass("sub-menu-active-up");
	        	$(".sub-menu").addClass("sub-menu-active-down");
	        	$(".nav-button").addClass("nav-button-clicked");

	        	$(".sub-menu").show();
	        } else {
	        	$(".sub-menu").addClass("sub-menu-active-down");
	        	$(".nav-button").addClass("nav-button-clicked");
	        	$(".sub-menu").show();
	        }
    	} else {
    		if ($(".sub-menu").hasClass("sub-menu-active-up")) {
	    		$(".sub-menu").removeClass("sub-menu-active-up");
	    		$(".nav-button").removeClass("nav-button-clicked");
	        	$(".sub-menu").hide();
	        } else if ($(".sub-menu").hasClass("sub-menu-active-down")) {
	        	$(".sub-menu").hide();
	        	$(".sub-menu").removeClass("sub-menu-active-down");
	        	$(".sub-menu").addClass("sub-menu-active-up");
	        	$(".nav-button").addClass("nav-button-clicked");
	        	$(".sub-menu").show();
	        } else {
	        	$(".sub-menu").addClass("sub-menu-active-up");
	        	$(".nav-button").addClass("nav-button-clicked");
	        	$(".sub-menu").show();
	        }
    	}
    });
	
	var nav = $(".nav-bar");
	var navtop = nav.offset().top;
	var navtopview = navtop - $(document).scrollTop()
	var width = $(window).width();
	var height = $(window).innerHeight();
	var waypoint0 = $("#cc0").offset().top;
	var waypoint1 = $("#cc1").offset().top;
	var waypoint2 = $("#cc2").offset().top;
	var waypoint3 = $("#cc3").offset().top;
	var waypoint4 = $("#cc4").offset().top;
	var waypoint5 = $("#cc5").offset().top;

	




	$(window).scroll(function() {
		console.log(navtop);
		parallax();
		if ( $(window).scrollTop() > navtop) {
			nav.addClass("nav-scrolled");
		} else {
			nav.removeClass("nav-scrolled");
		}
parallax();
		if ( $(window).scrollTop() > (waypoint0 - height + 150)) {
			$(".slider1").addClass("slider1-slide");
			$("#n5").addClass("slide-five");
		} else {
			$(".slider1").removeClass("slider1-slide");
			$("#n5").removeClass("slide-five");
		}
parallax();
		if ( $(window).scrollTop() > (waypoint1 - height + 150)) {
			$(".slider2").addClass("slider2-slide");
			$("#n4").addClass("slide-four");
		} else {
			$(".slider2").removeClass("slider2-slide");
			$("#n4").removeClass("slide-four");
		}
		parallax();

		if ( $(window).scrollTop() > (waypoint2 - height + 150)) {
			$(".slider3").addClass("slider3-slide");
			$("#n62").addClass("slide-sixtytwo");
		} else {
			$(".slider3").removeClass("slider3-slide");
			$("#n62").removeClass("slide-sixtytwo");
		}
parallax();
		if ( $(window).scrollTop() > (waypoint3 - height + 150)) {
			$(".slider4").addClass("slider4-slide");
			$("#n1").addClass("slide-one");
		} else {
			$(".slider4").removeClass("slider4-slide");
			$("#n1").removeClass("slide-one");
		}
parallax();
		if ( $(window).scrollTop() > (waypoint4 - height + 150)) {
			$(".slider5").addClass("slider5-slide");
			$("#n5a").addClass("slide-fiveptone");
		} else {
			$(".slider5").removeClass("slider5-slide");
			$("#n5a").removeClass("slide-fiveptone");
		}
parallax();
		if ( $(window).scrollTop() > (waypoint5 - height + 150)) {
			$(".slider6").addClass("slider6-slide");
			$("#n3five").addClass("slide-threeptfive");
		} else {
			$(".slider6").removeClass("slider6-slide");
			$("#n3five").removeClass("slide-threeptfive");
		}
	});


	$("#link").click(function() {
		$("#modal-container").show();
	});

	$("#submit").click(function() {
		$("#modal-container").hide();
	});

	$("#cancel").click(function() {
		$("#modal-container").hide();
	});
	

	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});

	$(".main").click(function() {
	    $(".sub-menu").hide();
		$(".sub-menu").removeClass("sub-menu-active-up");
	    $(".sub-menu").removeClass("sub-menu-active-down");
	    $(".nav-button").removeClass("nav-button-clicked");
	});
	$('a[href="#about"]').click(function(){
		$(".sub-menu").hide();
		$(".sub-menu").removeClass("sub-menu-active-up");
	    $(".sub-menu").removeClass("sub-menu-active-down");
	    $(".nav-button").removeClass("nav-button-clicked");
	}); 
	$('a[href="#DeltaKappaEpsilon"]').click(function(){
		$(".sub-menu").hide();
		$(".sub-menu").removeClass("sub-menu-active-up");
	    $(".sub-menu").removeClass("sub-menu-active-down");
		$(".nav-button").removeClass("nav-button-clicked");
	}); 
	$('a[href="#ThetaZeta"]').click(function(){
		$(".sub-menu").hide();
		$(".sub-menu").removeClass("sub-menu-active-up");
	    $(".sub-menu").removeClass("sub-menu-active-down");
	    $(".nav-button").removeClass("nav-button-clicked");
	}); 
	$('a[href="#contactUs"]').click(function(){
  		$(".sub-menu").hide();
		$(".sub-menu").removeClass("sub-menu-active-up");
		$(".sub-menu").removeClass("sub-menu-active-down");
		$(".nav-button").removeClass("nav-button-clicked");
	}); 

});


