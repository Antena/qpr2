'use strict';


// Declare app level module which depends on filters, and services
angular.module('qpr2', ['qpr2.filters', 'qpr2.services', 'qpr2.directives', 'qpr2.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/story.html', controller: 'StoryController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
