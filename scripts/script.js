// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "40px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "50px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}

// $(document).ready(function () {
//     var scroll_pos = 0;
//     $(document).scroll(function () {
//         scroll_pos = $(this).scrollTop();
//         // console.log(scroll_pos)
//         if (scroll_pos > 600) {
//             $("nav").removeClass("navbar-dark").addClass("navbar-light")
//             $("a#logo").css('color', 'black');
//             $("a.nav-item").css('color', 'black');
//             $(".center").css('background-color', '#00000000');
//         } else {
//             $("nav").removeClass("navbar-light").addClass("navbar-dark")
//             $("a#logo").css('color', 'white');
//             $("a.nav-item").css('color', 'white');
//         }
//     });
// });


// ----------- Scrolling changes ---------- //
jQuery(function ($) {
    var title = $('#hero-title');
    var content = $('#hero-content')
    var navItems = $(".nav-link")
    $(window).on('scroll', function () { //this selects the window and attaches to the scroll event.  when scroll occurs, the inline function is called
        var st = $(this).scrollTop(); //gets the vertical position of the current element
        console.log(st)
        if (st < 650) {
            content.css({ //this changes the css of the divs from before (specifically margin-top and opacity
                'font-size': 32 - st / 60
            });
        }

        // if (st > 2000) {
        //     navItems.css({
        //         'color': 'black'
        //     })
        // } else {
        //     navItems.css({
        //         'color': 'white'
        //     })
        // }

        if (st >= 708) {
            content.css({
                'border-bottom': "2px white solid",
            })
        } else {
            content.css({
                'border-bottom': "none"
            })
        }

        if (st >= 250) {
            title.css({ //this changes the css of the divs from before (specifically margin-top and opacity
                'opacity': 1 - st / 700
            });
        } else {
            title.css({ //this changes the css of the divs from before (specifically margin-top and opacity
                'opacity': 100
            });
        }

        if (st >= 961) {
            content.css({ //this changes the css of the divs from before (specifically margin-top and opacity
                'opacity': 1 - st / 1200
            });
        } else {
            content.css({ //this changes the css of the divs from before (specifically margin-top and opacity
                'opacity': 100
            });
        }

    });
});


// Change Navbar background color on scroll
// var myNav = $("#navbar");
// console.log(document.body.scrollTop)


$(window).on('scroll', function () { //this selects the window and attaches to the scroll event.  when scroll occurs, the inline function is called
    var st = $(this).scrollTop(); //gets the vertical position of the current element
    // console.log(st)
    if (st > 850) {
        $("#navbar").addClass("nav-colored")
        $("#navbar").removeClass("nav-transparent")
    } else {
        $("#navbar").removeClass("nav-colored")
        $("#navbar").addClass("nav-transparent")
    }

    if (st > 600) {
        $(".about-item-head").addClass("slide-in-left")
        $(".about-item-head").removeClass("nodisplay")
    }
    if (st > 1560) {
        $(".about-item-head2").addClass("slide-in-left")
        $(".about-item-head2").removeClass("nodisplay")
    }
    if (st > 2050) {
        $(".about-item-head3").addClass("slide-in-left")
        $(".about-item-head3").removeClass("nodisplay")
    }
});


// -------- play animation on view --------- //

// function isElementInViewport(elem) {
//     var $elem = $(elem);

//     // Get the scroll position of the page.
//     var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
//     var viewportTop = $(scrollElem).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     // Get the position of the element on the page.
//     var elemTop = Math.round($elem.offset().top);
//     var elemBottom = elemTop + $elem.height();

//     return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }

// // Check if it's time to start the animation.
// function checkAnimation() {
//     var $elem = $('.about-item .slide-in-left');

//     // If the animation has already been started
//     if ($elem.hasClass('start')) return;

//     if (isElementInViewport($elem)) {
//         // Start the animation
//         $elem.addClass('start');
//     }
// }

// // Capture scroll events
// $(window).scroll(function () {
//     checkAnimation();
// });