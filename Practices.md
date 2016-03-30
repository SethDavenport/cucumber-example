# Best Practice Notes

1. Automate all the things (see cuke.sh or gulp soln for windows)
2. IDs with 'qa-' prefix for DOM detection.
3. Consider node 4+: arrow functions make tests much cleaner.
4. Manage your selectors well
5. Always put a timeout on your 'wait for visibles'
6. Short tests that are as independent from each other as possible
7. Use features to group common setup.

## V3:

1. Use promises from wdio instead of pyramid of doom (wd 3 only)
2. If using promises, return the promise instead of messing around with callback.
  Catches errors better.
  https://github.com/cucumber/cucumber-js#promises

## V4:

1. For v4, it's all synchronous, which is nice, but documentation hasn't kept
  up.
2. Need to use `glob.sync` to expand configuration path for your .spec files.

# TODO

Come up with automation script that works on linux and windows
Get it working with Ionic
Get it working with browser stack
