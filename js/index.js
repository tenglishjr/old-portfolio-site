$(document).ready( () => {
    'use strict';

    setTimeout(() => {
        $('#top-section').addClass('load');
    }, 500);

    $(window).scroll( () => {
        $(".down-arrow-icon").css("opacity", 1 - $(window).scrollTop() / 250);
    });


    // For Smooth Navigation...
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {  // Would not allow me to use `=>` for function (would break)
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {     // Same here...
                        let $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex','-1');
                            $target.focus();
                        }
                    });
                }
            }
        });

    // Dancing Section Arrows, on page Navigation
    $('#info-link').click(() => {
        setTimeout(() => {
            $('.fas.fa-angle-double-left.fa-md').addClass('active');
        }, 500);
        $('.fas.fa-angle-double-left.fa-md').removeClass('active');
    })
});