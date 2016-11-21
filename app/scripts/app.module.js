/**
 * Created by odyssefs on 12.09.16.
 */

(function () {
  'use strict';
  angular
    .module('basketClubApp', [])
    .controller('default-controller', defaultController);

  defaultController.$inject = ['$scope', 'firebase', 'authService'];

  function defaultController($scope, firebase, authService) {
    $scope.emailAddress = "Hello";
    alert ("hello");
  }
})();

