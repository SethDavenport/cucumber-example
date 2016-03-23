# Best Practice Notes

1. Automate all the things (see cuke.sh or gulp soln for windows)
2. Use promises from wdio instead of pyramid of doom (wd 3 only)
3. If using promises, return the promise istead of screwing around with callback.
  Catches errors better.
  https://github.com/cucumber/cucumber-js#promises
3. IDs with 'qa-' prefix for DOM detection.
4. Consider node 4+: arrow functions make tests much cleaner.
5. Manage your selectors well
6. Always put a timeout on your 'wait for visibles'

# TODO

Come up with automation script that works on linux and windows
Get it working with Appium and Ionic
Get it working with browser stack

webdriverio 3.4 + cucumber 0.5.3 === promises
  (https://github.com/webdriverio/webdriverio/issues/973)

// Check out alternate v4 syntax.
webdriverio 4 + cucumber 0.9.5 === 'synchronous stuff with fibers'
