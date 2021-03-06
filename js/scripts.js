
var timerId = null;

$(document).ready(function () {
	startRot();
	$('.project-container').hover(stopRot, startRot);
	 $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );	
});

function startRot(){
	if(timerId){
		return;
	}
	timerId = setInterval(display,3000);
}
function stopRot(){
	if(!timerId){
		return;
	}
	clearInterval(timerId);
	timerId = null;
}
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
