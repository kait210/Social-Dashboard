exports.loginToTwitter = function () {
  element(by.id('twitter-auth')).click();

  browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.driver.findElement(By.id('username_or_email')).sendKeys('dashboardronin');
    browser.driver.findElement(By.id('password')).sendKeys('dashboardteam');
    browser.driver.findElement(By.id('allow')).click();
  });
}

exports.validateEmail = function () {
  browser.getAllWindowHandles().then(function (handles) {
    browser.driver.findElement(By.id('challenge_response')).sendKeys('socialdashboardronin@gmail.com');
    browser.driver.findElement(By.id('email_challenge_submit')).click();
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

exports.loginToInstagram = function () {
  element(by.id('instagram-auth')).click();

  browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.driver.findElement(By.id('id_username')).sendKeys('socialdashboardronin');
    browser.driver.findElement(By.id('id_password')).sendKeys('dashboardteam');
    browser.driver.findElement(By.css('.button-green')).click();

    browser.switchTo().window(handles[0]);
  });
}
