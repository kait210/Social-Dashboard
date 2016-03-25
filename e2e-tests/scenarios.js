'use strict';

describe('Social Dashboard', function() {

  it('should be able to authenticate a Twitter account', function() {
    browser.get('index.html');
    protractor.loginHelpers.loginToTwitter()
    browser.sleep(2000);
    expect(element(by.id('alertMessage')).getText()).toEqual('Twitter authentication successful!')
   });

   it('displays tweets', function() {
     expect(element(by.id('tweets')))
   });
});
