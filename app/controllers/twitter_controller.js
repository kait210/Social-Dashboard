socialDashboard.controller('TwitterController', [ '$scope','ENV','AuthService', '$rootScope', function($scope, ENV, AuthService, $rootScope) {

  $scope.twitterAuth = function() {
    AuthService.authorize('twitter');
  }

  $scope.getTweets = function() {
    AuthService.getMessages('twitter','/1.1/statuses/home_timeline.json')
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
