$(document).ready(function () {
	// Burger menu
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	// $('.nav__item').click(function (event) {
	// 	$('.burger,.burger__menu').removeClass('active');
	// 	$('body').removeClass('lock');
	// });

	// Slider
	$('.intro__slider').slick({
		slidesToShow: 2,
		easing: 'ease',
		infinite: false,
	});

	$('.merch__slider').slick({
		slidesToShow: 1,
		easing: 'ease',
		infinite: false,
	});
});
