var myApp = angular.module('myApp', []);
var div;
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

    $scope.updtContact  = function() {
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact);
        refresh(); 
    }

    $scope.creatingDiv = function(){
           div = document.createElement("div");
           div.id="mydiv";
           div.className="mydiv";
           div.style.backgroundColor='#000';
           div.style.width = '300px';
           div.style.height = '200px';           
           document.body.appendChild(div);   
           console.log(div.offsetWidth);
    }
    $scope.widthMenos = function(){
        var width = div.offsetWidth;
        width--;
        div.style.width=width+'px';
        console.log(width);
        console.log(angular.element(div));
        console.log(div.style.width);
    }
    $scope.widthMais = function(){
        var width = div.offsetWidth;
        width++;
        div.style.width=width+'px';
        console.log(width);
        console.log(div.offsetWidth);
        console.log(div.style.width);
    }


}]);

