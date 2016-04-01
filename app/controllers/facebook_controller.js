socialDashboard.controller('FacebookController', [ '$scope','ENV','AuthService','$rootScope', function($scope, ENV, AuthService, $rootScope) {

  $scope.facebookAuth = function() {
    $scope.alertMessage = AuthService.authorize('facebook');
  }

  $scope.getPosts = function() {
    AuthService.getMessages('facebook','/me/feed');
  }

  $scope.postStatus = function(field) {
   AuthService.postMessage('facebook', '/me/feed', field);
  }
}]);
