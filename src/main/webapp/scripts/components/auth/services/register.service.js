'use strict';

angular.module('barbusApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


