'use strict';

describe('Social Dashboard', function() {


  it('should be able to authenticate a Twitter account', function() {
    browser.get('index.html');
    element(by.id('twitter-auth')).click();

    browser.getAllWindowHandles().then(function (handles) {  browser.switchTo().window(handles[1]);
    element(by.id('username_or_email')).sendKeys('dashboardronin');
    element(by.id('password')).sendKeys('dashboardteam');
    element(by.id('allow')).click();
    browser.switchTo().window(handles[0]);});

    expect(element(by.id('alertMessage')).getText()).toEqual('Twitter authentication successful!')
  });


});
