'use strict';

describe('Social Dashboard', function() {

  it('should be able to authenticate a Twitter account', function() {
    browser.get('index.html');
    protractor.loginHelpers.loginToTwitter()
    browser.sleep(2000);
    expect(element(by.id('alertMessage')).getText()).toEqual('Twitter authentication successful!')
  });

  it('displays tweets', function() {
    element(by.id('get-tweets')).click();
    browser.sleep(6000);
    var tweetList = element.all(by.repeater('tweet in tweets'));
    expect(tweetList.count()).toBe(20);
  });
});
