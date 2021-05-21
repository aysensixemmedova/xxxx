'use strict'
var searchactive = document.querySelector('.searchactive');
var X = document.querySelector('.searchactive span');
function search() {
    searchactive.style.height="100%";
    searchactive.style.opacity="1";
    searchactive.style.visibility="visible";
    x.style.display="block";
}
function exit() {
    searchactive.style.visibility="hidden";
    searchactive.style.opacity="0";
    searchactive.style.height="0";
    x.style.display="none";
}
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.header').addClass('headeractive');
        }
        else {
            $('.header').removeClass('headeractive');
        }
    })
})
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $('.phone-header').addClass('headeractive');
        }
        else {
            $('.phone-header').removeClass('headeractive');
        }
    })
})
AOS.init({
    duration: 1000,
});
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    responsive: [{
        breakpoint: 576,
        settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        }
    }

    ]

});
//FIRSTSLIDER
$('.firstslider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
});
//CITYSLIDER
$('.cityslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
});
//PERSONSLIDER
$('.personleft').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});
$('.personright').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            }
        },
    ]
});
//WAYSLIDER
$('.wayslider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
});

//ABOUTT//
//TravelStorySlider
$('.travelStorySlider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
});
//greatToursSlider
$('.greatToursSlider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
});
//awesomeSlider
$('.awesomeSlider').slick({ 
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
});

// ------------------------
jQuery(document).ready(function ($) {

    // OFF Canvas
    var menuTrigger = jQuery('#menu-trigger');
    jQuery(menuTrigger).on('click', function (event) {
        console.log(menuTrigger)
        event.preventDefault();
        jQuery(this).toggleClass('menu-btn-open');
        jQuery('body').addClass('body-menu-open');
        jQuery('nav > ul').addClass('menu-open');
        jQuery('#menuexit').css('display','block');
        jQuery('nav > ul').css('left',"0%");   
    }); // end OFF Canvas

    var exit = document.getElementById("menuexit");
    var menubar = document.getElementById("menuba");
    exit.onclick= function(){
        menubar.style.left= "-280px";
        exit.style.display="none";
    }
    // DROPDOWN   

    /* if you want submenu open when MENU ITEM is clicked use this code */
    // start menu item code
    var menuItemTrigger = "<span class='caret caret-up'></span>";

    var hasSubmenu = $('ul li').has('ul').addClass('hasSubmenu').find('>a').prepend(menuItemTrigger);

    $('.menu li.hasSubmenu > a').on('click', function (event) {
        event.preventDefault();

        $(this).find('>span').toggleClass('caret-down').closest('li').siblings().find('.caret').removeClass('caret-down');

        $(this).closest('li').find('>ul').stop(true, true).slideToggle(150);

        $(this).closest('li').siblings().find('ul').stop(true, true).slideUp(200);

    });
    jQuery('html').on('click', function (event) {
        if (jQuery('body').hasClass('body-menu-open')) {
            menuTrigger.removeClass('menu-btn-open');
            jQuery('body').removeClass('body-menu-open');
            jQuery('nav > ul').removeClass('menu-open');
        }
    });
    $('nav').click(function (event) {
        event.stopPropagation();
    });

});

