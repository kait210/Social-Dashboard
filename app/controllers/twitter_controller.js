var socialDashboard = angular.module('socialDashboard', []);

socialDashboard.controller('TwitterController', function($scope) {
  OAuth.initialize('')

  $scope.twitterAuth = function() {
    OAuth.popup('twitter')
    .done(function(result) {
      $scope.alertMessage = 'Twitter authentication successful!'
    })
    .fail(function (err) {
      $scope.alertMessage = 'Twitter authentication unsuccessful!'
    });
  }
});
