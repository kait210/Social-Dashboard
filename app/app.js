'use strict';

angular.module('socialDashboard', [
  'ngRoute',
  'TwitterController',
  'config'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
