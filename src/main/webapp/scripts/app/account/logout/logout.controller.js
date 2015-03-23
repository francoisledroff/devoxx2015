'use strict';

angular.module('barbusApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
