
//import services = require('services');
import angular = require('angular');

/* Filters */
	
angular.module('myApp.filters', ['myApp.services'])
    .filter('interpolate', ['version', (version) => {
        return (text) => {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
}]);


