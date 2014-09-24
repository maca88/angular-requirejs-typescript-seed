define(["require", "exports", "angular", "filters", "services", "directives", "controllers", "angularRoute"], function(require, exports) {
    var app = angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ]);

    
    return app;
});
