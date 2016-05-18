jQuery(document).ready(function($){
	 $(".whatSpan").fadeIn(2000);
		

				// all parallax here

		$(window).scroll(function(){

			var wScroll = $(this).scrollTop();
			$("h1").css({
				"transform" : 'translate(0px, '+ wScroll/4 +'%)'
			});

			$(".middleContent").css({
				"transform" : 'translate(0px, '+ wScroll/65 +'%)'
			});
			if (wScroll > $(".contentWrap").offset().top -
				($(window).height() /1.3)) {
				$(".contentWrap").addClass("showContent");
			} else {$(".contentWrap").removeClass("showContent");}
		});

				// parallax end

				// left menu animation

		window.onload = $(".what").each(function(i){
						
						setTimeout(function(){

						$(".what").eq(i).addClass("is-showing");	//iterating and adding class to each
						
						}, 350*(i+1));	//delay of setTimeout for each class
				});//end each function

		  //text above button animation

	 $(".button_title_text").fadeIn(3000);
	 
	 // main selling button anmation
	 
	 $('.mainButton').animate ({
	 	bottom:"0",
	 	opacity:"1"
	 }, 600);
		
	$('.textSmall').animate ({
	 	left:"0",
	 	opacity:"1"
	 }, 600);



});