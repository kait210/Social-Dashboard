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

  $scope.getMessages = function() {
    OAuth.popup('messages', {cache: true})
    .done(function(result) {
      result.get('/me/messages')
      .done(function (response) {
      	console.log(response)
        response.forEach(function(message) {
          message.provider = 'Messages'
        })
        $scope.message = response;
        $scope.$apply();
      })
      .fail(function (err) {
        console.log(err)
      })
      $scope.alertMessage = 'Gmail authentication successful!'
    })
    .fail(function (err) {
      $scope.alertMessage = 'Gmail authentication unsuccessful!'
    });
  }

}]);