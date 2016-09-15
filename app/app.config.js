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
                controller  : 'aboutController'
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
            // route for the calender for Herren 2 page
            .when('/event-calender-u10-mix', {
                templateUrl : 'partials/event-calender-u10-mix.html',
                controller  : 'contactController'
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

                    stopLoop:"off",
                    stopAfterLoops:-1,
                    stopAtSlide:-1,

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

    .controller('aboutController', function($scope) {
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

        });

    })

    .controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });