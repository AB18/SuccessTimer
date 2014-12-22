'use strict';

/**
 * @ngdoc function
 * @name successTimerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the successTimerApp
 */
angular.module('successTimerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
