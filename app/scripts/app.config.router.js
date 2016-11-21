/**
 * Created by odyssefs on 03.11.16.
 */
(function () {
  'use strict';
  angular
    .module('config.router')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../partials/homepage.html',
        controller: 'mainController'
      })
      .when('/homepage', {
        templateUrl: '../partials/homepage.html',
        controller: 'mainController'
      })
      // route for the about galleries
      .when('/galleries', {
        templateUrl: '../partials/galleries.html',
        controller: 'galleriesController'
      })
      // route for the about galleries
      .when('/galleries-4', {
        templateUrl: '../partials/gallery-4.html',
        controller: 'galleriesController'
      })
      // route for the contact page
      .when('/contact', {
        templateUrl: '../partials/contact3.html',
        controller: 'contactController'
      })
      // route for the calender for Herren 1 page
      .when('/event-calender-man-1', {
        templateUrl: '../partials/event-calender-man-1.html',
        controller: 'contactController'
      })
      // route for the calender for Herren 2 page
      .when('/event-calender-man-2', {
        templateUrl: '../partials/event-calender-man-2.html',
        controller: 'contactController'
      })
      // route for the calender for Herren 1 page
      .when('/event-calender-man-3', {
        templateUrl: '../partials/event-calender-man-3.html',
        controller: 'contactController'
      })
      // route for the calender for Herren 2 page
      .when('/event-calender-man-4', {
        templateUrl: '../partials/event-calender-man-4.html',
        controller: 'contactController'
      })
      // route for the calender for Herren 1 page
      .when('/event-calender-woman-1', {
        templateUrl: '../partials/event-calender-woman-1.html',
        controller: 'contactController'
      })
      // route for the calender for Herren 2 page
      .when('/event-calender-u18', {
        templateUrl: '../partials/event-calender-u18.html',
        controller: 'contactController'
      })
      // route for the calender for Herren 1 page
      .when('/event-calender-u16', {
        templateUrl: '../partials/event-calender-u16.html',
        controller: 'contactController'
      })
      // route for the calender for Herren 2 page
      .when('/event-calender-u14-mix', {
        templateUrl: '../partials/event-calender-u14-mix.html',
        controller: 'contactController'
      })
      // route for the calender for Herren 1 page
      .when('/event-calender-u12-mix', {
        templateUrl: '../partials/event-calender-u12-mix.html',
        controller: 'contactController'
      })
      // route for the calender for U10 mix page
      .when('/event-calender-u10-mix', {
        templateUrl: '../partials/event-calender-u10-mix.html',
        controller: 'contactController'
      })
      // route for the calender for U18 page
      .when('/about-u18', {
        templateUrl: '../partials/about-u18.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/about-u16', {
        templateUrl: '../partials/about-u16.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/about-man-1', {
        templateUrl: '../partials/about-man-1.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/about-man-4', {
        templateUrl: '../partials/about-man-4.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/artikel-jetzt-erst-recht', {
        templateUrl: '../partials/articles/u18/artikel-jetzt-erst-recht.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/artikel-die-damenmannschaft-sucht-fuer-die-kommende-saison-verstaerkung', {
        templateUrl: '../partials/articles/damen-1/artikel-die-damenmannschaft-sucht-fuer-die-kommende-saison-verstaerkung.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/tsv-forstenried-tag-der-offenen-tuer-18-6', {
        templateUrl: '../partials/articles/u14-mix/tsv-forstenried-tag-der-offenen-tuer-18-6.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/mitglied-werden', {
        templateUrl: '../assets/docs/mitglied-werden.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/gallery-herren-1', {
        templateUrl: '../partials/galleries/gallery-herren-1.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-4-herren-1', {
        templateUrl: '../partials/galleries/gallery-4-herren-1.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-4-herren-2', {
        templateUrl: '../partials/galleries/gallery-4-herren-2.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-herren-2', {
        templateUrl: '../partials/galleries/gallery-herren-2.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-4-herren-3', {
        templateUrl: '../partials/galleries/gallery-4-herren-3.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-herren-3', {
        templateUrl: '../partials/galleries/gallery-herren-3.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-4-herren-4', {
        templateUrl: '../partials/galleries/gallery-4-herren-4.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-herren-4', {
        templateUrl: '../partials/galleries/gallery-herren-4.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-damen-1', {
        templateUrl: '../partials/galleries/gallery-damen-1.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-4-damen-1', {
        templateUrl: '../partials/galleries/gallery-4-damen-1.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-4-u18', {
        templateUrl: '../partials/galleries/gallery-4-u18.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-u18', {
        templateUrl: '../partials/galleries/gallery-u18.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-4-u16', {
        templateUrl: '../partials/galleries/gallery-4-u16.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-u16', {
        templateUrl: '../partials/galleries/gallery-u16.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-4-u14-mix', {
        templateUrl: '../partials/galleries/gallery-4-u14-mix.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-u14-mix', {
        templateUrl: '../partials/galleries/gallery-u14-mix.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-4-u12-mix', {
        templateUrl: '../partials/galleries/gallery-4-u12-mix.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-u12-mix', {
        templateUrl: '../partials/galleries/gallery-u12-mix.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-4-u10-mix', {
        templateUrl: '../partials/galleries/gallery-4-u10-mix.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/gallery-u10-mix', {
        templateUrl: '../partials/galleries/gallery-u10-mix.html',
        controller: 'galleriesController'
      })
      // route for the calender for U16 page
      .when('/faq', {
        templateUrl: '../partials/faq.html',
        controller: 'faqController'
      })
      // route for the calender for U16 page
      .when('/aufnahmeantrag', {
        templateUrl: '../assets/docs/aufnahmeantrag.pdf'
      })
      // route for the calender for U16 page
      .when('/sponsors', {
        templateUrl: '../partials/sponsors.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/season-anfang', {
        templateUrl: '../partials/articles/damen-1/season-anfang.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/basketball-u16-kreisliga', {
        templateUrl: '../partials/articles/u16/basketball-u16-kreisliga.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/pretty-flamingos', {
        templateUrl: '../partials/articles/herren-4/pretty-flamingos.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/article-die-herren-1-nimmt-sich-hohe-ziele-vor', {
        templateUrl: '../partials/articles/herren-1/article-die-herren-1-nimmt-sich-hohe-ziele-vor.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/article-saisonstart-in-die-bezirksliga', {
        templateUrl: '../partials/articles/u18/article-saisonstart-in-die-bezirksliga.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/tsv-forstenried-ts-jahn-muenchen-2', {
        templateUrl: '../partials/articles/u18/tsv-forstenried-ts-jahn-muenchen-2.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/tsv-jahn-freising-tsv-forstenried', {
        templateUrl: '../partials/articles/u18/tsv-jahn-freising-tsv-forstenried.html',
        controller: 'about-controller'
      })
      // route for the calender for U16 page
      .when('/tsv-unterhaching-tsv-forstenried', {
        templateUrl: '../partials/articles/u18/tsv-unterhaching-tsv-forstenried.html',
        controller: 'about-controller'
      })
      .otherwise({
        redirectTo: '/'
      });

  }


})();
