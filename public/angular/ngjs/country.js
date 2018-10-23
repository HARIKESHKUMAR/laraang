var app = angular.module('Country', []);

app.controller('CountryController', function($scope,$http) {
    
    $http.get('http://127.0.0.1:8000/getdata').
        then(function(response) {
            $scope.posts = response.data;
        },function (error){
        alert('Something went wrong'); 
      });



    $scope.deleteEvent=function(id){
         
        $http.get('http://127.0.0.1:8000/delData').
          then(function(response) {
              $scope.posts = response.data;
          },function (error){
          alert('Something went wrong'); 
        });

       }
    $scope.editEvent=function(id){ 
      alert(id);
    }      	
});


 

 