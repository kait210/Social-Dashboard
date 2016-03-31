socialDashboard.controller('TwitterController', [ '$scope','ENV','AuthService', '$rootScope', function($scope, ENV, AuthService, $rootScope) {

  $scope.twitterAuth = function() {
    AuthService.authorize('twitter');
  }

  $scope.getTweets = function() {
    OAuth.popup('twitter', {cache: true})
    .done(function(result) {
      result.get('/1.1/statuses/home_timeline.json')
      .done(function (response) {
        response.forEach(function(tweet) {
          tweet.provider = 'Twitter'
        })
        $scope.tweets = response;
        $scope.$apply();
      })
      .fail(function (err) {
        console.log(err)
      })
    })
    .fail(function (err) {
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
