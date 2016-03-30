'use strict';

describe('Gmail Integration', function() {

  it('should be able to authenticate a Gmail account', function() {
    browser.get('index.html');
    protractor.loginHelpers.loginToGmail();
    browser.sleep(5000);
    browser.getAllWindowHandles().then(function (handles) {
      if (handles.length === 2) {
        protractor.loginHelpers.validateEmail()
      }
      browser.switchTo().window(handles[0]);
    })
    browser.sleep(2000);
    expect(element(by.id('gm-alertMessage')).getText()).toEqual('Gmail authentication successful!')
  });

  it('displays messages', function() {
    element(by.id('get-messages')).click();
    browser.sleep(6000);
    var messageList = element.all(by.repeater('message in messages'));
    expect(messageList.count()).toBe(20);
  });
});