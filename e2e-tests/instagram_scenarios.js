'use strict';

describe('Instagram Integration', function() {

  it('should be able to authenticate an Instagram account', function() {
    browser.get('index.html');
    protractor.loginHelpers.loginToInstagram();
    browser.sleep(5000);
    browser.getAllWindowHandles().then(function (handles) {
      if (handles.length === 2) {
        protractor.loginHelpers.validateEmail()
      }
      browser.switchTo().window(handles[0]);
    })
    browser.sleep(2000);
    expect(element(by.id('ig-alertMessage')).getText()).toEqual('Instagram authentication successful!')
  });
});
