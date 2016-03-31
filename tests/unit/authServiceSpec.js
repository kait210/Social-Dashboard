'use strict';

describe('OAuth authorization', function() {
  var AuthService;

  beforeEach(module('socialDashboard',['AuthService']));

  it('should authorize the provider api', function() {
    spyOn(OAuth, "popup").and.returnValue("12345");
    expect(OAuth.popup()).toEqual("12345")
  });
});
