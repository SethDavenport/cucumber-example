'use strict';

const expect = require('chai').expect;
const APP_URL = 'http://localhost:8080/';
const TIMEOUT_MS = 1000;
const PAUSE_MS = 1000;

module.exports = function() {

  this.Given(/^I'm looking at the login form$/, function() {
    return browser.url(APP_URL)
      .then(() => browser.waitForVisible('#qa-uname-input', TIMEOUT_MS))
  });

  this.When(/^I log in with "([^"]*)" and "([^"]*)"$/, function(user, pass) {
    return browser.click('#qa-uname-input')
      .then(() => browser.keys(user))
      .then(() => browser.click('#qa-password-input'))
      .then(() => browser.keys(pass))
      //.then(() => browser.pause(PAUSE_MS))
      .then(() => browser.click('#qa-login-button'));
  });

  this.Then(/^I should see the counter page$/, function() {
    return browser.waitForVisible('#qa-counter', TIMEOUT_MS)
      .then(() => browser.click('#qa-logout-button'));
  });

  this.Then(/^I should see the credential warning/, function () {
    return browser.waitForVisible('#qa-alert', TIMEOUT_MS);
  });
};
