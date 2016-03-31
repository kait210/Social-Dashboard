socialDashboard.controller('FacebookController', [ '$scope','ENV','AuthService', function($scope, ENV, AuthService) {

  $scope.facebookAuth = function() {
    AuthService.authorize('facebook');
  }

  $scope.getPosts = function() {
    AuthService.getMessages('facebook','/me/feed')
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
}]);
