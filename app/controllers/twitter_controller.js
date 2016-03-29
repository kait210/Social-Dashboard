var socialDashboard = angular.module('socialDashboard', ['config']);

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
        response.forEach(function(tweet) {
          tweet.provider = 'Twitter'
        })
        console.log(response[0])
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

  $scope.postTweets = function(field) {
    OAuth.popup('twitter', {cache: true})
    .done(function(result) {
      result.post('/1.1/statuses/update.json', {
        data: {
          status: field
        }
      })
      .done(function (response) {
        $scope.getTweets()
      })
      .fail(function (err) {
        console.log(err)
      });
    })
    .fail(function (err) {
      console.log(err)
    });
  }
}]);
