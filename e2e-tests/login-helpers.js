exports.loginToTwitter = function () {
  element(by.id('twitter-auth')).click();

  browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.driver.findElement(By.id('username_or_email')).sendKeys('dashboardronin');
    browser.driver.findElement(By.id('password')).sendKeys('dashboardteam');
    browser.driver.findElement(By.id('allow')).click();

    // if (browser.driver.findElements(By.id('challenge_response')).length !== 0) {
    //   browser.driver.findElement(By.id('challenge_response')).sendKeys('socialdashboardronin@gmail.com');
    //   browser.driver.findElement(By.id('email_challenge_submit')).click();
    //   browser.switchTo().window(handles[0]);
    // } else {
      browser.switchTo().window(handles[0]);
    // }
  });
}

exports.loginToFacebook = function () {
  element(by.id('facebook-auth')).click();

  browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.driver.findElement(By.id('email')).sendKeys('socialdashboardronin@gmail.com');
    browser.driver.findElement(By.id('pass')).sendKeys('dashboardteam');
    browser.driver.findElement(By.id('loginbutton')).click();

    browser.switchTo().window(handles[0]);
  });
}

