$(function () {
    "use strict";
    // Progress Bar
    $('#one').waterbubble({
        radius: 70,
        lineWidth: undefined,
        data: 0.94,
        waterColor: '#00A6F6',
        textColor: '#ffffff',
        font: '',
        wave: true,
        txt: '94%',
        animation: true
    });
    $('#two').waterbubble({
        radius: 70,
        lineWidth: undefined,
        data: 0.91,
        waterColor: '#00A6F6',
        textColor: '#ffffff',
        font: '',
        wave: true,
        txt: '91%',
        animation: true
    });
    $('#three').waterbubble({
        radius: 70,
        lineWidth: undefined,
        data: 0.89,
        waterColor: '#00A6F6',
        textColor: '#ffffff',
        font: '',
        wave: true,
        txt: '89%',
        animation: true
    });
    $('#four').waterbubble({
        radius: 70,
        lineWidth: undefined,
        data: 0.85,
        waterColor: '#00A6F6',
        textColor: '#ffffff',
        font: '',
        wave: true,
        txt: '85%',
        animation: true
    });
    // Client Section Slider
    $('.clients_slick').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
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
    // Price Section Slider
    $('.prices_slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }]
    });
    // Blog Section Slider
    $('.blog_slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
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
    // Filter Activation
    $('.filtr-container').filterizr();
    // Lightbox Activation
    $('.test-popup-link').magnificPopup({
        type: 'image'
    });
    var html_body = $('html, body');
    var $window = $(window);
    var $sOfset = 500;
    var btt = $('.btt');
    // Counter up
    $('.timing').counterUp({
        delay: 2,
        time: 500
    });
    // Back To Top
    $('.btt').on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 600)
    });
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });
    // Scroolspy
    $("#myNavbar a").on('click', function (event) {
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
            $('.section_one').addClass('sticky');
        } else {
            $('.section_one').removeClass('sticky');
        }
        if ($offset > $sOfset) {
            btt.fadeIn(1000);
        } else {
            btt.fadeOut(1000);
        }
    });
    // Preloader
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
});