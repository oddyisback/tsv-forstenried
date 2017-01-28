/**
 * Created by odyssefs on 04.11.16.
 */
(function () {
  'use strict';
  angular
    .module('controller.module')

    // create the controller and inject Angular's $scope
    .controller('mainController', mainController)
    .controller('galleriesController', galleriesController)
    .controller('contactController', contactController)
    .controller('faqController', faqController)
    .controller('about-controller', aboutController)
    .controller('LoginController', loginController);


  mainController.$inject = ['$scope', 'ApplicationService'];
  galleriesController.$inject = ['$scope', 'ApplicationService'];
  contactController.$inject = ['$scope'];
  aboutController.$inject = ['ApplicationService'];

  loginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];

  function loginController($location, AuthenticationService, FlashService) {
    var vm = this;

    vm.login = login;

    (function initController() {
      // reset login status
      AuthenticationService.ClearCredentials();
    })();

    function login() {
      vm.dataLoading = true;
      AuthenticationService.Login(vm.username, vm.password, function (response) {
        if (response.success) {
          AuthenticationService.SetCredentials(vm.username, vm.password);
          $location.path('/');
        } else {
          FlashService.Error(response.message);
          vm.dataLoading = false;
        }
      });
    };
  }
  function mainController($scope, ApplicationService) {
    // Load the tp-banner after the ng-view is loaded!
    $scope.$on('$routeChangeSuccess', function () {
      ApplicationService.onLoadMainJs();
      ApplicationService.onLoadSlider();
      ApplicationService.onLoadCountDown();
    });
  }

  function galleriesController($scope, ApplicationService) {
    $scope.$on('$routeChangeSuccess', function () {
      ApplicationService.onLoadIsoTypeGallery();
      ApplicationService.onLoadMosaicStyles();
      ApplicationService.onLoadToggleBtn();
    });
  }

  function contactController($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
  }

  function faqController() {
    // select the .head elements, and bind an event handler to them
    $('.toggle-btn').click(function (e) {

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
  }

  function aboutController(ApplicationService) {
    ApplicationService.onLoadIsoTypeGallery();
    ApplicationService.onLoadMosaicStyles();
    ApplicationService.onLoadMainJs();
    ApplicationService.onLoadToggleBtn();
  }



})();