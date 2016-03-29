'use strict';

angular.module('socialDashboard', [
  'ngRoute',
  'TwitterController'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
