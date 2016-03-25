'use strict';

describe('SocialDashboard controllers', function() {

  describe('TwitterController', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(module('socialDashboard'));

    inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.twitter.com/1.1/statuses/home_timeline.json').respond([{tweet: 'This is my tweet'}, {tweet: 'And another tweet'}]);

      scope = $rootScope.$new();
      ctrl = $controller('TwitterController', {$scope: scope});
    })

    it('should return 2 tweets from the Twitter API request', function() {
      expect(scope.tweets).toBeUndefined();
      $httpBackend.flush();

      expect(scope.tweets).toEqual([{tweet: 'This is my tweet'}, {tweet: 'And another tweet'}]);
    });
  });
});
