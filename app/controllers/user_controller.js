socialDashboard.controller('UserController', [ '$scope','ENV', function($scope, ENV) {
  OAuth.initialize(ENV.oauthKey);

  $scope.register = function() {
    User.signup({
      firstname: document.getElementById('firstName').value,
      lastname: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }).done(function(user) {
      console.log(user)
      var name = user.data.firstname
      console.log(name)
      $scope.userMessage = 'Welcome ' + name + ', registration successful!'
      $scope.$apply();
    }).fail(function(err) {
      $scope.userMessage = err.message
      $scope.$apply();
    });
    return false;
  }
}]);
