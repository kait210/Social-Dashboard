socialDashboard.controller('InstagramController', [ '$scope','ENV', function($scope, ENV) {
  OAuth.initialize(ENV.oauthKey);

  $scope.instagramAuth = function() {
    OAuth.popup('instagram')
    .done(function(result) {
      $scope.alertMessage = 'Instagram authentication successful!'
      $scope.$apply();
    })
    .fail(function (err) {
      $scope.alertMessage = 'Instagram authentication unsuccessful!'
    });
  }

  $scope.getPhotos = function() {
    OAuth.popup('instagram', {cache: true})
    .done(function(result) {
      result.get('/v1/users/self/media/recent')
      .done(function (response) {
        console.log(response)
        // response.forEach(function(tweet) {
        //   photo.provider = 'Instagram'
        // })
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