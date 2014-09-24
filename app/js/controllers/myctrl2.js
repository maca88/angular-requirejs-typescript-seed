define(["require", "exports"], function(require, exports) {
    var MyCtrl2 = (function () {
        function MyCtrl2($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            $scope.welcomeMessage = 'hey this is myctrl2.js!';
        }
        MyCtrl2.$inject = ['$scope', '$http'];
        return MyCtrl2;
    })();

    
    return MyCtrl2;
});
