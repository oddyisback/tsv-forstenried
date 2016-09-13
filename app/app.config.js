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

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });

    })
    //// create the controller and inject Angular's $scope
    .controller('mainController', function($scope) {
        // Load the tp-banner after the ng-view is loaded!
        $scope.$on('$viewContentLoaded', function(){
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
        $scope.message = 'Look! I am an about page.';
    })

    .controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });