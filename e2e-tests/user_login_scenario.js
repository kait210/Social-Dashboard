'use strict';

describe('User login', function(){

  it('allows a user to log into an account', function() {
    browser.get('index.html')
    element(by.id('login-email')).sendKeys('socialdashboardronin@gmail.com');
    element(by.id('login-password')).sendKeys('Dashboardteam1');
    element(by.id('sign-in-submit')).click();
    browser.sleep(5000);
    expect(element(by.id('signInMessage')).getText()).toEqual('Welcome Ronin, sign in successful!')
  });
});
