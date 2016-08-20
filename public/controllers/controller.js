var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/contactlist').success(function(response){
        $scope.contactlist = response;
    });

    var refresh = function() {
        $http.get('/contactlist').success(function(response){
        $scope.contactlist = response;
        $scope.contact = "";
        
    });
    };

    refresh();
  
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function (response) {
          console.log(response);  
          refresh();
        });
    };

    $scope.delContact = function(id){        
        $http.delete('/contactlist/' + id).success(function (response) {
          refresh();  
        });
    };

    $scope.editContact = function(id){        
        $http.get('/contactlist/' + id).success(function (response) {
          $scope.contact = response;
        });
    };
}]);

