// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// instance of express
const app = express();
const router = require('./router');

// App Setup - getting express working
// morgan used to log requests
app.use(morgan('combined'));
// parse incoming request
app.use(bodyParser.json({type: '*/*'}));
router(app);

// Server Setup - getting express to talk to outside world
const port = process.env.PORT || 3090;
// http is a native node library
// create a http server that knows how to receive a request and forward it to the express application
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
