(function ($) {
   "use strict";
	
/*--------------------------
     preloader
---------------------------- */	
$(window).on('load',function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});	
	
/*----------------------------
 Header Images
------------------------------ */
	$(".header-img").height($(window).height());
	$(window).resize(function(){
		$(".header-img").height($(window).height());
	});	

/*---------------------
 TOP Menu Stick
--------------------- */
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
/*----------------------------
 Navbar nav
------------------------------ */

	$(".main-menu ul.navbar-nav li ").on('click', function(){
		$(".main-menu ul.navbar-nav li").removeClass("active");
		$(this).addClass("active");
	});	
	
/*----------------------------
 Scrollspy js
------------------------------ */

	$('body').scrollspy({
            target: '.navbar-collapse',
            offset: 80
        });

/*----------------------------
Page Scroll
------------------------------ */

	jQuery('a.page-scroll').on('click', function(event) {
		var $anchor = $(this);
		  $('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top - 55
			}, 1500, 'easeInOutExpo');
		event.preventDefault();
	}); 

/*--------------------------
 scrollUp
---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
	
	
/*---------------------
 Header-top carousel
--------------------- */
	$('.animate-img2').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		autoplay:true,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp',
		smartSpeed:3000,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
/*---------------------
 Mid slider carousel
--------------------- */
	$('.mid-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		autoplay:true,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp',
		smartSpeed:3000,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
/*---------------------
 Header-top Slider
---------------------*/
	$('.top-slider').owlCarousel({
		loop:true,
		nav:false,
		dots:true,
		autoplay:false,
		smartSpeed:3000,
		margin:400,
		animateOut: 'slideOutDown',
		animateIn: 'slideInDown',
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
/*---------------------
 Testimonial carousel
---------------------*/
	$('.testimonial-carousel').owlCarousel({
		loop:true,
		nav:false,
		dots:true,
		autoplay:false,
		smartSpeed:3000,
		animateOut: 'slideOutDown',
		animateIn: 'slideInDown',
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
/*----------------------------
 isotope active
------------------------------ */
	// portfolio start
    $(window).on("load",function() {
        var $container = $('.portfolio-content');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.portfolio-menu li a').on("click", function() {
            $('.portfolio-menu li a.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    //portfolio end
	
/*--------------------------
     contact-from
---------------------------- */

$("#contactForm").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});
function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();


    $.ajax({
        type: "POST",
        url: "assets/contact.php",
        data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
	

})(jQuery); 
