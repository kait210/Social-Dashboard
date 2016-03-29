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

});
