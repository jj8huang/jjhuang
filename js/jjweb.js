$(document).ready(function() {
	var projectVisible = false;
	var aboutVisible = false;

	$('.fade_in').fadeIn(800);
	$('.footer-basic-centered').fadeIn(800);

	$('#project_btn').click(function(){
		if(projectVisible){
	    	$('.project').toggle('drop');

		} else {
	    	$('.project').css('display', 'inline').delay(10);
	    	$('.project').hide().delay(10);
	    	$('.project').toggle('drop').delay(10);
	    	$('html, body').animate({
        		scrollTop: $('.project_section').offset().top},
        		500);
		}
		projectVisible = !projectVisible
	});

	$('#about_btn').click(function(){
		if(aboutVisible){
	    	$('.about').toggle('drop');

		} else {
	    	$('.about').css('display', 'inline').delay(10);
	    	$('.about').hide().delay(10);
	    	$('.about').toggle('drop');
	    	$('html, body').animate({
        		scrollTop: $('.about_section').offset().top},
        		500);
		}
		aboutVisible = !aboutVisible
	});
});
