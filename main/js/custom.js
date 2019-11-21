$(function () {
    "use strict";
    // Banner Slider 
    $('.banner_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        rrows: true,
        prevArrow: $('.bnr_sl_ar_left'),
        nextArrow: $('.bnr_sl_ar_right'),
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // Screenshot Slider
    $('.scsh_row').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // Testimonail Slider
    $('.cli_row').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // Team Section Slider
    $('.team_slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // Venobox
    $('.venobox').venobox();
    //Bootstrap Scroolspy
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    var html_body = $('html, body');
    var $window = $(window);
    var $sOfset = 500;
    var btt = $('.btt');
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
    // Counter Up
    $('.timing').counterUp({
        delay: 2,
        time: 1000
    });
    // FAQ 
    var acc = document.getElementsByClassName("faq_head");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    }
    // Back To Top
    btt.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 600)
    });
    $window.on('scroll', function () {
        var $offset = $(this).scrollTop();
        if ($offset > .5) {
            $fh.addClass('sticky');
        } else {
            $fh.removeClass('sticky');
        }
        if ($offset > $sOfset) {
            btt.fadeIn(1000);
        } else {
            btt.fadeOut(1000);
        }
    });
    // Preloader
    $window.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    // Google Map
    var map = new GMaps({
        el: '#map',
        lat: 23.810332,
        lng: 90.412518
    });
    map.addMarker({
        lat: 23.810332,
        lng: 90.412518,
        title: 'Dhaka, Bangladesh',
        infoWindow: {
            content: '<p>Dhaka, Bangladesh</p>'
        }
    });
    // Video Pulse
    $(".video_pulse").jPulse({
        color: "#9F53DE",
        size: 200,
        speed: 1400,
        interval: 440,
        left: -7,
        top: 0,
        zIndex: 1
    });

});
