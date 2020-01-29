$(document).ready(function(){
	$('.slider_inner').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.png"></img></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.png"></img></<button>',
		responsive: [
			{
			  breakpoint: 400,
			  settings: {
				  arrows: false
			  }
		  }
	  ]
	});
});