$(function () {
    "use strict";
    //Bootstrap Scroolspy
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    var html_body = $('html, body');
    var $window = $(window);
    var $sOfset = 500;
    var $fh = $('.full_header')

    $(".menu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            html_body.animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    // Sticky Menu
    $window.on('scroll', function () {
        var $offset = $(this).scrollTop();
        if ($offset > .5) {
            $fh.addClass('sticky');
        } else {
            $fh.removeClass('sticky');
        }
    });

    // jQuery Ripples
    if (typeof $.fn.ripples == 'function') {
        try {
            $('.ripple').ripples({
                resolution: 500,
                perturbance: 0.04
            });
        } catch (e) {
            $('.error').show().text(e);
        }
    }
});
