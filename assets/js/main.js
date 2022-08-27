(function ($) {

	"use strict";

	$(function () {
		$("#tabs").tabs();
	});

	//javascript for navigation bar effect on scroll
	window.addEventListener("scroll", function () {
		var header = document.querySelector("header");
		header.classList.toggle('down', window.scrollY > 0);

	});

	//javascript for responsive navigation sidebar menu
	var menu = document.querySelector('.menu');
	var menuBtn = document.querySelector('.menu-btn');
	var closeBtn = document.querySelector('.close-btn');

	menuBtn.addEventListener("click", () => {
		menu.classList.add('active');
	});

	closeBtn.addEventListener("click", () => {
		menu.classList.remove('active');
	});

	$('.caracteristicas-filter li').on('click', function () {
		var tsfilter = $(this).data('tsfilter');
		$('.caracteristicas-filter li').removeClass('active');
		$(this).addClass('active');
		if (tsfilter == 'all') {
			$('.caracteristicas-table').removeClass('filtering');
			$('.ts-item').removeClass('show');
		} else {
			$('.caracteristicas-table').addClass('filtering');
		}
		$('.ts-item').each(function () {
			$(this).removeClass('show');
			if ($(this).data('tsmeta') == tsfilter) {
				$(this).addClass('show');
			}
		});
	});


	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();


	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	$(document).ready(function () {
		$(document).on("scroll", onScroll);

		//smoothscroll
		$('.scroll-to-section a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');

			var target = this.hash,
				menu = target;
			var target = $(this.hash);
			$('html, body').stop().animate({
				scrollTop: (target.offset().top) + 1
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});

	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.nav a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.nav ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else {
				currLink.removeClass("active");
			}
		});
	}


	// Page loading animation
	$(window).on('load', function () {

		$('#js-preloader').addClass('loaded');

	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function () {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function () {
			if (width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}

	// Javacript for video slider navigation
	const btns = document.querySelectorAll(".nav-btn");
	const slides = document.querySelectorAll(".video-slide");
	const contents = document.querySelectorAll(".content");

	var sliderNav = function (manual) {
		btns.forEach((btn) => {
			btn.classList.remove("active");
		});
		slides.forEach((slide) => {
			slide.classList.remove("active");
		});
		contents.forEach((content) => {
			content.classList.remove("active");
		});

		btns[manual].classList.add("active");
		slides[manual].classList.add("active");
		contents[manual].classList.add("active");
	}
	btns.forEach((btn, i) => {
		btn.addEventListener("click", () => {
			sliderNav(i);
		});
	});

	// Javascript for split-screen images comparation
	document.addEventListener('DOMContentLoaded', function () {
		var parent = document.querySelector('.splitview'),
			topPanel = parent.querySelector('.top'),
			handle = parent.querySelector('.handle'),
			skewHack = 0,
			delta = 0;

		// If the parent has .skewed class, set the skewHack var.
		if (parent.className.indexOf('skewed') != -1) {
			skewHack = 1000;
		}

		parent.addEventListener('mousemove', function (event) {
			// Get the delta between the mouse position and center point.
			delta = (event.clientX - window.innerWidth / 2) * 0.5;

			// Move the handle.
			handle.style.left = event.clientX + delta + 'px';

			// Adjust the top panel width.
			topPanel.style.width = event.clientX + skewHack + delta + 'px';
		});
	});
})(window.jQuery);

// Javascript por the Own Team
var swiper = new Swiper(".slide-content", {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: 'true',
	fade: 'true',
	grabCursor: 'true',
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		520: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 3,
		},
	},
});

