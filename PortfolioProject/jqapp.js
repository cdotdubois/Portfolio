$(document).ready(function(){
	"use strict";
	
	$('.intro-logo').click(function(){
		$('p.intro').fadeOut("fast");
		$('.intro-logo').switchClass("intro-logo", "top-bar", 700, 'easeInOutExpo', function(){
			$('.top-bar').html("<img id= 'logo' src='siggywhite.png'>");
			$('#logo').animate({opacity: "+=1"},700);
		});
		$('#pre, .event-circle, #triangle, .previewback, #bottomer').delay(1000).animate({opacity: "+=1"}, 1000);
		});
	
	$('.event-circle').hover(function(){
		$(this).switchClass("event-circle", "event-circle-hovered");		
		switch($(this).attr('id')) {
			case "proj1":
				$('.previewback').html("<h1 class='title'>Resume</h1><a href='file:///C:/Users/Chris%20Dubois/Documents/ResumeProject/index.html'><img class='preview' src='Resume.PNG'></a>");
				$('.preview, .title').hide().fadeIn("fast");
				break;
			case "proj2":
				$('.previewback').html("<h1 class='title'>Project 2</h1>");
				$('.title').hide().fadeIn("fast");
				break;
			case "proj3":
				$('.previewback').html("<h1 class='title'>Project 3</h1>");
				$('.title').hide().fadeIn("fast");
				break;
			case "proj4":
				$('.previewback').html("<h1 class='title'>Project 4</h1>");
				$('.title').hide().fadeIn("fast");
				break;
			case "proj5":
				$('.previewback').html("<h1 class='title'>Project 5</h1>");
				$('.title').hide().fadeIn("fast");
				break;
			case "proj6":
				$('.previewback').html("<h1 class='title'>Project 6</h1>");
				$('.title').hide().fadeIn("fast");
				break;
			case "proj7":
				$('.previewback').html("<h1 class='title'>Project 7</h1>");
				$('.title').hide().fadeIn("fast");
				break;
		}} ,function() {
		$(this).switchClass("event-circle-hovered", "event-circle");		
	});
	
	$('.event-circle').mouseenter(function(){
		$('#triangle').stop().animate({left: ($(this).position().left)-57}, 500);
	});
});

