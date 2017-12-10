$(document).ready(function() {
	var projectVisible = false;
	var aboutVisible = false;

	$('.fade_in').fadeIn(800);
	$('.footer-basic-centered').fadeIn(800);

	$('#project_btn').click(function(){
		if(projectVisible){
	    	$('.project').toggle('drop');	    	
	    	$('.project_details').toggle('drop');
		} else {
	    	$('.project_details').css('display', 'flex').delay(10);
	    	$('.project').css('display', 'inline').delay(10);
	    	// $('.project_details').hide().delay(10);
	    	$('.project').hide().delay(10);
	    	// $('.project_details').toggle('drop').delay(10);
	    	$('.project').toggle('drop').delay(10);
	    	$('html, body').animate({
        		scrollTop: $('.project_details').offset().top},
        		500);
		}
		projectVisible = !projectVisible
	});

	$('#about_btn').click(function(){
		if(aboutVisible){
	    	$('.about').toggle('drop');	    	
	    	$('.about_details').toggle('drop');
		} else {
	    	$('.about_details').css('display', 'flex').delay(10);
	    	$('.about').css('display', 'inline').delay(10);
	    	// $('.about_details').hide().delay(10);
	    	$('.about').hide().delay(10);
	    	// $('.about_details').toggle('drop').delay(10);
	    	$('.about').toggle('drop').delay(10);
	    	$('html, body').animate({
        		scrollTop: $('.about_details').offset().top},
        		500);
		}
		aboutVisible = !aboutVisible
	});
});
