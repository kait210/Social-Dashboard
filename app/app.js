'use strict';

// var dotenv = require('dotenv');

angular.module('socialDashboard', [
  'ngRoute',
  'TwitterController'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
