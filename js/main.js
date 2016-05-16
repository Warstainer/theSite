jQuery(document).ready(function($){
	 $(".whatSpan").fadeIn(2000);
		

				// parallax here

		$(window).scroll(function(){

			var wScroll = $(this).scrollTop();
			$("h1").css({
				"transform" : 'translate(0px, '+ wScroll/2 +'%)'
			});

			$(".middleContent").css({
				"transform" : 'translate(0px, '+ wScroll/65 +'%)'
			});
			// $(".wrapper").css({
			// 	"transform" : 'translate(0px, -'+ wScroll/32 +'%)'
			// });
		})

				// parallax end

				// left menu animation

	window.onload = function() { $(".what1").animate({

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