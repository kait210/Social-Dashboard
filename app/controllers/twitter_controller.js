socialDashboard.controller('TwitterController', [ '$scope','ENV', function($scope, ENV) {
  OAuth.initialize(ENV.oauthKey);

  $scope.twitterAuth = function() {
    OAuth.popup('twitter')
    .done(function(result) {
      $scope.alertMessage = 'Twitter authentication successful!'
      $scope.$apply();
    })
    .fail(function (err) {
      $scope.alertMessage = 'Twitter authentication unsuccessful!'
    });
  }

  $scope.getTweets = function() {
    OAuth.popup('twitter', {cache: true})
    .done(function(result) {
      result.get('/1.1/statuses/home_timeline.json')
      .done(function (response) {
        $scope.tweets = response;
        $scope.$apply();
      })
      .fail(function (err) {
        console.log(err)
      })
      $scope.alertMessage = 'Twitter authentication successful!'
    })
    .fail(function (err) {
      $scope.alertMessage = 'Twitter authentication unsuccessful!'
    });
  }
}]);
