'use strict';

describe('Social Dashboard', function() {

  it('should be able to authenticate a Twitter account', function() {
    browser.get('index.html');
    protractor.loginHelpers.loginToTwitter()
    browser.sleep(5000);
    browser.getAllWindowHandles().then(function (handles) {
      console.log(handles.length)
      if (handles.length === 2) {
        protractor.loginHelpers.validateEmail()
      }
      browser.switchTo().window(handles[0]);
    })
    browser.sleep(2000);
    expect(element(by.id('alertMessage')).getText()).toEqual('Twitter authentication successful!')
  });

  it('displays tweets', function() {
    element(by.id('get-tweets')).click();
    browser.sleep(6000);
    var tweetList = element.all(by.repeater('tweet in tweets'));
    expect(tweetList.count()).toBe(20);
  });

  it('posts a message to Twitter', function(){
    var id = Math.floor((Math.random() * 1000) + 1);
    element(by.id('post-tweet')).sendKeys('This is the ' + id + ' feature test');
    element(by.id('post-tweet-submit')).click();
    browser.sleep(5000);
    element.all(by.repeater('tweet in tweets')).then(function(tweets) {
      var tweetMessage = tweets[0].element(by.className('tweet-display'));
      expect(tweetMessage.getText()).toEqual('This is the ' + id + ' feature test');
    });
  })
});
