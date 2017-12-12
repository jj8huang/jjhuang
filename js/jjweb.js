$(document).ready(function() {
	var projectVisible = false;
	var aboutVisible = false;

	$('.fade_in').fadeIn(800);
	$('.footer-basic-centered').fadeIn(800);

	$('#project_btn').click(function(){
		if(projectVisible){	    	
	    	$('html, body').animate({
        		scrollTop: $('.project_details').offset().top},
        		500);
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
			projectVisible = true;
		}
	});

	$('#about_btn').click(function(){
		if(aboutVisible){	    	
	    	$('html, body').animate({
        		scrollTop: $('.about_details').offset().top},
        		500);
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
			aboutVisible = true;
		}
	});

	$('.home_btn').click(function(){		
	    $('html, body').animate({
        	scrollTop: $('.mainDiv').offset().top},
        	500);
	    if(aboutVisible){
	    	$('.about').toggle('drop');	    	
	    	$('.about_details').toggle('drop');
			aboutVisible = false;
		}
	    if(projectVisible){
	    	$('.project').toggle('drop');	    	
	    	$('.project_details').toggle('drop');
	    	projectVisible = false;
		} 
	});
});
