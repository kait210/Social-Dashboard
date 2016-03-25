'use strict';

describe('Social Dashboard', function() {

  it('should be able to authenticate a Twitter account', function() {
    browser.get('index.html');
    element(by.id('twitter-auth')).click();

    browser.getAllWindowHandles().then(function (handles) {
      browser.switchTo().window(handles[1]);
      browser.driver.findElement(By.id('username_or_email')).sendKeys('dashboardronin');
      browser.driver.findElement(By.id('password')).sendKeys('dashboardteam');
      browser.driver.findElement(By.id('allow')).click();

      if (browser.driver.findElements(By.id('challenge_response')).length !== 0) {
        browser.driver.findElement(By.id('challenge_response')).sendKeys('socialdashboardronin@gmail.com');
        browser.driver.findElement(By.id('email_challenge_submit')).click();
        browser.switchTo().window(handles[0]);
      } else {
        browser.switchTo().window(handles[0]);
      }
    });
    browser.sleep(2000);
    expect(element(by.id('alertMessage')).getText()).toEqual('Twitter authentication successful!')
   });
});
