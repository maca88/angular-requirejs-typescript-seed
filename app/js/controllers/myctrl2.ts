/// <reference path='../all.ts' /> 
class MyCtrl2 {
    public static $inject = ['$scope', '$http'];
    constructor(private $scope, private $http){
        // You can access the scope of the controller from here
        $scope.welcomeMessage = 'hey this is myctrl2.js!';
    }
}

export = MyCtrl2;
