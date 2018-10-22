var app = angular.module('Country', []);

app.controller('CountryController', function($scope,$http) {

    
	
    /* $http({
      method: 'GET', 
      url:'http://127.0.0.1:8000/getdata',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then(function (response){
        response.header("Access-Control-Allow-Origin", "*");
   	    $scope.posts = response;

    },function (error){
        
    });*/

    $scope.posts={
        "status": "success",
        "code": 200,
        "data": [{
          "id": 1,
          "name": "Australia",
          "code": "AU",
          "population": 24016400
        }, {
          "id": 2,
          "name": "Brazil",
          "code": "BR",
          "population": 205722000
        }, {
          "id": 3,
          "name": "Canada",
          "code": "CA",
          "population": 35985751
        }, {
          "id": 4,
          "name": "China",
          "code": "CN",
          "population": 1375210000
        }, {
          "id": 5,
          "name": "Germany",
          "code": "DE",
          "population": 81459000
        }, {
          "id": 6,
          "name": "France",
          "code": "FR",
          "population": 64513242
        }, {
          "id": 7,
          "name": "United Kingdom",
          "code": "GB",
          "population": 65097000
        }, {
          "id": 8,
          "name": "India",
          "code": "IN",
          "population": 1285400000
        }, {
          "id": 9,
          "name": "Russia",
          "code": "RU",
          "population": 146519759
        }, {
          "id": 10,
          "name": "United States",
          "code": "US",
          "population": 322976000
        }]
      }
      
       
				     	
});


 

 