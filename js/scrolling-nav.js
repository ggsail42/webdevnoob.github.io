//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

function display(){
	if ($(".project-container:visible").next().length != 0){
		$(".project-container:visible").fadeOut(function(){
			$(this).next().fadeIn(300);
		});
	}else{
		$(".project-container:visible").fadeOut(function(){
			$(".project-container:first").fadeIn(300);
		});
	}
}





           		

		



  
