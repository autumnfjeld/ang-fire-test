

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'firebase']);

angular.module('myApp')
  .config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/home', 
      {templateUrl: 'partials/home.html', 
      controller: 'home'})
    .when('/login', 
      {templateUrl: 'partials/login.html', 
      controller: 'LoginCtrl'})
    .otherwise({redirectTo: '/login'});
  }]);
