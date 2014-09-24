
//import services = require('services');
import angular = require('angular');

/* Directives */
	
angular.module('myApp.directives', ['myApp.services'])
    .directive('appVersion', ['version', (version) => {
        return (scope, elm, attrs) => {
            elm.text(version);
    };
}]);