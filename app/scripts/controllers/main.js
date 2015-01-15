'use strict';

/**
 * @ngdoc function
 * @name angularLineupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLineupApp
 */
angular.module('angularLineupApp')
  .controller('MainCtrl', function ($scope, $routeParams) {
    $scope.when = $routeParams.when || 'today';
    $scope.category = $routeParams.category || 'all';
    //get events n loop
  });
