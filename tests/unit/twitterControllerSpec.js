describe('SocialDashboard controllers', function() {

  describe('TwitterController', function(){
    var scope, ctrl, AuthService;

    beforeEach(module('socialDashboard'));

    beforeEach(inject(function($controller, _AuthService_) {
      AuthService = _AuthService_;
      scope = {};
      ctrl = $controller('TwitterController', {$scope:scope})
    }));

    it('should authorize Twitter account', function() {
      spyOn(AuthService, "authorize").and.returnValue('Twitter authentication successful!');
      expect(scope.alertMessage).toBe(undefined);
      scope.twitterAuth();
      expect(scope.alertMessage).toBe('Twitter authentication successful!');
    });

    it('should return tweets from Twitter', function() {
      spyOn(AuthService, "getMessages").and.returnValue('[{id:1231233, name:dashboard, message: hello!}]');
      expect(scope.tweets).toBe(undefined);
      scope.getTweets();
      expect(scope.tweets).toBe('[{id:1231233, name:dashboard, message: hello!}]')
    });

    it('should post a tweet to Twitter', function() {
      spyOn(AuthService, "postMessage");
      scope.postTweets();
      expect(AuthService.postMessage).toHaveBeenCalled();
    })
  });
});
