'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('qpr2.services', ['ngResource']).
    factory('Articles',function($resource){
        var resource=$resource('data/articles.json', {}, {
            query: {method:'GET',params:{}, isArray:true}
        });
        return resource;
    }).factory('Reports',function($resource){
        var resource=$resource('data/reports.json', {}, {
            query: {method:'GET',params:{}, isArray:true}
        });
        return resource;
    }).factory('Places',function($resource){
        var resource=$resource('data/places.json', {}, {
            query: {method:'GET',params:{}, isArray:true}
        });
        return resource;
    }).factory('Milestones',function($resource){
        var resource=$resource('data/milestones.json', {}, {
            query: {method:'GET',params:{}, isArray:true}
        });
        return resource;
    }).factory('Stories',function($resource){
        var resource=$resource('data/stories.json', {}, {
            query: {method:'GET',params:{}, isArray:true}
        });
        return resource;
    }).factory('Events',function($resource){
        var service = {};
        var resource=$resource('data/events.json', {}, {
            query: {method:'GET',params:{}, isArray:true}
        });
        return resource;
    })
    .value('version', '0.1');
