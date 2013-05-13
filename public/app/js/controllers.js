'use strict';

/* Controllers */

angular.module('qpr2.controllers', []).
    controller('StoryController', ['$scope', function($scope) {
        $scope.articles = [
            { title: "Noticia 1", age: 0 },
            { title: "Noticia 2", age: 1 }
        ];

        $scope.reports = [
            { id: "66" }
        ]

        $scope.story = {
            title: "Nombre del hotspot"
        };
    }])
    .controller('MyCtrl2', [function() {

    }]);