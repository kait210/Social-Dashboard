socialDashboard.controller('InstagramController', [ '$scope','ENV', 'AuthService', function($scope, ENV, AuthService) {
  OAuth.initialize(ENV.oauthKey);

  $scope.instagramAuth = function() {
     AuthService.authorize('instagram');
  }

  $scope.getPhotos = function() {
    OAuth.popup('instagram', {cache: true})
    .done(function(result) {
      result.get('/v1/users/self/media/recent')
      .done(function (response) {
        response.data.forEach(function(photo) {
          photo.provider = 'Instagram'
        })
        $scope.photos = response.data;
        $scope.$apply();
      })
      .fail(function (err) {
        console.log(err)
      })
      $scope.alertMessage = 'Instagram authentication successful!'
    })
    .fail(function (err) {
      $scope.alertMessage = 'Instagram authentication unsuccessful!'
    });
  }

}]);
