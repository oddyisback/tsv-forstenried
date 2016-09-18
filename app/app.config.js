/**
 * Created by odyssefs on 12.09.16.
 */
'use strict';
angular.module('basketClubApp',  ['ngRoute']).config(function($routeProvider) {
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
                controller  : 'about-u18-Controller'
            })
            // route for the calender for U16 page
            .when('/about-u16', {
                templateUrl : 'partials/about-u16.html',
                controller  : 'about-u16-Controller'
            })
            // route for the calender for U16 page
            .when('/about-man-1', {
                templateUrl : 'partials/about-man-1.html',
                controller  : 'about-man-1-Controller'
            })
            // route for the calender for U16 page
            .when('/about-man-4', {
                templateUrl : 'partials/about-man-4.html',
                controller  : 'about-man-4-Controller'
            })
            // route for the calender for U16 page
            .when('/artikel-jetzt-erst-recht', {
                templateUrl : 'partials/articles/u18/artikel-jetzt-erst-recht.html'
            })
            // route for the calender for U16 page
            .when('/artikel-die-damenmannschaft-sucht-fuer-die-kommende-saison-verstaerkung', {
                templateUrl : 'partials/articles/damen-1/artikel-die-damenmannschaft-sucht-fuer-die-kommende-saison-verstaerkung.html'
            })
            // route for the calender for U16 page
            .when('/tsv-forstenried-tag-der-offenen-tuer-18-6', {
                templateUrl : 'partials/articles/u14-mix/tsv-forstenried-tag-der-offenen-tuer-18-6.html'
            })
            // route for the calender for U16 page
            .when('/mitglied-werden', {
                templateUrl : 'partials/mitglied-werden.html'
            })
            // route for the calender for U16 page
            .when('/gallery-herren-1', {
                templateUrl : 'partials/galleries/gallery-herren-1.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-herren-1', {
                templateUrl : 'partials/galleries/gallery-herren-1.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-herren-2', {
                templateUrl : 'partials/galleries/gallery-herren-2.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-herren-3', {
                templateUrl : 'partials/galleries/gallery-herren-3.html',
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
            .when('/gallery-u18', {
                templateUrl : 'partials/galleries/gallery-u18.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-u16', {
                templateUrl : 'partials/galleries/gallery-u16.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-u14-mix', {
                templateUrl : 'partials/galleries/gallery-u14-mix.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-u12-mix', {
                templateUrl : 'partials/galleries/gallery-u12-mix.html',
                controller  : 'galleriesController'
            })
            // route for the calender for U16 page
            .when('/gallery-u10-mix', {
                templateUrl : 'partials/galleries/gallery-u10-mix.html',
                controller  : 'galleriesController'
            });

    })
    //// create the controller and inject Angular's $scope
    .controller('mainController', function($scope) {
        // Load the tp-banner after the ng-view is loaded!
        $scope.$on('$routeChangeSuccess', function(){
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
                    stopAtSlide:2,

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
        });
    })

    .controller('galleriesController', function($scope) {
        $scope.$on('$routeChangeSuccess', function() {
            /*
             11. ISOTOPE GALLERY ________________________________________________________________ */
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

            /*09. MOSAIC STYLES _____________________________________________________________ */
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



        });

    })

    .controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    })
    .controller('about-u18-Controller', function($scope) {
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
    })
    .controller('about-u16-Controller', function($scope) {
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
    })
    .controller('about-man-1-Controller', function($scope) {
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

        /*09. MOSAIC STYLES _____________________________________________________________ */
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



    })
    .controller('about-man-4-Controller', function($scope) {
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
    });

