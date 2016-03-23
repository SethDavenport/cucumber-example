'use strict';

const expect = require('chai').expect;
const APP_URL = 'http://localhost:8080/';
const TIMEOUT_MS = 1000;
const PAUSE_MS = 1000;
const USERNAME_INPUT = '#qa-uname-input';
const PASSWORD_INPUT = '#qa-password-input';
const LOGIN_BUTTON = '#qa-login-button';
const COUNTER_PAGE = '#qa-counter';
const ALERT_FIELD = '#qa-alert';

module.exports = function() {

  this.Given(/^I'm looking at the login form$/, function() {
    return browser.url(APP_URL)
      .then(() => browser.waitForVisible(USERNAME_INPUT, TIMEOUT_MS))
  });

  this.When(/^I log in with "([^"]*)" and "([^"]*)"$/, function(user, pass) {
    return browser.click(USERNAME_INPUT)
      .then(() => browser.keys(user))
      .then(() => browser.click(PASSWORD_INPUT))
      .then(() => browser.keys(pass))
      //.then(() => browser.pause(PAUSE_MS))
      .then(() => browser.click(LOGIN_BUTTON));
  });

  this.Then(/^I should see the counter page$/, function() {
    return browser.waitForVisible(COUNTER_PAGE, TIMEOUT_MS)
      .then(() => browser.click(LOGIN_BUTTON));
  });

  this.Then(/^I should see the credential warning/, function () {
    return browser.waitForVisible(ALERT_FIELD, TIMEOUT_MS);
  });
};
