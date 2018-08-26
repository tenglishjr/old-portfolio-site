$(document).ready( () => {
    'use strict';

    checkPosition();
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

    function checkPosition() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            $("a[href='#projects-section']").attr("href","#projects-carousel");
        }
    }

    $( "a.links" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    $('.carousel').slick({
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        infinite: true,
        pauseOnHover: true,
        slide: 'div',
        verticalScrolling: true
    })


});