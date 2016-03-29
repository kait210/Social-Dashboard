'use strict';

describe('Facebook Integration', function() {

  it('should be able to authenticate a Facebook account', function() {
    browser.get('index.html');
    protractor.loginHelpers.loginToFacebook();
    browser.sleep(2000);
    expect(element(by.id('fb-alertMessage')).getText()).toEqual('Facebook authentication successful!')
  });

});
  


