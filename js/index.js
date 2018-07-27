$(document).ready( () => {
    'use strict';

    setTimeout(() => {
        $('#name-header').fadeIn();
        $('#job-title').fadeIn();
    }, 500);

    $(window).scroll(function(){
        $(".down-arrow-icon").css("opacity", 1 - $(window).scrollTop() / 250);
    });

    $(window).resize(() => {
        if ($(window).width() <= 576) {
            $('aside').addClass('fixed-top');
        }
    });

});