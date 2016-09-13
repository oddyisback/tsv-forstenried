/**
 * Created by odyssefs on 12.09.16.
 */
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('basketClubApp',  ['ngRoute']);
app.config(function($routeProvider) {
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
        });
    })

    .controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    })

    .controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    })
