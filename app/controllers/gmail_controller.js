socialDashboard.controller('GmailController', [ '$scope','ENV', function($scope, ENV) {
  OAuth.initialize(ENV.oauthKey);

  $scope.gmailAuth = function() {
    OAuth.popup('google_mail')
    .done(function(result) {
      $scope.alertMessage = 'Gmail authentication successful!'
      $scope.$apply();
    })
    .fail(function (err) {
      $scope.alertMessage = 'Gmail authentication unsuccessful!'
    });
  }
}]);
