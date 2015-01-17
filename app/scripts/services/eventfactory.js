'use strict';

/**
 * @ngdoc service
 * @name angularLineupApp.eventFactory
 * @description
 * # eventFactory
 * Factory in the angularLineupApp.
 */
angular.module('angularLineupApp')
        .factory('eventFactory', function ($http, configConstant) {
            var urlBase = configConstant.api.url + '/event';
            var dataFactory = {};

            dataFactory.getEvents = function (params) {
                var data = angular.extend({}, params, configConstant.predefined.eventFactoryData);
                data['api_key'] = configConstant.api.key;
                data['callback'] = 'JSON_CALLBACK';
                return $http.jsonp(urlBase, {
                    params: data,
                    isArray: true
                });
            };

            return dataFactory;
        });
