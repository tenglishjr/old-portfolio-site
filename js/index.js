$(document).ready( () => {
    'use strict';

    setTimeout(() => {
        $('#name-header').fadeIn(1000);
        $('#job-title').fadeIn(1000);
    }, 1000);

    setTimeout (() => {
        $(".down-arrow-div").fadeIn(2000);
    }, 2500);

    $(window).scroll( () => {
        $(".down-arrow-icon").css("opacity", 1 - $(window).scrollTop() / 450);
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
                    }, 500, function() {     // Same here...
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

    // ====== STELLAR.JS ======
    // $(window).stellar();


});