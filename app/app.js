'use strict';

var socialDashboard = angular.module('socialDashboard', [
  'ngRoute',
  'config'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
