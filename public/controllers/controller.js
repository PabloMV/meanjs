var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    person1 = {
    	name: 'pablo',
    	email: 'pablo@email.com',
    	number: '55 55555555'
    };

    person2 = {
    	name: 'marques',
    	email: 'marques@email.com',
    	number: '55 55555555'	
    };
    person3 = {
    	name: 'viana',
    	email: 'viana@email.com',
    	number: '55 55555555'
    };


    var contactlist = [person1, person2, person3];

    $scope.contactlist = contactlist;

}]);
