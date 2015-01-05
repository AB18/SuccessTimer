'use strict';

/**
 * @ngdoc function
 * @name successTimerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the successTimerApp
 */
var successTimerApp = angular.module('successTimerApp');

  successTimerApp.controller('MainCtrl', function ($scope) {
    $scope.startTask = function() {
      console.log("start task clicked");
      $scope.$broadcast('timer-reset');
      $scope.showTaskTimer = true;
      $scope.showShortBreakTimer = false;
      $scope.showLongBreakTimer = false;
      $scope.$broadcast('timer-start');
    }
    $scope.startShortBreak = function() {
      $scope.$broadcast('timer-reset');
      $scope.showTaskTimer = false;
      $scope.showShortBreakTimer = true;
      $scope.showLongBreakTimer = false;
      $scope.$broadcast('timer-start');
    };
    $scope.startLongBreak = function() {
      $scope.$broadcast('timer-reset');
      $scope.showTaskTimer = false;
      $scope.showShortBreakTimer = false;
      $scope.showLongBreakTimer = true;
      $scope.$broadcast('timer-start');
    };
    $scope.startTimer = function() {
      $scope.$broadcast('timer-start');
    };
    $scope.stopTimer = function() {
      $scope.$broadcast('timer-stop');
    };
    $scope.resetTimer = function() {
      $scope.$broadcast('timer-reset');
    };
    $scope.timerfinished = function() {
     var doneSound = new buzz.sound("/sounds/magicWand", {
      formats: [ "mp3" ],
      preload: true
    });
      doneSound.play();
    };
    
  });

