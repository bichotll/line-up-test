'use strict';

/**
 * @ngdoc service
 * @name androidLineupApp.eventFactory
 * @description
 * # eventFactory
 * Factory in the androidLineupApp.
 */
angular.module('androidLineupApp')
  .factory('eventFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
