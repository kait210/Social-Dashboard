socialDashboard.service('AuthService', ['$rootScope','ENV', function($rootScope, ENV) {

  this.authorize = function(provider) {
    OAuth.initialize(ENV.oauthKey);
    OAuth.popup(provider)
    .done(function(result) {
      $rootScope.alertMessage = provider + ' authentication successful!';
      $rootScope.$apply();
    })
    .fail(function (err) {
      $rootScope.alertMessage = provider + ' authentication unsuccessful!';
      $rootScope.$apply();
    });
    return $rootScope.alertMessage;
  }

  this.getMessages = function(provider, route) {
    OAuth.popup(provider, {cache: true})
    .done(function(result) {
      result.get(route)
      .done(function (response) {
        if (provider === 'twitter') {
          response.forEach(function(message){
            message.provider = provider;
          });
          $rootScope.tweets = response;
          $rootScope.$apply();
          return $rootScope.tweets;
        }
        else if ( provider === 'facebook') {
          response.data.forEach(function(message){
            message.provider = provider;
          });
          $rootScope.posts = response.data;
          $rootScope.$apply();
          return $rootScope.posts;
        }
        else if (provider === 'instagram') {
          response.data.forEach(function(message){
            message.provider = provider;
          });
          $rootScope.photos = response.data;
          $rootScope.$apply();
          return $rootScope.photos;
        }
      })
      .fail(function (err) {
        console.log(err);
      });
    })
    .fail(function (err) {
      console.log(err);
    });
    return $rootScope.tweets;
  }

  this.postMessage = function(provider, route, field) {
    OAuth.popup(provider, {cache: true})
    .done(function(result) {
      result.post(route, {
        data: {
          status: field,
          message: field
        }
      })
      .fail(function (err) {
        console.log(err);
      });
    })
    .fail(function (err) {
      console.log(err);
    });
  }
}]);
