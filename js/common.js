     $('.banner-slider').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 500,
        // autoplay: true,
        slidesToShow: 2,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    //
    $('.category-slider').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 500,
        // autoplay:true,
        slidesToShow: 5,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
 // go to top
    // ===== Scroll to Top ====
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            jQuery('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            jQuery('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    jQuery('#return-to-top').click(function() { // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

