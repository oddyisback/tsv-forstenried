/**
 * Created by odyssefs on 12.09.16.
 */
'use strict';
angular.module('basketClubApp',  ['ngRoute']).config(function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(false);
    //$locationProvider.hashPrefix('!');
    $routeProvider
            .when('/', {
                templateUrl : 'partials/homepage.html',
                controller  : 'mainController'
            })
            .when('/homepage', {
                templateUrl : 'partials/homepage.html',
                controller  : 'mainController'
            })
            // route for the about galleries
            .when('/galleries', {
                templateUrl : 'partials/galleries.html',
                controller  : 'galleriesController'
            })
            // route for the about galleries
            .when('/galleries-4', {
                templateUrl : 'partials/gallery-4.html',
                controller  : 'galleriesController'
            })
            // route for the contact page
            .when('/contact', {
                templateUrl : 'partials/contact3.html',
                controller  : 'contactController'
            })
            // route for the calender for Herren 1 page
            .when('/event-calender-man-1', {
                templateUrl : 'partials/event-calender-man-1.html',
                controller  : 'contactController'
            })
            // route for the calender for Herren 2 page
            .when('/event-calender-man-2', {
                templateUrl : 'partials/event-calender-man-2.html',
                controller  : 'contactController'
            })
            // route for the calender for Herren 1 page
            .when('/event-calender-man-3', {
                templateUrl : 'partials/event-calender-man-3.html',
                controller  : 'contactController'
            })
            // route for the calender for Herren 2 page
            .when('/event-calender-man-4', {
                templateUrl : 'partials/event-calender-man-4.html',
                controller  : 'contactController'
            })
            // route for the calender for Herren 1 page
            .when('/event-calender-woman-1', {
                templateUrl : 'partials/event-calender-woman-1.html',
                controller  : 'contactController'
            })
            // route for the calender for Herren 2 page
            .when('/event-calender-u18', {
                templateUrl : 'partials/event-calender-u18.html',
                controller  : 'contactController'
            })
            // route for the calender for Herren 1 page
            .when('/event-calender-u16', {
                templateUrl : 'partials/event-calender-u16.html',
                controller  : 'contactController'
            })
            // route for the calender for Herren 2 page
            .when('/event-calender-u14-mix', {
                templateUrl : 'partials/event-calender-u14-mix.html',
                controller  : 'contactController'
            })
            // route for the calender for Herren 1 page
            .when('/event-calender-u12-mix', {
                templateUrl : 'partials/event-calender-u12-mix.html',
                controller  : 'contactController'
            })
            // route for the calender for U10 mix page
            .when('/event-calender-u10-mix', {
                templateUrl : 'partials/event-calender-u10-mix.html',
                controller  : 'contactController'
            })
            // route for the calender for U18 page
            .when('/about-u18', {
                templateUrl : 'partials/about-u18.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/about-u16', {
                templateUrl : 'partials/about-u16.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/about-man-1', {
                templateUrl : 'partials/about-man-1.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/about-man-4', {
                templateUrl : 'partials/about-man-4.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/artikel-jetzt-erst-recht', {
                templateUrl : 'partials/articles/u18/artikel-jetzt-erst-recht.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/artikel-die-damenmannschaft-sucht-fuer-die-kommende-saison-verstaerkung', {
                templateUrl : 'partials/articles/damen-1/artikel-die-damenmannschaft-sucht-fuer-die-kommende-saison-verstaerkung.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/tsv-forstenried-tag-der-offenen-tuer-18-6', {
                templateUrl : 'partials/articles/u14-mix/tsv-forstenried-tag-der-offenen-tuer-18-6.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/mitglied-werden', {
                templateUrl : 'assets/docs/mitglied-werden.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/gallery-herren-1', {
                templateUrl : 'partials/galleries/gallery-herren-1.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-4-herren-1', {
                templateUrl : 'partials/galleries/gallery-4-herren-1.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-4-herren-2', {
                templateUrl : 'partials/galleries/gallery-4-herren-2.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-herren-2', {
                templateUrl : 'partials/galleries/gallery-herren-2.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-4-herren-3', {
                templateUrl : 'partials/galleries/gallery-4-herren-3.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-herren-3', {
                templateUrl : 'partials/galleries/gallery-herren-3.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-4-herren-4', {
                templateUrl : 'partials/galleries/gallery-4-herren-4.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-herren-4', {
                templateUrl : 'partials/galleries/gallery-herren-4.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-damen-1', {
                templateUrl : 'partials/galleries/gallery-damen-1.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-4-damen-1', {
                templateUrl : 'partials/galleries/gallery-4-damen-1.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-4-u18', {
                templateUrl : 'partials/galleries/gallery-4-u18.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-u18', {
                templateUrl : 'partials/galleries/gallery-u18.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-4-u16', {
                templateUrl : 'partials/galleries/gallery-4-u16.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-u16', {
                templateUrl : 'partials/galleries/gallery-u16.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-4-u14-mix', {
                templateUrl : 'partials/galleries/gallery-4-u14-mix.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-u14-mix', {
                templateUrl : 'partials/galleries/gallery-u14-mix.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-4-u12-mix', {
                templateUrl : 'partials/galleries/gallery-4-u12-mix.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-u12-mix', {
                templateUrl : 'partials/galleries/gallery-u12-mix.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-4-u10-mix', {
                templateUrl : 'partials/galleries/gallery-4-u10-mix.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-u10-mix', {
                templateUrl : 'partials/galleries/gallery-u10-mix.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/faq', {
                templateUrl : 'partials/faq.html',
                controller: 'faqController'
            })
            // route for the calender for U16 page
            .when('/aufnahmeantrag', {
                templateUrl : 'assets/docs/aufnahmeantrag.pdf'
            })
            // route for the calender for U16 page
            .when('/sponsors', {
                templateUrl : 'partials/sponsors.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/season-anfang', {
                templateUrl : 'partials/articles/damen-1/season-anfang.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/basketball-u16-kreisliga', {
                templateUrl : 'partials/articles/u16/basketball-u16-kreisliga.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/pretty-flamingos', {
                templateUrl : 'partials/articles/herren-4/pretty-flamingos.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/article-die-herren-1-nimmt-sich-hohe-ziele-vor', {
                templateUrl : 'partials/articles/herren-1/article-die-herren-1-nimmt-sich-hohe-ziele-vor.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/article-saisonstart-in-die-bezirksliga', {
                templateUrl : 'partials/articles/u18/article-saisonstart-in-die-bezirksliga.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/tsv-forstenried-ts-jahn-muenchen-2', {
                templateUrl : 'partials/articles/u18/tsv-forstenried-ts-jahn-muenchen-2.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/tsv-jahn-freising-tsv-forstenried', {
                templateUrl : 'partials/articles/u18/tsv-jahn-freising-tsv-forstenried.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/tsv-unterhaching-tsv-forstenried', {
                templateUrl : 'partials/articles/u18/tsv-unterhaching-tsv-forstenried.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/saisonauftakt-herren-1', {
                templateUrl : 'partials/articles/herren-1/saisonauftakt-herren-1.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/tsv-forstenried–tsv-wasserburg', {
                templateUrl : 'partials/articles/u18/tsv-forstenried–tsv-wasserburg.html',
                controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/tsv-forstenried-tsv-unterhaching', {
              templateUrl : 'partials/articles/u18/tsv-forstenried-tsv-unterhaching.html',
              controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/ts-jahn-muenchen-2-tsv-forstenried', {
              templateUrl : 'partials/articles/u18/ts-jahn-muenchen-2-tsv-forstenried.html',
              controller  : 'about-controller'
            })
            // route for the calender for U16 page
            .when('/muenchen-basket-tsv-forstenried', {
              templateUrl : 'partials/articles/u18/muenchen-basket-tsv-forstenried.html',
              controller  : 'about-controller'
            })
            // route for the christmas event
            .when('/weihnachtsfeier-im-intermezzo-2017', {
              templateUrl : 'partials/weihnachtsfeier-im-intermezzo-2017.html',
              controller  : 'about-controller'
            })
            // route for u16 third place won
            .when('/u16-hat-dritten-platz-erarbeitet', {
              templateUrl : 'partials/articles/u16/u16-hat-dritten-platz-erarbeitet.html',
              controller  : 'about-controller'
            })
            // route for u16 third place won
            .when('/bezirksliga–geht-noch-mehr', {
              templateUrl : 'partials/articles/u18/bezirksliga–geht-noch-mehr.html',
              controller  : 'about-controller'
            })
            // route for damen
            .when('/basketball-damen-im-aufwind', {
              templateUrl : 'partials/articles/damen-1/basketball-damen-im-aufwind.html',
              controller  : 'about-controller'
            })
            // route for u18 tsv-wasserburg-tsv-forstenried
            .when('/tsv-wasserburg-tsv-forstenried', {
              templateUrl : 'partials/articles/u18/tsv-wasserburg-tsv-forstenried.html',
              controller  : 'about-controller'
            })
            // route for u18 tsv-forstenried-tsv-utting
            .when('/tsv-forstenried-tsv-utting', {
              templateUrl : 'partials/articles/u18/tsv-forstenried-tsv-utting.html',
              controller  : 'about-controller'
            })

            .otherwise({
                redirectTo: '/'
            });

    })
    .factory ('ApplicationService', function(){
        var serv = [];


        /* ==========================================================================
         TABLE OF CONTENTS
         */
        /*
         01. SIDR Close Menu on Resize
         02. SIDR Menu
         03. Tabs
         04. Parallax
         05. Fit Vids
         06. Fancybox
         07. Scroll Up
         08. HTML Media
         09. Mosaic Styles
         10. Owl Carousel
         11. Isotope Gallery
         12. Toggle
         13. Accordion
         14. Smooth Scroll
         15. Tool Tips
         16. Countdowns

         ========================================================================== */
        serv.onLoadMainJs = function (){
            /*
             01. SIDR CLOSE MENU ON RESIZE ______________________________________________ */
            jQuery(window).resize(function() {
                jQuery.sidr('close', 'sidr-main');
            });



            $(document).ready(function() {


                /*
                 02. SIDR MENU ______________________________________________________________ */
                $('#responsive-menu-button').sidr({
                    name: 'sidr-main',
                    source: '#navigation'
                });
                $('#sidr-id-closebtn').click(function() {
                    $.sidr('close', 'sidr-main');
                });
                $('#about-man-1').click(function() {
                    $.sidr('close', 'sidr-main');
                });




                /*
                 03. TABS ___________________________________________________________________ */
                $("#tab-container1").cleanTabs({
                    "speed": 400
                });
                $("#tab-container2").cleanTabs({
                    "speed": 400
                });




                /*
                 04. PARALLAX ________________________________________________________________ */
                $(window).stellar()




                /*
                 05. FIT VIDS ________________________________________________________________ */
                $(".body-wrapper").fitVids();




                /*
                 06. FANCYBOX ________________________________________________________________ */
                $('.fancybox').fancybox();




                /*
                 07. SCROLL UP ________________________________________________________________ */
                $.scrollUp({
                    scrollName: 'scrollUp',
                    topDistance: '300',
                    topSpeed: 300,
                    animation: 'fade',
                    animationInSpeed: 200,
                    animationOutSpeed: 200,
                    scrollText: '',
                    activeOverlay: false,
                });




                /*
                 09. MOSAIC STYLES _____________________________________________________________ */
                $('.circle').mosaic({
                    opacity		:	0.8			//Opacity for overlay (0-1)
                });

                $('.fade').mosaic();

                $('.bar').mosaic({
                    animation	:	'slide'		//fade or slide
                });

                $('.bar2').mosaic({
                    animation	:	'slide'		//fade or slide
                });

                $('.bar3').mosaic({
                    animation	:	'slide',	//fade or slide
                    anchor_y	:	'top'		//Vertical anchor position
                });

                $('.cover').mosaic({
                    animation	:	'slide',	//fade or slide
                    hover_x		:	'400px'		//Horizontal position on hover
                });

                $('.cover2').mosaic({
                    animation	:	'slide',	//fade or slide
                    anchor_y	:	'top',		//Vertical anchor position
                    hover_y		:	'80px'		//Vertical position on hover
                });

                $('.cover3').mosaic({
                    animation	:	'slide',	//fade or slide
                    hover_x		:	'400px',	//Horizontal position on hover
                    hover_y		:	'300px'		//Vertical position on hover
                });





                /*
                 10. OWL CAROUSEL ____________________________________________________________ */
                var owl = $("#carousel-1");

                owl.owlCarousel({

                    items : 4,
                    itemsCustom : false,
                    itemsDesktop : [1199,3],
                    itemsDesktopSmall : [980,3],
                    itemsTablet: [768,2],
                    itemsTabletSmall: false,
                    itemsMobile : [479,1],
                    singleItem : false,
                    itemsScaleUp : false,

                    //Basic Speeds
                    slideSpeed : 200,
                    paginationSpeed : 800,
                    rewindSpeed : 1000,

                    //Autoplay
                    autoPlay : false,
                    stopOnHover : false,

                    // Navigation
                    navigation : true,
                    navigationText : ["prev","next"],
                    rewindNav : true,
                    scrollPerPage : false,

                    //Pagination
                    pagination : true,
                    paginationNumbers: false,

                    // Responsive
                    responsive: true,
                    responsiveRefreshRate : 200,
                    responsiveBaseWidth: window,


                });


                $(".next").click(function(){
                    owl.trigger('owl.next');
                });
                $(".prev").click(function(){
                    owl.trigger('owl.prev');
                });
                $(".play").click(function(){
                    owl.trigger('owl.play',1000);
                });
                $(".stop").click(function(){
                    owl.trigger('owl.stop');
                });





                /* CAROUSEL */
                var owl = $("#carousel-single");

                owl.owlCarousel({

                    items : 1,
                    pagination : false,
                    singleItem : true,
                    itemsScaleUp : false,
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    autoHeight:true,

                });





                /*
                 11. ISOTOPE GALLERY ________________________________________________________________ */
                var $container = $('#thumb-gallery');

                $container.isotope({
                    masonry: {
                        columnWidth: 1 //was 26
                    },
                    sortBy: 'number',
                    getSortData: {
                        number: function( $elem ) {
                            var number = $elem.hasClass('element') ?
                                $elem.find('.number').text() :
                                $elem.attr('data-number');
                            return parseInt( number, 10 );
                        },
                        alphabetical: function( $elem ) {
                            var name = $elem.find('.name'),
                                itemText = name.length ? name : $elem;
                            return itemText.text();
                        }
                    }
                });


                var $optionSets = $('.option-set'),
                    $optionLinks = $optionSets.find('a');

                $optionLinks.click(function(){
                    var $this = $(this);
                    // don't proceed if already selected
                    if ( $this.hasClass('selected') ) {
                        return false;
                    }
                    var $optionSet = $this.parents('.option-set');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');

                    // make option object dynamically, i.e. { filter: '.my-filter-class' }
                    var options = {},
                        key = $optionSet.attr('data-option-key'),
                        value = $this.attr('data-option-value');
                    // parse 'false' as false boolean
                    value = value === 'false' ? false : value;
                    options[ key ] = value;
                    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
                        // changes in layout modes need extra logic
                        changeLayoutMode( $this, options )
                    } else {
                        // otherwise, apply new options
                        $container.isotope( options );
                    }

                    return false;
                });


                // initialize Isotope after all images have loaded
                var $container = $('#thumb-gallery').imagesLoaded( function() {
                    $container.isotope({
                        // options
                    });
                });





                /*
                 12. TOGGLE ________________________________________________________________ */
                $('.toggle-btn').click(function(e){
                    e.preventDefault();
                    $(this).closest('li').find('.toggle-content').not(':animated').slideToggle();
                });

// Add Class for Toggle
                $(".toggle-btn").click(function () {
                    $(this).toggleClass("active");
                });







                /*
                 13. ACCORDION ________________________________________________________________ */
                //$('.accordion-btn').click(function(e){
                //    e.preventDefault();
                //    $this = $(this);
                //    $thisAccordionContent = $this.closest('li').find('.accordion-content');
                //    var currentStatus = "";
                //    if ($this.attr('class').indexOf('active') != -1) {
                //        currentStatus = "active";
                //    }
                //    //first close all and remove active class
                //    $this.closest('.accordion').find('li').each(function(index) {
                //        $thisLi = $(this);
                //        $thisLi.find('.accordion-btn').removeClass('active');
                //        $thisLi.find('.accordion-content').slideUp('400', function() {
                //            $(this).removeClass('active');
                //        });
                //    });
                //    if (currentStatus != "active") {
                //        $thisAccordionContent.not(':animated').slideDown();
                //        $this.addClass('active');
                //        $thisAccordionContent.addClass('active');
                //    }
                //});






                /*
                 14. SMOOTH SCROLL ________________________________________________________________ */
                $('a[href*=#]:not([href=#])').click(function() {
                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top
                            }, 500);
                            return false;
                        }
                    }
                });






                /*
                 15. TOOL TIPS ________________________________________________________________ */
                $('.tooltip').tooltipster({
                    contentAsHTML: true,
                    animation: 'fade', /* fade, grow, swing, slide, fall */
                    delay: 150,
                    touchDevices: true,
                    trigger: 'hover',
                    position: 'top', /*right, left, top, top-right, top-left, bottom, bottom-right, bottom-left */
                });






                /*
                 16. COUNTDOWNS ________________________________________________________________ */

                var endDate = "March 26, 2017 17:00:00";

                $('.countdown.simple').countdown({ date: endDate });

                $('.countdown.styled').countdown({
                    date: endDate,
                    render: function(data) {
                        $(this.el).html("<div class='cd-years'>" + this.leadingZeros(data.years, 1) + " <span>years</span></div><div class='cd-days'>" + this.leadingZeros(data.days, 1) + " <span>days</span></div><div class='cd-hours'>" + this.leadingZeros(data.hours, 1) + " <span>hrs</span></div><div class='cd-mins'>" + this.leadingZeros(data.min, 1) + " <span>min</span></div><div class='cd-secs'>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
                    }
                });



                /*
                 17. COUNTDOWNS ________________________________________________________________ */
                $("#page-sticky").sticky({ topSpacing: 0 });

// End Call
            });
        };

        /*
         1. REVOLUTION SLIDER HOME PAGE 2___________________________________________________ */
        serv.onLoadSlider = function (){
            jQuery('.tp-banner').show().revolution({
                dottedOverlay:"none",
                delay:16000,
                startwidth:1140,
                startheight:600,
                hideThumbs:200,

                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:5,

                navigationType:"bullet",
                navigationArrows:"solo",
                navigationStyle:"round-old",

                touchenabled:"on",
                onHoverStop:"off",

                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,

                parallax:"mouse",
                parallaxBgFreeze:"on",
                parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

                keyboardNavigation:"off",
                hideTimerBar:"off",

                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,

                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,

                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,

                shadow:0,
                fullWidth:"on",
                fullScreen:"on",

                spinner:"spinner5",

                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:4,

                shuffle:"off",

                autoHeight:"off",
                forceFullWidth:"off",


                hideThumbsOnMobile:"off",
                hideNavDelayOnMobile:1500,
                hideBulletsOnMobile:"off",
                hideArrowsOnMobile:"off",
                hideThumbsUnderResolution:0,

                hideSliderAtLimit:0,
                hideCaptionAtLimit:600,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0,
                videoJsPath:"rs-plugin/videojs/",
                fullScreenOffsetContainer: ".pre-header-area, .header-area, .post-header-area"
            });
        };

        /*
         11. ISOTOPE GALLERY ________________________________________________________________*/
        serv.onLoadIsoTypeGallery = function () {

            var $container = $('#thumb-gallery');

            $container.isotope({
                masonry: {
                    columnWidth: 1 //was 26
                },
                sortBy: 'number',
                getSortData: {
                    number: function ($elem) {
                        var number = $elem.hasClass('element') ?
                            $elem.find('.number').text() :
                            $elem.attr('data-number');
                        return parseInt(number, 10);
                    },
                    alphabetical: function ($elem) {
                        var name = $elem.find('.name'),
                            itemText = name.length ? name : $elem;
                        return itemText.text();
                    }
                }
            });


            var $optionSets = $('.option-set'),
                $optionLinks = $optionSets.find('a');

            $optionLinks.click(function () {
                var $this = $(this);
                // don't proceed if already selected
                if ($this.hasClass('selected')) {
                    return false;
                }
                var $optionSet = $this.parents('.option-set');
                $optionSet.find('.selected').removeClass('selected');
                $this.addClass('selected');

                // make option object dynamically, i.e. { filter: '.my-filter-class' }
                var options = {},
                    key = $optionSet.attr('data-option-key'),
                    value = $this.attr('data-option-value');
                // parse 'false' as false boolean
                value = value === 'false' ? false : value;
                options[key] = value;
                if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                    // changes in layout modes need extra logic
                    changeLayoutMode($this, options)
                } else {
                    // otherwise, apply new options
                    $container.isotope(options);
                }

                return false;
            });


            // initialize Isotope after all images have loaded
            var $container = $('#thumb-gallery').imagesLoaded(function () {
                $container.isotope({
                    // options
                });
            });

            if(!$.omr){
                $.omr = new Object();
            };

            $.omr.mosaic = function(el, options){

                var base = this;

                // Access to jQuery and DOM versions of element
                base.$el = $(el);
                base.el = el;

                // Add a reverse reference to the DOM object
                base.$el.data("omr.mosaic", base);

                base.init = function(){
                    base.options = $.extend({},$.omr.mosaic.defaultOptions, options);

                    base.load_box();
                };

                // Preload Images
                base.load_box = function(){
                    // Hide until window loaded, then fade in
                    if (base.options.preload){
                        $(base.options.backdrop, base.el).hide();
                        $(base.options.overlay, base.el).hide();

                        $(window).load(function(){
                            // IE transparency fade fix
                            if(base.options.options.animation == 'fade' && $(base.options.overlay, base.el).css('opacity') == 0 ) $(base.options.overlay, base.el).css('filter', 'alpha(opacity=0)');

                            $(base.options.overlay, base.el).fadeIn(200, function(){
                                $(base.options.backdrop, base.el).fadeIn(200);
                            });

                            base.allow_hover();
                        });
                    }else{
                        $(base.options.backdrop, base.el).show();
                        $(base.options.overlay , base.el).show();
                        base.allow_hover();
                    }
                };

                // Initialize hover animations
                base.allow_hover = function(){
                    // Select animation
                    switch(base.options.animation){

                        // Handle fade animations
                        case 'fade':
                            $(base.el).hover(function () {
                                $(base.options.overlay, base.el).stop().fadeTo(base.options.speed, base.options.opacity);
                            },function () {
                                $(base.options.overlay, base.el).stop().fadeTo(base.options.speed, 0);
                            });

                            break;

                        // Handle slide animations
                        case 'slide':
                            // Grab default overlay x,y position
                            var startX = $(base.options.overlay, base.el).css(base.options.anchor_x) != 'auto' ? $(base.options.overlay, base.el).css(base.options.anchor_x) : '0px';
                            var startY = $(base.options.overlay, base.el).css(base.options.anchor_y) != 'auto' ? $(base.options.overlay, base.el).css(base.options.anchor_y) : '0px';;

                            var hoverState = {};
                            hoverState[base.options.anchor_x] = base.options.hover_x;
                            hoverState[base.options.anchor_y] = base.options.hover_y;

                            var endState = {};
                            endState[base.options.anchor_x] = startX;
                            endState[base.options.anchor_y] = startY;

                            $(base.el).hover(function () {
                                $(base.options.overlay, base.el).stop().animate(hoverState, base.options.speed);
                            },function () {
                                $(base.options.overlay, base.el).stop().animate(endState, base.options.speed);
                            });

                            break;
                    };
                };

                // Make it go!
                base.init();
            };

            $.omr.mosaic.defaultOptions = {
                animation	: 'fade',
                speed		: 150,
                opacity		: 1,
                preload		: 0,
                anchor_x	: 'left',
                anchor_y	: 'bottom',
                hover_x		: '0px',
                hover_y		: '0px',
                overlay  	: '.mosaic-overlay',	//Mosaic overlay
                backdrop 	: '.mosaic-backdrop'	//Mosaic backdrop
            };

            $.fn.mosaic = function(options){
                return this.each(function(){
                    (new $.omr.mosaic(this, options));
                });
            };
        };

        /*09. MOSAIC STYLES ________________________________________________________________ */
        serv.onLoadMosaicStyles = function () {
            $('.circle').mosaic({
                opacity		:	0.8			//Opacity for overlay (0-1)
            });

            $('.fade').mosaic();

            $('.bar').mosaic({
                animation	:	'slide'		//fade or slide
            });

            $('.bar2').mosaic({
                animation	:	'slide'		//fade or slide
            });

            $('.bar3').mosaic({
                animation	:	'slide',	//fade or slide
                anchor_y	:	'top'		//Vertical anchor position
            });

            $('.cover').mosaic({
                animation	:	'slide',	//fade or slide
                hover_x		:	'400px'		//Horizontal position on hover
            });

            $('.cover2').mosaic({
                animation	:	'slide',	//fade or slide
                anchor_y	:	'top',		//Vertical anchor position
                hover_y		:	'80px'		//Vertical position on hover
            });

            $('.cover3').mosaic({
                animation	:	'slide',	//fade or slide
                hover_x		:	'400px',	//Horizontal position on hover
                hover_y		:	'300px'		//Vertical position on hover
            });
        };

        // select the .head elements, and bind an event handler to them
        serv.onLoadToggleBtn = function () {
            $('.toggle-btn').click(function(e){

                // prevent the default action of the click event
                // ie. prevent the browser from redirecting to the link's href
                e.preventDefault();

                // 'this' is the execution context of the event handler
                // it refers to the clicked .head element
                $(this)

                // Walk up the DOM tree to find the closest list item
                // It is the closest shared ancestor of both .head and .content
                    .closest('li')

                    // Search the list item for .content
                    .find('.toggle-content')

                    // Trigger the sliding animation on .content
                    .slideToggle();
            });
        };

        serv.onLoadMosaic = function () {
            if(!$.omr){
                $.omr = new Object();
            };

            $.omr.mosaic = function(el, options){

                var base = this;

                // Access to jQuery and DOM versions of element
                base.$el = $(el);
                base.el = el;

                // Add a reverse reference to the DOM object
                base.$el.data("omr.mosaic", base);

                base.init = function(){
                    base.options = $.extend({},$.omr.mosaic.defaultOptions, options);

                    base.load_box();
                };

                // Preload Images
                base.load_box = function(){
                    // Hide until window loaded, then fade in
                    if (base.options.preload){
                        $(base.options.backdrop, base.el).hide();
                        $(base.options.overlay, base.el).hide();

                        $(window).load(function(){
                            // IE transparency fade fix
                            if(base.options.options.animation == 'fade' && $(base.options.overlay, base.el).css('opacity') == 0 ) $(base.options.overlay, base.el).css('filter', 'alpha(opacity=0)');

                            $(base.options.overlay, base.el).fadeIn(200, function(){
                                $(base.options.backdrop, base.el).fadeIn(200);
                            });

                            base.allow_hover();
                        });
                    }else{
                        $(base.options.backdrop, base.el).show();
                        $(base.options.overlay , base.el).show();
                        base.allow_hover();
                    }
                };

                // Initialize hover animations
                base.allow_hover = function(){
                    // Select animation
                    switch(base.options.animation){

                        // Handle fade animations
                        case 'fade':
                            $(base.el).hover(function () {
                                $(base.options.overlay, base.el).stop().fadeTo(base.options.speed, base.options.opacity);
                            },function () {
                                $(base.options.overlay, base.el).stop().fadeTo(base.options.speed, 0);
                            });

                            break;

                        // Handle slide animations
                        case 'slide':
                            // Grab default overlay x,y position
                            var startX = $(base.options.overlay, base.el).css(base.options.anchor_x) != 'auto' ? $(base.options.overlay, base.el).css(base.options.anchor_x) : '0px';
                            var startY = $(base.options.overlay, base.el).css(base.options.anchor_y) != 'auto' ? $(base.options.overlay, base.el).css(base.options.anchor_y) : '0px';;

                            var hoverState = {};
                            hoverState[base.options.anchor_x] = base.options.hover_x;
                            hoverState[base.options.anchor_y] = base.options.hover_y;

                            var endState = {};
                            endState[base.options.anchor_x] = startX;
                            endState[base.options.anchor_y] = startY;

                            $(base.el).hover(function () {
                                $(base.options.overlay, base.el).stop().animate(hoverState, base.options.speed);
                            },function () {
                                $(base.options.overlay, base.el).stop().animate(endState, base.options.speed);
                            });

                            break;
                    };
                };

                // Make it go!
                base.init();
            };

            $.omr.mosaic.defaultOptions = {
                animation	: 'fade',
                speed		: 150,
                opacity		: 1,
                preload		: 0,
                anchor_x	: 'left',
                anchor_y	: 'bottom',
                hover_x		: '0px',
                hover_y		: '0px',
                overlay  	: '.mosaic-overlay',	//Mosaic overlay
                backdrop 	: '.mosaic-backdrop'	//Mosaic backdrop
            };

            $.fn.mosaic = function(options){
                return this.each(function(){
                    (new $.omr.mosaic(this, options));
                });
            };
        };

        serv.onLoadCountDown = function (){
            $.countdown = function(el, options) {
                var getDateData,
                    _this = this;
                this.el = el;
                this.$el = $(el);
                this.$el.data("countdown", this);
                this.init = function() {
                    _this.options = $.extend({}, $.countdown.defaultOptions, options);
                    if (_this.options.refresh) {
                        _this.interval = setInterval(function() {
                            return _this.render();
                        }, _this.options.refresh);
                    }
                    _this.render();
                    return _this;
                };
                getDateData = function(endDate) {
                    var dateData, diff;
                    endDate = Date.parse($.isPlainObject(_this.options.date) ? _this.options.date : new Date(_this.options.date));
                    diff = (endDate - Date.parse(new Date)) / 1000;
                    if (diff <= 0) {
                        diff = 0;
                        if (_this.interval) {
                            _this.stop();
                        }
                        _this.options.onEnd.apply(_this);
                    }
                    dateData = {
                        years: 0,
                        days: 0,
                        hours: 0,
                        min: 0,
                        sec: 0,
                        millisec: 0
                    };
                    if (diff >= (365.25 * 86400)) {
                        dateData.years = Math.floor(diff / (365.25 * 86400));
                        diff -= dateData.years * 365.25 * 86400;
                    }
                    if (diff >= 86400) {
                        dateData.days = Math.floor(diff / 86400);
                        diff -= dateData.days * 86400;
                    }
                    if (diff >= 3600) {
                        dateData.hours = Math.floor(diff / 3600);
                        diff -= dateData.hours * 3600;
                    }
                    if (diff >= 60) {
                        dateData.min = Math.floor(diff / 60);
                        diff -= dateData.min * 60;
                    }
                    dateData.sec = diff;
                    return dateData;
                };
                this.leadingZeros = function(num, length) {
                    if (length == null) {
                        length = 2;
                    }
                    num = String(num);
                    while (num.length < length) {
                        num = "0" + num;
                    }
                    return num;
                };
                this.update = function(newDate) {
                    _this.options.date = newDate;
                    return _this;
                };
                this.render = function() {
                    _this.options.render.apply(_this, [getDateData(_this.options.date)]);
                    return _this;
                };
                this.stop = function() {
                    if (_this.interval) {
                        clearInterval(_this.interval);
                    }
                    _this.interval = null;
                    return _this;
                };
                this.start = function(refresh) {
                    if (refresh == null) {
                        refresh = _this.options.refresh || $.countdown.defaultOptions.refresh;
                    }
                    if (_this.interval) {
                        clearInterval(_this.interval);
                    }
                    _this.render();
                    _this.options.refresh = refresh;
                    _this.interval = setInterval(function() {
                        return _this.render();
                    }, _this.options.refresh);
                    return _this;
                };
                return this.init();
            };
            $.countdown.defaultOptions = {
                date: "June 7, 2087 15:03:25",
                refresh: 1000,
                onEnd: $.noop,
                render: function(date) {
                    return $(this.el).html("" + date.years + " years, " + date.days + " days, " + (this.leadingZeros(date.hours)) + " hours, " + (this.leadingZeros(date.min)) + " min and " + (this.leadingZeros(date.sec)) + " sec");
                }
            };
            $.fn.countdown = function(options) {
                return $.each(this, function(i, el) {
                    var $el;
                    $el = $(el);
                    if (!$el.data('countdown')) {
                        return $el.data('countdown', new $.countdown(el, options));
                    }
                });
            };
            return void 0;
            };

        return serv;
    })
    // create the controller and inject Angular's $scope
    .controller('mainController', function($scope, ApplicationService) {
        // Load the tp-banner after the ng-view is loaded!
        $scope.$on('$routeChangeSuccess', function(){
            ApplicationService.onLoadMainJs ();
            ApplicationService.onLoadSlider ();
            ApplicationService.onLoadCountDown ();
        });
    })
    .controller('galleriesController', function($scope, ApplicationService) {
        $scope.$on('$routeChangeSuccess', function() {
            ApplicationService.onLoadIsoTypeGallery ();
            ApplicationService.onLoadMosaicStyles ();
            ApplicationService.onLoadToggleBtn ();
        });
    })
    .controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    })
    .controller('faqController', function($scope) {
        // select the .head elements, and bind an event handler to them
        $('.toggle-btn').click(function(e){

            // prevent the default action of the click event
            // ie. prevent the browser from redirecting to the link's href
            e.preventDefault();

            // 'this' is the execution context of the event handler
            // it refers to the clicked .head element
            $(this)

            // Walk up the DOM tree to find the closest list item
            // It is the closest shared ancestor of both .head and .content
                .closest('li')

                // Search the list item for .content
                .find('.toggle-content')

                // Trigger the sliding animation on .content
                .slideToggle();
        });
    })
    .controller('about-controller', function($scope, ApplicationService) {
        ApplicationService.onLoadIsoTypeGallery ();
        ApplicationService.onLoadMosaicStyles ();
        ApplicationService.onLoadMainJs();
        ApplicationService.onLoadToggleBtn();
    });
