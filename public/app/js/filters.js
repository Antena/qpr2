'use strict';

/* Filters */

angular.module('qpr2.filters', []).
    filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }])
    .filter('uppercase', [function() {
        return function(text) {
            return text.toUpperCase();
        }
    }])
;
