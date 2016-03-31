socialDashboard.controller('FacebookController', [ '$scope','ENV','AuthService', function($scope, ENV, AuthService) {
  OAuth.initialize(ENV.oauthKey);

  $scope.facebookAuth = function() {
    AuthService.authorize('facebook');
  }

  $scope.postStatus = function(post) {
    OAuth.popup('facebook')
    .done(function(result) {
      result.post('/me/feed', {
        data: {
          message: post
        }
      })
      .done(function (response) {
        $scope.getPosts()
      })
      .fail(function (err) {
        console.log(err)
      });
    })
    .fail(function (err) {
      console.log(err)
    })
  }

  $scope.getPosts = function() {
    OAuth.popup('facebook', {cache: true})
    .done(function(result) {
      console.log(result.access_token)
      result.get('/me/feed')
      .done(function (response) {
        console.log(response.data)
        response.data.forEach(function(post) {
        post.provider = 'Facebook'
      })
        $scope.posts = response.data;
        $scope.$apply();
      })
      .fail(function (err) {
        console.log(err)
      })
      $scope.alertMessage = 'Facebook authentication successful!'
    })
    .fail(function (err) {
      $scope.alertMessage = 'Facebook authentication unsuccessful!'
    });
  }

}]);
