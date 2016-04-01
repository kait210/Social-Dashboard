socialDashboard.controller('TwitterController', [ '$scope','ENV','AuthService', '$rootScope', function($scope, ENV, AuthService, $rootScope) {

  $scope.twitterAuth = function() {
    $scope.alertMessage = AuthService.authorize('twitter');
  }

  $scope.getTweets = function() {
    AuthService.getMessages('twitter','/1.1/statuses/home_timeline.json');
   }

  $scope.postTweets = function(field) {
    AuthService.postMessage('twitter', '/1.1/statuses/update.json', field);
  }
}]);
