socialDashboard.controller('InstagramController', [ '$scope','ENV', function($scope, ENV) {
  OAuth.initialize(ENV.oauthKey);

  $scope.instagramAuth = function() {
    OAuth.popup('instagram')
    .done(function(result) {
      $scope.alertMessage = 'Instagram authentication successful!'
      $scope.$apply();
    })
    .fail(function (err) {
      $scope.alertMessage = 'Instagram authentication unsuccessful!'
    });
  }
}]);