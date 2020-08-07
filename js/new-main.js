AOS.init({
	duration: 800,
	easing: 'slide',
	once: false,
});

particlesJS('particles-js', {
	particles: {
		number: {
			value: 200,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: '#ffffff',
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000',
			},
			polygon: {
				nb_sides: 5,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 2,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: true,
				mode: 'grab',
			},
			onclick: {
				enable: true,
				mode: 'push',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 140,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
});

jQuery(document).ready(function ($) {
	'use strict';

	function typewritter() {
		var dataText = [
			'Computação de alto nível.',
			'Soluções avançadas em IA & IoT.',
			'Softwares escaláveis na Nuvem.',
			'Alta capacidade de entrega para seu software!',
		];

		function typeWriter(text, i, fnCallback) {
			if (i < text.length) {
				document.querySelector('.headline').innerHTML =
					text.substring(0, i + 1) +
					'<span class="caret" aria-hidden="true"></span>';

				// wait for a while and call this function again for next character
				setTimeout(function () {
					typeWriter(text, i + 1, fnCallback);
				}, 100);
			}
			// text finished, call callback if there is a callback function
			else if (typeof fnCallback == 'function') {
				// call callback after timeout
				setTimeout(fnCallback, 2000);
			}
		}
		// start a typewriter animation for a text in the dataText array
		function StartTextAnimation(i) {
			if (typeof dataText[i] == 'undefined') {
				setTimeout(function () {
					StartTextAnimation(0);
				}, 2000);
			} else {
				// check if dataText[i] exists
				if (i < dataText[i].length) {
					// text exists! start typewriter animation
					typeWriter(dataText[i], 0, function () {
						// after callback (and whole text has been animated), start next text
						StartTextAnimation(i + 1);
					});
				}
			}
		}
		// start the text animation
		StartTextAnimation(0);
	}
	setTimeout(typewritter, 2000);

	$('.loader').delay(1000).fadeOut('slow');
	$('#overlayer').delay(1000).fadeOut('slow');

	var siteMenuClone = function () {
		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this
				.clone()
				.attr('class', 'site-nav-wrap')
				.appendTo('.site-mobile-menu-body');
		});

		setTimeout(function () {
			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					class: 'collapse',
					id: 'collapseItem' + counter,
				});

				counter++;
			});
		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();
		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		});

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $('.site-mobile-menu');
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();

	var siteSticky = function () {
		$('.js-sticky-headerjs-sticky-header').sticky({ topSpacing: 0 });
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');
		$('body').on(
			'click',
			".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a",
			function (e) {
				e.preventDefault();

				var hash = this.hash;

				$('html, body').animate(
					{
						scrollTop: $(hash).offset().top - 50,
					},
					1000,
					'easeInOutExpo',
					function () {
						window.location.hash = hash;
					},
				);
			},
		);
	};
	OnePageNavigation();

	var siteScroll = function () {
		$(window).scroll(function () {
			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}
		});
	};
	siteScroll();
});
