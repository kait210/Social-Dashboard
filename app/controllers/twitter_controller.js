var socialDashboard = angular.module('socialDashboard', ['config']);

socialDashboard.controller('TwitterController', function($scope, ENV) {
  OAuth.initialize(ENV.oauthKey);

  $scope.twitterAuth = function() {
    OAuth.popup('twitter')
    .done(function(result) {
      $scope.alertMessage = 'Twitter authentication successful!'
      $scope.$apply();
    })
    .fail(function (err) {
      $scope.alertMessage = 'Twitter authentication unsuccessful!'
    });
  }
});
