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
}])
