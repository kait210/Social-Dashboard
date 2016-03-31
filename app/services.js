socialDashboard.service('AuthService', ['$rootScope','ENV', function($rootScope, ENV) {

  this.authorize = function(provider) {
   OAuth.initialize(ENV.oauthKey);
    OAuth.popup(provider)
    .done(function(result) {
      $rootScope.alertMessage = provider + ' authentication successful!'
      $rootScope.$apply()
    })
    .fail(function (err) {
      $scope.alertMessage = provider + ' authentication unsuccessful!'
    });
  }

  this.getMessages = function(provider, route) {
    OAuth.popup(provider, {cache: true})
    .done(function(result) {
      result.get(route)
      .done(function (response) {
        response.forEach(function(message) {
          message.provider = provider
        })
        if (provider = 'twitter') {
          $rootScope.tweets = response;
        }
        else if (provider = 'facebook') {
          $rootScope.posts =  response;
        }
        else if (provider = 'instagram') {
          $rootScope.photos = response
        }
        $rootScope.$apply();
      })
      .fail(function (err) {
        console.log(err)
      })
    })
    .fail(function (err) {
      console.log(err)
    });
  }
}])
