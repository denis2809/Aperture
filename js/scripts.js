$(document).ready(function () {

	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
		margin: 0,
		nav: true,
		navText: ['', ' '],

		responsive: {
			0: {
				items: 1
			},

			1000: {
				items: 5
			}
		}
	});
});