'use strict';

describe('User account management', function(){

  it('allows a user to register an account', function() {
    browser.get('index.html')
    element(by.id('firstName')).sendKeys('Ronin');
    element(by.id('lastName')).sendKeys('Team');
    element(by.id('email')).sendKeys('socialdashboardronin@gmail.com');
    element(by.id('password')).sendKeys('Dashboardteam1');
    element(by.id('submit')).click();
    browser.sleep(5000);
    expect(element(by.id('userMessage')).getText()).toEqual('Welcome Ronin, registration successful!')
  });
});
