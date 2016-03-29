'use strict';

describe('SocialDashboard controllers', function() {

  describe('TwitterController', function() {

    beforeEach(module('socialDashboard'));

    it('should return 20 tweets from the Twitter API request', inject(function($controller) {
      var scope = {},
      ctrl = $controller('TwitterController', { $scope: scope});
      expect(scope.tweets).toBeUndefined();
      scope.getTweets();

      expect((scope.tweets).length).toBe(20);
    }));

    it("should add 'Twitter' provider attribute to each tweet", inject(function($controller) {
      var scope = {},
      ctrl = $controller('TwitterController', { $scope: scope});
      scope.getTweets();
      expect(scope.tweets).provider === 'Twitter';
    }));
  });
});
