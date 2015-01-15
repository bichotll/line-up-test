'use strict';

/**
 * @ngdoc service
 * @name angularLineupApp.configConstant
 * @description
 * # configConstant
 * Constant in the angularLineupApp.
 */
angular.module('angularLineupApp')
        .constant('configConstant', {
            api: {
                url: 'http://api.lineupnow.com/v1.5',
                key: 'd95e605e18384209b386773c5468b15e'
            },
            predefined: {
                eventFactoryData: {
                    where: 'london'
                }
            }
        });
