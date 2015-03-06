/**
 *   1- Top menu
 *   2- Main menu
 *   3- Main menu-2
 *   4- Ticker
 *   5- Pie chart
 *   6- Scroll to top
 *   7- Owl Carousel
 *   8- Sync owl carousel
 *   9- Masonry
 *   10- Validate Form
 *   11- Video Filter
 *   12- Google Map
 *   13- Sticky sidebar
 *   14- Mobile-menu
 *   15- Vertical menu home 2
 *   16- Match height
 *   15- Fix css ie 8

 *-----------------------------------------------------------------
 **/
 

"use strict";


jQuery(document).ready(function(){

var kopa_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        },
        "tweets": {
            "failed": "Sorry, twitter is currently unavailable for this user.",
            "loading": "Loading tweets..."
        }
    },
    "url": {
        "template_directory_uri":""
    }
};
var map;



/* =========================================================
1. Top Menu
============================================================ */

Modernizr.load([
  {
    load: kopa_variable.url.template_directory_uri + 'js/superfish.js',
    complete: function () {

        //Main menu
        jQuery('.top-menu').superfish({
        });

    }
  }
]);


/* =========================================================
2. Main Menu
============================================================ */

Modernizr.load([
  {
    load: kopa_variable.url.template_directory_uri + 'js/superfish.js',
    complete: function () {

        //Main menu
        jQuery('.sf-menu').superfish({
        });

    }
  }
]);


/* =========================================================
3. Main Menu-2
============================================================ */

Modernizr.load([
  {
    load: [kopa_variable.url.template_directory_uri + 'js/hoverIntent.js',kopa_variable.url.template_directory_uri + 'js/superfish.js'],
    complete: function () {

        //Main menu
        jQuery('.main-menu-2').superfish({
            animation: {height:'show'}, // slide-down effect without fade-in
            delay:       500           // 1.2 second delay on mouseout
        });

    }
  }
]);



/* =========================================================
4. Ticker
============================================================ */

Modernizr.load([
  {
    load: [kopa_variable.url.template_directory_uri + 'js/jquery.ticker.js',kopa_variable.url.template_directory_uri + 'js/site.js'],
    complete: function () {

        jQuery('#js-news').ticker({
            titleText: 'Breaking' 
        });
    }
  }
]);

/* =========================================================
5. Pie chart
============================================================ */

Modernizr.load([
  {
    load: [kopa_variable.url.template_directory_uri + 'js/excanvas.compiled.js', kopa_variable.url.template_directory_uri + 'js/excanvas.js', kopa_variable.url.template_directory_uri + 'js/jquery.easypiechart.js'],
    complete: function () {

        var jQuerychart = jQuery('.chart');
        jQuerychart.easyPieChart({
            barColor: '#e9302b',
            lineWidth: '8',
            lineCap: "square",
            size: '158',
            scaleColor: false,
            animate: 1000,
            onStep: function(from, to, percent) {
                jQuery(this.el).find('.percent').text(Math.round(percent));
            }
        });
        var chart = window.chart = jQuerychart.data('easyPieChart');
    }
  }
]);


/* =========================================================
6. Scroll to top
============================================================ */
 
    jQuery('.scrollup').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });


 /* =========================================================
7. Owl Carousel
============================================================ */

    Modernizr.load([{
        load: ['js/owl.carousel.js'],
        complete: function () {

            var owl1 = jQuery(".owl-carousel-1");
            owl1.owlCarousel({
                singleItem: true,
                pagination: true,
                slideSpeed: 600,
                transitionStyle : "fade",
                navigationText: false,
                navigation: true
            });

            var owl2 = jQuery(".owl-carousel-2");
            owl2.owlCarousel({
                singleItem: true,
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });

            var owl3 = jQuery(".owl-carousel-3");
            owl3.owlCarousel({
                items: 4,
                itemsDesktopSmall : [800,4],
                itemsTablet : [768,3],
                itemsTabletSmall : [480,2],
                pagination: true,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });

            var owl4 = jQuery(".owl-carousel-4");
            owl4.owlCarousel({
                items: 3,
                itemsDesktop: [1024, 3],
                itemsTabletSmall : [480,1],
                slideSpeed: 600,
                pagination: false,
                navigationText: false,
                navigation: true
            });

            var owl5 = jQuery(".owl-carousel-5");
            owl5.owlCarousel({
                items: 3,
                itemsDesktop: [1024, 3],
                itemsTablet : [768,3],
                itemsTabletSmall : [480,2],
                slideSpeed: 600,
                pagination: false,
                navigationText: false,
                navigation: true
            });

            var owl6 = jQuery(".owl-carousel-6");
            owl6.owlCarousel({
                singleItem: true,
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });

            var owl7 = jQuery(".owl-carousel-7");
            owl7.owlCarousel({
                singleItem: true,
                pagination: true,
                slideSpeed: 600,
                transitionStyle : "fade",
                navigation: false
            });

            var owl8 = jQuery(".owl-carousel-8");
            owl8.owlCarousel({
                items: 4,
                itemsTablet: [480, 1],
                slideSpeed: 600,
                pagination: false,
                navigationText: false,
                navigation: true
            });

            var owl9 = jQuery(".owl-carousel-9");
            owl9.owlCarousel({
                items: 2,
                itemsDesktop: [1024, 2],
                itemsDesktopSmall : [979,2],
                itemsTablet : [480,1],
                slideSpeed: 600,
                pagination: true,
                navigationText: false,
                navigation: true
            });

        }
    }]);
 

/* =========================================================
8. Sync owl carousel
============================================================ */
 

if (jQuery('.kopa-sync-carousel-widget').length > 0) {
    Modernizr.load([{
        load: kopa_variable.url.template_directory_uri + 'js/owl.carousel.js',
        complete: function() {
            var sync1 = jQuery(".kopa-sync-carousel-widget .sync1");
            var sync2 = jQuery(".kopa-sync-carousel-widget .sync2");

            sync1.owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                navigation: true,
                navigationText: false,
                pagination: false,
                afterAction: syncPosition,
                responsiveRefreshRate: 200
            });

            sync2.owlCarousel({
                items: 5,
                itemsDesktop: [1199, 5],
                itemsDesktopSmall: [979, 5],
                itemsTablet: [768, 5],
                itemsMobile: [479, 5],
                pagination: true,
                navigation: false,
                navigationText: false,
                responsiveRefreshRate: 100,
                afterInit: function(el) {
                    el.find(".owl-item").eq(0).addClass("synced");
                }
            });

            function syncPosition(el) {
                var current = this.currentItem;
                jQuery(".sync2").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
                if (jQuery(".sync2").data("owlCarousel") !== undefined) {
                    center(current)
                }
            }
            jQuery(".sync2").on("click", ".owl-item", function(e) {
                e.preventDefault();
                var number = jQuery(this).data("owlItem");
                sync1.trigger("owl.goTo", number);
            });

            function center(number){
                var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
                var num = number;
                var found = false;
                for(var i in sync2visible){
                  if(num === sync2visible[i]){
                    var found = true;
                  }
                }
             
                if(found===false){
                  if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                  }else{
                    if(num - 1 === -1){
                      num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                  }
                } else if(num === sync2visible[sync2visible.length-1]){
                  sync2.trigger("owl.goTo", sync2visible[1])
                } else if(num === sync2visible[0]){
                  sync2.trigger("owl.goTo", num-1)
                }
                
            }
        }
    }]);
    
}




/* =========================================================
9. Masonry
============================================================ */

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/masonry.pkgd.js', kopa_variable.url.template_directory_uri + 'js/imagesloaded.js'],
        complete: function () {
            var jQuerymasonry1 = jQuery('.kopa-masonry-widget > ul');
            imagesLoaded(jQuerymasonry1, function () {
                jQuerymasonry1.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item1'
                });
                jQuerymasonry1.masonry('bindResize')
            });

            var jQuerymasonry2 = jQuery('.kopa-product-list-widget > ul');
            imagesLoaded(jQuerymasonry2, function () {
                jQuerymasonry2.masonry({
                    columnWidth: 1,
                    itemSelector: '.col-md-3'
                });
                jQuerymasonry2.masonry('bindResize')
            });
        }
    }]);

/* =========================================================
10. Validate Form
============================================================ */


    /*--- contact form ---*/

    if (jQuery('.contact-form').length >0) {
        Modernizr.load([
          {
            load:['js/jquery.form.js','js/jquery.validate.js'],
            complete: function () {
                jQuery('.contact-form').validate({
                    // Add requirements to each of the fields
                    rules: {
                        name: {
                            required: true,
                            minlength: 2
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            required: true,
                            phone: true
                        },
                        message: {
                            required: true,
                            minlength: 10
                        }
                    },
                    // Specify what error messages to display
                    // when the user does something horrid
                    messages: {
                        name: {
                            required: "Please enter your name.",
                            minlength: jQuery.format("At least {0} characters required.")
                        },
                        email: {
                            required: "Please enter your email.",
                            email: "Please enter a valid email."
                        },
                        phone: {
                            required: "Please enter your phone.",
                            url: "Please enter a valid phone."
                        },
                        message: {
                            required: "Please enter a message.",
                            minlength: jQuery.format("At least {0} characters required.")
                        }
                    },
                    // Use Ajax to send everything to processForm.php
                    submitHandler: function(form) {
                        jQuery("#input-submit").attr("value", "Sending...");
                        jQuery(form).ajaxSubmit({
                            success: function(responseText, statusText, xhr, jQueryform) {
                                jQuery("#response").html(responseText).hide().slideDown("fast");
                                jQuery("#input-submit").attr("value", "Submit");
                            }
                        });
                        return false;
                    }
                });
            }
          }
        ]);
    };

    /*--- comment form ---*/

    if (jQuery('#comments-form').length >0) {
        Modernizr.load([
          {
            load:['js/jquery.form.js','js/jquery.validate.js'],
            complete: function () {
                jQuery('#comments-form').validate({
                    // Add requirements to each of the fields
                    rules: {
                        name: {
                            required: true,
                            minlength: 2
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            required: true,
                            phone: true
                        },
                        message: {
                            required: true,
                            minlength: 10
                        }
                    },
                    // Specify what error messages to display
                    // when the user does something horrid
                    messages: {
                        name: {
                            required: "Please enter your name.",
                            minlength: jQuery.format("At least {0} characters required.")
                        },
                        email: {
                            required: "Please enter your email.",
                            email: "Please enter a valid email."
                        },
                        phone: {
                            required: "Please enter your phone.",
                            url: "Please enter a valid phone."
                        },
                        message: {
                            required: "Please enter a message.",
                            minlength: jQuery.format("At least {0} characters required.")
                        }
                    },
                    // Use Ajax to send everything to processForm.php
                    submitHandler: function(form) {
                        jQuery("#input-submit").attr("value", "Sending...");
                        jQuery(form).ajaxSubmit({
                            success: function(responseText, statusText, xhr, jQueryform) {
                                jQuery("#response").html(responseText).hide().slideDown("fast");
                                jQuery("#input-submit").attr("value", "Submit");
                            }
                        });
                        return false;
                    }
                });
            }
          }
        ]);
    };

   /* =========================================================
11. Video Filter
============================================================ */

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/filtermasonry.js'],
        complete: function () {
            if (jQuery('.video-list-item').length > 0) {
                var jQuerycontainer = jQuery('.video-list-item');

                jQuerycontainer.multipleFilterMasonry({
                    itemSelector: '.ft-item1',
                    filtersGroupSelector:'.filters'
                });
            };
            jQuery('.filters span').click(function(){
                jQuery('.filters span').removeClass('active');
                jQuery(this).addClass('active');
            });
        }
    }]);

/* =========================================================
12. Google Map
============================================================ */

var map;
if (jQuery('.kopa-map').length > 0) {
    Modernizr.load([{
        load: ['js/gmaps.js'],
            complete: function () {
          var id_map = jQuery('.kopa-map').attr('id');
          var lat = parseFloat(jQuery('.kopa-map').attr('data-latitude'));
          var lng = parseFloat(jQuery('.kopa-map').attr('data-longitude'));
          var place = jQuery('.kopa-map').attr('data-place');

      map = new GMaps({
          el: '#'+id_map,
          lat: lat,
          lng: lng,
          zoomControl : true,
          zoomControlOpt: {
              style : 'SMALL',
              position: 'TOP_LEFT'
          },
          panControl : false,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
        });
        map.addMarker({
          lat: lat,
            lng: lng,
          title: place
        });
        }
    }]);
};

/* =========================================================
13. Sticky sidebar
============================================================ */
 
 Modernizr.load([{
    load: ['js/theia-sticky-sidebar.js'],
    complete: function () {
        jQuery('.kopa-home-2-page .nav-bar, .kopa-home-2-page .main-containner')
            .theiaStickySidebar();
    }
}]);
 
/* ============================================
14. Mobile-menu
=============================================== */

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.navgoco.js'],
        complete: function () {
            
            jQuery(".main-menu-mobile").navgoco({
                accordion: true
            });
            jQuery(".main-nav-mobile > .pull").click(function () {
                jQuery(".main-menu-mobile").slideToggle("slow");
            });
            jQuery(".caret").removeClass("caret");


            jQuery(".top-menu-mobile").navgoco({
                accordion: true
            });
            jQuery(".top-nav-mobile > .pull").click(function () {
                jQuery(".top-menu-mobile").slideToggle("slow");
            });
            jQuery(".caret").removeClass("caret");
        }
    }]);

/* ============================================
15. Vertical menu home 2
=============================================== */

    
    jQuery('.nav-bar-active').click(function () {
        if (jQuery(".nav-bar").is(":hidden")) {
            jQuery(".nav-bar").show(400).animate({
              }, 400);
            jQuery(this).removeClass("fa-bars").addClass("fa-times");
            jQuery(".kopa-home-2-page .wrapper").css("margin-left", "30px");
            jQuery(".theiaStickySidebar").css({
                "width": "auto",
                "position": "inherit", 
                "left": "inherit"
            });
        } else {
            jQuery(".nav-bar").animate({
            }, 400).hide(400);
            jQuery(this).removeClass("fa-times").addClass("fa-bars");
            jQuery(".kopa-home-2-page .wrapper").css("margin", "0 auto");
            jQuery(".theiaStickySidebar").css({
                "width": "auto",
                "position": "inherit", 
                "left": "inherit"
            });
        }
    });

/* ============================================
16. Match height
=============================================== */

    
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.matchHeight.js'],
        complete: function () {
            
            jQuery('.bottom-area-1').each(function() {
                jQuery(this).children('.area-item').matchHeight();
            });
        }
    }]);

   /* =========================================================
17. Fix css ie 8
============================================================ */

    
    jQuery("#bottom-sidebar .widget:last-child").css({
        "margin-bottom": "30px", 
        "padding-bottom": "0",
        "border-bottom": "none"
    });

/* =========================================================
19. Sticky menu
============================================================ */ 

var sticky = document.querySelector('.kopa-header-middle');
var origOffsetY = sticky.offsetTop;

function onScroll(e) {
    window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
        sticky.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);

});
