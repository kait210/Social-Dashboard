describe('SocialDashboard controllers', function() {

  describe('FacebookController', function() {
    var scope, ctrl, AuthService;

    beforeEach(module('socialDashboard'));

    beforeEach(inject(function($controller, _AuthService_) {
      AuthService = _AuthService_;
      scope = {};
      ctrl = $controller('FacebookController', {$scope:scope});
    }));

    it('should authorize Facebook account', function() {
      spyOn(AuthService, "authorize").and.returnValue('Facebook authentication successful!');
      expect(scope.alertMessage).toBe(undefined);
      scope.facebookAuth();
      expect(scope.alertMessage).toBe('Facebook authentication successful!');
    });

    it('should return posts from Facebook', function() {
      spyOn(AuthService, "getMessages").and.returnValue('[{id:1231233, name:dashboard, message: hello!}]');
      expect(scope.posts).toBe(undefined);
      scope.getPosts();
      expect(scope.posts).toBe('[{id:1231233, name:dashboard, message: hello!}]');
    });

    it('should post a status to Facebook', function() {
      spyOn(AuthService, "postMessage");
      scope.postStatus();
      expect(AuthService.postMessage).toHaveBeenCalled();
    });
  });
});
