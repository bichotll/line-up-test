'use strict';

/**
 * @ngdoc function
 * @name angularLineupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLineupApp
 */
angular.module('angularLineupApp')
        .controller('MainCtrl', function ($scope, $routeParams, eventFactory) {

            $scope.when = $routeParams.when || 'today';
            $scope.category = $routeParams.category || 'all';

            //get events n loop
            eventFactory.getEvents()
                    .success(function (events) {
                        $scope.events = events.data;
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        });
