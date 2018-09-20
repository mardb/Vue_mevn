//server.js

//jslint node:true

'use strict';

var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var config = require('./app/Config');

//db connection
mongoose.connect( config.DB, { useNewUrlParser: true }); //check again

//DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.

app.use(express.static(path.join(__dirname, '/public')));

// morgan logs request in dev mode
app.use(morgan('dev')); //'dev'?

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

var port = config.APP_PORT || 5500;

app.listen(port); //port was defined on config file

console.log('App listening on port ' + port);

var todoRoutes = require('./app/Routes');

//Use routes defined in Route.js

app.use('/api', todoRoutes);
app.use(function(req, res, next) {
  //where will connection take place?
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port);
  //methods
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  //headers
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, content-type'
  );
  //middleware --> next
  next();
});

app.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});
