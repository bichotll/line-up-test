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
            
            $scope.status = false;

            /**
             * Get events n put them on the scope
             * @private
             */
            var displayEvents = function () {
                var data = {};
                var today = new Date();
                
                if ($scope.when === 'this-week'){
                    var lastDay = new Date();
                    lastDay.setDate(today.getDate()+7);
                    data['start_date'] = today;
                    data['end_date'] = lastDay;
                } else {
                    data['start_date'] = today;
                    data['end_date'] = today;
                }
                
                if ($scope.category !== 'all'){
                    data['query'] = $scope.category;
                }
                
                eventFactory.getEvents(data)
                        .success(function (events) {
                            if (!events.data.length){
                                $scope.status = "There are not events for this search!";
                            } else {
                                $scope.status = false;
                            }
                            $scope.events = events.data;
                        })
                        .error(function () {
                            $scope.status = 'Unable to load data';
                        });
            };
            
            displayEvents();
        });
