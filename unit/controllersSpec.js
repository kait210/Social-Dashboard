'use strict';

describe('SocialDashboard controllers', function() {

  describe('TwitterController', function() {

    beforeEach(module('socialDashboard'));

    it('should return 2 tweets from the Twitter API request', inject(function($controller) {
      var scope = {},
      ctrl = $controller('TwitterController', { $scope: scope});
      expect(scope.tweets).toBeUndefined();
      scope.getTweets();

      expect(scope.tweets).length === 20;
    }));
  });
});
