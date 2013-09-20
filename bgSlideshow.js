/*a jQuery plugin to set a fullpage slideshow as a background*/
(function( $ ){
	
$.fn.democraCule = function() {
	
	setTimeout(fadeSlide(), 6000);
	
		function fadeSlide(){
			var activeSlide = $("#bgSlideshow").children(".activeSlide");
			var nextSlide;  
			
				if($(activeSlide).next().length > 0){
					nextSlide = $(activeSlide).next();
				}
				else{
					nextSlide = $("#bgSlideshow div:first");
				}
			
			$(nextSlide).css("z-index", "2");
			$(activeSlide).fadeOut(2000, function(){
				$(activeSlide).show().css("z-index", 1).removeClass("activeSlide");
				$(nextSlide).css("z-index", 3).addClass("activeSlide");
											
			});
					
			setTimeout(fadeSlide, 6000);				
			
		}
};

})( jQuery );	