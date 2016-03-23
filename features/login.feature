Feature: User can log in.
  As a user
  I want to log in
  So that I can access things.

  Scenario: Valid credentials were entered
    Given I'm looking at the login form
    When I log in with "user" and "pass"
    Then I should see the counter page

  Scenario: Invalid credentials were entered
    Given I'm looking at the login form
    When I log in with "wat" and "foo"
    Then I should see the credential warning
