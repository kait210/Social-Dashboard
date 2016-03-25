var socialDashboard = angular.module('socialDashboard', ['config']);

socialDashboard.controller('TwitterController', function($scope, ENV) {
  OAuth.initialize(ENV.oauthKey);

  $scope.twitterAuth = function() {
    OAuth.popup('twitter', {cache: true})
    .done(function(result) {
      result.get('1.1/statuses/home_timeline.json')
      .done(function (response) {
        $scope.tweets = response;
      })
      .fail(function (err) {
        console.log(err)
      })
      $scope.alertMessage = 'Twitter authentication successful!'
      $scope.$apply();
    })
    .fail(function (err) {
      $scope.alertMessage = 'Twitter authentication unsuccessful!'
    });
  }
});
