describe('SocialDashboard controllers', function() {

  describe('InstagramController', function(){
    var scope, ctrl, AuthService;

    beforeEach(module('socialDashboard'));

    beforeEach(inject(function($controller, _AuthService_) {
      AuthService = _AuthService_;
      scope = {};
      ctrl = $controller('InstagramController', {$scope:scope})
    }));

    it('should authorize Instagram account', function() {
      spyOn(AuthService, "authorize").and.returnValue('Instagram authentication successful!');
      expect(scope.alertMessage).toBe(undefined);
      scope.instagramAuth();
      expect(scope.alertMessage).toBe('Instagram authentication successful!');
    });

    it('should return photos from Instagram', function() {
      spyOn(AuthService, "getMessages").and.returnValue('[{id:1231233, name:dashboard, message: hello!}]');
      expect(scope.photos).toBe(undefined);
      scope.getPhotos();
      expect(scope.photos).toBe('[{id:1231233, name:dashboard, message: hello!}]')
    });
  });
});
