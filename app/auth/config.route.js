(function () {
  'use strict';

  angular
    .module('app.auth')
    .config(configFunction)
    .run(runFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'auth/register.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'auth/login.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      });
  }

  runFunction.$inject = ['$location', 'authService'];

  function runFunction($location, authService) {

    authService.firebaseAuthObject.$onAuthStateChanged(function (authData) {
      if (!authData) {
        authService.logout();
        $location.path('/login');
      }
    });
  }

})();