$(document).ready(function(){
	new WOW().init();
	smoothScroll.init();

	$('#downArrow').hover(function(){
		$(this).addClass('animated bounce');
	}, function(){
		$(this).removeClass('animated bounce')
	});

	 $("#welcomeNav").bind('cssClassChanged', function(){ 
	 		$('.navbar-default').removeClass('whiteNav');
	 		changeToWhite();
    });
	 $("#portNav").bind('cssClassChanged', function(){ 
	 		$('.navbar-default').addClass('whiteNav');
	 		changeToBlack();
    });
	 $("#contactNav").bind('cssClassChanged', function(){ 
	 		$('.navbar-default').addClass('whiteNav');
	 		changeToBlack();
    });

});

var changeToWhite = function(){
	$('a#welcomeText').css('color', 'white');
	$('a#portText').css('color', 'white');
	$('a#contactText').css('color', 'white');
	$('a#welcomeText').css('border-bottom', '3px solid white');
};

var changeToBlack = function(){
	$('a#welcomeText').css('color', 'black');
	$('a#portText').css('color', 'black');
	$('a#contactText').css('color', 'black');
};

// Create a closure
(function(){
    // Your base, I'm in it!
    var originalAddClassMethod = jQuery.fn.addClass;

    jQuery.fn.addClass = function(){
        // Execute the original method.
        var result = originalAddClassMethod.apply( this, arguments );

        // trigger a custom event
        jQuery(this).trigger('cssClassChanged');

        // return the original result
        return result;
    }
})();