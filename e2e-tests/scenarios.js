'use strict';

describe('Social Dashboard', function() {

  // it('should be able to authenticate a Twitter account', function() {
  //   browser.get('index.html');
  //   protractor.loginHelpers.loginToTwitter();
  //   browser.sleep(2000);
  //   expect(element(by.id('alertMessage')).getText()).toEqual('Twitter authentication successful!')
  // });

  // it('displays created by timestamp', function() {
  //   element(by.id('get-tweets')).click();
  //   browser.sleep(6000);
  //   element.all(by.repeater('tweet in tweets')).then(function(tweets){
  //       var tweet = tweets[0].element(by.className('created-at'));
  //   expect(tweet.getText()).toContain(2016);
  //   });
  // });

  // it('displays tweets', function() {
  //   element(by.id('get-tweets')).click();
  //   browser.sleep(6000);
  //   var tweetList = element.all(by.repeater('tweet in tweets'));
  //   expect(tweetList.count()).toBe(20);
  // });

  // it('displays links within feeds', function() {
  //   element(by.id('get-tweets')).click();
  //   browser.sleep(6000);   
  //   element.all(by.repeater('tweet in tweets')).then(function(tweets){
  //       var tweet = tweets[0].element(by.className('url'));

  //   tweet.isDisplayed().then(function(result){
  //     if(result) {
  //       console.log('url present');
  //       expect(tweet.getText()).toContain('Click link');
  //       }
  //     else {
  //       console.log('there are no URLs');
  //       }
  //     });
  //   });
  // });

  // it('displays media (photos and videos) within feeds', function() {
  // element(by.id('get-tweets')).click();
  // browser.sleep(6000);   
  // element.all(by.repeater('tweet in tweets')).then(function(tweets){
  //     var tweet = tweets[0].element(by.className('media')); 

  //     tweet.isDisplayed().then(function(result){
  //       if(result) {
  //         console.log('media present');
  //         var tweet = tweets[0].element(by.tagName('img')); 
  //         expect(tweet.isPresent()).toBe(true);
  //       }
  //       else {
  //         console.log('there is no media');
  //       }
  //     });
  //   });
  // });

  // it('displays the user who posted the tweet', function() {
  //   element(by.id('get-tweets')).click();
  //   browser.sleep(6000);
  //   element.all(by.repeater('tweet in tweets')).then(function(tweets){
  //       var tweet = tweets[0].element(by.className('user'));
  //   expect(tweet.getText()).toBeTruthy();
  //   });
  // });

  it('should be able to authenticate a Facebook account', function() {
    browser.get('index.html');
    protractor.loginHelpers.loginToFacebook();
    browser.sleep(2000);
    expect(element(by.id('fb-alertMessage')).getText()).toEqual('Facebook authentication successful!')
  });


});
  


