
angular.module('myApp')
  .controller('LoginCtrl', ['$scope', '$location', 'LoginService', "$firebase", "$firebaseSimpleLogin" ,
    function($scope, $location, LoginService, $firebase, $firebaseSimpleLogin ) {
               
    $scope.facebookLogin = function(){
      LoginService.fblogin();
    };

    $scope.twitterLogin = function(){
      LoginService.twitterLogin();
    };
  
    $scope.emailLogin = function(){
      LoginService.emailLogin($scope.email, dummycb);
    };
    //learn about data snapshot for checking if user is in database
    
    $scope.createAccount = function(){
      LoginService.createAccount($scope.email, $scope.password, dummycb);
    }

    var dummycb = function(){
      console.log('dummycallback');
    };
  }]);
 
