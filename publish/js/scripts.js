$(document).ready(function() {
	$('.sm').smartmenus({
		showFunction: function($ul, complete) {
			$ul.slideDown(250, complete);
		},
		hideFunction: function($ul, complete) {
			$ul.slideUp(250, complete);
		}
	});

	$('.fade').slick({
		dots: true,
		infinite: true,
		speed: 700,
		fade: true,
		cssEase: 'linear',
		autoplay: true
	});

	$("#nanoGallery3").nanoGallery({
		thumbnailHeight: 'auto',
		thumbnailHoverEffect: 'scaleLabelOverImage',
		colorScheme: 'light'
	});
});
