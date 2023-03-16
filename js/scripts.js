
(function($) {
    "use strict"; 
	
	// NAVBAR SCRIPTS 
	// jQuery collapse navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });

    // BACK TO TOP BUTTON
    // create
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });
})(jQuery);



//COUNTER
var num1=0;
var num2=0;

$('#counter_1').click(function() {
    console.log("counter_1");
    $('#counter_1 h1').html(++num1);
});

$('#counter_2').click(function() {
    console.log("counter_2");
    $('#counter_2 h1').html(++num2);
});



//TEXT SIZE
var size=16;

$('.textbigger').click(function() {
    console.log("textbigger");

    $('.sizingtext').css("font-size", ++size + "px");

});

$('.textsmaller').click(function() {
    console.log("textsmaller");

    $('.sizingtext').css("font-size", --size + "px");

});