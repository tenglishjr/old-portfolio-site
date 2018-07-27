$(document).ready( () => {
    'use strict';

    setTimeout(() => {
        $('#top-section').addClass('load');
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