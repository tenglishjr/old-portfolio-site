$(document).ready( () => {
    'use strict';

    setTimeout(() => {
        $('#name-header').fadeIn(1000);
        $('#job-title').fadeIn(1000);
    }, 1000);

    setTimeout (() => {
        $(".down-arrow-div").fadeIn(3000);
    }, 5000);

    $(window).scroll( () => {
        $(".down-arrow-icon").css("opacity", 1 - $(window).scrollTop() / 450);
    });

    $( "a.links" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    // ====== STELLAR.JS ======
    // $(window).stellar();


});