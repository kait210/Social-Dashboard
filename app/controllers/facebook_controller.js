socialDashboard.controller('FacebookController', [ '$scope','ENV', function($scope, ENV) {
  OAuth.initialize(ENV.oauthKey);

  $scope.facebookAuth = function() {
    OAuth.popup('facebook')
    .done(function(result) {
      $scope.alertMessage = 'Facebook authentication successful!'
      $scope.$apply();
    })
    .fail(function (err) {
      $scope.alertMessage = 'Facebook authentication unsuccessful!'
    });
  }
}]);
