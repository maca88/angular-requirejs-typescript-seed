/// <amd-dependency path="services"/>
import angular = require('angular');
import myctrl2 = require('./controllers/myctrl2');

/* Controllers */
	
var module = angular.module('myApp.controllers', ['myApp.services'])
    // Sample controller where service is being used
    .controller('MyCtrl1', ['$scope', 'version', function ($scope, version) {
        $scope.scopedAppVersion = version;
    }])
    .controller('MyCtrl2', myctrl2);

export = module;
