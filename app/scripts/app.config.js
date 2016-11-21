/**
 * Created by odyssefs on 12.09.16.
 */
(function() {
    'use strict';
    angular
        .module('basketClubApp', [
            // Angular modules.
            'ngRoute',
            'firebase',
            // Custom modules.
            'config.router',
            'controller.module',
            'factory.module',
            'app.core',
            'app.auth'
        ])
})();