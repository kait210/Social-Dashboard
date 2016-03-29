'use strict';

describe('Twitter Integration', function() {

  it('should be able to authenticate a Twitter account', function() {
    browser.get('index.html');
    protractor.loginHelpers.loginToTwitter();
    browser.sleep(5000);
    browser.getAllWindowHandles().then(function (handles) {
      if (handles.length === 2) {
        protractor.loginHelpers.validateEmail()
      }
      browser.switchTo().window(handles[0]);
    })
    browser.sleep(2000);
    expect(element(by.id('alertMessage')).getText()).toEqual('Twitter authentication successful!')
  });

  it('displays created by timestamp', function() {
    element(by.id('get-tweets')).click();
    browser.sleep(6000);
    element.all(by.repeater('tweet in tweets')).then(function(tweets){
      var tweet = tweets[0].element(by.className('created-at'));
      expect(tweet.getText()).toContain(2016);
    });
  });

  it('displays tweets', function() {
    element(by.id('get-tweets')).click();
    browser.sleep(6000);
    var tweetList = element.all(by.repeater('tweet in tweets'));
    expect(tweetList.count()).toBe(20);
  });

  it('display the provider of the messages', function(){
    element(by.id('get-tweets')).click();
    browser.sleep(6000);
    element.all(by.repeater('tweet in tweets')).then(function(tweets) {
      var tweetMessage = tweets[0].element(by.className('tweet-provider'));
      expect(tweetMessage.getText()).toEqual('Provided by Twitter');
    });
  })

  it('posts a message to Twitter', function(){
    var id = Math.floor((Math.random() * 1000) + 1);
    element(by.id('post-tweet')).sendKeys('This is the ' + id + ' feature test' + ' http://test.com/');
    element(by.id('post-tweet-submit')).click();
    browser.sleep(5000);
    element.all(by.repeater('tweet in tweets')).then(function(tweets) {
      var tweetMessage = tweets[0].element(by.className('tweet-display'));
      expect(tweetMessage.getText()).toContain('This is the ' + id + ' feature test');
    });
  })

  it('displays links within feeds', function() {
    element.all(by.repeater('tweet in tweets')).then(function(tweets){
      var tweet = tweets[0].element(by.className('url'));
      expect(tweet.getText()).toContain('Click link');
      });
    });
  });

  it('displays media (photos and videos) within feeds', function() {
    element(by.id('get-tweets')).click();
    browser.sleep(6000);
    element.all(by.repeater('tweet in tweets')).then(function(tweets){
      var tweet = tweets[0].element(by.className('media')).isDisplayed();

      tweet.then(function(result){
        if(result) {
          console.log('media present');
          var tweet = tweets[0].element(by.tagName('img'));
          expect(tweet.isPresent()).toBe(true);
        }
        else {
          console.log('there is no media');
        }
      });
    });
  });

  it('displays the user who posted the tweet', function() {
    element(by.id('get-tweets')).click();
    browser.sleep(6000);
    element.all(by.repeater('tweet in tweets')).then(function(tweets){
      var tweet = tweets[0].element(by.className('user'));
      expect(tweet.getText()).toBeTruthy();
    });
  });
});
