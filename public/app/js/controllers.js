'use strict';

/* Controllers */

angular.module('qpr2.controllers', ['qpr2.services']).
    controller('StoryController', ['$scope', '$http','Articles','Reports','Places','Milestones','Events','Stories',function($scope, $http, Articles,Reports,Places,Milestones,Events,Stories){
        var dateFormat      = "DD/MM/YYYY";


        $scope.step = null;


        Articles.query({}, function (data) {
            $scope.articles = data;
        });

        Reports.query({}, function (data) {
            $scope.reports = data;
            console.log($scope.reports);
        });


        Places.query({}, function (data) {
            $scope.places = data;
            console.log($scope.places);
        });

        Milestones.query({}, function (data) {
            $scope.milestones = data;
            console.log($scope.milestones);
        });


        Stories.query({}, function (data) {
            $scope.stories = data;
            console.log($scope.stories);
        });


        Events.query({},function(data){
            $scope.events=data;
            console.log($scope.events);
        });

        $scope.fixedEvents=false;

        $scope.fixEvents = function () {

            if ($scope.fixedEvents)
                return;

            var events = $scope.events

            for (var i = 0; i < events.length; i++) {
                var event = events[i];
                var type = events[i].type;
                var entity = null;
                if (type == "article") {
                    entity = $scope.articles;
                } else if (type == "report") {
                    entity = $scope.reports;
                } else if (type == "milestone") {
                    entity = $scope.milestones;
                }

                var data = entity.filter(function (a) {
                    return a.id == events[i].data;
                })[0];
                events[i].data = data;
            }
            console.log($scope.events);

            $scope.fixedEvents = true;
        }


        // Get events
        $scope.eventsUntil = function(date) {

            var currentDate = moment(date, dateFormat);

            var events = $scope.events.filter(function(event) {
                var eventDate = moment(event.date, dateFormat);
                return eventDate.isBefore(currentDate) || eventDate.isSame(currentDate);
            });


            if (events.length > 0) {
                var placeCartodbIds = [];
                for (var i=0; i<events.length; i++) {
                    var event = events[i];
                    if (event.type == "place") {
                        placeCartodbIds.push(event.data.cartodb_id);
                    }
                    if (event.data.related && event.data.related.places) {
                        var relatedPlaces = event.data.related.places;
                        for (var j=0; j<relatedPlaces.length; j++) {
                            placeCartodbIds.push(getEntity("places", relatedPlaces[j]).cartodb_id);
                        }
                    }
                }
                mapper.setVisible(placeCartodbIds);
            }

            timeline.update(events);

            return events;
        }

        $scope.step = function() {

            $scope.fixEvents();


            var events = $scope.events.filter(function(event) {
                return event.step <= step.value;
            });

            if (events.length > 0) {
                var placeCartodbIds = [];
                for (var i=0; i<events.length; i++) {
                    var event = events[i];
                    if (event.type == "place") {
                        placeCartodbIds.push(event.data.cartodb_id);
                    }
                    if (event.data.related && event.data.related.places) {
                        var relatedPlaces = event.data.related.places;
                        for (var j=0; j<relatedPlaces.length; j++) {
                            placeCartodbIds.push(getEntity("places", relatedPlaces[j]).cartodb_id);
                        }
                    }
                }
                mapper.setVisible(placeCartodbIds);
            }

            timeline.update(events);
        }

        // Event Sorter
        $scope.eventSorter = function(event) {
            return moment(event.date, dateFormat).unix();
        };

        // Utility functions
        function getEntity(entity, id) {
            return  $scope[entity].filter(function (entity) {
                return entity.id == id;
            })[0];
        }

    }])
    .controller('MyCtrl2', [function() {

    }]);