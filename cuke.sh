# Make sure selenium is up-to-date
selenium-standalone install

# Start up selenium in the background
selenium-standalone start &

# Start up the web server
npm start &

# Wait for the webserver to start up (a hack I know)
sleep 5

# Run the tests
wdio wdio.conf.js
