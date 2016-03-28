'use strict';

const expect = require('chai').expect;
const APP_URL = 'http://localhost:8080/';
const TIMEOUT_MS = 10000;
const PAUSE_MS = 1000;
const s = require('./selectors');

module.exports = function() {

  this.Given(/^I'm looking at the login form$/, function() {
    browser.url(APP_URL)
      .waitForVisible(s.login.unameInput, TIMEOUT_MS);
  });

  this.When(
    /^I log in with "([^"]*)" and "([^"]*)"$/,
    function(user, pass) {
      browser.click(s.login.unameInput)
        .keys(user)
        .click(s.login.passInput)
        .keys(pass)
        .click(s.login.loginButton);
  });

  this.Then(/^I should see the counter page$/, function() {
    browser.waitForVisible(s.counter.counter, TIMEOUT_MS);
    browser.click(s.nav.logoutButton);
  });

  this.Then(/^I should see the credential warning/, function () {
    browser.waitForVisible(s.login.errorAlert, TIMEOUT_MS);
  });
};
