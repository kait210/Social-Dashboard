'use strict';

describe('User logout', function () {

  it('allows a user to log out of an account', function() {
    element(by.id('sign-out-submit')).click();
    browser.sleep(5000);
    expect(element(by.id('accountMessage')).getText()).toEqual('Goodbye Ronin, sign out successful!')
  });
})
