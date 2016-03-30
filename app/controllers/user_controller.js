socialDashboard.controller('UserController', [ '$scope','ENV', function($scope, ENV) {
  OAuth.initialize(ENV.oauthKey);

  $scope.register = function() {
    User.signup({
      firstname: document.getElementById('firstName').value,
      lastname: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }).done(function(user) {
      var name = user.data.firstname
      $scope.userMessage = 'Welcome ' + name + ', registration successful!'
      $scope.$apply();
    }).fail(function(err) {
      $scope.userMessage = err.message
      $scope.$apply();
    });
    return false;
  }

  $scope.signIn = function(email,password) {
    User.signin(email, password
    ).done(function(user) {
      var name = user.data.firstname
      $scope.accountMessage = 'Welcome ' + name + ', sign in successful!'
      $scope.$apply();
    });
  }

  $scope.signOut = function() {
    var user = User.getIdentity();
    user.logout().done(function() {
      var name = user.data.firstname
      $scope.accountMessage = 'Goodbye ' + name + ', sign out successful!'
      $scope.$apply();
    });
  }
}]);
