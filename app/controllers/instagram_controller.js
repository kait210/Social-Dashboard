socialDashboard.controller('InstagramController', [ '$scope','ENV', 'AuthService', function($scope, ENV, AuthService) {

  $scope.instagramAuth = function() {
    $scope.alertMessage =  AuthService.authorize('instagram');
  }

  $scope.getPhotos = function() {
    AuthService.getMessages('instagram','/v1/users/self/media/recent')
  }
}]);
