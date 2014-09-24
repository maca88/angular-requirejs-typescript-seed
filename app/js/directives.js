define(["require", "exports", 'angular'], function(require, exports, angular) {
    angular.module('myApp.directives', ['myApp.services']).directive('appVersion', [
        'version', function (version) {
            return function (scope, elm, attrs) {
                elm.text(version);
            };
        }]);
});
