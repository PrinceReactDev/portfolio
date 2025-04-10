$(document).ready(function () {
    $('.home-experience-slider').slick({
        slidesToShow: 3, // Show 3 slides by default
        slidesToScroll: 1,
        infinite: true, // Disable infinite scroll to hide previous slides
        centerMode: true, // Enable center mode by default
        centerPadding: '0px', // No padding for previous slide by default
        initialSlide: 0, // Start from the first slide
        prevArrow: ".custom-prev-experience",
        nextArrow: ".custom-next-experience",
        responsive: [
            {
                breakpoint: 1024, // Large screens
                settings: {
                    centerMode: false, // Disable center mode for large screens
                    centerPadding: '0px', // Remove center padding
                    slidesToShow: 3, // Show 3 slides
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '10%', // Show part of the next slide below 768px
                    slidesToShow: 1 // Show 1 slide below 768px
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    centerPadding: '10%', // Show part of the next slide below 601px
                    slidesToShow: 1, // Show 1 slide below 601px
                    infinite: false
                }
            },

        ]
    });

    // Remove padding for the first and last slides manually
    $('.home-experience-slider').on('setPosition', function (event, slick) {
        equalizeHeights();
        var totalSlides = slick.slideCount;
        var currentSlide = slick.currentSlide;

        // For larger screens, remove padding conditions (since centerMode is disabled)
        if (window.innerWidth >= 1024) {
            $('.home-experience-slider .slick-list').css('padding-left', '0');
            $('.home-experience-slider .slick-list').css('padding-right', '0');

            if (currentSlide === 0) {
                $('.custom-prev-experience').attr('disabled', true);
            } else {
                $('.custom-prev-experience').removeAttr('disabled');
            }

            if (currentSlide === slick.options.slidesToShow - 1) {
                $('.custom-next-experience').attr('disabled', true);
            } else {
                $('.custom-next-experience').removeAttr('disabled');
            }

        }
        else {
            $('.custom-prev-experience, .custom-next-experience').hide()
            // For the first slide, remove padding
            if (currentSlide === 0) {
                $('.home-experience-slider .slick-list').css('padding-left', '0');
            }

            // For the last slide, remove padding
            if (currentSlide === totalSlides - slick.options.slidesToShow) {
                $('.home-experience-slider .slick-list').css('padding-right', '0');
            }
        }



    });


    function equalizeHeights() {
        var maxHeight = 0;

        // Loop through each slide and find the maximum height
        $('.slick-slide .home-single-experince').each(function () {
            var thisHeight = $(this).outerHeight();
            if (thisHeight > maxHeight) {
                maxHeight = thisHeight;
            }
        });

        // Set all slides to the maximum height
        $('.slick-slide .home-single-experince').css('height', maxHeight + 'px');
    }

    // Run equalizeHeights when Slick is initialized

    // Also run it when the window is resized
    $(window).on('resize', function () {
        equalizeHeights();
    });



    $('.community-slider').slick({
        slidesToShow: 6, // Show 6 slides by default on large screens (992px and up)
        slidesToScroll: 1,
        infinite: true, // Infinite scroll enabled
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992, // Screens smaller than 992px
                settings: {
                    slidesToShow: 2, // Show 2 slides for screens below 992px
                    centerMode: true
                }
            },
            {
                breakpoint: 768, // Optional: Screens smaller than 768px (mobile screens)
                settings: {
                    centerPadding: '5%', // Show part of the next slide below 768px
                    centerMode: true,
                    slidesToShow: 2, // Show 1 slide for screens below 768px
                }
            },
        ]
    });

    $('.community-slider').on('setPosition', function (event, slick) {
        var totalSlides = slick.slideCount;
        var currentSlide = slick.currentSlide;

        // For larger screens, remove padding conditions (since centerMode is disabled)
        if (window.innerWidth >= 1024) {
            $('.slick-list').css('padding-left', '0');
            $('.slick-list').css('padding-right', '0');


        }
        else {
            // For the first slide, remove padding
            if (currentSlide === 0) {
                $('.community-slider .slick-list').css('padding-left', '0');
            }

            // For the last slide, remove padding
            if (currentSlide === totalSlides - slick.options.slidesToShow) {
                $('.community-slider .slick-list').css('padding-right', '0');
            }
        }

    });


    $('.insights-slider').slick({
        slidesToShow: 3, // Show 3 slides by default
        slidesToScroll: 1,
        infinite: false, // Disable infinite scroll to hide previous slides
        centerMode: true, // Enable center mode by default
        centerPadding: '0px', // No padding for previous slide by default
        initialSlide: 0, // Start from the first slide
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992, // Screens smaller than 992px
                settings: {
                    centerPadding: '10%', // Show part of the next slide below 768px
                    slidesToShow: 1, // Show 2 slides for screens below 992px
                    centerMode: true
                }
            },
            {
                breakpoint: 768, // Optional: Screens smaller than 768px (mobile screens)
                settings: {
                    centerPadding: '10%', // Show part of the next slide below 768px
                    centerMode: true,
                    slidesToShow: 1, // Show 1 slide for screens below 768px
                }
            },
        ]
    });

    $('.insights-slider').on('setPosition', function (event, slick) {
        var totalSlides = slick.slideCount;
        var currentSlide = slick.currentSlide;

        // Reset padding on all slides
        $('.insights-slider .slick-list').css({
            'padding-left': '',
            'padding-right': ''
        });

        // For the first slide, remove padding
        if (currentSlide === 0) {
            $('.insights-slider .slick-list').css('padding-left', '0');
        }

        // For the last slide, remove padding
        if (currentSlide === totalSlides - slick.options.slidesToShow) {
            $('.insights-slider .slick-list').css('padding-right', '0');
        }


    });
});
document.getElementById('scroll-down').addEventListener('click', function () {
    window.scrollTo({
        top: window.innerHeight * 0.9, // Scroll by 100vh
        behavior: 'smooth' // Smooth scrolling
    });
});