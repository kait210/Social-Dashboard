'use strict';

describe('Facebook Integration', function() {

  it('should be able to authenticate a Facebook account', function() {
    browser.get('index.html');
    protractor.loginHelpers.loginToFacebook();
    browser.sleep(2000);
    expect(element(by.id('fb-alertMessage')).getText()).toEqual('Facebook authentication successful!')
  });

  it('posts a status to Facebook', function(){
    var id = Math.floor((Math.random() * 1000) + 1);
    element(by.id('post-status')).sendKeys('This is the ' + id + ' feature test');
    element(by.id('post-status-submit')).click();
    browser.sleep(5000);
    element.all(by.repeater('post in posts')).then(function(posts) {
      var postStatus = posts[0].element(by.className('post-display'));
      expect(postStatus.getText()).toContain('This is the ' + id + ' feature test');
    });
  })

  it('displays posts', function() {
    element(by.id('get-posts')).click();
    browser.sleep(6000);
    var postList = element.all(by.repeater('post in posts'));
    var postsListStatus = postList.isDisplayed()
    expect(postsListStatus).toBeTruthy();
  });

  it('display the provider of the messages', function(){
    element(by.id('get-posts')).click();
    browser.sleep(6000);
    element.all(by.repeater('post in posts')).then(function(posts) {
      var postMessage = posts[0].element(by.className('post-provider'));
      expect(postMessage.getText()).toEqual('Provided by Facebook');
    });
  })

  it('displays created by timestamp', function() {
    element(by.id('get-posts')).click();
    browser.sleep(6000);
    element.all(by.repeater('post in posts')).then(function(posts){
      var post = posts[0].element(by.className('created-at'));
      expect(post.getText()).toContain(2016);
    });
  });

// waiting on FB permissions to enable functionality and related tests to be run

  // it('displays links within posts', function() {
  // 	element.all(by.repeater('post in posts')).then(function(posts){
  //   var post = posts[0].element(by.className('url'));
  //   expect(post.getText()).toContain('Click link');
  //   });
  // });

  // it('displays the user who posted the tweet', function() {
  //   element(by.id('get-tweets')).click();
  //   browser.sleep(6000);
  //   element.all(by.repeater('tweet in tweets')).then(function(tweets){
  //     var tweet = tweets[0].element(by.className('user'));
  //     expect(tweet.getText()).toBeTruthy();
  //   });
  // });
});
