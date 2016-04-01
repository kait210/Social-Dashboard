'use strict';

describe('Instagram Integration', function() {

  it('should be able to authenticate an Instagram account', function() {
    browser.get('index.html');
    protractor.loginHelpers.loginToInstagram();
    browser.sleep(5000);
    browser.getAllWindowHandles().then(function (handles) {
      if (handles.length === 2) {
        protractor.loginHelpers.validateEmail()
      }
      browser.switchTo().window(handles[0]);
    })
    browser.sleep(2000);
    expect(element(by.id('ig-alertMessage')).getText()).toEqual('Instagram authentication successful!')
  });

  it('displays photos', function() {
    element(by.id('get-photos')).click();
    browser.sleep(6000);
    var photoList = element.all(by.repeater('photo in photos'));
    expect(photoList.count()).toBe(3);
  });

  it('displays the user who posted the photo', function() {
    element(by.id('get-photos')).click();
    browser.sleep(6000);
    element.all(by.repeater('photo in photos')).then(function(photos){
      var photo = photos[0].element(by.className('user'));
      expect(photo.getText()).toBeTruthy();
    });
  });

  it('display the provider of the photos', function(){
    element(by.id('get-photos')).click();
    browser.sleep(6000);
    element.all(by.repeater('photo in photos')).then(function(photos) {
      var photoMessage = photos[0].element(by.className('photo-provider'));
      expect(photoMessage.getText()).toEqual('Provided by Instagram');
    });
  })
});
