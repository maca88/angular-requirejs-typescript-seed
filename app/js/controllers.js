define(["require", "exports", 'angular', './controllers/myctrl2', "services"], function(require, exports, angular, myctrl2) {
    var module = angular.module('myApp.controllers', ['myApp.services']).controller('MyCtrl1', [
        '$scope', 'version', function ($scope, version) {
            $scope.scopedAppVersion = version;
        }]).controller('MyCtrl2', myctrl2);

    
    return module;
});
