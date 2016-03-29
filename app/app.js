'use strict';

var socialDashboard = angular.module('socialDashboard', [
  'ngRoute',
  'TwitterController',
  'FacebookController'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
