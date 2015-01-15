'use strict';

/**
 * @ngdoc directive
 * @name angularLineupApp.directive:event
 * @description
 * # event
 */
angular.module('angularLineupApp')
  .directive('lineEvent', function () {
    return {
      templateUrl: 'views/directives/line-event.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the event directive');
      }
    };
  });
