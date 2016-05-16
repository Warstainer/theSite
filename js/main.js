jQuery(document).ready(function($){
	 $(".whatSpan").fadeIn(2000);

	window.onload = function() { $(".what1").animate({
	 	// left menu animation
	 	left: "5%"
	 }, 
		600);
		$(".what2").animate({
	 	left: "5%"
	 }, 
		900);
		$(".what3").animate({
	 	left: "5%" 
	 }, 
		1100);
		$(".what4").animate({
	 	left: "5%"
	 }, 
		1300);
		 
		 //text above button animation
	 
	 $(".button_title_text").animate({
	 	opacity: "1"
	 },
	  3200);
	 // main selling button anmation
	 $('.mainButton').animate ({
	 	bottom:"0",
	 	opacity:"1"
	 }, 600);
		
	$('.textSmall').animate ({
	 	left:"0",
	 	opacity:"1"
	 }, 600);
	
	}

});